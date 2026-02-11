"use server"

import { z } from "zod"

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
    success: boolean
    message?: string
    errors?: {
        name?: string[]
        email?: string[]
        message?: string[]
    }
}

export async function sendContactEmail(prevState: ContactFormState | null, formData: FormData): Promise<ContactFormState> {
    try {
        const rawData = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        }

        const validatedData = contactSchema.parse(rawData)

        // Simulate sending email (Replace with actual email service like Resend/SendGrid later)
        console.log("📨 New Contact Form Submission:")
        console.log("Name:", validatedData.name)
        console.log("Email:", validatedData.email)
        console.log("Message:", validatedData.message)

        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay

        return { success: true, message: "Cảm ơn bạn! Tin nhắn đã được gửi thành công." }
    } catch (e) {
        if (e instanceof z.ZodError) {
            return { success: false, errors: e.flatten().fieldErrors }
        }
        return { success: false, message: "Có lỗi xảy ra. Vui lòng thử lại sau." }
    }
}
