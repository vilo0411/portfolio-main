import Image from "next/image"
import Sidebar from "@/components/sidebar"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"

export const metadata = {
  title: "Nimbus | Lộc Nguyễn Portfolio",
  description: "SaaS analytics dashboard case study",
}

export default function NimbusPage() {
  return (
    <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[500px_1fr]">
      {/* LEFT: sticky sidebar */}
      <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
        <Sidebar 
          headingLines={["Nimbus", "SaaS Analytics"]} 
          description="A comprehensive analytics dashboard for SaaS companies to track key metrics, user behavior, and business performance."
          ctaText="Visit Website"
          ctaLink="#"
        />
      </aside>

      {/* RIGHT: case study content */}
      <div className="relative">
        <DotGridShader className="absolute right-0 top-0 h-[500px] w-[500px] opacity-50" />
        
        <RevealOnView
          className="relative overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-8"
          delay={0.1}
          style={{
            backgroundImage: `linear-gradient(135deg, #111827, #2563eb)`,
            backgroundColor: 'rgba(23, 23, 23, 0.6)',
            backgroundBlendMode: 'overlay'
          }}
        >
          {/* Texture background */}
          <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
            <DotGridShader />
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="mb-8 flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Nimbus — SaaS analytics</h1>
              <h2 className="text-xl text-muted-foreground">Design system & web app for data visualization</h2>
              
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <span>Tạo hệ thống thiết kế với hơn 30 component</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <span>Cải thiện thời gian tải dashboard nhanh hơn 60%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <span>Tăng tỷ lệ giữ chân người dùng 28%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <span>Giảm thời gian onboarding từ 2 tuần xuống 3 ngày</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <Image
                src="/images/1 (2).webp"
                alt="Nimbus SaaS analytics dashboard"
                width={1200}
                height={675}
                className="rounded-lg w-full object-cover"
              />
            </div>

            <h2>Tổng quan dự án</h2>
            <p>
              Nimbus cần thiết kế lại hoàn toàn nền tảng phân tích của họ để đáp ứng nhu cầu ngày càng tăng của khách hàng và độ phức tạp của dữ liệu. Dự án bao gồm việc tạo ra một hệ thống thiết kế có khả năng mở rộng và tái cấu trúc cách hiển thị dữ liệu phức tạp một cách trực quan.
            </p>

            <h2>Thách thức</h2>
            <p>
              Những thách thức chính bao gồm thiết kế cho các mối quan hệ dữ liệu phức tạp, tạo ra các biểu đồ có thể mở rộng từ khách hàng startup đến doanh nghiệp lớn, và xây dựng một hệ thống có thể thích ứng với sự phát triển trong tương lai mà không cần thiết kế lại hoàn toàn.
            </p>

            <h3>Nghiên cứu & Chiến lược</h3>
            <p>
              Tôi bắt đầu với việc đánh giá toàn diện nền tảng hiện có, xác định các điểm đau và cơ hội. Thông qua phỏng vấn các bên liên quan và khảo sát khách hàng, tôi xác định các lĩnh vực cần cải thiện:
            </p>
            <ul>
              <li>Tùy chỉnh dashboard bị hạn chế và thiếu linh hoạt</li>
              <li>Biểu đồ dữ liệu không nhất quán và thường gây hiểu lầm</li>
              <li>Hệ thống không thể mở rộng để đáp ứng nhu cầu dữ liệu cấp doanh nghiệp</li>
              <li>Quá trình onboarding phức tạp và yêu cầu hỗ trợ khách hàng đáng kể</li>
            </ul>

            <h3>Phát triển hệ thống thiết kế</h3>
            <p>
              Tôi đã tạo ra một hệ thống thiết kế toàn diện với các thành phần mô-đun có thể kết hợp để tạo ra các bố cục dashboard khác nhau. Hệ thống bao gồm:
            </p>
            <ul>
              <li>Hệ thống màu sắc được tối ưu hóa cho việc hiển thị dữ liệu với khả năng tiếp cận</li>
              <li>Tỷ lệ typography duy trì khả năng đọc trên các kích thước thiết bị</li>
              <li>Thư viện component với hơn 30 thành phần có thể tái sử dụng</li>
              <li>Tài liệu hướng dẫn triển khai và mở rộng trong tương lai</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div>
                <Image
                  src="/images/1 (2).webp"
                  alt="Thành phần hệ thống thiết kế Nimbus"
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
                <p className="text-sm text-center mt-2 text-white/70">Thư viện thành phần hệ thống thiết kế</p>
              </div>
              <div>
                <Image
                  src="/images/1 (2).webp"
                  alt="Bản mẫu dashboard Nimbus"
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
                <p className="text-sm text-center mt-2 text-white/70">Bản mẫu bố cục dashboard</p>
              </div>
            </div>

            <h3>Thiết kế lại Dashboard</h3>
            <p>
              Việc thiết kế lại dashboard tập trung vào việc tạo ra một hệ thống mô-đun nơi người dùng có thể tùy chỉnh giao diện dựa trên nhu cầu cụ thể của họ. Các tính năng chính bao gồm:
            </p>
            <ul>
              <li>Công cụ xây dựng dashboard kéo và thả</li>
              <li>Đề xuất biểu đồ phù hợp với ngữ cảnh</li>
              <li>Bố cục responsive thích ứng với mọi kích thước màn hình</li>
              <li>Đơn giản hóa việc lọc và phân đoạn dữ liệu</li>
            </ul>

            <h2>Kết quả & Tác động</h2>
            <p>
              Nền tảng được thiết kế lại đã nhận được phản hồi tích cực áp đảo. Các chỉ số quan trọng đã cải thiện đáng kể:
            </p>
            <ul>
              <li>Thời gian tải dashboard cải thiện 60%</li>
              <li>Tỷ lệ giữ chân người dùng tăng 28%</li>
              <li>Số lượng ticket hỗ trợ liên quan đến UI giảm 45%</li>
              <li>Thời gian onboarding khách hàng mới giảm từ 2 tuần xuống 3 ngày</li>
            </ul>

            <blockquote className="border-l-4 border-white/20 pl-4 italic my-6">
              "Hệ thống thiết kế mới đã thay đổi cách chúng tôi xây dựng và cải tiến sản phẩm. Những gì trước đây mất hàng tuần giờ chỉ mất vài ngày, và khách hàng của chúng tôi đang nhận thấy sự khác biệt." — Quản lý Sản phẩm, Nimbus
            </blockquote>

            <h2>Bài học kinh nghiệm</h2>
            <p>
              Dự án này củng cố giá trị của việc tạo ra một nền tảng thiết kế vững chắc trước khi đi sâu vào các tính năng cụ thể. Bằng cách đầu tư thời gian vào hệ thống thiết kế ngay từ đầu, chúng tôi đã có thể triển khai nhanh hơn nhiều và tạo ra trải nghiệm gắn kết hơn.
            </p>
          </div>
        </RevealOnView>
      </div>
    </div>
  )
}