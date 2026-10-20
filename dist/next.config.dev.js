"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  webpack: function webpack(config) {
    config.resolve.fallback = {
      fs: false
    };
    return config;
  },
  images: {
    unoptimized: true
  }
};
module.exports = nextConfig;