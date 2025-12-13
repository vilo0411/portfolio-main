"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AnimatedCounterProps = {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  decimals?: number
}

/**
 * Animated counter component that counts up to a number
 * Triggers animation when element comes into view
 */
export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const remaining = endTime - now

      if (remaining <= 0) {
        setCount(end)
        return
      }

      const progress = 1 - remaining / duration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = end * easeOutQuart

      setCount(current)
      requestAnimationFrame(updateCount)
    }

    requestAnimationFrame(updateCount)
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}
