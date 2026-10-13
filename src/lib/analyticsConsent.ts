export const ANALYTICS_ID = "G-9TNHCVQTTP";
export const ANALYTICS_PREFERENCE_KEY = "presda.analytics-consent.v1";
export const ANALYTICS_PREFERENCE_AGE = 180 * 24 * 60 * 60 * 1000;
export type AnalyticsChoice = "accepted" | "rejected";
export type AnalyticsPreference = { version: 1; choice: AnalyticsChoice; savedAt: number };

export function parseAnalyticsPreference(raw: string | null, now = Date.now()): AnalyticsPreference | null {
  try {
    const value = JSON.parse(raw || "null");
    if (value?.version !== 1 || !["accepted", "rejected"].includes(value.choice) ||
      !Number.isFinite(value.savedAt) || value.savedAt > now || now - value.savedAt >= ANALYTICS_PREFERENCE_AGE) return null;
    return value;
  } catch { return null; }
}

type AnalyticsHost = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  "ga-disable-G-9TNHCVQTTP"?: boolean;
  presdaAnalytics?: { initialized: boolean; configured: boolean; granted: boolean };
};

export function browserPrivacyDenied(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true ||
    navigator.doNotTrack === "1" || (window as Window & { doNotTrack?: string }).doNotTrack === "1";
}

function clearAnalyticsCookies() {
  const names = document.cookie.split(";").map(cookie => cookie.trim().split("=")[0])
    .filter(name => name === "_ga" || name === "_ga_9TNHCVQTTP");
  const parts = location.hostname.split(".");
  const domains = ["", ...parts.map((_, index) => `; Domain=.${parts.slice(index).join(".")}`)];
  for (const name of names) for (const domain of domains) {
    document.cookie = `${name}=; Max-Age=0; Path=/${domain}; SameSite=Lax`;
  }
}

// Basic consent mode: no Google script or collection before explicit acceptance.
// Enhanced measurement owns initial/history pageviews; never send a second manual event.
export function applyAnalyticsConsent(accepted: boolean, production: boolean): boolean {
  const host = window as AnalyticsHost;
  const granted = accepted && !browserPrivacyDenied();
  host[`ga-disable-${ANALYTICS_ID}`] = !granted;
  const runtime = host.presdaAnalytics ||= { initialized: false, configured: false, granted: false };
  const unload = runtime.granted && !granted && runtime.configured;
  host.dataLayer ||= [];
  host.gtag ||= function () { host.dataLayer!.push(arguments); };
  const consent = {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied"
  };
  if (!runtime.initialized) {
    host.gtag("consent", "default", { ...consent, analytics_storage: "denied" });
    runtime.initialized = true;
  }
  host.gtag("consent", "update", consent);
  runtime.granted = granted;
  if (!granted) { clearAnalyticsCookies(); return unload; }
  if (!production || runtime.configured) return false;
  runtime.configured = true;
  host.gtag("js", new Date());
  host.gtag("config", ANALYTICS_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
  if (!document.getElementById("presda-ga4-loader")) {
    const script = document.createElement("script");
    script.id = "presda-ga4-loader";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
    document.head.appendChild(script);
  }
  return false;
}
