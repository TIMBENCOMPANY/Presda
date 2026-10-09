/** @type {import('next').NextConfig} */
import { contentSecurityPolicy } from "./config/content-security-policy.mjs";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy({
      adsensePrepared: process.env.ADSENSE_CSP_PREPARED === "true",
      cmpPrepared: process.env.GOOGLE_CMP_ENABLED === "true"
    })
  },
  {
    key: "X-Frame-Options",
    value: "DENY"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin"
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), accelerometer=(), gyroscope=(), magnetometer=(), interest-cohort=()"
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  },
  {
    key: "Access-Control-Allow-Origin",
    value: "https://presda.com"
  }
];

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // Generate responsive assets at build time. Visitors never invoke Vercel's optimizer.
    loader: "custom",
    loaderFile: "./src/lib/staticImageLoader.ts",
    deviceSizes: [640, 1280, 2560, 3840],
    imageSizes: [128, 256],
    // Component quality props remain compatible; the shared static recipe is quality 90.
    qualities: [72, 75, 76, 82],
    localPatterns: [
      { pathname: "/articles/**", search: "" },
      { pathname: "/images/**", search: "" },
      { pathname: "/presda-p-transparent.png", search: "" }
    ]
  },
  experimental: {
    optimizePackageImports: ["framer-motion"]
  },
  async headers() {
    return [
      {
        source: "/image-assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }]
      },
      {
        source: "/:path*",
        headers: securityHeaders
      }
    ];
  },
};

export default nextConfig;
