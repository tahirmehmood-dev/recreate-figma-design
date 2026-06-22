import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.png$/i,
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;
