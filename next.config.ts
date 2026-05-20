 @type {import('next').NextConfig} 
const nextConfig = {
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

module.exports = nextConfig;
