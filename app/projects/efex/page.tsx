import Image from "next/image"
import Sidebar from "@/components/sidebar"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"
import AchievementsList from "@/components/achievements-list"
import Breadcrumb from "@/components/breadcrumb"
import ProjectPagination from "@/components/project-pagination"
import ScrollProgress from "@/components/scroll-progress"

export const metadata = {
  title: "EFEX Asia - Fulfillment Logistics | Lộc Nguyễn Portfolio",
  description: "Case Study: Tăng trưởng Organic Traffic từ 0 lên 20,000/tháng cho EFEX Asia - Dịch vụ Fulfillment Logistics tại US/UK",
}

const lastUpdated = "December 2025"

export default function Efex() {
  // Thành tựu nổi bật của dự án
  const achievements = [
    "Traffic: 0 → 20,000/tháng (trong 1 năm)",
    "Ranking: Top 1 Google cho các từ khóa thương mại",
    "90% từ khóa mục tiêu lọt Top 10 Google",
    "Thị trường: US & UK - Lĩnh vực Fulfillment/Logistics"
  ]

  return (
    <>
      <ScrollProgress />
      <div className="px-4 pt-6 pb-4">
        <Breadcrumb
          items={[
            { label: "Projects", href: "/" },
            { label: "EFEX Asia" }
          ]}
        />
      </div>
      <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[500px_1fr]">
      {/* LEFT: sticky sidebar with case study info */}
      <aside className="sidebar-sticky scrollbar-hide">
        <Sidebar
          headingLines={["EFEX Asia", "Fulfillment Logistics"]}
          description="Dịch vụ Order Fulfillment chuyên nghiệp tại thị trường US & UK. Triển khai chiến lược SEO Technical để đạt 20,000 organic traffic/tháng từ con số 0."
          ctaText="Xem Website"
          ctaLink="https://efex.vn/en"
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
                src="/images/portfolio-efex.webp"
                alt="EFEX Asia - Fulfillment Logistics SEO Case Study"
                width={1200}
                height={675}
                className="rounded-lg w-full object-cover"
              />
            </div>

            <h2 id="overview">Tổng quan dự án</h2>
            <p>
              <strong>EFEX Asia</strong> là công ty cung cấp dịch vụ Order Fulfillment chuyên nghiệp cho thị trường US và UK. Với vai trò <strong>Digital Marketing Executive</strong>, tôi chịu trách nhiệm xây dựng chiến lược SEO từ đầu để đưa website từ 0 traffic lên 20,000+ organic visitors/tháng.
            </p>

            <h2 id="challenges">Thách thức</h2>
            <p>
              Dự án đối mặt với những thách thức lớn:
            </p>
            <ul>
              <li><strong>Website hoàn toàn mới</strong> - Traffic ban đầu = 0, không có Domain Authority</li>
              <li><strong>Thị trường ngách cạnh tranh cao</strong> - Lĩnh vực Logistics/Fulfillment tại US/UK với các đối thủ lớn</li>
              <li><strong>Từ khóa thương mại có giá cao</strong> - Chi phí quảng cáo Google Ads rất tốn kém</li>
              <li><strong>Khó khăn về mặt kỹ thuật</strong> - Cần setup tracking chính xác cho Conversion API và Pixel</li>
            </ul>

            <h3 id="keyword-research">Nghiên cứu từ khóa & Chiến lược</h3>
            <p>
              Bước đầu tiên là nghiên cứu sâu về hành vi tìm kiếm của khách hàng mục tiêu:
            </p>
            <ul>
              <li><strong>Phân tích đối thủ</strong> - Sử dụng Ahrefs để reverse engineering chiến lược của top competitors</li>
              <li><strong>Tìm từ khóa ngách có intent cao</strong> - Focus vào transaction keywords như "Fulfillment tại Mỹ", "Order Fulfillment UK", "Shopee UK Fulfillment"</li>
              <li><strong>Long-tail keywords</strong> - Khai thác các từ khóa dài có độ cạnh tranh thấp hơn nhưng conversion rate cao</li>
              <li><strong>Search Intent Analysis</strong> - Phân loại từ khóa theo intent (Informational, Commercial, Transactional) để tối ưu content</li>
            </ul>

            <h3 id="technical-seo">Technical SEO & Cấu trúc Website</h3>
            <p>
              Triển khai <strong>cấu trúc Silo Architecture</strong> để tăng topical authority:
            </p>
            <ul>
              <li><strong>Silo theo dịch vụ</strong> - Phân chia rõ ràng các nhóm dịch vụ (US Fulfillment, UK Fulfillment, Express Shipping, etc.)</li>
              <li><strong>Internal Linking Strategy</strong> - Xây dựng mạng lưới liên kết nội bộ mạnh mẽ theo mô hình pyramid</li>
              <li><strong>URL Structure</strong> - Tối ưu URL ngắn gọn, dễ hiểu và chứa keyword chính</li>
              <li><strong>Technical Audit</strong> - Fix các lỗi crawl errors, duplicate content, broken links định kỳ</li>
            </ul>

            <h3 id="performance-marketing">Performance Marketing & Tracking</h3>
            <p>
              Setup hệ thống tracking và Performance Ads bổ trợ cho SEO:
            </p>
            <ul>
              <li><strong>Google Tag Manager</strong> - Cài đặt và quản lý tags, triggers, variables một cách linh hoạt</li>
              <li><strong>Conversion API & Pixel</strong> - Setup tracking chính xác để đo lường ROI của campaigns</li>
              <li><strong>Google Ads</strong> - Chạy Performance Ads bổ trợ cho các từ khóa có conversion rate cao</li>
              <li><strong>A/B Testing</strong> - Test các landing page khác nhau để tối ưu conversion rate</li>
            </ul>

            <h2 id="tools">Công cụ & Công nghệ sử dụng</h2>
            <ul>
              <li><strong>Ahrefs</strong> - Nghiên cứu từ khóa, phân tích backlink, competitor research</li>
              <li><strong>Google Search Console</strong> - Monitor performance, fix indexing issues</li>
              <li><strong>Google Tag Manager</strong> - Quản lý tracking tags</li>
              <li><strong>Google Ads</strong> - Performance advertising bổ trợ</li>
              <li><strong>Screaming Frog</strong> - Technical SEO audit</li>
            </ul>

            <h2 id="results">Kết quả đạt được</h2>
            <p>
              Sau <strong>1 năm</strong> triển khai chiến lược SEO, dự án EFEX Asia đã đạt được những kết quả vượt mong đợi:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div>
                  <strong>Traffic tăng trưởng mạnh mẽ:</strong> Từ <strong>0 lên 20,000 organic visitors/tháng</strong>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div>
                  <strong>Ranking xuất sắc:</strong> Đạt <strong>Top 1 Google</strong> cho các từ khóa thương mại chính (Transaction Keywords)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div>
                  <strong>Hiệu suất từ khóa:</strong> <strong>90% từ khóa mục tiêu</strong> lọt Top 10 Google
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div>
                  <strong>ROI tích cực:</strong> Tiết kiệm hàng ngàn USD chi phí quảng cáo nhờ organic traffic
                </div>
              </li>
            </ul>

            <blockquote className="border-l-4 border-emerald-500/50 pl-4 italic my-6 bg-emerald-500/10 p-4 rounded-r-lg">
              "Chiến lược SEO Technical kết hợp với Performance Marketing đã giúp EFEX Asia tăng trưởng organic traffic một cách bền vững, đồng thời tối ưu chi phí marketing hiệu quả."
            </blockquote>

            <h2 id="lessons">Bài học rút ra</h2>
            <p>
              Dự án EFEX Asia đã cho tôi những bài học quý giá:
            </p>
            <ul>
              <li><strong>Technical SEO là nền tảng</strong> - Không có technical SEO tốt, content marketing sẽ không hiệu quả</li>
              <li><strong>Data-driven decision</strong> - Mọi quyết định đều dựa trên dữ liệu thực tế từ GSC, Ahrefs, GA4</li>
              <li><strong>Patience & Consistency</strong> - SEO cần thời gian, nhưng kết quả sẽ bền vững hơn Paid Ads</li>
              <li><strong>Keyword Intent is King</strong> - Focus vào từ khóa có commercial/transactional intent mới mang lại conversion</li>
            </ul>
           </div>
        </RevealOnView>

        {/* Project Pagination */}
        <div className="px-4 pb-8">
          <ProjectPagination
            nextProject={{
              title: "Japanbuy — Dịch vụ mua hộ hàng Nhật",
              href: "/projects/japanbuy"
            }}
          />
        </div>
      </div>
    </div>
    </>
  )
}