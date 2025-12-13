"use client"

import { cn } from "@/lib/utils"
import { ExternalLink, Award } from 'lucide-react'
import RevealOnView from "./reveal-on-view"

type CertificationProps = {
  title: string
  issuer: string
  date: string
  logo?: string
  url?: string
}

type CertificationSectionProps = {
  certifications: CertificationProps[]
  className?: string
}

/**
 * A component to display a list of certifications with enhanced hover effects
 */
export default function CertificationSection({
  certifications,
  className,
}: CertificationSectionProps) {
  return (
    <div className={cn("mt-10 w-full", className)}>
      <p className="mb-3 text-xs font-semibold tracking-widest text-neutral-500 dark:text-white/50 flex items-center gap-2">
        <Award className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-500" />
        CÁC CHỨNG CHỈ
      </p>
      <ul className="space-y-3 w-full">
        {certifications.map((cert, index) => {
          const content = (
            <>
              {cert.logo && (
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-neutral-100 dark:bg-white/10 flex items-center justify-center overflow-hidden group-hover:bg-emerald-500/20 transition-all duration-300 border border-neutral-200 dark:border-white/10 group-hover:border-emerald-500/30">
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="h-8 w-8 object-contain"
                  />
                </div>
              )}
              <div className="flex-grow min-w-0">
                <h3 className="text-sm font-medium line-clamp-2 text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{cert.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-neutral-500 dark:text-white/60 group-hover:text-neutral-700 dark:group-hover:text-white/80 transition-colors">
                    {cert.issuer}
                  </p>
                  <span className="text-neutral-300 dark:text-white/30">•</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-white/50 border border-neutral-200 dark:border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all">
                    {cert.date}
                  </span>
                </div>
              </div>
              {cert.url && (
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                </div>
              )}
            </>
          )

          return cert.url ? (
            <li key={cert.title}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 p-3 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-white/10 hover:border-emerald-500/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] w-full cursor-pointer"
                aria-label={`View ${cert.title} certification`}
              >
                {content}
              </a>
            </li>
          ) : (
            <li
              key={cert.title}
              className="group flex items-center gap-3 rounded-lg border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 p-3 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-white/10 w-full"
            >
              {content}
            </li>
          )
        })}
      </ul>
    </div>
  )
}