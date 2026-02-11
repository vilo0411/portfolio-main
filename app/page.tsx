import dynamic from "next/dynamic"

import ProjectCard from "@/components/project-card"
import Sidebar from "@/components/sidebar"
import AchievementsList from "@/components/achievements-list"
import TechStack from "@/components/tech-stack"

// Lazy load non-critical component
const CertificationSection = dynamic(() => import("@/components/certification-section"), {
  ssr: true,
  loading: () => <div className="h-20 animate-pulse bg-white/5 rounded-lg mt-8" />
})

export default function Page() {
  // Certifications data
  const certifications = [
    {
      title: "UI/UX Design Professional Certificate",
      issuer: "Google",
      date: "2023",
      logo: "/coursera.png",
      url: "#"
    },
    {
      title: "Frontend Web Development",
      issuer: "Coursera",
      date: "2022",
      logo: "/coursera.png",
      url: "#"
    },
    {
      title: "Product Design Certification",
      issuer: "Google",
      date: "2021",
      logo: "/coursera.png",
      url: "#"
    }
  ]

  // Thành tựu nổi bật
  const achievements = [
    "20,000+ Organic Traffic/tháng (Lĩnh vực Logistics)",
    "90% Từ khóa mục tiêu lọt Top 10",
    "2+ Năm Kinh nghiệm thực chiến (Fulfillment, SaaS, eCommerce)",
    "Tự động hóa Marketing với Python, n8n và AI"
  ]

  // Mô tả dự án
  const projectDescription = "Tăng trưởng Traffic và Doanh thu bằng chiến lược SEO dựa trên Dữ liệu, kết hợp Tự động hóa (Automation) và Kỹ thuật lập trình."

  // Dự án tiêu biểu
  const projects = [
    {
      title: "EFEX — Dịch vụ Order fulfillment",
      subtitle: "Hãy cứ tập trung phát triển kinh doanh, hậu cần để EFEX lo!",
      imageSrc: "/images/portfolio-efex.webp",
      tags: ["Fulfillment", "Logistics", "Cross-border Shipping"],
      href: "/projects/efex",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
      objectPosition: "left top",
    },
    {
      title: "Japnbuy — Dịch vụ mua hộ hàng Nhật",
      subtitle: "Hệ thống thiết kế & ứng dụng web",
      imageSrc: "/images/portfolio-japanbuy.webp",
      tags: ["Dịch vụ", "Mua hộ hàng Nhật"],
      href: "/projects/japanbuy",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
      objectPosition: "left top",
    },
    {
      title: "Ichiba — Nền Tảng Hỗ Trợ Thương Mại Điện Tử Xuyên Biên Giới",
      subtitle: "Giao diện ưu tiên di động",
      imageSrc: "/images/portfolio-ichiba.webp",
      tags: ["Saas"],
      href: "/projects/ichiba",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
      objectPosition: "left top",
    },
    {
      title: "TarotGuideOnline — Tổng hợp kiến thức về Tarot",
      subtitle: "Giao diện ưu tiên khả năng tiếp cận",
      imageSrc: "/images/portfolio-tarotguideonline.webp",
      tags: ["Personal Project", "Tarot", "AI"],
      href: "/projects/tarotguideonline",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
      objectPosition: "top",
    }
  ]

  return (
    <main className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300" id="main-content">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <div className="px-4 pt-4 pb-4">
        <div className="lg:flex lg:gap-4">
          {/* LEFT: sticky sidebar */}
          <div className="lg:w-[550px] lg:flex-shrink-0">
            <div className="lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto scrollbar-hide">
              <Sidebar
                description={projectDescription}
                headingLines={["Digital Marketing Executive", "SEO Specialist"]}
                specialization=""
                yearsOfExperience={2}
                ctaText="Liên hệ tôi"
                ctaLink="#contact"
                companies={["EFEX Asia", "Japanbuy", "IchibaOne Platform", "Kaopiz Software"]}
              >
                <div className="space-y-8 mt-8">
                  <AchievementsList achievements={achievements} />
                  <TechStack />
                  {/* Certifications */}
                  <CertificationSection certifications={certifications} />
                </div>
              </Sidebar>
            </div>
          </div>

          {/* RIGHT: simplified, with adjusted size for project cards - REMOVED BORDER */}
          <div className="space-y-4 lg:flex-1 mt-4 lg:mt-0">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                objectPosition={p.objectPosition}
                imageContainerClassName="h-64 lg:h-96"
                containerClassName="h-auto"
                revealDelay={idx * 0.02}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}