import Image from "next/image"
import Sidebar from "@/components/sidebar"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"
import AchievementsList from "@/components/achievements-list"
import Breadcrumb from "@/components/breadcrumb"
import ProjectPagination from "@/components/project-pagination"
import ScrollProgress from "@/components/scroll-progress"

export const metadata = {
  title: "Ichiba | Lộc Nguyễn Portfolio",
  description: "Nền tảng hỗ trợ thương mại điện tử xuyên biên giới",
}

const lastUpdated = "December 2025"

export default function ArcadePage() {
  // Thành tựu nổi bật của dự án
  const achievements = [
    "Tăng 37% tỷ lệ chuyển đổi trên di động",
    "Giảm 25% tỷ lệ bỏ giỏ hàng",
    "Tăng 42% thời gian trung bình trên trang",
    "Tăng 28% giá trị đơn hàng trung bình"
  ]

  return (
    <>
      <ScrollProgress />
      <div className="px-4 pt-6 pb-4">
        <Breadcrumb
          items={[
            { label: "Projects", href: "/" },
            { label: "Ichiba" }
          ]}
        />
      </div>
      <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[500px_1fr]">
      {/* LEFT: sticky sidebar with case study info */}
      <aside className="sidebar-sticky scrollbar-hide">
        <Sidebar 
          headingLines={["IchibaOne", "Platform"]} 
          description="Nền tảng hỗ trợ thương mại điện tử xuyên biên giới"
          ctaText="Xem Website"
          ctaLink="https://ichiba.vn/"
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
                src="/images/1 (1).webp"
                alt="Arcade streetwear e-commerce interface"
                width={1200}
                height={675}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <h2 id="overview">Tổng quan dự án</h2>
            <p>
              Arcade là nền tảng thương mại điện tử mới được thiết kế đặc biệt cho các thương hiệu thời trang đường phố và thời trang phiên bản giới hạn. Dự án bao gồm việc tạo ra trải nghiệm mua sắm ưu tiên di động nhấn mạnh vào kể chuyện sản phẩm, tương tác cộng đồng và thanh toán liền mạch.
            </p>

            <h2 id="challenges">Thách thức</h2>
            <p>
              Thị trường thời trang đường phố có những thách thức độc đáo: sản phẩm ra mắt giới hạn, nhu cầu cao và nhấn mạnh vào văn hóa thương hiệu và cộng đồng. Nền tảng cần xử lý các đợt tăng lưu lượng truy cập trong thời gian phát hành sản phẩm trong khi vẫn duy trì trải nghiệm mua sắm cao cấp phù hợp với tính chất độc quyền của sản phẩm.
            </p>

            <h3 id="user-research">Nghiên cứu người dùng</h3>
            <p>
              Tôi đã tiến hành nghiên cứu sâu rộng về cộng đồng thời trang đường phố, bao gồm:
            </p>
            <ul>
              <li>Phỏng vấn hơn 20 người đam mê thời trang đường phố thuộc các nhóm nhân khẩu học khác nhau</li>
              <li>Phân tích cạnh tranh của các nền tảng mua sắm thời trang đường phố hiện có</li>
              <li>Phân tích xu hướng hành vi mua sắm trong thị trường phiên bản giới hạn</li>
              <li>Quan sát trải nghiệm mua sắm và ra mắt sản phẩm trực tiếp</li>
            </ul>

            <h3 id="key-insights">Những hiểu biết chính</h3>
            <p>
              Nghiên cứu đã tiết lộ một số hiểu biết quan trọng định hướng thiết kế:
            </p>
            <ul>
              <li>Kể chuyện và bối cảnh sản phẩm ảnh hưởng đáng kể đến quyết định mua hàng</li>
              <li>Xác nhận cộng đồng là yếu tố chính trong việc mua thời trang đường phố</li>
              <li>Mua sắm di động chiếm ưu thế, nhưng trải nghiệm hiện tại thường gây khó chịu</li>
              <li>Người dùng muốn minh bạch về tính sẵn có và tính xác thực của sản phẩm</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div>
                <Image
                  src="/images/1 (3).webp"
                  alt="Arcade mobile wireframes"
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
                <p className="text-sm text-center mt-2 text-foreground/70">Wireframes di động khám phá trình duyệt sản phẩm</p>
              </div>
              <div>
                <Image
                  src="/images/1 (3).webp"
                  alt="Arcade checkout flow"
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
                <p className="text-sm text-center mt-2 text-foreground/70">Prototype luồng thanh toán được tối ưu hóa</p>
              </div>
            </div>
            
            <h3 id="final-solution">Giải pháp cuối cùng</h3>
            <p>
              Nền tảng cuối cùng bao gồm một số tính năng chính:
            </p>
            <ul>
              <li>Giao diện duyệt sản phẩm được tối ưu hóa cho di động với hình ảnh chất lượng cao</li>
              <li>Tích hợp nội dung cộng đồng và đánh giá sản phẩm</li>
              <li>Hệ thống thông báo thông minh cho các sản phẩm ra mắt giới hạn</li>
              <li>Quy trình thanh toán được tối ưu hóa giảm 40% số bước so với trung bình ngành</li>
            </ul>

            <h2 id="results">Kết quả & Tác động</h2>
            <p>
              Sau khi ra mắt, Arcade đã đạt được những kết quả ấn tượng. Tỷ lệ chuyển đổi trên di động tăng 37%, tỷ lệ bỏ giỏ hàng giảm 25%, và giá trị đơn hàng trung bình tăng 28%. Nền tảng này hiện đang phục vụ hơn 25 thương hiệu thời trang đường phố và đang mở rộng sang các thị trường quốc tế.
            </p>

            <blockquote className="border-l-4 border-emerald-500/50 pl-4 italic my-6">
              "Arcade đã thay đổi cách chúng tôi tiếp cận thương mại điện tử. Trải nghiệm di động mượt mà và tính năng cộng đồng đã giúp chúng tôi xây dựng một cơ sở người hâm mộ trung thành hơn bao giờ hết." — Giám đốc thương hiệu, Supreme Streetwear
            </blockquote>

            <h2 id="lessons">Bài học kinh nghiệm</h2>
            <p>
              Dự án này đã dạy tôi tầm quan trọng của việc cân bằng giữa thẩm mỹ và chức năng trong thiết kế thương mại điện tử. Mặc dù trải nghiệm thương hiệu là rất quan trọng trong không gian thời trang đường phố, nhưng hiệu suất và khả năng sử dụng vẫn là yếu tố quyết định đối với tỷ lệ chuyển đổi và sự hài lòng của người dùng.
            </p>

          </div>
        </RevealOnView>

        {/* Project Pagination */}
        <div className="px-4 pb-8">
          <ProjectPagination
            previousProject={{
              title: "Japanbuy — Dịch vụ mua hộ hàng Nhật",
              href: "/projects/japanbuy"
            }}
            nextProject={{
              title: "TarotGuideOnline — Tổng hợp kiến thức về Tarot",
              href: "/projects/tarotguideonline"
            }}
          />
        </div>
      </div>
    </div>
    </>
  )
}