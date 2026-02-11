"use client"

import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "motion/react"
import { BlogPost } from "@/lib/blog"

export default function BlogCard({ post, index }: { post: Omit<BlogPost, "contentHtml">, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-6 backdrop-blur-sm transition-all hover:bg-white/80 dark:hover:bg-neutral-900/80 hover:border-emerald-500/30 hover:shadow-lg dark:hover:shadow-emerald-900/20"
        >
            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">View post</span>
            </Link>

            <div className="space-y-4">
                {/* Date & Tags */}
                <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <time dateTime={post.date}>{post.date}</time>
                    </div>
                    {post.tags && (
                        <div className="flex gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-neutral-100 dark:bg-white/5 px-2 py-0.5 rounded-full border border-neutral-200 dark:border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Title & Excerpt */}
                <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                        {post.excerpt}
                    </p>
                </div>
            </div>

            {/* Read More */}
            <div className="mt-6 flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Read Article
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </motion.div>
    )
}
