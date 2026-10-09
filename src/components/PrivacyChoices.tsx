"use client";

import { useAdSense } from "./AdSenseProvider";
import type { Locale } from "@/lib/i18n/routing";
const labels = { en: "Privacy choices", fr: "Choix de confidentialité", es: "Opciones de privacidad", ar: "خيارات الخصوصية" };
export function PrivacyChoices({ locale, className }: { locale: Locale; className: string }) {
  const ads = useAdSense();
  if (!ads?.config.cmpEnabled || !ads.consent.apiReady) return null;
  return <button type="button" className={`${className} text-start`} onClick={ads.reopen}>{labels[locale]}</button>;
}
