"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { languageDestination, languageNames, locales, type Locale, type TranslationRoute } from "@/lib/i18n/routing";
import { messages } from "@/lib/i18n/messages";

export function LanguageSelector({ locale, routes }: { locale: Locale; routes: TranslationRoute[] }) {
  const pathname = usePathname();
  const [notice, setNotice] = useState(false);
  return (
    <div className="language-selector" onKeyDown={(event) => { if (event.key === "Escape") setNotice(false); }}>
      <nav aria-label={messages[locale].language} className="language-options" dir="ltr">
        {locales.map((language) => {
          const href = languageDestination(pathname, language, routes);
          const missing = language !== "en" && !href.startsWith(`/${language}/`);
          return (
            <a key={language} href={href} lang={language} hrefLang={missing ? "en" : language}
              aria-label={languageNames[language]} aria-current={language === locale ? "true" : undefined}
              title={missing ? `${languageNames[language]}: ${messages[locale].fallback}` : languageNames[language]}
              onClick={(event) => {
                if (missing && href === pathname && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); setNotice(true); }
              }}>
              {language.toUpperCase()}
            </a>
          );
        })}
      </nav>
      {notice && <div className="language-notice" role="status">
        <p>{messages[locale].fallback}</p>
        <button type="button" aria-label={messages[locale].closeNotice} onClick={() => setNotice(false)}>×</button>
      </div>}
    </div>
  );
}
