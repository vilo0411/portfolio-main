import { getPostData, getSortedPostsData } from "@/lib/blog"
import ScrollToTop from "@/components/scroll-to-top"
import BlogHeader from "@/components/blog-header"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"

export async function generateStaticParams() {
    const posts = getSortedPostsData()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const postData = await getPostData(slug)
    return {
        title: `${postData.title} | Lộc Nguyễn Blog`,
        description: postData.excerpt,
    }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const postData = await getPostData(slug)

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans selection:bg-emerald-500/30">
            <BlogHeader />

            <main className="mx-auto max-w-4xl px-4 sm:px-8 py-8 sm:py-12">
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Quay lại danh sách
                    </Link>
                </div>

                <article className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border border-neutral-200/50 dark:border-white/5 shadow-sm">
                    <header className="mb-10 space-y-6">
                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="h-4 w-4" />
                                <time dateTime={postData.date}>{postData.date}</time>
                            </div>
                            {postData.tags && postData.tags.map(tag => (
                                <div
                                    key={tag}
                                    className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2.5 py-1 rounded-full text-xs font-medium"
                                >
                                    <Tag className="h-3 w-3" />
                                    <span>{tag}</span>
                                </div>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
                            {postData.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {postData.excerpt}
                        </p>

                        <hr className="border-neutral-200 dark:border-white/10" />
                    </header>

                    {/* Content */}
                    <div
                        className="prose prose-lg dark:prose-invert prose-emerald max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-emerald-600 dark:prose-a:text-emerald-400 hover:prose-a:text-emerald-700 dark:hover:prose-a:text-emerald-300 prose-img:rounded-xl prose-p:text-neutral-700 dark:prose-p:text-neutral-300"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    />
                </article>

                {/* Bottom Navigation */}
                <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-white/10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Xem tất cả bài viết
                    </Link>
                </div>
            </main>
            <ScrollToTop />
        </div>
    )
}
