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
  // Xóa giá trị mặc định ở đây. Nếu không truyền, chúng sẽ là undefined
  headingLines,
  description,
  ctaText,
  ctaLink,
  companies
}: SidebarProps) {
    // Định nghĩa giá trị mặc định bên trong hàm nếu cần, 
    // HOẶC dùng luôn giá trị mặc định cũ cho headingLines để đảm bảo luôn có tiêu đề chính
    const defaultHeadingLines = ["I design products", "that people love"];

  return (
    <RevealOnView 
      as="div" 
      intensity="hero" 
      className="relative flex flex-col rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8 max-w-full min-h-full" 
      staggerChildren
    >
      {/* Texture background */}
      <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light rounded-3xl overflow-hidden">
        <DotGridShader />
      </div>
      <div className="relative z-10 w-full overflow-hidden flex-shrink-0">
        {/* Wordmark */}
        <div className="mb-8 flex items-center gap-2">
          <div className="text-2xl font-extrabold tracking-tight">Lộc Nguyễn</div>
          <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
        </div>

        {/* Headline with intro blur effect */}
        {/* Sử dụng headingLines truyền vào, nếu không có thì dùng defaultHeadingLines */}
        <AnimatedHeading
          className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
          lines={headingLines || defaultHeadingLines} 
        />

        {/* Description: Chỉ hiển thị nếu description có giá trị */}
        {description && (
          <p className="mt-4 max-w-[42ch] text-lg text-white/70">
            {description}
          </p>
        )}

        {/* CTAs: Chỉ hiển thị nếu ctaText VÀ ctaLink có giá trị */}
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

        {/* Trusted by: Chỉ hiển thị nếu companies TỒN TẠI VÀ có phần tử (dài > 0) */}
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
      {children && (
        <div className="relative z-10 w-full overflow-hidden flex-shrink-0 mt-auto">
          {children}
        </div>
      )}
    </RevealOnView>
  )
}