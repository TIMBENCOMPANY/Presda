"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/routing";
import { pollChoices, pollCopy, pollPercentages, pollVoteCount, type PollChoice, type PollResult } from "@/lib/readerPoll";
import styles from "./ReaderPoll.module.css";

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

  async function vote() {
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

  return <section ref={root} id="reader-poll" aria-labelledby="reader-poll-question" dir={locale === "ar" ? "rtl" : "ltr"} data-nosnippet className="clear-both scroll-mt-28 overflow-hidden rounded-2xl border border-red-500/35 bg-gradient-to-br from-[#240707] via-[#100909] to-black p-5 shadow-[0_18px_60px_#0008] sm:p-7">
    <p className="font-display text-xs font-extrabold uppercase tracking-wide text-[#ff6868]">{t.label}</p>
    <h2 id="reader-poll-question" className="mt-3 max-w-[30ch] font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">{t.question}</h2>
    {!result?.choice ? <form className="mt-4" onSubmit={event => { event.preventDefault(); void vote(); }}>
      <fieldset disabled={sending}>
        <legend className="mb-3 text-sm text-white/75">{t.choose}</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {pollChoices.map(option => <label key={option} className={`flex min-h-20 cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-white ${choice === option ? "border-red-500 bg-red-600/20" : "border-white/25 bg-black/40 hover:border-white/60"}`}>
            <input type="radio" name="stadium" value={option} checked={choice === option} onChange={() => setChoice(option)} className="h-5 w-5 shrink-0 accent-red-600" />
            <span className="text-sm font-bold leading-relaxed text-white"><span aria-hidden="true">{option === "casablanca" ? "🇲🇦" : "🇪🇸"} </span>{t[option]}</span>
          </label>)}
        </div>
      </fieldset>
      <button type="submit" disabled={!choice || !ready || sending} className="mt-4 min-h-12 w-full rounded-xl bg-[#d70916] px-8 py-3 font-display text-base font-extrabold tracking-wider text-white shadow-[0_6px_24px_#e5091429] transition hover:bg-[#b80712] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">{sending ? t.sending : t.vote}</button>
      {!ready && !error && <p className="mt-3 text-sm text-white/70">{t.loading}</p>}
    </form> : <div className="mt-5 space-y-5">
      {pollChoices.map(option => <div key={option}>
        <div className="mb-2 flex items-start justify-between gap-3 text-sm text-white"><span className="font-bold">{option === "casablanca" ? "🇲🇦" : "🇪🇸"} {t[option]} {result.choice === option && <span aria-hidden="true">✓</span>}</span><strong className="shrink-0 tabular-nums"><bdi>{number.format(percentages[option])}%</bdi></strong></div>
        <div role="meter" aria-label={t[option]} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentages[option]} className="h-3 overflow-hidden rounded-full bg-white/15"><div className={`${styles.bar} h-full rounded-full transition-[width] duration-700 ease-out motion-reduce:transition-none ${option === "casablanca" ? "bg-[#f43f4a]" : "bg-[#e4c36b]"}`} style={{ width: `${percentages[option]}%` }} /></div>
        <p className="mt-1.5 text-xs tabular-nums text-white/75">{pollVoteCount(result[option], locale)}</p>
      </div>)}
      <p className="border-t border-white/15 pt-4 text-sm font-bold text-white">{t.total}: <bdi>{number.format(result.total)}</bdi></p>
      <p className="text-xs text-white/65">{stale ? t.stale : t.live}</p>
    </div>}
    <p role="status" aria-live="polite" className="mt-3 text-sm text-white">{message || (result?.choice ? t.previous : "")}</p>
    {error && <div role="alert" className="mt-3 text-sm text-[#ffb4b4]">{error} {!ready && <button type="button" className="ms-2 min-h-11 underline" onClick={() => { setError(""); void load().then(ok => { if (!ok) setError(t.error); }); }}>{t.retry}</button>}</div>}
    <p className="mt-4 text-xs leading-relaxed text-white/60">{t.note}</p>
    <noscript><p className="mt-3 text-sm text-white">{t.nojs}</p></noscript>
  </section>;
}
