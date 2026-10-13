"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/routing";
import { ANALYTICS_PREFERENCE_AGE, ANALYTICS_PREFERENCE_KEY, applyAnalyticsConsent, browserPrivacyDenied,
  parseAnalyticsPreference, type AnalyticsChoice, type AnalyticsPreference } from "@/lib/analyticsConsent";

const copy = {
  en: { title: "Analytics preferences", text: "May we use Google Analytics cookies to understand visits and improve PRESDA? Analytics is optional. Advertising stays disabled. You can change your choice below at any time.", accept: "Accept analytics", reject: "Reject analytics", privacy: "Privacy policy", session: "Your browser cannot save this choice. It applies to this tab only.", signal: "Your browser privacy signal is active. Analytics remains disabled.", close: "Close" },
  fr: { title: "Préférences statistiques", text: "Pouvons-nous utiliser les cookies Google Analytics pour comprendre les visites et améliorer PRESDA ? Les statistiques sont facultatives. La publicité reste désactivée. Vous pouvez modifier votre choix à tout moment ci-dessous.", accept: "Accepter les statistiques", reject: "Refuser les statistiques", privacy: "Politique de confidentialité", session: "Votre navigateur ne peut pas enregistrer ce choix. Il s’applique uniquement à cet onglet.", signal: "Le signal de confidentialité de votre navigateur est actif. Les statistiques restent désactivées.", close: "Fermer" },
  es: { title: "Preferencias de analítica", text: "¿Podemos usar cookies de Google Analytics para entender las visitas y mejorar PRESDA? La analítica es opcional. La publicidad sigue desactivada. Puedes cambiar tu elección abajo en cualquier momento.", accept: "Aceptar analítica", reject: "Rechazar analítica", privacy: "Política de privacidad", session: "Tu navegador no puede guardar esta elección. Solo se aplica a esta pestaña.", signal: "La señal de privacidad de tu navegador está activa. La analítica permanece desactivada.", close: "Cerrar" },
  ar: { title: "تفضيلات التحليلات", text: "هل تسمح باستخدام ملفات تعريف الارتباط في Google Analytics لفهم الزيارات وتحسين PRESDA؟ التحليلات اختيارية. تبقى الإعلانات معطلة. يمكنك تغيير اختيارك أدناه في أي وقت.", accept: "قبول التحليلات", reject: "رفض التحليلات", privacy: "سياسة الخصوصية", session: "لا يمكن لمتصفحك حفظ هذا الاختيار. ينطبق على علامة التبويب هذه فقط.", signal: "إشارة الخصوصية في متصفحك مفعلة. تبقى التحليلات معطلة.", close: "إغلاق" }
};
const ConsentContext = createContext<{ reopen: () => void } | null>(null);
const duration = {
  en: "Your choice is saved on this browser for 180 days.",
  fr: "Votre choix est enregistré dans ce navigateur pendant 180 jours.",
  es: "Tu elección se guarda en este navegador durante 180 días.",
  ar: "يُحفظ اختيارك في هذا المتصفح لمدة 180 يومًا."
};

export function AnalyticsPrivacyChoices({ locale, className }: { locale: Locale; className: string }) {
  const consent = useContext(ConsentContext);
  return consent ? <button type="button" className={`${className} text-start`} onClick={consent.reopen}>{copy[locale].title}</button> : null;
}

export function AnalyticsConsentProvider({ children, locale }: { children: ReactNode; locale: Locale }) {
  const [preference, setPreference] = useState<AnalyticsPreference | null>(null);
  const sessionPreference = useRef<AnalyticsPreference | null>(null);
  const [open, setOpen] = useState(false);
  const [storageFailed, setStorageFailed] = useState(false);
  const [privacyDenied, setPrivacyDenied] = useState(false);
  const trigger = useRef<HTMLElement | null>(null);
  const panel = useRef<HTMLElement | null>(null);
  const t = copy[locale];
  const production = process.env.NODE_ENV === "production";

  function synchronize(value: AnalyticsPreference | null) {
    // Update the browser kill switch before scheduling React rendering.
    const unload = applyAnalyticsConsent(value?.choice === "accepted", production);
    setPreference(value);
    setPrivacyDenied(browserPrivacyDenied());
    if (!value && !browserPrivacyDenied()) setOpen(true);
    return unload;
  }
  useEffect(() => {
    function refresh() {
      let value: AnalyticsPreference | null = null;
      try {
        value = parseAnalyticsPreference(localStorage.getItem(ANALYTICS_PREFERENCE_KEY));
        if (sessionPreference.current) value = parseAnalyticsPreference(JSON.stringify(sessionPreference.current));
      } catch {
        setStorageFailed(true);
        value = parseAnalyticsPreference(JSON.stringify(sessionPreference.current));
      }
      if (synchronize(value)) window.location.reload();
    }
    function storage(event: StorageEvent) {
      if (event.key !== null && event.key !== ANALYTICS_PREFERENCE_KEY) return;
      sessionPreference.current = null;
      refresh();
    }
    function visible() { if (document.visibilityState === "visible") refresh(); }
    refresh();
    window.addEventListener("storage", storage);
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", visible);
    return () => {
      window.removeEventListener("storage", storage);
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", visible);
    };
    // This document's locale and production mode do not change during SPA navigation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!preference) return;
    let timer: number;
    function checkExpiry() {
      const remaining = ANALYTICS_PREFERENCE_AGE - (Date.now() - preference!.savedAt);
      if (remaining > 0) { timer = window.setTimeout(checkExpiry, Math.min(remaining, 2147483647)); return; }
      sessionPreference.current = null;
      if (synchronize(null)) window.location.reload();
    }
    checkExpiry();
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preference]);

  function choose(choice: AnalyticsChoice) {
    const value: AnalyticsPreference = { version: 1, choice, savedAt: Date.now() };
    const unload = synchronize(value);
    try {
      localStorage.setItem(ANALYTICS_PREFERENCE_KEY, JSON.stringify(value));
      sessionPreference.current = null;
      setStorageFailed(false);
      setOpen(false);
      trigger.current?.focus();
    } catch {
      sessionPreference.current = value;
      setStorageFailed(true);
    }
    // Google may buffer already-approved hits. Unload its timers and queue after
    // persisting withdrawal; a denied document never loads the tag again.
    if (unload) window.location.reload();
  }
  function close() { setOpen(false); trigger.current?.focus(); }
  function reopen() {
    trigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setPrivacyDenied(browserPrivacyDenied());
    setOpen(true);
    requestAnimationFrame(() => panel.current?.focus());
  }
  const buttonClass = "min-h-11 rounded border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-2 text-sm font-semibold hover:border-[#FF1A1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A] disabled:cursor-not-allowed disabled:opacity-50";

  return <ConsentContext.Provider value={{ reopen }}>
    {children}
    {open && <section ref={panel} tabIndex={-1} role="region" aria-labelledby="analytics-consent-title" data-analytics-consent
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-h-[80dvh] max-w-2xl overflow-y-auto rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] p-4 text-start text-[color:var(--text)] shadow-2xl sm:p-6">
      <h2 id="analytics-consent-title" className="text-lg font-bold">{t.title}</h2>
      <p className="mt-2 text-sm leading-6">{t.text}</p>
      {!storageFailed && <p className="mt-2 text-sm">{duration[locale]}</p>}
      <Link prefetch={false} className="mt-2 inline-block text-sm underline" href="/privacy-policy/">{t.privacy}</Link>
      {privacyDenied && <p role="status" className="mt-2 text-sm">{t.signal}</p>}
      {storageFailed && <p role="status" className="mt-2 text-sm">{t.session}</p>}
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" className={buttonClass} onClick={() => choose("rejected")}>{t.reject}</button>
        <button type="button" className={buttonClass} disabled={privacyDenied} onClick={() => choose("accepted")}>{t.accept}</button>
        {preference && <button type="button" className={buttonClass} onClick={close}>{t.close}</button>}
      </div>
    </section>}
  </ConsentContext.Provider>;
}
