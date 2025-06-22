// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com','via.placeholder.com','image.tmdb.org','ih1.redbubble.net'], // Thêm domain ảnh ngoài tại đây
  },
};

export default nextConfig;
