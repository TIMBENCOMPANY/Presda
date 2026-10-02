import type { Locale } from "@/lib/i18n/routing";
import { humanTimeline, humanGraphicCopy } from "@/data/humanEvolutionGraphics";
import { humanSources } from "@/data/humanFamilyArticle";
import { HumanEvolutionTimeline } from "./HumanEvolutionTimeline";
import type { ReactNode } from "react";

const linkClass = "text-[#e9bd65] underline underline-offset-4 focus-visible:outline focus-visible:outline-2";
function Branch({ children, uncertain = false }: { children: ReactNode; uncertain?: boolean }) {
  return <li className={`ms-3 border-s-2 ps-4 py-2 ${uncertain ? "border-dashed border-white/45" : "border-solid border-[#e9bd65]"}`}>{children}</li>;
}
export function HumanEvolutionGraphics({ locale, kind }: { locale: Locale; kind: "timeline" | "tree" }) {
  const c = humanGraphicCopy[locale];
  const names = (name: string) => name === "Neanderthals" ? c.nean : name === "Denisovans" ? c.deni : name;
  const rows = humanTimeline.map(row => ({ ...row, name: names(row.name), note: c.notes[row.note] }));
  return <figure id={`human-${kind}`} aria-labelledby={`human-${kind}-title`} className="flow-root my-10 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6" dir={locale === "ar" ? "rtl" : "ltr"}>
    <figcaption id={`human-${kind}-title`} className="font-display text-xl font-bold text-white sm:text-2xl">{kind === "timeline" ? c.timeline : c.tree}</figcaption>
    {kind === "timeline" ? <>
      <p className="mt-2 text-sm text-[#e9bd65]">{c.approximate}</p>
      <HumanEvolutionTimeline rows={rows} copy={c} />
      <details className="mt-5 border-t border-white/20 pt-4">
        <summary className="min-h-11 cursor-pointer font-semibold">{c.table}</summary>
        <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={c.table}>
          <table className="w-full min-w-[560px] text-start text-sm leading-relaxed">
            <caption className="py-3 text-start">{c.approximate}</caption>
            <thead><tr>{[c.name, c.dates, c.evidence].map(t => <th key={t} scope="col" className="p-3 text-start border-b border-white/30">{t}</th>)}</tr></thead>
            <tbody>{rows.map(row => <tr key={row.name} className="border-b border-white/15"><th scope="row" className="p-3 text-start font-semibold">{row.name}</th><td className="p-3" dir="ltr">≈ {row.older.toLocaleString("en-US")} → {row.younger || c.now}</td><td className="p-3">{row.note}<br />{row.refs.map((ref, i) => <a key={ref.url} href={ref.url} className={`${linkClass} me-3`}>{c.source} {i + 1}</a>)}</td></tr>)}</tbody>
          </table>
        </div>
      </details>
    </> : <>
      <p className="mt-3 text-sm text-white/80">{c.treeNote}</p>
      <div className="my-4 flex flex-wrap gap-3 text-xs"><span className="border-s-2 border-dashed border-white/60 ps-2">{c.uncertain}</span><span className="border-s-2 border-[#e9bd65] ps-2">{c.supported}</span></div>
      <p className="font-bold text-[#e9bd65]">{c.root}</p>
      <ul className="text-sm leading-relaxed">
        <Branch uncertain>Australopithecus afarensis</Branch>
        <Branch uncertain><p className="font-bold">{c.unresolved}</p>
          <ul className="mt-2 grid gap-x-3 sm:grid-cols-2">
            {["Homo habilis", "Homo erectus", "Homo floresiensis", "Homo naledi", "Homo luzonensis", c.taxonomy].map(name => <Branch uncertain key={name}>{name}</Branch>)}
          </ul>
          <ul className="mt-2"><Branch uncertain><p className="font-bold">{c.later}</p>
            <ul className="mt-2"><Branch>Homo sapiens</Branch><Branch><p>{c.sister}</p><ul className="mt-2"><Branch>{c.nean}</Branch><Branch>{c.deni}</Branch></ul></Branch></ul>
          </Branch></ul>
        </Branch>
      </ul>
      <div className="mt-5 border-t border-white/25 pt-4">
        <p className="font-bold text-[#e9bd65]">{c.flow}</p>
        <ul className="mt-3 space-y-2 text-sm"><li>{c.nean} ↔ Homo sapiens</li><li>{c.deni} ↔ Homo sapiens</li><li>{c.nean} ↔ {c.deni}</li></ul>
        <p className="mt-3 text-sm text-white/80">{c.flowNote}</p>
      </div>
      <p className="mt-4 text-sm">{c.treeSources}: {[humanSources.tree, humanSources.sima, humanSources.dna, humanSources.hybrid].map((s, i) => <a key={s.url} className={`${linkClass} mx-2`} href={s.url}>{i + 1}</a>)}</p>
    </>}
    <p className="mt-5 text-xs text-white/65">PRESDA Data Graphics · {c.reviewed}</p>
  </figure>;
}
