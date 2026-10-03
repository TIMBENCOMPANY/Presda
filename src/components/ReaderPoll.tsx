"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/routing";
import { pollChoices, pollCopy, pollPercentages, pollVoteCount, type PollChoice, type PollResult } from "@/lib/readerPoll";
import styles from "./ReaderPoll.module.css";

const presentation = {
  en: { footer: "Unofficial PRESDA reader poll. Not affiliated with FIFA.", vote: (city: string) => `VOTE ${city}` },
  fr: { footer: "Sondage non officiel des lecteurs de PRESDA. Sans affiliation à la FIFA.", vote: (city: string) => `VOTER POUR ${city}` },
  ar: { footer: "استطلاع غير رسمي لقراء PRESDA. غير تابع للفيفا.", vote: (city: string) => city === "الدار البيضاء" ? "صوّت للدار البيضاء" : "صوّت لمدريد" },
  es: { footer: "Encuesta no oficial de lectores de PRESDA. Sin afiliación a la FIFA.", vote: (city: string) => `VOTAR POR ${city}` }
};

function CountryFlag({ country }: { country: PollChoice }) {
  // Public-domain national flag with coat of arms: https://commons.wikimedia.org/wiki/File:Flag_of_Spain.svg
  if (country === "madrid") return <img className={styles.flag} src="/images/flags/spain.svg" width={60} height={40} alt="" aria-hidden="true" />;
  return <svg className={styles.flag} viewBox="0 0 60 40" aria-hidden="true" focusable="false">
    <path fill="#c1272d" d="M0 0h60v40H0z" /><path d="m30 9 6.5 20-17-12.4h21L23.5 29Z" fill="none" stroke="#00843d" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>;
}

export function ReaderPoll({ locale }: { locale: Locale }) {
  const t = pollCopy[locale];
  const root = useRef<HTMLElement>(null);
  const busy = useRef(false);
  const viewTracked = useRef(false);
  const mounted = useRef(true);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [result, setResult] = useState<PollResult | null>(null);
  const [choice, setChoice] = useState<PollChoice | null>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [stale, setStale] = useState(false);
  const [message, setMessage] = useState("");
  const number = new Intl.NumberFormat(locale);
  const percentages = pollPercentages(result ?? { casablanca: 0, madrid: 0 });

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/reader-poll/", { cache: "no-store", signal: AbortSignal.timeout(10000) });
      if (!res.ok) throw new Error();
      const data: PollResult = await res.json();
      if (mounted.current) { setResult(data); setReady(true); setError(""); setStale(false); }
      return true;
    } catch { if (mounted.current) setStale(true); return false; }
  }, []);

  useEffect(() => {
    mounted.current = true;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    if (root.current) observer.observe(root.current);
    return () => { mounted.current = false; observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!visible || ready) return;
    let cancelled = false;
    void load().then(ok => {
      if (cancelled) return;
      if (!ok) { setError(t.error); return; }
    });
    return () => { cancelled = true; };
  }, [visible, ready, load, locale, t.error]);

  useEffect(() => {
    if (!visible || !ready || viewTracked.current) return;
    viewTracked.current = true;
    // Count an actual visible poll, once per browser across reloads and languages.
    void fetch("/api/reader-poll/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "view", locale }), signal: AbortSignal.timeout(10000) }).then(res => {
      if (!res.ok) viewTracked.current = false;
    }).catch(() => { viewTracked.current = false; });
  }, [visible, ready, locale]);

  useEffect(() => {
    if (!visible || !result?.choice) return;
    const timer = window.setInterval(() => { if (document.visibilityState === "visible" && !busy.current) void load(); }, 15000);
    return () => window.clearInterval(timer);
  }, [visible, result?.choice, load]);

  async function vote(choice: PollChoice) {
    if (!choice || busy.current || !ready) return;
    busy.current = true; setSending(true); setError("");
    try {
      const res = await fetch("/api/reader-poll/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: choice, locale }), signal: AbortSignal.timeout(12000) });
      if (!res.ok) { setError(res.status === 429 ? t.limited : t.error); return; }
      const data: PollResult = await res.json();
      setResult(data); setStale(false); setMessage(data.accepted ? t.thanks : t.previous);
    } catch { setError(t.error); }
    finally { busy.current = false; setSending(false); }
  }

  const ui = presentation[locale];
  const voted = Boolean(result?.choice);
  return <section ref={root} id="reader-poll" aria-labelledby="reader-poll-question" dir={locale === "ar" ? "rtl" : "ltr"} data-nosnippet className={styles.poll}>
    <header className={styles.header}>
      <p className={`${styles.label} font-display`}>{t.label.replace(/ [\u2014·] /, " • ")}</p>
      <h2 id="reader-poll-question" className={`${styles.question} font-display`}>{t.question}</h2>
    </header>
    <div className={styles.matchup}>
      {pollChoices.map((option, index) => {
        const [city, stadium] = t[option].split(/ [\u2014·] /);
        const other = option === "casablanca" ? "madrid" : "casablanca";
        const leading = voted && result![option] > result![other];
        return <div key={option} className={styles.contender}>
          {index === 1 && <span className={`${styles.vs} font-display`} aria-hidden="true">VS</span>}
          <div className={`${styles.card} ${leading ? styles.leading : ""}`}>
            <CountryFlag country={option} />
            <div className={styles.identity}>
              <h3 className={`${styles.city} font-display`}>{city}</h3>
              <p className={styles.stadium}>{stadium}</p>
            </div>
            {voted ? <div role="meter" aria-label={t[option]} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentages[option]} className={styles.result}>
              <strong className={`${styles.percentage} font-display`}><bdi>{number.format(percentages[option])}<span>%</span></bdi></strong>
              <span className={styles.count}>{pollVoteCount(result![option], locale)}</span>
            </div> : <button type="button" disabled={!ready || sending} onClick={() => { setChoice(option); void vote(option); }} className={`${styles.vote} font-display`}>
              {sending && choice === option ? t.sending : ui.vote(city)}
            </button>}
          </div>
        </div>;
      })}
    </div>
    {voted && <div className={styles.summary}>
      <div className={styles.split} aria-hidden="true">
        <span className={styles.casablanca} style={{ transform: `scaleX(${percentages.casablanca / 100})` }} />
        <span className={styles.madrid} style={{ transform: `scaleX(${percentages.madrid / 100})` }} />
      </div>
      <p className={styles.total}>{t.total}: <bdi>{number.format(result!.total)}</bdi></p>
    </div>}
    <p role="status" aria-live="polite" className="sr-only">{message || (result?.choice ? t.previous : "")}</p>
    {!ready && !error && <p className={styles.notice}>{t.loading}</p>}
    {voted && stale && <p className={styles.notice}>{t.stale}</p>}
    {error && <div role="alert" className={styles.error}>{error} {!ready && <button type="button" className={styles.retry} onClick={() => { setError(""); void load().then(ok => { if (!ok) setError(t.error); }); }}>{t.retry}</button>}</div>}
    <p className={styles.footer}>{ui.footer}</p>
    <noscript><p className={styles.notice}>{t.nojs}</p></noscript>
  </section>;
}
