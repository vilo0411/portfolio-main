import Image from "next/image"
import Sidebar from "@/components/sidebar"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"
import Breadcrumb from "@/components/breadcrumb"
import ProjectPagination from "@/components/project-pagination"
import ScrollProgress from "@/components/scroll-progress"

export const metadata = {
  title: "Japanbuy - Technical SEO Case Study | Lộc Nguyễn Portfolio",
  description: "Fix 100% lỗi Technical SEO, tăng traffic từ 0 lên 11,000/tháng cho Japanbuy - dịch vụ mua hộ hàng Nhật",
}

const lastUpdated = "December 2025"

export default function JapanbuyPage() {
  // Thành tựu nổi bật của dự án
  const achievements = [
    "Fix 100% lỗi Indexing & Technical SEO",
    "Traffic: 0 → 11,000/tháng",
    "90% từ khóa mục tiêu vào Top 10 Google",
    "Sử dụng Python scripts để tự động audit"
  ]
  
  return (
    <>
      <ScrollProgress />
      {/* Full page background */}
      <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
        <DotGridShader />
      </div>
      <div className="px-4 pt-6 pb-4">
        <Breadcrumb
          items={[
            { label: "Projects", href: "/" },
            { label: "Japanbuy" }
          ]}
        />
      </div>
      <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[500px_1fr]">
      {/* LEFT: sticky sidebar with case study info */}
      <aside className="sidebar-sticky scrollbar-hide">
        <Sidebar
          headingLines={["Japanbuy", "Technical SEO Expert"]}
          description="Dịch vụ mua hộ hàng Nhật với các vấn đề Technical SEO nghiêm trọng. Sử dụng Python và kiến thức lập trình để fix lỗi kỹ thuật, tăng traffic từ 0 lên 11,000/tháng."
          ctaText="Xem Website"
          ctaLink="https://japanbuy.vn"
        >
          {/* Thành tựu nổi bật */}
          <div className="mt-8 border-t border-border pt-8">
            <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground">
              THÀNH TỰU NỔI BẬT
            </p>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/70">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"></span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
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

          <div className="prose-content prose dark:prose-invert max-w-none relative z-10">
            {/* Last Updated Badge */}
            <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500 dark:text-white/50">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Last updated: {lastUpdated}</span>
            </div>

            <div className="mb-8">
              <Image
                src="/images/portfolio-japanbuy.webp"
                alt="Japanbuy - Technical SEO Case Study"
                width={1200}
                height={675}
                className="rounded-lg w-full object-cover"
              />
            </div>

            <h2 id="overview">Tổng quan dự án</h2>
            <p>
              <strong>Japanbuy</strong> là nền tảng thương mại điện tử chuyên cung cấp dịch vụ mua hộ hàng Nhật Bản. Với vai trò <strong>SEO Executive (Technical Focus)</strong>, tôi được giao nhiệm vụ giải quyết các vấn đề kỹ thuật nghiêm trọng đang ảnh hưởng đến khả năng indexing của Google, khiến website không thể thu hút organic traffic.
            </p>

            <h2 id="challenges">Vấn đề kỹ thuật nghiêm trọng</h2>
            <p>
              Khi audit website, tôi phát hiện ra các lỗi Technical SEO nghiêm trọng:
            </p>
            <ul>
              <li><strong>Client-Side Rendering (CSR) Issues</strong> - Website sử dụng JavaScript framework render ở phía client, Google không thể crawl được nội dung</li>
              <li><strong>Canonical Tags sai</strong> - Nhiều trang có canonical tag trỏ sai, gây duplicate content</li>
              <li><strong>Duplicate Content nghiêm trọng</strong> - Hàng trăm URLs trùng lặp nội dung</li>
              <li><strong>Indexing Issues</strong> - Google Search Console báo lỗi "Discovered - currently not indexed" cho hàng nghìn URLs</li>
              <li><strong>Core Web Vitals kém</strong> - LCP, FID, CLS đều ở mức "Needs Improvement"</li>
            </ul>

            <h3 id="technical-audit">Technical Audit với Python & Screaming Frog</h3>
            <p>
              Bước đầu tiên là audit toàn diện website để xác định chính xác các vấn đề:
            </p>
            <ul>
              <li><strong>Screaming Frog SEO Spider</strong> - Crawl toàn bộ website để phát hiện broken links, duplicate content, missing meta tags</li>
              <li><strong>Python Scripts</strong> - Viết script tự động để:
                <ul className="ml-6 mt-2">
                  <li>Phân tích log files từ server để hiểu Googlebot crawl behavior</li>
                  <li>Extract và phân loại canonical tags errors</li>
                  <li>So sánh rendered HTML vs raw HTML để detect CSR issues</li>
                  <li>Tự động generate sitemap với URLs ưu tiên cao</li>
                </ul>
              </li>
              <li><strong>Google Search Console</strong> - Phân tích Coverage Report, Performance Report, Core Web Vitals</li>
              <li><strong>Lighthouse</strong> - Kiểm tra performance, accessibility, SEO score</li>
            </ul>

            <h3 id="solution">Giải pháp kỹ thuật</h3>
            <p>
              Sau khi xác định các vấn đề, tôi làm việc trực tiếp với Dev team để triển khai giải pháp:
            </p>
            <ul>
              <li><strong>Server-Side Rendering (SSR)</strong> - Migrate từ CSR sang SSR để Google có thể crawl được nội dung
                <ul className="ml-6 mt-2">
                  <li>Làm việc với dev team sử dụng Next.js để implement SSR</li>
                  <li>Dùng kiến thức code để review và test SSR implementation</li>
                  <li>Verify rendered HTML qua "View Page Source" và Google Search Console</li>
                </ul>
              </li>
              <li><strong>Fix Canonical Tags</strong> - Viết script Python để audit và fix hàng trăm canonical tags sai</li>
              <li><strong>Duplicate Content</strong> - Implement robots meta tags và canonical URLs đúng chuẩn</li>
              <li><strong>Core Web Vitals Optimization</strong>:
                <ul className="ml-6 mt-2">
                  <li>Image optimization (WebP format, lazy loading)</li>
                  <li>CSS/JS minification và code splitting</li>
                  <li>Preload critical resources</li>
                  <li>Reduce server response time</li>
                </ul>
              </li>
            </ul>

            <h3 id="collaboration">Làm việc với Dev Team</h3>
            <p>
              Một điểm mạnh của tôi là khả năng <strong>bridge the gap</strong> giữa Marketing và Development:
            </p>
            <ul>
              <li><strong>Hiểu code</strong> - Có kiến thức về HTML/CSS/JavaScript giúp tôi review code changes và đưa ra feedback kỹ thuật chính xác</li>
              <li><strong>Clear communication</strong> - Giải thích các vấn đề SEO bằng ngôn ngữ technical mà dev team hiểu được</li>
              <li><strong>Proactive testing</strong> - Tự test các changes trước khi push lên production</li>
              <li><strong>Documentation</strong> - Viết tài liệu chi tiết về technical requirements và expected outcomes</li>
            </ul>

            <h2 id="tools">Công cụ & Công nghệ</h2>
            <ul>
              <li><strong>Python</strong> - Viết scripts để automate audit, log analysis, sitemap generation</li>
              <li><strong>Screaming Frog SEO Spider</strong> - Technical audit tool</li>
              <li><strong>Google Search Console</strong> - Monitor indexing, performance, Core Web Vitals</li>
              <li><strong>Lighthouse</strong> - Performance và SEO scoring</li>
              <li><strong>Next.js (knowledge)</strong> - Để review và test SSR implementation</li>
            </ul>

            <h2 id="results">Kết quả đạt được</h2>
            <p>
              Sau khi fix toàn bộ các lỗi Technical SEO, kết quả vượt xa mong đợi:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div>
                  <strong>Fix 100% lỗi Indexing:</strong> Google đã index được toàn bộ nội dung quan trọng
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div>
                  <strong>Traffic explosion:</strong> Từ <strong>0 lên 11,000 organic visitors/tháng</strong>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div>
                  <strong>Ranking performance:</strong> <strong>90% từ khóa mục tiêu</strong> lọt Top 10 Google
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div>
                  <strong>Core Web Vitals improved:</strong> LCP từ 4.2s xuống 1.8s, FID từ 180ms xuống 50ms
                </div>
              </li>
            </ul>

            <blockquote className="border-l-4 border-emerald-500/50 pl-4 italic my-6 bg-emerald-500/10 p-4 rounded-r-lg">
              "Kết hợp kiến thức Technical SEO với khả năng lập trình giúp tôi không chỉ phát hiện vấn đề mà còn có thể communicate hiệu quả với Dev team để implement solutions nhanh chóng."
            </blockquote>

            <h2 id="lessons">Bài học rút ra</h2>
            <p>
              Dự án Japanbuy củng cố niềm tin của tôi về tầm quan trọng của <strong>Technical SEO</strong>:
            </p>
            <ul>
              <li><strong>Technical + Content</strong> - Nếu Google không crawl được, content marketing sẽ vô nghĩa</li>
              <li><strong>Code knowledge is powerful</strong> - Hiểu code giúp SEO Executive làm việc hiệu quả hơn với Dev team</li>
              <li><strong>Python for automation</strong> - Automation giúp tiết kiệm hàng chục giờ manual work</li>
              <li><strong>SSR/SSG matters</strong> - Đối với JavaScript-heavy websites, SSR/SSG là must-have cho SEO</li>
            </ul>
          </div>
        </RevealOnView>

        {/* Project Pagination */}
        <div className="px-4 pb-8">
          <ProjectPagination
            previousProject={{
              title: "EFEX — Dịch vụ Order fulfillment",
              href: "/projects/efex"
            }}
            nextProject={{
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