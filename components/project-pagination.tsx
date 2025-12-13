import Link from "next/link"
import { ArrowLeft, ArrowRight, Grid } from "lucide-react"
import { cn } from "@/lib/utils"

type Project = {
  title: string
  href: string
}

type ProjectPaginationProps = {
  previousProject?: Project
  nextProject?: Project
  className?: string
}

/**
 * Project pagination component for navigating between case studies
 * Shows Previous, Next, and Back to all projects links
 */
export default function ProjectPagination({
  previousProject,
  nextProject,
  className
}: ProjectPaginationProps) {
  return (
    <nav
      aria-label="Project navigation"
      className={cn("mt-16 mb-8 space-y-6", className)}
    >
      {/* Previous/Next Grid */}
      {(previousProject || nextProject) && (
        <div
          className={cn(
            "grid gap-4",
            previousProject && nextProject ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          )}
        >
          {/* Previous Project */}
          {previousProject && (
            <Link
              href={previousProject.href}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-neutral-200/80 dark:border-white/[0.08]",
                "bg-gradient-to-br from-white via-white to-neutral-50/50",
                "dark:from-neutral-900/90 dark:via-neutral-900/60 dark:to-neutral-900/40",
                "backdrop-blur-sm p-5 transition-all duration-500 ease-out",
                "hover:border-emerald-500/40 dark:hover:border-emerald-400/30",
                "hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)]",
                "hover:scale-[1.02] active:scale-[0.98]",
                !nextProject && "md:col-start-1"
              )}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent transition-all duration-500" />

              <div className="relative flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 dark:bg-white/5 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 transition-colors duration-300">
                    <ArrowLeft className="h-4 w-4 text-neutral-600 dark:text-white/60 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-300 group-hover:-translate-x-0.5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-white/40 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    Previous
                  </span>
                </div>
                <div className="pl-10.5">
                  <p className="text-base font-bold text-neutral-900 dark:text-white/95 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300 line-clamp-2">
                    {previousProject.title}
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Next Project */}
          {nextProject && (
            <Link
              href={nextProject.href}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-neutral-200/80 dark:border-white/[0.08]",
                "bg-gradient-to-br from-white via-white to-neutral-50/50",
                "dark:from-neutral-900/90 dark:via-neutral-900/60 dark:to-neutral-900/40",
                "backdrop-blur-sm p-5 transition-all duration-500 ease-out",
                "hover:border-emerald-500/40 dark:hover:border-emerald-400/30",
                "hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)]",
                "hover:scale-[1.02] active:scale-[0.98]",
                !previousProject && "md:col-start-1"
              )}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent transition-all duration-500" />

              <div className="relative flex flex-col gap-3">
                <div className="flex items-center justify-end gap-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-white/40 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    Next
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 dark:bg-white/5 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 transition-colors duration-300">
                    <ArrowRight className="h-4 w-4 text-neutral-600 dark:text-white/60 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
                <div className="pr-10.5 text-right">
                  <p className="text-base font-bold text-neutral-900 dark:text-white/95 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300 line-clamp-2">
                    {nextProject.title}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      )}

      {/* Back to all projects - Full width with modern design */}
      <Link
        href="/"
        className={cn(
          "group relative overflow-hidden flex items-center justify-center gap-3",
          "rounded-xl border border-neutral-200/80 dark:border-white/[0.08]",
          "bg-gradient-to-r from-neutral-50 via-white to-neutral-50",
          "dark:from-neutral-900/50 dark:via-neutral-900/70 dark:to-neutral-900/50",
          "backdrop-blur-sm px-6 py-4",
          "transition-all duration-500 ease-out",
          "hover:border-emerald-500/50 dark:hover:border-emerald-400/40",
          "hover:shadow-[0_10px_40px_rgba(16,185,129,0.15)]",
          "hover:scale-[1.01] active:scale-[0.99]"
        )}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:via-emerald-500/8 group-hover:to-emerald-500/5 transition-all duration-700" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 dark:bg-white/5 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 transition-all duration-300 group-hover:rotate-[-8deg]">
            <Grid className="h-4.5 w-4.5 text-neutral-600 dark:text-white/60 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-300" />
          </div>
          <span className="text-sm font-bold tracking-wide text-neutral-700 dark:text-white/80 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
            Back to All Projects
          </span>
        </div>
      </Link>
    </nav>
  )
}
