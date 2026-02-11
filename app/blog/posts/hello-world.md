---
title: "Xây dựng Portfolio SEO Authority với Next.js"
date: "2024-05-20"
excerpt: "Hướng dẫn chi tiết cách tôi tối ưu hóa Technical SEO cho Portfolio cá nhân đạt 100 điểm Lighthouse và triển khai Blog với MDX."
coverImage: "/images/portfolio-efex.webp"
tags: ["Next.js", "SEO", "Technical"]
---

## Tại sao Developer cần quan tâm đến SEO?

Là một Developer, chúng ta thường tập trung vào Clean Code, Performance, và Architecture. Tuy nhiên, trong kỷ nguyên số, **Visibility** (khả năng hiển thị) cũng quan trọng không kém. SEO không chỉ là từ khóa, nó là về:

1. **UX/UI Performance**: Core Web Vitals.
2. **Accessibility**: Đảm bảo ai cũng truy cập được.
3. **Structured Data**: Giúp Google hiểu nội dung của bạn.

## Tech Stack tôi đã sử dụng

Tôi chọn **Next.js 15** và **Tailwind CSS** vì nó cung cấp sự cân bằng hoàn hảo giữa Developer Experience (DX) và User Experience (UX).

### 1. Next.js 15
Với Server Components, tôi có thể render nội dung tĩnh (Static Generation) cực nhanh, giảm thiểu Javascript gửi xuống client. Điều này trực tiếp cải thiện chỉ số **LCP** (Largest Contentful Paint).

### 2. Image Optimization
Sử dụng `next/image` giúp tự động chuyển đổi ảnh sang định dạng WebP/Avif, lazy load và tránh layout shift (CLS).

```tsx
<Image 
  src="/hero.png"
  alt="SEO Optimized"
  width={800}
  height={600}
  priority
/>
```

## Kết luận

Việc kết hợp tư duy SEO vào quá trình phát triển phần mềm không chỉ giúp website rank cao hơn mà còn tạo ra sản phẩm tốt hơn cho người dùng cuối.
