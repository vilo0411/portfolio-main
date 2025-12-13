"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type TocItem = {
  id: string
  title: string
  level: number
}

type TableOfContentsProps = {
  className?: string
}

/**
 * Table of Contents component for case studies
 * Automatically generates from h2 and h3 headings
 * Highlights active section based on scroll position
 */
export default function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Get all h2 and h3 headings from prose-content
    const proseContent = document.querySelector(".prose-content")
    if (!proseContent) return

    const headingElements = proseContent.querySelectorAll("h2, h3")
    const items: TocItem[] = []

    headingElements.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`
      if (!heading.id) {
        heading.id = id
      }

      items.push({
        id,
        title: heading.textContent || "",
        level: parseInt(heading.tagName[1]),
      })
    })

    setHeadings(items)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-100px 0px -80% 0px",
      }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  if (headings.length === 0) return null

  return (
    <nav
      className={cn(
        "rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-sm",
        className
      )}
      aria-label="Table of contents"
    >
      <div className="flex items-center gap-2 mb-4">
        <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">
          Nội dung trang
        </h4>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => handleClick(heading.id)}
              className={cn(
                "block w-full text-left text-sm transition-all duration-200 rounded-lg px-3 py-2",
                heading.level === 2 && "font-medium",
                heading.level === 3 && "pl-6 text-sm",
                activeId === heading.id
                  ? "text-emerald-400 bg-emerald-500/10 font-semibold"
                  : "text-white/60 hover:text-white/90 hover:bg-white/5"
              )}
            >
              {heading.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
