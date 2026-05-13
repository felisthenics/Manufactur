import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { contactSchema } from "@/lib/validations/contact"

// In-memory rate limiter: max 3 requests per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 3
const WINDOW_MS = 60 * 60 * 1000 // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }

  if (entry.count >= RATE_LIMIT) {
    return false
  }

  entry.count += 1
  return true
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  )
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request)

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Ungültige Eingabe.", details: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const { name, email, message } = parsed.data

  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_APP_PASSWORD
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL

  if (!gmailUser || !gmailPassword || !receiverEmail) {
    console.error("Missing email environment variables")
    return NextResponse.json(
      { error: "E-Mail-Versand ist derzeit nicht konfiguriert." },
      { status: 503 }
    )
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Manufactur Taunus Website" <${gmailUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 1px solid #eee; margin: 16px 0;" />
          <p><strong>Nachricht:</strong></p>
          <p style="white-space: pre-wrap; color: #555;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    )
  }
}
