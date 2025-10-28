import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for static hosting (e.g., one.com)
  output: "export",
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Disable Next/Image optimization (no Node server on static hosts)
    unoptimized: true,
  },
};

export default nextConfig;
