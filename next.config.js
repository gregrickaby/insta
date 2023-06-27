/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gregrickaby.com",
      },
    ],
  },
};

module.exports = nextConfig;
