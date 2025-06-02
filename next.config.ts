import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  ...(process.env.REPLIT_DOMAINS
    ? {
        allowedDevOrigins: process.env.REPLIT_DOMAINS.split(",").filter(Boolean),
      }
    : {}),
};

module.exports = nextConfig;