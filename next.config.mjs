/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["framer-motion"]
  }
};

export default nextConfig;
