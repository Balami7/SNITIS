import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/SNITIS',
  assetPrefix: '/SNITIS',

  
  async redirects() {
    return [
      {
        source: '/',
        destination: '/SNITIS',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
