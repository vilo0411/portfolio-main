import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Lộc Nguyễn Portfolio",
  description: "Case studies and projects by Lộc Nguyễn",
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white px-4 pt-4 pb-16 lg:pb-4 transition-colors duration-300">
      {children}
    </section>
  )
}