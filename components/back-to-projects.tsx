"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { cn } from "@/lib/utils"

type BackToProjectsProps = {
  className?: string
}

/**
 * Floating "Back to Projects" button for case study pages
 */
export default function BackToProjects({ className }: BackToProjectsProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group fixed bottom-8 right-8 z-50",
        "flex items-center gap-2.5 overflow-hidden",
        "rounded-2xl border border-white/[0.08]",
        "bg-gradient-to-br from-neutral-900/95 via-neutral-900/90 to-neutral-800/95",
        "backdrop-blur-xl px-5 py-3.5",
        "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]",
        "transition-all duration-500 ease-out",
        "hover:border-emerald-500/40 hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.3),0_0_30px_rgba(16,185,129,0.15)]",
        "hover:scale-[1.05] hover:-translate-y-1",
        "active:scale-95 active:translate-y-0",
        className
      )}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 group-hover:bg-emerald-500/20 transition-all duration-300">
          <ArrowLeft className="h-4 w-4 text-white/70 group-hover:text-emerald-400 transition-all duration-300 group-hover:-translate-x-0.5" />
        </div>
        <span className="text-sm font-bold text-white/90 group-hover:text-emerald-300 transition-colors duration-300 tracking-wide">
          All Projects
        </span>
      </div>
    </Link>
  )
}
