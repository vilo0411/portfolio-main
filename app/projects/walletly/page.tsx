import Image from "next/image"
import Sidebar from "@/components/sidebar"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"

export const metadata = {
  title: "Walletly | Lộc Nguyễn Portfolio",
  description: "Multi‑account mobile banking case study",
}

export default function WalletlyPage() {
  // Thành tựu nổi bật của dự án
  const achievements = [
    "Tăng 45% tỷ lệ tương tác người dùng",
    "Giảm 32% tỷ lệ bỏ giao dịch",
    "Cải thiện điểm hài lòng người dùng từ 3.6 lên 4.8",
    "Ra mắt thành công tại 3 thị trường trong vòng 6 tháng"
  ]

  return (
    <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[500px_1fr]">
      {/* LEFT: sticky sidebar with case study info */}
      <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
        <Sidebar 
          headingLines={["Walletly", "Mobile Banking"]} 
          description="Giải pháp ngân hàng di động toàn diện cho phép người dùng quản lý nhiều tài khoản, theo dõi chi tiêu và thực hiện thanh toán một cách liền mạch."
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
            backgroundImage: `linear-gradient(135deg, #0f172a, #6d28d9)`,
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
                alt="Walletly mobile banking app interface"
                width={1200}
                height={675}
                className="rounded-lg w-full object-cover"
              />
            </div>

            <h2>Tổng quan dự án</h2>
            <p>
              Walletly tiếp cận tôi để thiết kế lại ứng dụng ngân hàng di động của họ với trọng tâm là cải thiện trải nghiệm người dùng và bổ sung khả năng quản lý nhiều tài khoản. Ứng dụng hiện tại hoạt động tốt nhưng gặp vấn đề về điều hướng kém, lịch sử giao dịch gây nhầm lẫn và tùy chọn cá nhân hóa hạn chế.
            </p>

            <h2>Thách thức</h2>
            <p>
              Những thách thức chính bao gồm tạo giao diện trực quan để quản lý nhiều tài khoản, đơn giản hóa luồng giao dịch và thiết kế bảng điều khiển cung cấp thông tin tài chính rõ ràng mà không làm người dùng bị choáng ngợp với dữ liệu.
            </p>

            <h3>Nghiên cứu & Khám phá</h3>
            <p>
              Tôi đã tiến hành phỏng vấn người dùng với 15 khách hàng hiện tại và phân tích sản phẩm đối thủ để xác định các điểm đau và cơ hội. Những phát hiện chính bao gồm:
            </p>
            <ul>
              <li>Người dùng gặp khó khăn trong việc có cái nhìn tổng thể về tài chính của họ trên nhiều tài khoản</li>
              <li>Phân loại giao dịch không nhất quán và thường không chính xác</li>
              <li>Người dùng muốn thông tin cá nhân hóa nhưng thấy các nỗ lực hiện tại quá phức tạp</li>
            </ul>

            <h3>Quy trình thiết kế</h3>
            <p>
              Quy trình thiết kế bao gồm nhiều lần lặp lại wireframing, tạo prototype và kiểm thử người dùng. Tôi đã tạo một hệ thống thiết kế dựa trên component cho phép các thành phần UI nhất quán trong khi vẫn duy trì tính linh hoạt cho các loại tài khoản khác nhau.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div>
                <Image
                  src="/images/1 (1).webp"
                  alt="Walletly wireframes"
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
                <p className="text-sm text-center mt-2 text-white/70">Wireframes ban đầu khám phá các mẫu điều hướng</p>
              </div>
              <div>
                <Image
                  src="/images/1 (1).webp"
                  alt="Walletly user testing"
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
                <p className="text-sm text-center mt-2 text-white/70">Các phiên kiểm thử người dùng với prototype tương tác</p>
              </div>
            </div>

            <h3>Giải pháp cuối cùng</h3>
            <p>
              Ứng dụng được thiết kế lại có bảng điều khiển thống nhất với các widget tùy chỉnh, phân loại giao dịch thông minh với machine learning và quy trình thanh toán được tối ưu hóa giảm 40% các bước thực hiện.
            </p>

            <h2>Kết quả & Tác động</h2>
            <p>
              Sau khi ra mắt ứng dụng được thiết kế lại, Walletly đã thấy những cải thiện đáng kể trong tất cả các chỉ số chính. Tương tác người dùng tăng 45% và đánh giá trên app store cải thiện từ 3.2 lên 4.7 sao. Khách hàng đã có thể mở rộng thành công sang ba thị trường mới trong vòng sáu tháng sau khi ra mắt.
            </p>

            <blockquote className="border-l-4 border-white/20 pl-4 italic my-6">
              "Việc thiết kế lại đã chuyển đổi sản phẩm của chúng tôi từ một ứng dụng ngân hàng cơ bản thành một công cụ quản lý tài chính toàn diện. Người dùng của chúng tôi yêu thích giao diện trực quan và các tính năng mạnh mẽ." — CEO, Walletly
            </blockquote>

            <h2>Bài học kinh nghiệm</h2>
            <p>
              Dự án này củng cố tầm quan trọng của việc kiểm thử người dùng liên tục trong suốt quá trình thiết kế. Một số tính năng có vẻ trực quan đối với nhóm thiết kế nhưng lại gây nhầm lẫn cho người dùng, và việc kiểm thử sớm đã cho phép chúng tôi điều chỉnh trước khi phát triển.
            </p>
          </div>
        </RevealOnView>
      </div>
    </div>
  )
}