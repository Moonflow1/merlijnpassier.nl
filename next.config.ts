import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.vimeocdn.com',
      },
      {
        protocol: 'https',
        hostname: 'vimeo.com',
      },
    ],
  },
};

export default nextConfig;
