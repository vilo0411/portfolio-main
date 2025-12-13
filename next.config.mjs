/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable to prevent double mounting in dev
  experimental: {
    optimizePackageImports: ['motion', '@radix-ui/react-icons', 'lucide-react'],
  },
  // Disable Fast Refresh auto-refresh on save during dev
  // This prevents unwanted reloads
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Disable automatic page refresh
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/.git/**', '**/node_modules/**', '**/.next/**'],
      }
    }
    return config
  },
}

export default nextConfig