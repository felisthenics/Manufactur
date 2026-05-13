import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte gültige E-Mail-Adresse eingeben"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
})

export type ContactFormData = z.infer<typeof contactSchema>
