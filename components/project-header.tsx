"use client"

import Link from "next/link"
import { ArrowLeft, Home, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"

type ProjectHeaderProps = {
    projectName: string
    className?: string
}

export default function ProjectHeader({ projectName, className }: ProjectHeaderProps) {
    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full",
                "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl",
                "border-b border-neutral-200/50 dark:border-white/5",
                className
            )}
        >
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-14 items-center justify-between">
                    {/* Left: Back button and breadcrumb */}
                    <div className="flex items-center gap-3">
                        {/* Back to portfolio button */}
                        <Link
                            href="/"
                            className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-full",
                                "text-sm font-medium",
                                "text-neutral-600 dark:text-neutral-400",
                                "hover:text-neutral-900 dark:hover:text-white",
                                "hover:bg-neutral-100 dark:hover:bg-white/5",
                                "transition-all duration-200",
                                "group"
                            )}
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                            <span className="hidden sm:inline">Portfolio</span>
                        </Link>

                        {/* Separator */}
                        <div className="hidden sm:block h-4 w-px bg-neutral-200 dark:bg-white/10" />

                        {/* Current project name */}
                        <div className="hidden sm:flex items-center gap-2 text-sm">
                            <span className="text-neutral-400 dark:text-neutral-500">Projects</span>
                            <ChevronRight className="h-3.5 w-3.5 text-neutral-300 dark:text-neutral-600" />
                            <span className="font-semibold text-neutral-900 dark:text-white truncate max-w-[200px]">
                                {projectName}
                            </span>
                        </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2">
                        {/* Home button */}
                        <Link
                            href="/"
                            className={cn(
                                "flex items-center justify-center w-9 h-9 rounded-full",
                                "text-neutral-500 dark:text-neutral-400",
                                "hover:text-neutral-900 dark:hover:text-white",
                                "hover:bg-neutral-100 dark:hover:bg-white/5",
                                "transition-all duration-200"
                            )}
                            aria-label="Home"
                        >
                            <Home className="h-4 w-4" />
                        </Link>

                        {/* Theme toggle */}
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}
