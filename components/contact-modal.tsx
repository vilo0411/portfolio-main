"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { useState } from "react"

export default function ContactModal({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children || (
                    <Button size="lg" className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white">
                        Liên hệ tôi
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-neutral-950 border-neutral-800 text-white">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold flex items-center gap-2">
                        <Mail className="h-5 w-5 text-emerald-500" />
                        Liên hệ hợp tác
                    </DialogTitle>
                    <DialogDescription className="text-neutral-400">
                        Điền thông tin bên dưới, tôi sẽ phản hồi trong vòng 24h.
                    </DialogDescription>
                </DialogHeader>
                <ContactForm />
            </DialogContent>
        </Dialog>
    )
}
