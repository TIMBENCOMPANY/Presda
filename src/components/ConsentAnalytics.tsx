"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useAdSense } from "./AdSenseProvider";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  "ga-disable-G-9TNHCVQTTP"?: boolean;
};

// Existing measurement ID retained; no AdSense publisher identifier here.
export function ConsentAnalytics() {
  const ads = useAdSense();
  const analytics = ads?.consent.analytics === true;
  useEffect(() => {
    const host = window as AnalyticsWindow;
    host["ga-disable-G-9TNHCVQTTP"] = !analytics;
    host.dataLayer = host.dataLayer || [];
    host.gtag = host.gtag || function () { host.dataLayer!.push(arguments); };
    host.gtag("consent", "update", {
      analytics_storage: analytics ? "granted" : "denied",
      ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied"
    });
  }, [analytics]);
  if (process.env.NODE_ENV !== "production" || !analytics) return null;
  return <>
    <Script id="presda-ga4-consent-init" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
      gtag('consent', 'update', {analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
      gtag('js', new Date());
      gtag('config', 'G-9TNHCVQTTP', {allow_google_signals:false,allow_ad_personalization_signals:false});
    `}</Script>
    <Script id="presda-ga4-loader" src="https://www.googletagmanager.com/gtag/js?id=G-9TNHCVQTTP" strategy="afterInteractive" />
  </>;
}
