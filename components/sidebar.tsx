"use client"

import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"
import { ReactNode } from "react"

type SidebarProps = {
  /**
   * Optional children to render at the bottom of the sidebar
   */
  children?: ReactNode
  /**
   * Optional heading lines to display
   */
  headingLines?: string[]
  /**
   * Optional description text
   */
  description?: string
  /**
   * Optional CTA button text
   */
  ctaText?: string
  /**
   * Optional CTA button link
   */
  ctaLink?: string
  /**
   * Optional companies worked with
   */
  companies?: string[]
}

/**
 * A reusable sidebar component for the portfolio
 */
export default function Sidebar({
  children,
  headingLines = ["I design products", "that people love"],
  description = "Brandon is a product designer based in New York. He helps early‑stage startups ship beautiful, usable software fast.",
  ctaText = "Hire me",
  ctaLink = "mailto:brandon@portfolio.dev",
  companies = ["EFEX", "Japanbuy", "Ichiba"]
}: SidebarProps) {
  return (
    <RevealOnView 
      as="div" 
      intensity="hero" 
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8" 
      staggerChildren
    >
      {/* Texture background */}
      <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
        <DotGridShader />
      </div>
      <div>
        {/* Wordmark */}
        <div className="mb-8 flex items-center gap-2">
          <div className="text-2xl font-extrabold tracking-tight">Lộc Nguyễn</div>
          <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
        </div>

        {/* Headline with intro blur effect */}
        <AnimatedHeading
          className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
          lines={headingLines}
        />

        <p className="mt-4 max-w-[42ch] text-lg text-white/70">
          {description}
        </p>

        {/* CTAs */}
        {ctaText && ctaLink && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}

        {/* Trusted by */}
        {companies && companies.length > 0 && (
          <div className="mt-10">
            <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">
              COMPANIES I'VE WORKED WITH
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-2xl font-black text-white/25 sm:grid-cols-3">
              {companies.map((company) => (
                <li key={company}>{company}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Additional content */}
      {children}
    </RevealOnView>
  )
}