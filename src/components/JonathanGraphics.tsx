import copy from "@/data/jonathanFigures.json";
import type { Locale } from "@/lib/i18n/routing";

type Kind = "timeline" | "lifespans" | "science";
const sources = {
  timeline: [["Guinness World Records", "https://www.guinnessworldrecords.com/world-records/781745-oldest-tortoise"], ["Saint Helena", "https://www.sainthelena.gov.sh/st-helena-welcomes-global-recognition-as-jonathan-named-a-guinness-world-records-icon/"], ["Science Advances", "https://doi.org/10.1126/sciadv.adw8887"]],
  lifespans: [["Guinness / Calment", "https://www.guinnessworldrecords.com/news/icons/jeanne-calment-the-oldest-person-ever"], ["Guinness / Jonathan", "https://www.guinnessworldrecords.com/world-records/781745-oldest-tortoise"], ["Nielsen et al.", "https://pubmed.ncbi.nlm.nih.gov/27516602/"]],
  science: [["Vaisvil et al.", "https://doi.org/10.1126/sciadv.adw8887"], ["Europe PMC", "https://europepmc.org/articles/PMC13644754"]],
};

export function JonathanGraphics({ locale, kind }: { locale: Locale; kind: Kind }) {
  const c = copy[locale], index = { timeline: 0, lifespans: 1, science: 2 }[kind];
  const id = `jonathan-${kind}`, events = kind === "timeline" ? c.timeline : c.science;
  return <figure id={id} dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby={`${id}-title`} className="my-10 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
    <figcaption id={`${id}-title`} className="font-display text-xl font-bold sm:text-2xl">{c.titles[index]}</figcaption>
    <p className="mt-3 text-sm leading-relaxed text-white/75">{c.notes[index]}</p>
    {kind !== "lifespans" ? <ol className="mt-6 space-y-4">{events.map((event, i) => <li key={event} className="flex items-start gap-3"><span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e9bd65] text-sm font-bold text-[#e9bd65]">{i + 1}</span><span className="pt-0.5 text-sm leading-relaxed">{event}</span></li>)}</ol> : <div className="mt-6">
      <ol className="space-y-6">{[122 + 164 / 365.25, 194, 392].map((value, i) => <li key={c.labels[i]}>
        <p className="text-sm font-bold">{c.labels[i]}</p><p className="mt-1 text-sm text-white/80">{c.values[i]}</p>
        <div aria-hidden="true" dir="ltr" className="relative mt-2 h-5 rounded bg-white/10">
          {i === 2 && <div className="absolute h-5 border-2 border-[#e9bd65] bg-[#e9bd65]/20" style={{ left: `${272 / 520 * 100}%`, width: `${240 / 520 * 100}%` }} />}
          {i < 2 ? <div className="h-5 rounded" style={{ width: `${value / 520 * 100}%`, backgroundColor: i === 1 ? "#FF1A1A" : "#e9bd65" }} /> : <div className="absolute h-5 w-1 bg-[#e9bd65]" style={{ left: `${value / 520 * 100}%` }} />}
        </div>
      </li>)}</ol>
      <div aria-hidden="true" dir="ltr" className="mt-3 flex justify-between text-xs text-white/60"><span>0</span><span>260</span><span>520</span></div><p className="mt-1 text-xs text-white/60">{c.unit}</p><p className="mt-4 text-xs leading-relaxed text-white/70">{c.comparisonCaveat}</p>
    </div>}
    <p className="mt-5 text-xs leading-relaxed">{c.sources}: {sources[kind].map(([label, url], i) => <span key={url}>{i > 0 && "; "}<a href={url} className="text-[#e9bd65] underline">{label}</a></span>)}</p>
    <p className="mt-4 text-xs text-white/60">PRESDA Data Graphics</p>
  </figure>;
}
