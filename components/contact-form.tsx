"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { sendContactEmail } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Send } from "lucide-react"

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" disabled={pending}>
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Đang gửi...
                </>
            ) : (
                <>
                    <Send className="mr-2 h-4 w-4" />
                    Gửi tin nhắn
                </>
            )}
        </Button>
    )
}

export default function ContactForm() {
    const [state, formAction] = useActionState(sendContactEmail, null)

    return (
        <form action={formAction} className="space-y-4 mt-4">
            {state?.success && (
                <div className="p-3 text-sm bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-lg">
                    {state.message}
                </div>
            )}

            {state?.success === false && state?.message && (
                <div className="p-3 text-sm bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg">
                    {state.message}
                </div>
            )}

            <div className="space-y-1">
                <Input
                    name="name"
                    placeholder="Tên của bạn"
                    required
                    className="bg-neutral-900/50 border-white/10"
                />
                {state?.errors?.name && (
                    <p className="text-xs text-red-500">{state.errors.name[0]}</p>
                )}
            </div>

            <div className="space-y-1">
                <Input
                    name="email"
                    type="email"
                    placeholder="Email để tôi liên lạc lại"
                    required
                    className="bg-neutral-900/50 border-white/10"
                />
                {state?.errors?.email && (
                    <p className="text-xs text-red-500">{state.errors.email[0]}</p>
                )}
            </div>

            <div className="space-y-1">
                <Textarea
                    name="message"
                    placeholder="Bạn cần hỗ trợ gì về SEO hay Technical?"
                    required
                    className="min-h-[120px] bg-neutral-900/50 border-white/10"
                />
                {state?.errors?.message && (
                    <p className="text-xs text-red-500">{state.errors.message[0]}</p>
                )}
            </div>

            <SubmitButton />
        </form>
    )
}
