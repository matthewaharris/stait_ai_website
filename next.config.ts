import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/scenarios", destination: "/case-studies", permanent: true },
      { source: "/products", destination: "/products/quotemagic", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
    ];
  },
};

export default nextConfig;
