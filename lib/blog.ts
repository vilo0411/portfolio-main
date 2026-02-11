import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"

const postsDirectory = path.join(process.cwd(), "app/blog/posts")

export type BlogPost = {
    slug: string
    title: string
    date: string
    excerpt: string
    coverImage?: string
    contentHtml: string // This will be the HTML string
    tags?: string[]
}

export function getSortedPostsData(): Omit<BlogPost, "contentHtml">[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
        fs.mkdirSync(postsDirectory, { recursive: true })
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, "")

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            slug,
            ...(matterResult.data as { title: string; date: string; excerpt: string; coverImage?: string; tags?: string[] }),
        }
    })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export async function getPostData(slug: string): Promise<BlogPost> {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use unified/remark/rehype to convert markdown to HTML
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
        slug,
        contentHtml,
        ...(matterResult.data as { title: string; date: string; excerpt: string; coverImage?: string; tags?: string[] }),
    }
}
