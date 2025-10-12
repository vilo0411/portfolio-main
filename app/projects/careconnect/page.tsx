import Image from "next/image"
import Sidebar from "@/components/sidebar"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"

export const metadata = {
  title: "CareConnect | Lộc Nguyễn Portfolio",
  description: "Patient portal accessibility-first UI case study",
}

export default function CareConnectPage() {
  // Thành tựu nổi bật của dự án
  const achievements = [
    "Đạt chuẩn WCAG 2.1 AAA cho tất cả tính năng",
    "Giảm 65% thời gian đặt lịch hẹn",
    "Tăng 48% tỷ lệ hoàn thành nhiệm vụ cho người dùng khuyết tật",
    "Giảm 35% số lượng cuộc gọi hỗ trợ kỹ thuật"
  ]

  return (
    <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[500px_1fr]">
      {/* LEFT: sticky sidebar with case study info */}
      <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
        <Sidebar 
          headingLines={["CareConnect", "Patient Portal"]} 
          description="Cổng thông tin bệnh nhân ưu tiên khả năng tiếp cận, kết nối bệnh nhân với nhà cung cấp dịch vụ chăm sóc sức khỏe, hồ sơ y tế và lịch hẹn khám."
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
            backgroundImage: `linear-gradient(135deg, #0f172a, #10b981)`,
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
                alt="CareConnect patient portal interface"
                width={1200}
                height={675}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <h2>Tổng quan dự án</h2>
            <p>
              CareConnect là một cổng thông tin bệnh nhân được thiết kế với ưu tiên hàng đầu về khả năng tiếp cận. Dự án tập trung vào việc tạo ra một giao diện người dùng thân thiện với tất cả người dùng, bao gồm người cao tuổi và người khuyết tật, đồng thời cung cấp các tính năng toàn diện để quản lý chăm sóc sức khỏe.
            </p>

            <h2>Thách thức</h2>
            <p>
              Thách thức chính là tạo ra một hệ thống đáp ứng nhu cầu đa dạng của người dùng với các mức độ thành thạo công nghệ và khả năng khác nhau. Cổng thông tin cần phải dễ sử dụng cho người cao tuổi, hỗ trợ các công nghệ hỗ trợ cho người khuyết tật, và vẫn phải bảo mật cao để bảo vệ thông tin y tế nhạy cảm.
            </p>

            <h3>Nghiên cứu người dùng</h3>
            <p>
              Quá trình nghiên cứu bao gồm:
            </p>
            <ul>
              <li>Phỏng vấn với 30 bệnh nhân thuộc các nhóm tuổi và khả năng khác nhau</li>
              <li>Kiểm tra khả năng sử dụng với người dùng màn hình đọc và công nghệ hỗ trợ khác</li>
              <li>Phân tích các điểm đau trong hệ thống hiện tại thông qua dữ liệu hỗ trợ khách hàng</li>
              <li>Tham vấn với các chuyên gia về khả năng tiếp cận web và chuyên gia y tế</li>
            </ul>

            <h3>Giải pháp thiết kế</h3>
            <p>
              Giải pháp cuối cùng tập trung vào một số nguyên tắc chính:
            </p>
            <ul>
              <li>Thiết kế tối giản với phân cấp thông tin rõ ràng</li>
              <li>Hỗ trợ đầy đủ cho điều hướng bàn phím và trình đọc màn hình</li>
              <li>Tùy chọn điều chỉnh kích thước văn bản và độ tương phản</li>
              <li>Quy trình đặt lịch hẹn được đơn giản hóa với ít bước hơn</li>
              <li>Thông báo và nhắc nhở được cá nhân hóa theo sở thích của người dùng</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div>
                <Image
                  src="/images/1 (1).webp"
                  alt="CareConnect accessibility features"
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
                <p className="text-sm text-center mt-2 text-white/70">Tính năng điều chỉnh khả năng tiếp cận</p>
              </div>
              <div>
                <Image
                  src="/images/1 (1).webp"
                  alt="CareConnect appointment scheduling"
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
                <p className="text-sm text-center mt-2 text-white/70">Quy trình đặt lịch hẹn được tối ưu hóa</p>
              </div>
            </div>

            <h2>Kết quả & Tác động</h2>
            <p>
              Sau khi triển khai, CareConnect đã đạt được những kết quả đáng kể:
            </p>
            <ul>
              <li>Đạt chuẩn WCAG 2.1 AAA cho tất cả tính năng</li>
              <li>Giảm 65% thời gian đặt lịch hẹn</li>
              <li>Tăng 48% tỷ lệ hoàn thành nhiệm vụ cho người dùng khuyết tật</li>
              <li>Tăng 42% việc sử dụng cổng thông tin trong nhóm người cao tuổi</li>
              <li>Cải thiện 28% điểm hài lòng của bệnh nhân</li>
            </ul>

            <blockquote className="border-l-4 border-white/20 pl-4 italic my-6">
              "CareConnect đã thay đổi cách tôi quản lý sức khỏe của mình. Với tư cách là người khiếm thị, tôi có thể dễ dàng truy cập thông tin y tế và đặt lịch hẹn mà không cần sự trợ giúp." — Bệnh nhân sử dụng CareConnect
            </blockquote>

            <h2>Bài học kinh nghiệm</h2>
            <p>
              Dự án này đã dạy tôi rằng khả năng tiếp cận không phải là một tính năng bổ sung mà là nền tảng của thiết kế tốt. Bằng cách thiết kế cho người dùng có nhu cầu đa dạng nhất, chúng tôi đã tạo ra một sản phẩm tốt hơn cho tất cả mọi người. Sự đơn giản và rõ ràng trong giao diện người dùng không chỉ giúp người khuyết tật mà còn cải thiện trải nghiệm cho tất cả người dùng.
            </p>
           </div>
        </RevealOnView>
      </div>
    </div>
  )
}