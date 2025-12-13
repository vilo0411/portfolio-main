import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

type TestimonialProps = {
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: string
  className?: string
}

/**
 * Testimonial component for client feedback
 * Can be used in case studies or social proof sections
 */
export default function Testimonial({
  quote,
  author,
  role,
  company,
  avatar,
  className
}: TestimonialProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-sm",
        className
      )}
    >
      {/* Quote icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
        <Quote className="h-6 w-6 text-emerald-400" />
      </div>

      {/* Quote text */}
      <blockquote className="mb-6 text-lg leading-relaxed text-white/85 italic">
        "{quote}"
      </blockquote>

      {/* Author info */}
      <div className="flex items-center gap-4">
        {avatar && (
          <div className="h-12 w-12 overflow-hidden rounded-full bg-white/10">
            <img
              src={avatar}
              alt={author}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-white">{author}</div>
          {(role || company) && (
            <div className="text-sm text-white/60">
              {role}{role && company && " at "}{company}
            </div>
          )}
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
    </div>
  )
}
