"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useAdSense } from "./AdSenseProvider";
import { isReviewedManualPlacement, isSafeAdElement } from "@/lib/adPlacementPolicy";
import { requestManualAd } from "@/lib/adSlotLifecycle";
import { reportAdDiagnostic } from "@/lib/adMonitoring";
import type { Locale } from "@/lib/i18n/routing";
import styles from "./AdSlot.module.css";

const labels = { en: "Advertisements", fr: "Publicités", es: "Anuncios", ar: "إعلانات" };
type AdWindow = Window & { adsbygoogle?: { push: (request: Record<string, never>) => unknown } };

// Deliberately not imported by any editorial layout in Phase 1.
// Only manual article-section units; no generic header/hero/CTA placement prop.
export function AdSlot({ afterSectionId, locale = "en" }: { afterSectionId: string; locale?: Locale }) {
  const ads = useAdSense();
  const key = useId();
  const root = useRef<HTMLDivElement>(null);
  const creative = useRef<HTMLModElement>(null);
  const [near, setNear] = useState(false);
  const reviewed = isReviewedManualPlacement(ads?.pathname ?? null, afterSectionId);
  const eligible = !!ads?.config.enabled && reviewed;
  const register = ads?.register;

  useEffect(() => {
    const element = root.current;
    if (!eligible || !element || !isSafeAdElement(element) || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting) && element.getBoundingClientRect().width >= 300) {
        setNear(true); observer.disconnect();
      }
    }, { rootMargin: "200px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, [eligible]);
  useEffect(() => {
    if (!eligible || !near || !register || !root.current || !isSafeAdElement(root.current)) return;
    return register(key, afterSectionId);
  }, [eligible, near, register, key, afterSectionId]);
  useEffect(() => {
    const element = creative.current;
    if (!eligible || !near || !element || !ads?.productionHost || !ads.loaderReady || !ads.consent.advertising) return;
    const host = window as AdWindow;
    const queue = host.adsbygoogle ?? ([] as Record<string, never>[]);
    host.adsbygoogle = queue;
    const result = requestManualAd(element, queue);
    if (result !== "skipped") reportAdDiagnostic(ads.config.monitoring, result === "requested" ? "slot-requested" : "slot-error");
  }, [eligible, near, ads]);
  if (!eligible || !ads?.config.clientId || !ads.config.manualSlotId) return null;
  return <div ref={root} className={styles.slot} data-presda-manual-ad="article-section" aria-label={labels[locale]}>
    <p className={styles.label}>{labels[locale]}</p>
    <ins ref={creative} className={`adsbygoogle ${styles.creative} ${ads.consent.advertising ? "" : styles.unavailable}`}
      data-ad-client={ads.config.clientId} data-ad-slot={ads.config.manualSlotId}
      data-ad-format="rectangle" data-full-width-responsive="false" />
  </div>;
}
