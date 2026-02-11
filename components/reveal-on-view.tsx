"use client"

import { useEffect, useRef, memo } from "react"
import type { CSSProperties } from "react"
import { animate, inView, stagger } from "motion"

type RevealOnViewProps = {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
  /** Optional delay per item for staggered lists */
  delay?: number
  style?: CSSProperties
  /** If true, applies a stronger lift/blur for hero content */
  intensity?: "soft" | "hero"
  /** If true, will animate immediate children in a staggered sequence */
  staggerChildren?: boolean
}

const RevealOnView = memo(function RevealOnView({ as = "div", className, children, delay = 0, style, intensity = "soft", staggerChildren = false }: RevealOnViewProps) {
  const Tag = as as any
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const startTranslate = intensity === "hero" ? 20 : 12
    const startBlur = intensity === "hero" ? 10 : 6
    const startScale = intensity === "hero" ? 0.98 : 0.99

    if (staggerChildren) {
      element.style.opacity = "1"
      element.style.transform = "none"
      element.style.filter = "none"
    } else {
      element.style.opacity = "0"
      element.style.transform = `translateY(${startTranslate}px) scale(${startScale})`
      element.style.filter = `blur(${startBlur}px)`
    }

    let animationControl: any = null
    let hasAnimated = false

    const cleanup = inView(element, () => {
      if (hasAnimated) return
      hasAnimated = true

      const targets = staggerChildren
        ? Array.from(element.children) as HTMLElement[]
        : [element]

      if (staggerChildren) {
        targets.forEach((t) => {
          t.style.opacity = "0"
          t.style.transform = `translateY(${startTranslate}px) scale(${startScale})`
          t.style.filter = `blur(${startBlur}px)`
        })
      }

      animationControl = animate(
        targets,
        { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" },
        { duration: 0.6, delay: targets.length > 1 ? ((_el: any, i: number) => delay + i * 0.06) as any : delay, ease: [0.22, 1, 0.36, 1] }
      )
    })

    return () => {
      cleanup()
      if (animationControl && typeof animationControl.stop === 'function') {
        animationControl.stop()
      }
    }
  }, [delay, intensity, staggerChildren])

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  )
})

export default RevealOnView
