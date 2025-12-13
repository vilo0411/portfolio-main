"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Check localStorage on mount
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center rounded-full",
        "border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900/60 backdrop-blur-sm",
        "transition-all duration-300",
        "hover:border-emerald-500/30 hover:bg-emerald-500/10",
        "hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
        "hover:scale-110 active:scale-95"
      )}
      aria-label="Toggle theme"
    >
      <Sun className={cn(
        "absolute h-5 w-5 text-emerald-500 transition-all duration-300",
        theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
      )} />
      <Moon className={cn(
        "absolute h-5 w-5 text-emerald-600 dark:text-emerald-500 transition-all duration-300",
        theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
      )} />
    </button>
  )
}
