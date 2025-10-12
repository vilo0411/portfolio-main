import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"
import CertificationSection from "@/components/certification-section"
import Sidebar from "@/components/sidebar"
 

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
      issuer: "Meta",
      date: "2022",
      logo: "/coursera.png",
      url: "#"
    },
    {
      title: "Product Design Certification",
      issuer: "Dribbble",
      date: "2021",
      logo: "/coursera.png",
      url: "#"
    }
  ]
  
  // Thành tựu nổi bật
  const achievements = [
    "Tăng 45% tỷ lệ chuyển đổi cho ứng dụng Walletly",
    "Giảm 32% tỷ lệ bỏ giao dịch cho khách hàng fintech",
    "Cải thiện điểm hài lòng người dùng từ 3.5 lên 4.8",
    "Ra mắt thành công tại 3 thị trường trong vòng 6 tháng"
  ]
  
  // Mô tả dự án
  const projectDescription = "Chuyên viên SEO với 3 năm kinh nghiệm triển khai các dự án B2B, B2C về Logistics, E-commerce, và Dịch vụ mua hộ."

  // Dự án tiêu biểu
  const projects = [
    {
      title: "EFEX — Dịch vụ Order fulfillment",
      subtitle: "Thiết kế sản phẩm end-to-end",
      imageSrc: "/images/portfolio-efex.png",
      tags: ["Fulfillment", "Logistics", "Cross-border Shipping"],
      href: "/projects/walletly",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "Japnbuy — Dịch vụ mua hộ hàng Nhật",
      subtitle: "Hệ thống thiết kế & ứng dụng web",
      imageSrc: "/images/portfolio-japanbuy.png",
      tags: ["Dịch vụ", "Mua hộ hàng Nhật"],
      href: "/projects/nimbus",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Ichiba — Nền Tảng Hỗ Trợ Thương Mại Điện Tử Xuyên Biên Giới",
      subtitle: "Giao diện ưu tiên di động",
      imageSrc: "/images/portfolio-ichiba.png",
      tags: ["Saas"],
      href: "/projects/arcade",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "TarotGuideOnline — Tổng hợp kiến thức về Tarot",
      subtitle: "Giao diện ưu tiên khả năng tiếp cận",
      imageSrc: "/images/portfolio-tarotguideonline.png",
      tags: ["Personal Project", "Tarot", "AI"],
      href: "/projects/careconnect",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    }
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[500px_1fr]">
          {/* LEFT: sticky and full height, NOW WITH OVERFLOW-Y-AUTO for scrolling */}
          <aside className="lg:sticky lg:top-4 lg:max-h-[calc(100svh-2rem)] lg:overflow-y-auto lg:overscroll-contain scrollbar-hide lg:pr-2">
            <Sidebar
              description={projectDescription}
              headingLines={["SEO Executive"]}
              ctaText="Liên hệ tôi"
              ctaLink="mailto:nguyenvietloc0411@gmail.com"
              companies={["EFEX", "Japanbuy", "Ichiba"]}
            >
              {/* Thành tựu nổi bật */}
              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">
                  THÀNH TỰU NỔI BẬT
                </p>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Certifications */}
              <CertificationSection certifications={certifications} />
            </Sidebar>
          </aside>

          {/* RIGHT: simplified, with adjusted size for project cards - REMOVED BORDER */}
          <div className="space-y-4">
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
                imageContainerClassName="h-64 lg:h-80"
                containerClassName="h-auto"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}