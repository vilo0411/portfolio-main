/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Next.js default font optimization completely
  experimental: {
    optimizePackageImports: [],
  },
}

export default nextConfig