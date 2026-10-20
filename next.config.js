/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
