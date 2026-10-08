import copy from "@/data/robotRaceFigures.json";
import type { Locale } from "@/lib/i18n/routing";

type Kind = "prices" | "production" | "shipments" | "forecast";
const sources = {
  prices: ["https://www.unitree.com/R1/", "https://www.unitree.com/g1/", "https://www.unitree.com/H2/"],
  production: ["https://www.eqs-news.com/news/corporate-news/klarstellung-zu-unitrees-verkaufszahlen-2025/8616166c-db5b-4664-875e-f791a35f2491", "https://assets-ir.tesla.com/tesla-contents/IR/TSLA-Q1-2026-Update.pdf"],
  shipments: ["https://counterpointresearch.com/en/insights/global-humanoid-robot-shipments-soar-nearly-300-percent-yoy-in-h1-2026"],
  forecast: ["https://www.goldmansachs.com/insights/articles/the-global-market-for-robots-could-reach-38-billion-by-2035"],
};
export function RobotRaceGraphics({ locale, kind }: { locale: Locale; kind: Kind }) {
  const c = copy[locale], n = { prices: 0, production: 1, shipments: 2, forecast: 3 }[kind], id = `robot-race-${kind}`;
  const fmt = (v: number) => new Intl.NumberFormat(locale).format(v);
  const rows = kind === "prices" ? [{ label: "R1 AIR", v: 4900 }, { label: "G1", v: 13500 }, { label: "H2", v: 29900 }]
    : kind === "production" ? [{ label: c.delivered, v: 5500 }, { label: c.made, v: 6500 }]
      : kind === "shipments" ? [{ label: "AgiBot", v: 9700 }, { label: "Unitree", v: 7000 }] : [];
  const max = kind === "prices" ? 30000 : kind === "production" ? 7000 : 10000;
  return <figure id={id} dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby={`${id}-title`} className="my-10 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
    <figcaption id={`${id}-title`} className="font-display text-xl font-bold sm:text-2xl">{c.titles[n]}</figcaption>
    <p className="mt-3 text-sm leading-relaxed text-white/75">{c.notes[n]}</p>
    {rows.length > 0 && <ol className="mt-6 space-y-5">{rows.map((row, i) => {
      const lowerBound = kind === "production" || (kind === "shipments" && i === 1);
      return <li key={row.label}><div className="flex flex-wrap justify-between gap-2 text-sm"><span>{row.label}</span><b dir="ltr">{kind === "prices" ? "$" : lowerBound ? "> " : ""}{fmt(row.v)}</b></div><div aria-hidden="true" className="mt-2 h-3 w-full rounded bg-white/10"><div className={`h-3 rounded ${lowerBound ? "border border-dashed border-white/70" : ""}`} style={{ width: `${row.v / max * 100}%`, backgroundColor: i === 0 ? "#FF1A1A" : "#e9bd65" }} /></div></li>;
    })}</ol>}
    {kind === "prices" && <p className="mt-5 text-sm text-white/70">{c.unknown}</p>}
    {(kind === "production" || kind === "shipments") && <p className="mt-4 text-xs leading-relaxed text-white/65">{c.baseline}</p>}
    {kind === "production" && <div className="mt-6 border-s-2 border-[#e9bd65] ps-4"><p className="text-sm font-bold">{c.future}</p><ul className="mt-2 space-y-2 text-sm text-white/75">{c.targets.map(t => <li key={t}>{t}</li>)}</ul></div>}
    {kind === "forecast" && <dl className="mt-6 grid gap-5 sm:grid-cols-2"><div><dt className="text-sm text-white/75">{c.market}</dt><dd className="mt-2 text-2xl font-bold text-[#e9bd65]">{c.moneyDisplay}</dd></div><div><dt className="text-sm text-white/75">{c.shipments}</dt><dd className="mt-2 text-2xl font-bold text-[#e9bd65]" dir="ltr">{fmt(1400000)}</dd></div></dl>}
    <p className="mt-5 text-xs leading-relaxed">{c.sources}: {sources[kind].map((url, i) => <span key={url}>{i > 0 && "; "}<a href={url} className="text-[#e9bd65] underline">{kind === "prices" ? ["Unitree R1", "Unitree G1", "Unitree H2"][i] : kind === "production" ? ["Unitree / EQS", "Tesla Q1 2026"][i] : kind === "shipments" ? "Counterpoint" : "Goldman Sachs (2024)"}</a></span>)}</p>
    <p className="mt-4 text-xs text-white/60">PRESDA Data Graphics</p>
  </figure>;
}
