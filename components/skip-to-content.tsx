import { cn } from "@/lib/utils"

/**
 * Skip-to-content link for accessibility
 * Appears on keyboard focus (Tab key) to allow users to skip navigation
 */
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only",
        "fixed left-4 top-4 z-[9999]",
        "rounded-lg border border-emerald-500/50 bg-neutral-900 px-6 py-3",
        "text-sm font-semibold text-emerald-400",
        "shadow-[0_0_20px_rgba(16,185,129,0.3)]",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
      )}
    >
      Skip to main content
    </a>
  )
}
