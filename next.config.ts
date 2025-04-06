import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: 'docs', /* must not be enabled in dev */
};

export default nextConfig;
