import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Breadcrumb navigation component with emerald accents
 * Shows the navigation path: Home > Projects > Current Project
 */
export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center gap-2 text-sm text-neutral-500 dark:text-white/60",
        className
      )}
    >
      {/* Home icon */}
      <Link
        href="/"
        className="group flex items-center gap-2 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
        aria-label="Home"
      >
        <Home className="h-4 w-4 transition-transform group-hover:scale-110" />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-neutral-300 dark:text-white/30" aria-hidden="true" />

            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  isLast && "font-semibold text-neutral-900 dark:text-white/90"
                )}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </div>
        )
      })}
    </nav>
  )
}
