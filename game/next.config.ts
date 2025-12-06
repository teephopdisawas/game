// 🔥 Next.js Config for Echoes of Ellidra - Vercel Optimized! ✨
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 💯 Standalone output for optimal Vercel deployment
  output: 'standalone',
  
  // 🎨 Image optimization settings
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 🎯 Strict mode for catching issues early
  reactStrictMode: true,
  
  // 🚀 Turbopack for blazing fast dev mode (Next.js 15 feature!)
  // Already enabled by default in Next 15!
  
  // 🔒 Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ];
  },
  
  // 💾 Optimized caching
  compress: true,
  
  // 🎮 SPA mode - single page app, no routing needed
  trailingSlash: false,
};

export default nextConfig;
