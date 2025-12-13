import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"

type Props = {
  title?: string
  subtitle?: string
  imageSrc?: string
  tags?: string[]
  href?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  imageContainerClassName?: string
  containerClassName?: string
  revealDelay?: number
  objectPosition?: string // Thêm prop mới
}

// Tag colors - using single emerald color for all tags with good contrast
const getTagColors = () => {
  return {
    bg: 'bg-emerald-500/15',
    border: 'border-emerald-500/40',
    text: 'text-emerald-300',
    hoverBg: 'group-hover:bg-emerald-500/25',
    hoverBorder: 'group-hover:border-emerald-500/60',
    hoverText: 'group-hover:text-emerald-200'
  }
}

// Server Component (no client hooks)
export default function ProjectCard({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=720&width=1280",
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
  objectPosition = "center", // Default center
}: Props) {
  return (
    <article className={cn("group relative", containerClassName)}>
      <Link href={href} className="block h-full" aria-label={`Open case study: ${title}`}>
        <RevealOnView
          delay={revealDelay}
          className="relative rounded-3xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] lg:h-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-6px] group-hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.2)] dark:group-hover:shadow-[0_20px_80px_-10px_rgba(0,0,0,0.8)]"
        >
          {/* Image Container */}
          <div className={cn("relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden", imageContainerClassName)}>
            <div className="absolute inset-0">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                className={cn(
                  "transition-all duration-700 group-hover:scale-105",
                  objectPosition === "left top" && "object-cover object-left-top",
                  objectPosition === "left center" && "object-cover object-left",
                  objectPosition === "right top" && "object-cover object-right-top",
                  objectPosition === "right center" && "object-cover object-right",
                  objectPosition === "top" && "object-cover object-top",
                  objectPosition === "center" && "object-cover object-center",
                  objectPosition === "bottom" && "object-cover object-bottom",
                  (!objectPosition || objectPosition === "center") && "object-cover"
                )}
              />
            </div>
            
            {/* Gradient Overlay on Hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}99, ${gradientTo}99)`
              }}
            />
            
            {/* Subtle vignette - always visible */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          </div>

          {/* Top-left tags */}
          <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2 z-10">
            {tags.map((t, index) => {
              const colors = getTagColors()
              return (
                <Badge
                  key={t}
                  variant="secondary"
                  className={cn(
                    "pointer-events-auto backdrop-blur-sm transition-all duration-300",
                    colors.bg,
                    colors.border,
                    colors.text,
                    colors.hoverBg,
                    colors.hoverBorder,
                    colors.hoverText
                  )}
                  style={{
                    transitionDelay: `${index * 30}ms`
                  }}
                >
                  {t}
                </Badge>
              )
            })}
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold sm:text-xl text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors leading-relaxed mt-1">{subtitle}</p>
              </div>
              <span
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:px-5 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] self-start sm:self-auto border border-white/10 group-hover:border-emerald-500/30"
              >
                <span className="hidden group-hover:inline transition-all">Case study</span>
                <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </span>
            </div>
          </div>
        </RevealOnView>
      </Link>
    </article>
  )
}