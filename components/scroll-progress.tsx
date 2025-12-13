"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type ScrollProgressProps = {
  className?: string
}

/**
 * Scroll progress indicator that shows reading progress
 * Displays at the top of the page with emerald accent
 */
export default function ScrollProgress({ className }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / scrollHeight) * 100
      setProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", updateProgress, { passive: true })
    updateProgress() // Initial calculation

    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 h-1 w-full bg-neutral-900/50 backdrop-blur-sm",
        className
      )}
    >
      <div
        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
