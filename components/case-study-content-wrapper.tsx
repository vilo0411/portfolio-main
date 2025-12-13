import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"

type CaseStudyContentWrapperProps = {
  children: ReactNode
  gradientFrom?: string
  gradientTo?: string
  className?: string
  delay?: number
}

/**
 * A reusable wrapper component for case study content with gradient background and texture
 */
export default function CaseStudyContentWrapper({
  children,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  className,
  delay = 0.1,
}: CaseStudyContentWrapperProps) {
  return (
    <RevealOnView
      className={cn(
        "relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-white/10 bg-white/90 dark:bg-neutral-900/60 backdrop-blur-xl p-6 sm:p-8",
        className
      )}
      delay={delay}
    >
      {/* Texture background */}
      <div className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-5 mix-blend-soft-light">
        <DotGridShader />
      </div>

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none relative z-10">
        {children}
      </div>
    </RevealOnView>
  )
}
