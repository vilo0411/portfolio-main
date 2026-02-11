import Link from "next/link"
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react"
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

export default function ProjectPagination({
  previousProject,
  nextProject,
  className
}: ProjectPaginationProps) {
  return (
    <nav
      aria-label="Project navigation"
      className={cn("mt-12 space-y-4", className)}
    >
      {/* Previous/Next Navigation */}
      {(previousProject || nextProject) && (
        <div
          className={cn(
            "grid gap-3",
            previousProject && nextProject ? "grid-cols-2" : "grid-cols-1"
          )}
        >
          {/* Previous Project */}
          {previousProject && (
            <Link
              href={previousProject.href}
              className={cn(
                "group relative flex flex-col gap-2 p-4 rounded-xl",
                "bg-neutral-50 dark:bg-white/[0.02]",
                "border border-neutral-200/60 dark:border-white/5",
                "hover:bg-neutral-100 dark:hover:bg-white/[0.04]",
                "hover:border-neutral-300 dark:hover:border-white/10",
                "transition-all duration-300"
              )}
            >
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                <span>Previous</span>
              </div>
              <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {previousProject.title}
              </p>
            </Link>
          )}

          {/* Next Project */}
          {nextProject && (
            <Link
              href={nextProject.href}
              className={cn(
                "group relative flex flex-col gap-2 p-4 rounded-xl text-right",
                "bg-neutral-50 dark:bg-white/[0.02]",
                "border border-neutral-200/60 dark:border-white/5",
                "hover:bg-neutral-100 dark:hover:bg-white/[0.04]",
                "hover:border-neutral-300 dark:hover:border-white/10",
                "transition-all duration-300",
                !previousProject && "col-start-1"
              )}
            >
              <div className="flex items-center justify-end gap-2 text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                <span>Next</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {nextProject.title}
              </p>
            </Link>
          )}
        </div>
      )}

      {/* Back to all projects */}
      <Link
        href="/"
        className={cn(
          "group flex items-center justify-center gap-2 py-3 rounded-xl",
          "text-sm font-medium",
          "text-neutral-500 dark:text-neutral-400",
          "bg-neutral-50 dark:bg-white/[0.02]",
          "border border-neutral-200/60 dark:border-white/5",
          "hover:text-emerald-600 dark:hover:text-emerald-400",
          "hover:bg-emerald-50 dark:hover:bg-emerald-500/5",
          "hover:border-emerald-200 dark:hover:border-emerald-500/20",
          "transition-all duration-300"
        )}
      >
        <LayoutGrid className="h-4 w-4" />
        <span>View All Projects</span>
      </Link>
    </nav>
  )
}
