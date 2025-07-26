// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'titles.trackercdn.com', 
      'other-domain.com',
      'images.unsplash.com',
      'via.placeholder.com',
      'image.tmdb.org',
      'ih1.redbubble.net',
      'www.figma.com'
    ],
  },
  // Thêm cấu hình webpack cho file video
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|mov|ogg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
  // Bổ sung cấu hình cho phép hiển thị video từ public folder
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;