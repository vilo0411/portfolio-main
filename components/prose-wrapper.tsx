import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type ProseWrapperProps = {
  children: ReactNode
  className?: string
}

/**
 * Wrapper component cho nội dung bài viết với typography system nhất quán
 */
export default function ProseWrapper({ children, className }: ProseWrapperProps) {
  return (
    <div className={cn(
      "prose-wrapper",
      "max-w-none",
      className
    )}>
      {children}
    </div>
  )
}