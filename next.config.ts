import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NO basePath, NO assetPrefix – remove them completely

  async rewrites() {
    return [
      {
        source: '/SNITIS',
        destination: '/',   // internally serves root content at /SNITIS
      },
    ];
  },
};

export default nextConfig;
