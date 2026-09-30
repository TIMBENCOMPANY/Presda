/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-insights.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
      "media-src 'self'",
      "worker-src 'self' blob:",
      "manifest-src 'self'",
      "upgrade-insecure-requests"
    ].join("; ")
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
