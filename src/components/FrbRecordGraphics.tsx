import copy from "@/data/frbRecordFigures.json";
import type { Locale } from "@/lib/i18n/routing";

type Kind = "timeline" | "process" | "journey" | "record";
const sources = {
  timeline: [["NASA", "https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-cosmological-redshift/"], ["University of Sydney", "https://www.eurekalert.org/news-releases/1146455"]],
  process: [["NASA / Webb", "https://science.nasa.gov/missions/webb/webb-measures-distance-to-farthest-fast-radio-burst-suggesting-origin/"]],
  journey: [["Keck", "https://keckobservatory.org/frb20240304b/"], ["Caleb et al.", "https://arxiv.org/html/2508.01648v1"]],
  record: [["Caleb et al.", "https://arxiv.org/html/2508.01648v1"], ["Ryder et al.", "https://arxiv.org/abs/2210.04680"]],
};

export function FrbRecordGraphics({ locale, kind }: { locale: Locale; kind: Kind }) {
  const c = copy[locale], index = { timeline: 0, process: 1, journey: 2, record: 3 }[kind];
  const id = `frb-${kind}`, events = kind === "timeline" ? c.timeline : kind === "process" ? c.process : c.journey;
  return <figure id={id} dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby={`${id}-title`} className="my-10 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
    <figcaption id={`${id}-title`} className="font-display text-xl font-bold sm:text-2xl">{c.titles[index]}</figcaption>
    <p className="mt-3 text-sm leading-relaxed text-white/75">{c.notes[index]}</p>
    {kind !== "record" ? <ol className="mt-6 space-y-4">{events.map((event, i) => <li key={event} className="flex items-start gap-3"><span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e9bd65] text-sm font-bold text-[#e9bd65]">{i + 1}</span><span className="pt-0.5 text-sm leading-relaxed">{event}</span></li>)}</ol> : <div className="mt-6">
      <p className="text-sm font-bold">{c.record}</p>
      <ol className="mt-4 space-y-6">{[{ name: "FRB 20220610A", value: 1.016 }, { name: "FRB 20240304B", value: 2.148 }].map((row, i) => <li key={row.name}>
        <div className="flex flex-wrap justify-between gap-2 text-sm"><span dir="ltr">{row.name}</span><b dir="ltr">{new Intl.NumberFormat(locale, { minimumFractionDigits: 3 }).format(row.value)}</b></div>
        <div aria-hidden="true" className="mt-2 h-3 rounded bg-white/10"><div className="h-3 rounded" style={{ width: `${row.value / 2.2 * 100}%`, backgroundColor: i === 0 ? "#e9bd65" : "#FF1A1A" }} /></div>
        <p className="mt-2 text-sm text-white/75">{c.times[i]}</p>
      </li>)}</ol><p className="mt-5 text-xs leading-relaxed text-white/65">{c.uncertainty}</p>
    </div>}
    {kind === "timeline" && <p className="mt-5 text-sm font-bold text-[#e9bd65]">{c.today}</p>}
    <p className="mt-5 text-xs leading-relaxed">{c.sources}: {sources[kind].map(([label, url], i) => <span key={url}>{i > 0 && "; "}<a href={url} className="text-[#e9bd65] underline">{label}</a></span>)}</p>
    <p className="mt-4 text-xs text-white/60">PRESDA Data Graphics</p>
  </figure>;
}
