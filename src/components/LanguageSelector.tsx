"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import { languageDestination, languageNames, locales, type Locale, type TranslationRoute } from "@/lib/i18n/routing";
import { messages } from "@/lib/i18n/messages";

export function LanguageSelector({ locale, routes, dismiss = false, onOpen }: { locale: Locale; routes: TranslationRoute[]; dismiss?: boolean; onOpen?: () => void }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => { if (dismiss) setOpen(false); }, [dismiss]);
  useEffect(() => {
    if (!open) return;
    root.current?.querySelector<HTMLAnchorElement>('a[aria-current="true"]')?.focus();
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);

  return (
    <div ref={root} className="language-selector"
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault(); event.stopPropagation(); setOpen(false); trigger.current?.focus();
        }
        if (open && ["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          const links = Array.from(root.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
          const current = links.indexOf(document.activeElement as HTMLAnchorElement);
          const next = event.key === "Home" ? 0 : event.key === "End" ? links.length - 1 : (current + (event.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
          links[next]?.focus();
        }
      }}>
      <button ref={trigger} type="button" className="home-icon-control language-trigger grid h-11 w-11 place-items-center transition sm:h-12 sm:w-12"
        aria-label={messages[locale].language} title={messages[locale].language} aria-expanded={open} aria-controls={panelId}
        onClick={() => {
          if (!open) { onOpen?.(); setNotice(false); }
          setOpen(!open);
        }}>
        <Globe className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
      </button>
      {open && <div id={panelId} className="language-dropdown">
      <nav aria-label={messages[locale].language} className="language-options">
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
              <span dir="auto">{languageNames[language]} <span className="language-code" dir="ltr">({language.toUpperCase()})</span></span>
              {language === locale && <Check size={16} aria-hidden="true" />}
            </a>
          );
        })}
      </nav>
      {notice && <div className="language-notice" role="status">
        <p>{messages[locale].fallback}</p>
      </div>}
      </div>}
    </div>
  );
}
