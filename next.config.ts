import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "shamdev.in",
          },
        ],
        destination: "https://www.shamdev.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

