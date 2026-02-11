"use client"

import { useEffect, useMemo, useRef, memo } from "react"
import { animate, stagger } from "motion"
import { cn } from "@/lib/utils"

type AnimatedHeadingProps = {
  className?: string
  /** Lines of text. Each string will be rendered on its own line. */
  lines: string[]
  /** Delay before the streaming effect starts */
  startDelay?: number
  /** Duration of each word's animation */
  durationPerWord?: number
  /** Stagger between words within a line */
  staggerPerWord?: number
  /** Additional delay between lines */
  lineDelay?: number
  /** Starting blur amount in px */
  fromBlurPx?: number
  /** Starting translateY in px */
  fromTranslateYPx?: number
}

const AnimatedHeading = memo(function AnimatedHeading({
  className,
  lines,
  startDelay = 0,
  durationPerWord = 0.5,
  staggerPerWord = 0.04,
  lineDelay = 0.15,
  fromBlurPx = 10,
  fromTranslateYPx = 8,
}: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null)

  const tokensPerLine = useMemo(() => {
    // Split each line into words and spaces (keep spaces as separate tokens)
    // Example: "Hello world" => ["Hello", " ", "world"]
    return lines.map((line) => line.split(/(\s+)/))
  }, [lines])

  useEffect(() => {
    if (!headingRef.current) return
    const wordSpans = headingRef.current.querySelectorAll<HTMLSpanElement>("[data-word]")
    if (wordSpans.length === 0) return

    // Initialize all words to the starting state
    wordSpans.forEach((el) => {
      el.style.opacity = "0"
      el.style.filter = `blur(${fromBlurPx}px)`
      el.style.transform = `translateY(${fromTranslateYPx}px)`
    })

    // Group words by line index
    const wordsByLine = new Map<number, HTMLSpanElement[]>()
    wordSpans.forEach((el) => {
      const lineIndexAttr = el.getAttribute("data-line-index")
      const lineIndex = lineIndexAttr ? Number(lineIndexAttr) : 0
      const arr = wordsByLine.get(lineIndex) ?? []
      arr.push(el)
      wordsByLine.set(lineIndex, arr)
    })

    // Store animation controls
    const animations: any[] = []
    let hasAnimated = false

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      if (hasAnimated) return
      hasAnimated = true

        ;[...wordsByLine.entries()]
          .sort((a, b) => a[0] - b[0])
          .forEach(([lineIndex, words]) => {
            const anim = animate(
              words,
              { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" } as any,
              {
                duration: durationPerWord,
                delay: ((_el: any, i: number) => startDelay + lineIndex * lineDelay + i * staggerPerWord) as any,
                ease: [0.22, 1, 0.36, 1],
              }
            )
            animations.push(anim)
          })
    }, 50)

    return () => {
      clearTimeout(timeoutId)
      animations.forEach(anim => {
        if (anim && typeof anim.stop === 'function') {
          anim.stop()
        }
      })
    }
  }, [startDelay, durationPerWord, staggerPerWord, lineDelay, fromBlurPx, fromTranslateYPx])

  return (
    <h1 ref={headingRef} className={cn(className)} aria-label={lines.join(" ")}>
      {/* Visual characters for animation; hidden from screen readers */}
      <span aria-hidden>
        {tokensPerLine.map((tokens, lineIdx) => (
          <span key={`line-${lineIdx}`} className="block">
            {tokens.map((token, idx) => {
              const isSpace = /^\s+$/.test(token)
              if (isSpace) {
                return <span key={`s-${lineIdx}-${idx}`}>{"\u00A0"}</span>
              }
              return (
                <span
                  key={`w-${lineIdx}-${idx}`}
                  data-word
                  data-line-index={lineIdx}
                  className="inline-block will-change-transform"
                >
                  {token}
                </span>
              )
            })}
          </span>
        ))}
      </span>
    </h1>
  )
})

export default AnimatedHeading
