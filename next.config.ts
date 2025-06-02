import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.REPLIT_DOMAINS
    ? {
        allowedDevOrigins: process.env.REPLIT_DOMAINS.split(",").filter(Boolean),
      }
    : {}),
};

module.exports = nextConfig;