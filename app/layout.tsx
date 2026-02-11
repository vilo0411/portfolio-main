import type { Metadata } from 'next'
import './globals.css'
import SkipToContent from '@/components/skip-to-content'
import ScrollToTop from '@/components/scroll-to-top'
import { geistSans, geistMono } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Lộc Nguyễn Portfolio | Digital Marketing Executive',
  description: 'Tăng trưởng Traffic và Doanh thu bằng chiến lược SEO dựa trên Dữ liệu, kết hợp Tự động hóa (Automation) và Kỹ thuật lập trình.',
  keywords: ['Digital Marketing Executive', 'SEO Technical Specialist', 'Marketing Automation', 'Python SEO', 'E-commerce SEO', 'B2B SEO', 'Logistics SEO', 'Vietnam SEO', 'Lộc Nguyễn'],
  authors: [{ name: 'Lộc Nguyễn' }],
  creator: 'Lộc Nguyễn',
  publisher: 'Lộc Nguyễn',
  metadataBase: new URL('https://locnguyen.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: '/',
    siteName: 'Lộc Nguyễn Portfolio',
    title: 'Lộc Nguyễn Portfolio | Digital Marketing Executive',
    description: 'Tăng trưởng Traffic và Doanh thu bằng chiến lược SEO dựa trên Dữ liệu, kết hợp Tự động hóa (Automation) và Kỹ thuật lập trình.',
    images: [
      {
        url: '/images/portfolio-efex.webp',
        width: 1200,
        height: 630,
        alt: 'Lộc Nguyễn Portfolio - SEO Executive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lộc Nguyễn Portfolio | Digital Marketing Executive',
    description: 'Tăng trưởng Traffic và Doanh thu bằng chiến lược SEO dựa trên Dữ liệu, kết hợp Tự động hóa (Automation) và Kỹ thuật lập trình.',
    images: ['/images/portfolio-efex.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={cn("dark", geistSans.variable, geistMono.variable)}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0a0a0a" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Theme initialization script - prevents flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <SkipToContent />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}