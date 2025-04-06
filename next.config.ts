import type { NextConfig } from "next";

const isProd = true;
const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: isProd ? '/docs' : 'out',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/yoga-ecom/' : '',
  basePath: isProd ? '/yoga-ecom' : '',
  output: 'export'
};

export default nextConfig;
