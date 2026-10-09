// Preparation permissions only. Google's supported live AdSense CSP uses
// request-scoped nonces/strict-dynamic; do not mark a domain list as validated.
export function contentSecurityPolicy({ adsensePrepared = false, cmpPrepared = false } = {}) {
  const scripts = ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://www.googletagmanager.com"];
  const connections = ["'self'", "https://vitals.vercel-insights.com", "https://*.vercel-insights.com", "https://*.google-analytics.com", "https://*.analytics.google.com", "https://*.googletagmanager.com"];
  const frames = ["'self'"];
  if (cmpPrepared) {
    scripts.push("https://fundingchoicesmessages.google.com", "https://www.gstatic.com");
    connections.push("https://fundingchoicesmessages.google.com", "https://www.gstatic.com");
    frames.push("https://fundingchoicesmessages.google.com");
  }
  if (adsensePrepared) {
    scripts.push("https://pagead2.googlesyndication.com", "https://tpc.googlesyndication.com", "https://googleads.g.doubleclick.net");
    connections.push("https://pagead2.googlesyndication.com", "https://tpc.googlesyndication.com", "https://googleads.g.doubleclick.net", "https://www.google.com");
    frames.push("https://googleads.g.doubleclick.net", "https://tpc.googlesyndication.com", "https://pagead2.googlesyndication.com");
  }
  return [
    "default-src 'self'", "base-uri 'self'", "object-src 'none'", "frame-ancestors 'none'", "form-action 'self'",
    `script-src ${scripts.join(" ")}`, "style-src 'self' 'unsafe-inline'", "img-src 'self' data: blob: https:",
    "font-src 'self' data:", `connect-src ${connections.join(" ")}`, `frame-src ${frames.join(" ")}`,
    "media-src 'self'", "worker-src 'self' blob:", "manifest-src 'self'", "upgrade-insecure-requests"
  ].join("; ");
}
