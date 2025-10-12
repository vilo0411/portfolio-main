import Image from "next/image"
import Sidebar from "@/components/sidebar"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"

export const metadata = {
  title: "Arcade | Lộc Nguyễn Portfolio",
  description: "E-commerce for streetwear case study",
}

export default function ArcadePage() {
  // Thành tựu nổi bật của dự án
  const achievements = [
    "Tăng 37% tỷ lệ chuyển đổi trên di động",
    "Giảm 25% tỷ lệ bỏ giỏ hàng",
    "Tăng 42% thời gian trung bình trên trang",
    "Tăng 28% giá trị đơn hàng trung bình"
  ]

  return (
    <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[500px_1fr]">
      {/* LEFT: sticky sidebar with case study info */}
      <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
        <Sidebar 
          headingLines={["Arcade", "Streetwear E-commerce"]} 
          description="Nền tảng thương mại điện tử ưu tiên di động cho các thương hiệu thời trang đường phố, tập trung vào trải nghiệm mua sắm độc đáo và tương tác cộng đồng."
          ctaText="Xem Website"
          ctaLink="#"
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
        </Sidebar>
      </aside>

      {/* RIGHT: case study content */}
      <div className="relative">
        <RevealOnView 
          className="relative overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-8"
          delay={0.1}
          style={{
            backgroundImage: `linear-gradient(135deg, #0b132b, #5bc0be)`,
            backgroundColor: 'rgba(23, 23, 23, 0.6)',
            backgroundBlendMode: 'overlay'
          }}
        >
          {/* Texture background */}
          <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
            <DotGridShader />
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="mb-8">
              <Image
                src="/images/1 (1).webp"
                alt="Arcade streetwear e-commerce interface"
                width={1200}
                height={675}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <h2>Tổng quan dự án</h2>
            <p>
              Arcade là nền tảng thương mại điện tử mới được thiết kế đặc biệt cho các thương hiệu thời trang đường phố và thời trang phiên bản giới hạn. Dự án bao gồm việc tạo ra trải nghiệm mua sắm ưu tiên di động nhấn mạnh vào kể chuyện sản phẩm, tương tác cộng đồng và thanh toán liền mạch.
            </p>

            <h2>Thách thức</h2>
            <p>
              Thị trường thời trang đường phố có những thách thức độc đáo: sản phẩm ra mắt giới hạn, nhu cầu cao và nhấn mạnh vào văn hóa thương hiệu và cộng đồng. Nền tảng cần xử lý các đợt tăng lưu lượng truy cập trong thời gian phát hành sản phẩm trong khi vẫn duy trì trải nghiệm mua sắm cao cấp phù hợp với tính chất độc quyền của sản phẩm.
            </p>

            <h3>Nghiên cứu người dùng</h3>
            <p>
              Tôi đã tiến hành nghiên cứu sâu rộng về cộng đồng thời trang đường phố, bao gồm:
            </p>
            <ul>
              <li>Phỏng vấn hơn 20 người đam mê thời trang đường phố thuộc các nhóm nhân khẩu học khác nhau</li>
              <li>Phân tích cạnh tranh của các nền tảng mua sắm thời trang đường phố hiện có</li>
              <li>Phân tích xu hướng hành vi mua sắm trong thị trường phiên bản giới hạn</li>
              <li>Quan sát trải nghiệm mua sắm và ra mắt sản phẩm trực tiếp</li>
            </ul>

            <h3>Những hiểu biết chính</h3>
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
                <p className="text-sm text-center mt-2 text-white/70">Wireframes di động khám phá trình duyệt sản phẩm</p>
              </div>
              <div>
                <Image
                  src="/images/1 (3).webp"
                  alt="Arcade checkout flow"
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
                <p className="text-sm text-center mt-2 text-white/70">Prototype luồng thanh toán được tối ưu hóa</p>
              </div>
            </div>
            
            <h3>Giải pháp cuối cùng</h3>
            <p>
              Nền tảng cuối cùng bao gồm một số tính năng chính:
            </p>
            <ul>
              <li>Giao diện duyệt sản phẩm được tối ưu hóa cho di động với hình ảnh chất lượng cao</li>
              <li>Tích hợp nội dung cộng đồng và đánh giá sản phẩm</li>
              <li>Hệ thống thông báo thông minh cho các sản phẩm ra mắt giới hạn</li>
              <li>Quy trình thanh toán được tối ưu hóa giảm 40% số bước so với trung bình ngành</li>
            </ul>

            <h2>Kết quả & Tác động</h2>
            <p>
              Sau khi ra mắt, Arcade đã đạt được những kết quả ấn tượng. Tỷ lệ chuyển đổi trên di động tăng 37%, tỷ lệ bỏ giỏ hàng giảm 25%, và giá trị đơn hàng trung bình tăng 28%. Nền tảng này hiện đang phục vụ hơn 25 thương hiệu thời trang đường phố và đang mở rộng sang các thị trường quốc tế.
            </p>

            <blockquote className="border-l-4 border-white/20 pl-4 italic my-6">
              "Arcade đã thay đổi cách chúng tôi tiếp cận thương mại điện tử. Trải nghiệm di động mượt mà và tính năng cộng đồng đã giúp chúng tôi xây dựng một cơ sở người hâm mộ trung thành hơn bao giờ hết." — Giám đốc thương hiệu, Supreme Streetwear
            </blockquote>

            <h2>Bài học kinh nghiệm</h2>
            <p>
              Dự án này đã dạy tôi tầm quan trọng của việc cân bằng giữa thẩm mỹ và chức năng trong thiết kế thương mại điện tử. Mặc dù trải nghiệm thương hiệu là rất quan trọng trong không gian thời trang đường phố, nhưng hiệu suất và khả năng sử dụng vẫn là yếu tố quyết định đối với tỷ lệ chuyển đổi và sự hài lòng của người dùng.
            </p>

          </div>
        </RevealOnView>
      </div>
    </div>
  )
}