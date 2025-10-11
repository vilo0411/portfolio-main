"use client"

import { cn } from "@/lib/utils"
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
 * A component to display a list of certifications
 */
export default function CertificationSection({
  certifications,
  className,
}: CertificationSectionProps) {
  return (
    <div className={cn("mt-10", className)}>
      <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">
        CERTIFICATIONS
      </p>
      <ul className="space-y-3">
        {certifications.map((cert, index) => (
          <RevealOnView
            key={cert.title}
            delay={index * 0.05}
            className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
          >
            {cert.logo && (
              <div className="flex-shrink-0 h-10 w-10 rounded-md bg-white/10 flex items-center justify-center overflow-hidden">
                <img 
                  src={cert.logo} 
                  alt={`${cert.issuer} logo`} 
                  className="h-8 w-8 object-contain" 
                />
              </div>
            )}
            <div className="flex-grow min-w-0">
              <h3 className="text-sm font-medium truncate">{cert.title}</h3>
              <p className="text-xs text-white/60 truncate">
                {cert.issuer} • {cert.date}
              </p>
            </div>
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-xs text-white/50 hover:text-white/80 transition-colors"
                aria-label={`View ${cert.title} certification`}
              >
              </a>
            )}
          </RevealOnView>
        ))}
      </ul>
    </div>
  )
}