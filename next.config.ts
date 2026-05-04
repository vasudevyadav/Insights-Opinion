import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  compress: true,

  turbopack: {
    root: path.resolve(__dirname),
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reinventmedia.in",
      },
      {
        protocol: "https",
        hostname: "www.reinventmedia.in",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;