const nextConfig: NextConfig = {
  assetPrefix: '/SNITIS',   // keeps asset URLs correct
  // no basePath

  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/SNITIS',
        permanent: true,
      },
    ];
  },
};
