import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lộc Nguyễn Portfolio | SEO Executive',
  description: 'Chuyên viên SEO với 3 năm kinh nghiệm triển khai các dự án B2B, B2C về Logistics, E-commerce, và Dịch vụ mua hộ.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}