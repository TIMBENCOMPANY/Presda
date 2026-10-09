"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { AdSenseConfig } from "@/lib/adsenseConfig";
import { deniedConsent, type ConsentState } from "@/lib/adConsent";
import { isReviewedManualPlacement, reviewedManualPlacements } from "@/lib/adPlacementPolicy";
import { subscribeGoogleConsent, reopenGoogleConsent } from "@/lib/googleCmp";
import { observeAdVitals, reportAdDiagnostic } from "@/lib/adMonitoring";

type AdContext = {
  config: AdSenseConfig;
  consent: ConsentState;
  pathname: string | null;
  loaderReady: boolean;
  productionHost: boolean;
  register: (key: string, sectionId: string) => () => void;
  reopen: () => void;
};
const Context = createContext<AdContext | null>(null);
export const useAdSense = () => useContext(Context);

export function AdSenseProvider({ config, children }: { config: AdSenseConfig; children: ReactNode }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<ConsentState>(deniedConsent);
  const [productionHost, setProductionHost] = useState(false);
  const [loaderReady, setLoaderReady] = useState(false);
  const [hasSlot, setHasSlot] = useState(false);
  const slots = useRef(new Set<string>());
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    setProductionHost(process.env.NODE_ENV === "production" && window.location.protocol === "https:" &&
      ["presda.com", "www.presda.com"].includes(window.location.hostname));
    return () => { mounted.current = false; };
  }, []);
  useEffect(() => observeAdVitals(config.monitoring), [config.monitoring]);
  useEffect(() => {
    if (!config.cmpEnabled) return;
    return subscribeGoogleConsent(setConsent, () => reportAdDiagnostic(config.monitoring, "cmp-error"));
  }, [config.cmpEnabled, config.monitoring]);

  const register = useCallback((key: string, sectionId: string) => {
    if (!config.enabled || !productionHost || !isReviewedManualPlacement(pathname, sectionId)) return () => {};
    slots.current.add(key); setHasSlot(true);
    return () => {
      slots.current.delete(key);
      if (mounted.current) setHasSlot(slots.current.size > 0);
    };
  }, [config.enabled, pathname, productionHost]);
  const reopen = useCallback(() => {
    setConsent({ ...deniedConsent, apiReady: consent.apiReady });
    reportAdDiagnostic(config.monitoring, "consent-denied");
    reopenGoogleConsent();
  }, [config.monitoring, consent.apiReady]);
  const context = useMemo(() => ({ config, consent, pathname, loaderReady, productionHost, register, reopen }),
    [config, consent, pathname, loaderReady, productionHost, register, reopen]);
  const allowLoader = config.enabled && productionHost && consent.advertising && hasSlot &&
    pathname !== null && Object.prototype.hasOwnProperty.call(reviewedManualPlacements, pathname) && slots.current.size > 0;

  return <Context.Provider value={context}>
    {children}
    {config.cmpEnabled && config.cmpScriptUrl && <Script id="presda-google-cmp"
      src={config.cmpScriptUrl} strategy="afterInteractive" crossOrigin="anonymous"
      onError={() => { setConsent(deniedConsent); reportAdDiagnostic(config.monitoring, "cmp-error"); }} />}
    {allowLoader && config.clientId && <Script id="presda-adsense-loader"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.clientId}`}
      strategy="afterInteractive" crossOrigin="anonymous"
      onReady={() => { setLoaderReady(true); reportAdDiagnostic(config.monitoring, "loader-ready"); }}
      onError={() => { setLoaderReady(false); reportAdDiagnostic(config.monitoring, "loader-error"); }} />}
  </Context.Provider>;
}
