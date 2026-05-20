import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/SNITIS",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/SNITIS',
        basePath: false,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
