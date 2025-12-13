import Image from "next/image"
import Sidebar from "@/components/sidebar"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"
import AchievementsList from "@/components/achievements-list"
import Breadcrumb from "@/components/breadcrumb"
import ProjectPagination from "@/components/project-pagination"
import ScrollProgress from "@/components/scroll-progress"

export const metadata = {
  title: "TarotGuideOnline - AI & Automation | Lộc Nguyễn Portfolio",
  description: "Personal Project: Website xem Tarot AI tự động với n8n workflow automation và ChatGPT integration",
}

const lastUpdated = "December 2025"

export default function TarotGuideOnlinePage() {
  // Thành tựu nổi bật của dự án
  const achievements = [
    "100% Content được tạo bằng AI (ChatGPT)",
    "Tự động hóa 100% workflow với n8n",
    "Tích hợp ChatGPT API + Brevo Email automation",
    "Full-stack: Frontend + Backend + Automation"
  ]

  return (
    <>
      <ScrollProgress />
      <div className="px-4 pt-6 pb-4">
        <Breadcrumb
          items={[
            { label: "Projects", href: "/" },
            { label: "TarotGuideOnline" }
          ]}
        />
      </div>
      <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[500px_1fr]">
      {/* LEFT: sticky sidebar with case study info */}
      <aside className="sidebar-sticky scrollbar-hide">
        <Sidebar
          headingLines={["TarotGuideOnline", "AI & Automation Project"]}
          description="Personal project chứng minh khả năng Automation và AI Application. Website xem Tarot tự động với ChatGPT API, n8n workflow, và email automation."
          ctaText="Xem Website"
          ctaLink="https://tarotguideonline.com"
        >
          <AchievementsList achievements={achievements} className="mt-8" />
        </Sidebar>
      </aside>

      {/* RIGHT: case study content */}
      <div className="relative">
        <RevealOnView
          className="relative overflow-hidden rounded-3xl border-2 border-neutral-200 dark:border-white/10 bg-white/90 dark:bg-neutral-900/60 backdrop-blur-xl p-6 sm:p-8"
          delay={0.1}
        >
          {/* Texture background */}
          <div className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-5 mix-blend-soft-light">
            <DotGridShader />
          </div>

          {/* Content với typography system */}
          <div className="prose-content prose dark:prose-invert max-w-none relative z-10">
            {/* Last Updated Badge */}
            <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Last updated: {lastUpdated}</span>
            </div>

            <div className="mb-8">
              <Image
                src="/images/portfolio-tarotguideonline.webp"
                alt="TarotGuideOnline - AI & Automation Project"
                width={1200}
                height={675}
                className="rounded-lg w-full object-cover"
              />
            </div>

            <h2 id="overview">Tổng quan dự án</h2>
            <p>
              <strong>TarotGuideOnline</strong> là personal project do tôi tự xây dựng từ đầu để chứng minh 2 skill quan trọng mà <strong>SEOer truyền thống thường không có</strong>:
            </p>
            <ul>
              <li><strong>Marketing Automation</strong> - Sử dụng n8n workflow để tự động hóa toàn bộ quy trình</li>
              <li><strong>AI Application</strong> - Tích hợp ChatGPT API để tạo content và xử lý logic</li>
            </ul>
            <p>
              Đây không chỉ là website thông thường, mà là một <strong>hệ thống tự động hoàn chỉnh</strong> từ content generation đến email marketing.
            </p>

            <h2 id="concept">Concept & Ý tưởng</h2>
            <p>
              Website cho phép người dùng <strong>xem bài Tarot online tự động</strong>:
            </p>
            <ul>
              <li>User submit form với câu hỏi</li>
              <li>System tự động xử lý qua workflow</li>
              <li>ChatGPT AI phân tích và giải bài Tarot</li>
              <li>Kết quả được gửi qua email tự động</li>
            </ul>

            <h2 id="technical-solution">Giải pháp kỹ thuật</h2>

            <h3 id="ai-content">1. AI-Powered Content Generation</h3>
            <p>
              <strong>100% nội dung website được tạo bằng AI</strong>:
            </p>
            <ul>
              <li><strong>Topical Map với ChatGPT</strong> - Prompt AI để tạo cấu trúc nội dung theo Topical Map methodology</li>
              <li><strong>Bulk Content Creation</strong> - Tự động tạo hàng trăm bài viết về các lá bài Tarot, ý nghĩa, cách giải bài</li>
              <li><strong>SEO-Optimized</strong> - Content được tối ưu với từ khóa, headings, internal linking</li>
              <li><strong>Scalable</strong> - Có thể mở rộng sang nhiều chủ đề khác nhau chỉ bằng cách thay đổi prompts</li>
            </ul>

            <h3 id="automation-workflow">2. n8n Automation Workflow</h3>
            <p>
              <strong>Core của project là workflow automation hoàn chỉnh</strong>:
            </p>
            <ul>
              <li><strong>Webhook Trigger</strong> - Nhận form submission từ website</li>
              <li><strong>Data Processing</strong> - Validate và format dữ liệu người dùng</li>
              <li><strong>ChatGPT API Integration</strong> - Gửi request tới ChatGPT với prompt được thiết kế sẵn
                <ul className="ml-6 mt-2">
                  <li>Phân tích câu hỏi của user</li>
                  <li>Random chọn lá bài Tarot phù hợp</li>
                  <li>Generate giải bài chi tiết với context</li>
                </ul>
              </li>
              <li><strong>Email Automation via Brevo</strong> - Tự động gửi kết quả qua email với template đẹp mắt</li>
              <li><strong>Error Handling</strong> - Retry mechanism và fallback scenarios</li>
            </ul>

            <h3 id="frontend">3. Frontend Development</h3>
            <p>
              Code giao diện frontend đơn giản nhưng hiệu quả:
            </p>
            <ul>
              <li><strong>HTML/CSS/JavaScript</strong> - Lightweight, responsive design</li>
              <li><strong>Form Handling</strong> - Client-side validation trước khi submit</li>
              <li><strong>UX Optimization</strong> - Loading states, success/error messages</li>
              <li><strong>Mobile-Friendly</strong> - Responsive design cho mọi thiết bị</li>
            </ul>

            <h2 id="tools-tech">Công cụ & Công nghệ</h2>
            <ul>
              <li><strong>n8n</strong> - Workflow automation platform (self-hosted or cloud)</li>
              <li><strong>ChatGPT API (OpenAI)</strong> - AI content generation và analysis</li>
              <li><strong>Brevo (formerly Sendinblue)</strong> - Email automation service</li>
              <li><strong>HTML/CSS/JavaScript</strong> - Frontend development</li>
              <li><strong>Webhook</strong> - Kết nối giữa frontend và n8n workflow</li>
            </ul>

            <h2 id="results">Kết quả & Impact</h2>
            <p>
              Project này chứng minh những skill khác biệt của tôi so với SEOer truyền thống:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 text-2xl">🤖</span>
                <div>
                  <strong>AI Mastery:</strong> Biết cách prompt engineering để tạo content bulk chất lượng cao
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 text-2xl">⚙️</span>
                <div>
                  <strong>Automation Expert:</strong> Xây dựng workflow phức tạp với nhiều integrations
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 text-2xl">💻</span>
                <div>
                  <strong>Full-Stack Capable:</strong> Không chỉ biết Marketing mà còn code được Frontend/Backend
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 text-2xl">🚀</span>
                <div>
                  <strong>Scalable Mindset:</strong> Tư duy scale - một lần setup, chạy tự động vô hạn
                </div>
              </li>
            </ul>

            <blockquote className="border-l-4 border-emerald-500/50 pl-4 italic my-6 bg-emerald-500/10 p-4 rounded-r-lg">
              "Project này không chỉ là một website - đây là bằng chứng cho thấy tôi có thể tự xây dựng hệ thống Marketing tự động hóa hoàn chỉnh, từ content đến automation, không cần phụ thuộc vào team Dev."
            </blockquote>

            <h2 id="lessons">Bài học & Takeaways</h2>
            <p>
              TarotGuideOnline dạy tôi những bài học quý giá về modern marketing:
            </p>
            <ul>
              <li><strong>AI is a game-changer</strong> - Với ChatGPT, một người có thể làm công việc của cả team content</li>
              <li><strong>Automation saves time</strong> - Setup một lần, benefit mãi mãi</li>
              <li><strong>Tech skills matter</strong> - Marketer biết code sẽ có competitive advantage lớn</li>
              <li><strong>Integration is key</strong> - Kết nối các tools với nhau tạo ra magic</li>
            </ul>

            <div className="mt-8 p-6 bg-emerald-50 dark:bg-neutral-800/50 rounded-xl border border-emerald-500/20">
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-2">💡 Điểm khác biệt</p>
              <p className="text-foreground/80">
                Hầu hết SEOer chỉ biết viết content và optimize on-page. Tôi có thể <strong>build entire systems</strong> - từ website, automation workflows, đến AI integrations. Đây là skill set hiếm có trong ngành Marketing Việt Nam.
              </p>
            </div>
          </div>
        </RevealOnView>

        {/* Project Pagination */}
        <div className="px-4 pb-8">
          <ProjectPagination
            previousProject={{
              title: "Ichiba — Nền Tảng Hỗ Trợ Thương Mại Điện Tử",
              href: "/projects/ichiba"
            }}
          />
        </div>
      </div>
    </div>
    </>
  )
}