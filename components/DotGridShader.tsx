"use client"
import { DotGrid } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"

type DotGridShaderProps = React.ComponentProps<typeof DotGrid>

export default function DotGridShader(props: DotGridShaderProps) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    checkTheme()

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  // Light mode: lighter dots on light background
  // Dark mode: darker dots on dark background
  const colors = isDark
    ? {
        fill: "#3a3a3a",
        stroke: "#000000",
        back: "#000000",
      }
    : {
        fill: "#d4d4d4", // neutral-300
        stroke: "#f5f5f5", // neutral-100
        back: "#ffffff",
      }

  return (
    <DotGrid
      colorFill={colors.fill}
      colorStroke={colors.stroke}
      colorBack={colors.back}
      size={1.3}
      gapY={10}
      gapX={10}
      strokeWidth={0.5}
      sizeRange={0.1}
      opacityRange={0.5}
      shape="circle"
      {...props}
      style={{
        backgroundColor: colors.back,
        width: "100%",
        height: "100%",
        ...(props?.style || {}),
      }}
    />
  )
}
