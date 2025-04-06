import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: 'docs', /* must not be enabled in dev */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
