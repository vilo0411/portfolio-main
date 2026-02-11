"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <Button
                variant="secondary"
                size="icon"
                onClick={scrollToTop}
                className={cn(
                    "rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-emerald-500 hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-emerald-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                )}
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-5 w-5" />
            </Button>
        </div>
    )
}
