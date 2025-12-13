"use client"

import { cn } from "@/lib/utils"
import RevealOnView from "./reveal-on-view"

type CaseStudyDetailProps = {
  /**
   * Title of the case study
   */
  title: string
  /**
   * Subtitle or brief description
   */
  subtitle: string
  /**
   * List of outcomes or results achieved
   */
  outcomes: string[]
  /**
   * Main content of the case study
   */
  children: React.ReactNode
  /**
   * Optional className for styling
   */
  className?: string
}

/**
 * Component to display case study details with a left sidebar for metadata
 * and right content area for the main content
 */
export default function CaseStudyDetail({
  title,
  subtitle,
  outcomes,
  children,
  className,
}: CaseStudyDetailProps) {
  return (
    <div className={cn("flex flex-col lg:flex-row gap-6", className)}>
      {/* Left sidebar with metadata */}
      <RevealOnView
        className="flex-shrink-0 w-full lg:w-80 space-y-6 rounded-xl border border-neutral-200 dark:border-white/10 bg-white/90 dark:bg-neutral-900/60 backdrop-blur-xl p-6"
        delay={0.1}
      >
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{title}</h2>
          <p className="mt-2 text-neutral-600 dark:text-white/70">{subtitle}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-white/50 mb-3">
            Outcomes
          </h3>
          <ul className="space-y-2">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-2 text-neutral-700 dark:text-white/90">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </RevealOnView>

      {/* Right content area */}
      <RevealOnView
        className="flex-grow rounded-xl border border-neutral-200 dark:border-white/10 bg-white/90 dark:bg-neutral-900/60 backdrop-blur-xl p-6"
        delay={0.2}
      >
        <div className="prose dark:prose-invert max-w-none">
          {children}
        </div>
      </RevealOnView>
    </div>
  )
}