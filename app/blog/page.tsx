import { getSortedPostsData } from "@/lib/blog"
import BlogCard from "@/components/blog-card"
import ScrollToTop from "@/components/scroll-to-top"
import BlogHeader from "@/components/blog-header"

export const metadata = {
    title: "Blog | Lộc Nguyễn Portfolio",
    description: "Chia sẻ kiến thức về SEO Technical, Next.js và Web Performance.",
}

export default function BlogIndex() {
    const allPosts = getSortedPostsData()

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans selection:bg-emerald-500/30">
            <BlogHeader />

            <main className="mx-auto max-w-5xl px-4 sm:px-8 py-12">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                        Blog & Case Studies
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Chia sẻ kiến thức về SEO Technical, Digital Marketing và những bài học từ thực chiến.
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {allPosts.map((post, i) => (
                        <BlogCard key={post.slug} post={post} index={i} />
                    ))}
                </div>

                {allPosts.length === 0 && (
                    <div className="text-center py-20 bg-neutral-100 dark:bg-white/5 rounded-2xl border border-dashed border-neutral-300 dark:border-white/10">
                        <p className="text-neutral-500">Chưa có bài viết nào.</p>
                    </div>
                )}
            </main>
            <ScrollToTop />
        </div>
    )
}
