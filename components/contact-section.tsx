"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { contactSchema, type ContactFormData } from "@/lib/validations/contact"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setSubmitState("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const json = await response.json() as { success?: boolean; error?: string }

      if (!response.ok) {
        setErrorMessage(json.error ?? "Ein unbekannter Fehler ist aufgetreten.")
        setSubmitState("error")
        return
      }

      setSubmitState("success")
      reset()
    } catch {
      setErrorMessage("Verbindung zum Server fehlgeschlagen. Bitte versuchen Sie es später erneut.")
      setSubmitState("error")
    }
  }

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-4">
            Kontakt
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-balance">
            Besuchen Sie
            <br />
            <span className="italic font-medium">uns</span>
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            Wir freuen uns auf Ihren Besuch in unserer Rösterei und unserem Café.
            Kommen Sie vorbei und überzeugen Sie sich selbst von unserer Qualität.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-primary-foreground/30">
              <MapPin size={28} />
            </div>
            <h3 className="font-medium text-lg mb-2">Adresse</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Manufactur Taunus
              <br />
              Hauptstraße 12
              <br />
              65232 Taunusstein-Wehen
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-primary-foreground/30">
              <Phone size={28} />
            </div>
            <h3 className="font-medium text-lg mb-2">Telefon</h3>
            <p className="text-primary-foreground/80 text-sm">
              <a href="tel:+4961282012345" className="hover:text-primary-foreground transition-colors">
                +49 (0) 6128 201 2345
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-primary-foreground/30">
              <Mail size={28} />
            </div>
            <h3 className="font-medium text-lg mb-2">E-Mail</h3>
            <p className="text-primary-foreground/80 text-sm">
              <a href="mailto:info@manufactur-taunus.de" className="hover:text-primary-foreground transition-colors">
                info@manufactur-taunus.de
              </a>
            </p>
          </div>

          {/* Hours */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-primary-foreground/30">
              <Clock size={28} />
            </div>
            <h3 className="font-medium text-lg mb-2">Öffnungszeiten</h3>
            <div className="text-primary-foreground/80 text-sm leading-relaxed">
              <p>Mo - Fr: 8:00 - 18:00</p>
              <p>Sa: 9:00 - 17:00</p>
              <p>So: 10:00 - 16:00</p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 aspect-[21/9] bg-primary-foreground/10 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-primary-foreground/60 text-sm">
              Interaktive Karte · Taunusstein-Wehen
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-24 max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-4">
              Schreiben Sie uns
            </p>
            <h3 className="text-3xl md:text-4xl font-light leading-tight">
              Nachricht
              <br />
              <span className="italic font-medium">senden</span>
            </h3>
          </div>

          {submitState === "success" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle size={48} className="text-primary-foreground/80" />
              <p className="text-lg font-medium">Vielen Dank für Ihre Nachricht!</p>
              <p className="text-primary-foreground/70 text-sm">
                Wir werden uns so schnell wie möglich bei Ihnen melden.
              </p>
              <button
                onClick={() => setSubmitState("idle")}
                className="mt-4 text-sm underline underline-offset-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Weitere Nachricht senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary-foreground/90">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ihr Name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:border-primary-foreground/70 focus-visible:ring-primary-foreground/20"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-primary-foreground/90 flex items-center gap-1.5">
                    <AlertCircle size={14} />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary-foreground/90">
                  E-Mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ihre@email.de"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:border-primary-foreground/70 focus-visible:ring-primary-foreground/20"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-primary-foreground/90 flex items-center gap-1.5">
                    <AlertCircle size={14} />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-primary-foreground/90">
                  Nachricht
                </Label>
                <Textarea
                  id="message"
                  placeholder="Ihre Nachricht an uns..."
                  rows={6}
                  aria-invalid={!!errors.message}
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:border-primary-foreground/70 focus-visible:ring-primary-foreground/20 resize-none"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-primary-foreground/90 flex items-center gap-1.5">
                    <AlertCircle size={14} />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Server error */}
              {submitState === "error" && (
                <div className="flex items-center gap-2 text-sm text-primary-foreground/90 bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3">
                  <AlertCircle size={16} className="shrink-0" />
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 flex items-center justify-center gap-2 bg-primary-foreground text-primary text-sm font-medium tracking-wide transition-colors hover:bg-primary-foreground/90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Wird gesendet…
                  </>
                ) : (
                  "Nachricht senden"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
