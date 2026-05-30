import type { NextConfig } from "next";

const lifecycleEvent = process.env.npm_lifecycle_event;
const isBuildLike = lifecycleEvent === "build" || lifecycleEvent === "start";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Keep `next build` artifacts out of the live dev cache so localhost stays stable.
  distDir: isBuildLike ? ".next-build" : ".next",
  // Keep static export for production builds without breaking dev asset serving.
  ...(isProduction ? { output: "export" as const } : {}),
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
