import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for SSG
  output: "export",
  // Serve static assets from public/
  trailingSlash: false,
  images: {
    // Required for static export
    unoptimized: true,
  },
};

export default nextConfig;
