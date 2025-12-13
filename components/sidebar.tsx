"use client"

import Link from "next/link"
import { ArrowRight, Sparkles, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"
import AnimatedHeading from "@/components/animated-heading"
import ThemeToggle from "@/components/theme-toggle"
import { ReactNode, memo } from "react"

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
  /**
   * Optional specialization badge text
   */
  specialization?: string
  /**
   * Optional years of experience
   */
  yearsOfExperience?: number
}

/**
 * A reusable sidebar component for the portfolio
 */
const Sidebar = memo(function Sidebar({
  children,
  // Xóa giá trị mặc định ở đây. Nếu không truyền, chúng sẽ là undefined
  headingLines,
  description,
  ctaText,
  ctaLink,
  companies,
  specialization,
  yearsOfExperience
}: SidebarProps) {
    // Định nghĩa giá trị mặc định bên trong hàm nếu cần,
    // HOẶC dùng luôn giá trị mặc định cũ cho headingLines để đảm bảo luôn có tiêu đề chính
    const defaultHeadingLines = ["I design products", "that people love"];

  return (
    <div className="relative flex flex-col rounded-3xl border border-neutral-200 dark:border-white/10 bg-white/90 dark:bg-neutral-900/60 backdrop-blur-xl p-6 sm:p-8 w-full overflow-hidden transition-colors duration-300">
      {/* Texture background - Dot pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light">
        <DotGridShader />
      </div>
      <div className="relative z-10 w-full">
        {/* Wordmark */}
        <div className="mb-8 flex items-center gap-2">
          <div className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white transition-colors"><a href="/">Lộc Nguyễn</a></div>
          <div className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
        </div>

        {/* Specialization Badge - Only show if provided */}
        {specialization && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-sm transition-colors">
            <Sparkles className="h-4 w-4" />
            <span>{specialization}</span>
            {yearsOfExperience && (
              <>
                <div className="h-1 w-1 rounded-full bg-emerald-500/60" />
                <span className="text-emerald-300">{yearsOfExperience}+ years</span>
              </>
            )}
          </div>
        )}

        {/* Headline with intro blur effect */}
        {/* Sử dụng headingLines truyền vào, nếu không có thì dùng defaultHeadingLines */}
        <AnimatedHeading
          className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
          lines={headingLines || defaultHeadingLines}
        />

        {/* Description: Chỉ hiển thị nếu description có giá trị */}
        {description && (
          <p className="mt-4 max-w-[42ch] text-lg text-neutral-600 dark:text-white/70 leading-relaxed transition-colors">
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

        {/* Social Links */}
        <div className="mt-6 flex items-center gap-3">
          <Link
            href="https://www.linkedin.com/in/loc-nguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="h-4 w-4 text-neutral-600 dark:text-white/60 transition-colors group-hover:text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </Link>
          <Link
            href="https://github.com/locnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:scale-110"
            aria-label="GitHub"
          >
            <svg className="h-4 w-4 text-neutral-600 dark:text-white/60 transition-colors group-hover:text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
          </Link>
          <Link
            href="mailto:nguyenvietloc0411@gmail.com"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-4 w-4 text-neutral-600 dark:text-white/60 transition-colors group-hover:text-emerald-500" />
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Trusted by: Chỉ hiển thị nếu companies TỒN TẠI VÀ có phần tử (dài > 0) */}
        {companies && companies.length > 0 && (
          <div className="mt-10">
            <p className="mb-3 text-xs font-semibold tracking-widest text-neutral-500 dark:text-white/50 transition-colors">
              COMPANIES I'VE WORKED WITH
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-2xl font-black sm:grid-cols-3">
              {companies.map((company) => (
                <li
                  key={company}
                  className="text-neutral-300 dark:text-white/25 hover:text-emerald-500 dark:hover:text-emerald-500/60 transition-all duration-300 cursor-default hover:scale-105"
                >
                  {company}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Additional content */}
      {children && (
        <div className="relative z-10 w-full">
          {children}
        </div>
      )}
    </div>
  )
})

export default Sidebar