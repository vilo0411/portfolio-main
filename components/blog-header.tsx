"use client"

import Link from "next/link"
import { Home, FileText, Briefcase, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"
import { usePathname } from "next/navigation"

type NavItem = {
    label: string
    href: string
    icon: React.ReactNode
}

const navItems: NavItem[] = [
    { label: "Portfolio", href: "/", icon: <Home className="h-4 w-4" /> },
    { label: "Blog", href: "/blog", icon: <FileText className="h-4 w-4" /> },
]

export default function BlogHeader() {
    const pathname = usePathname()
    const isPostPage = pathname.startsWith("/blog/") && pathname !== "/blog"

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200/50 dark:border-white/5 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-bold text-neutral-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            Lộc Nguyễn
                            <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        </Link>

                        {/* Breadcrumb for post pages */}
                        {isPostPage && (
                            <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-400">
                                <ChevronRight className="h-4 w-4" />
                                <Link
                                    href="/blog"
                                    className="hover:text-emerald-500 transition-colors"
                                >
                                    Blog
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = item.href === "/blog"
                                ? pathname.startsWith("/blog")
                                : pathname === item.href

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                                        isActive
                                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5"
                                    )}
                                >
                                    {item.icon}
                                    <span className="hidden sm:inline">{item.label}</span>
                                </Link>
                            )
                        })}

                        <div className="ml-2 pl-2 border-l border-neutral-200 dark:border-white/10">
                            <ThemeToggle />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
