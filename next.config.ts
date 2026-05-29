import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for SSG
  output: "export",
  // Serve static assets from public/
  trailingSlash: false,
  experimental: {
    // Next 15 dev overlay intermittently crashes on app routes through the
    // segment explorer manifest path in this project.
    devtoolSegmentExplorer: false,
  },
  images: {
    // Required for static export
    unoptimized: true,
  },
};

export default nextConfig;
