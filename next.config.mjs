/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable to prevent double mounting in dev
  experimental: {
    optimizePackageImports: ['motion', '@radix-ui/react-icons', 'lucide-react'],
  },
  // Disable Fast Refresh auto-refresh on save during dev
  // This prevents unwanted reloads
  // Disable Fast Refresh auto-refresh on save during dev
  // This prevents unwanted reloads
  // webpack config removed for Turbopack compatibility
}

export default nextConfig