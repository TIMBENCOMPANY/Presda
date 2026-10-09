import copy from "@/data/workAbroadFigures.json";
import type { Locale } from "@/lib/i18n/routing";

type Kind = "directory" | "routes" | "fees" | "steps";

export function WorkAbroadGraphics({ locale, kind }: { locale: Locale; kind: Kind }) {
  const c = copy[locale];
  const id = `work-abroad-${kind}`;
  const title = kind === "directory" ? c.directory : kind === "routes" ? c.routeTitle : kind === "fees" ? c.budget : c.steps;
  const note = kind === "directory" ? c.note : kind === "routes" ? c.routeNote : kind === "fees" ? c.budgetNote : c.stepNote;
  const rows = kind === "routes" ? c.routes : c.fees;
  const headers = kind === "routes" ? c.headers : c.feeHeaders;
  return <figure id={id} dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby={`${id}-title`} className="my-10 min-w-0 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
    <figcaption id={`${id}-title`} className="font-display text-xl font-bold sm:text-2xl">{title}</figcaption>
    <p className="mt-3 text-sm leading-relaxed text-white/75">{note}</p>
    {kind === "directory" ? <><div className="mt-6 grid gap-4 sm:grid-cols-2">{c.directoryEntries.map((group) => <section key={group.country} className="rounded-lg border border-white/15 p-4">
      <h3 className="text-lg font-bold text-[#e9bd65]">{group.country}</h3>
      <ul className="mt-3 space-y-4">{group.links.map((link) => <li key={link.url}><a href={link.url} target="_blank" rel="noopener noreferrer" className="block break-words text-sm font-semibold leading-relaxed text-white underline decoration-[#FF1A1A] underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9bd65]">{link.label}</a><span className="mt-1 block text-xs text-[#e9bd65]">{link.kind}</span></li>)}</ul>
    </section>)}</div><p className="mt-4 text-xs leading-relaxed text-white/70">{c.access}</p></> : kind === "steps" ? <ol className="mt-6 space-y-4">{c.stepsList.map((step, index) => <li key={step} className="flex items-start gap-3"><span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e9bd65] text-sm font-bold text-[#e9bd65]">{index + 1}</span><span className="text-sm leading-relaxed">{step}</span></li>)}</ol> : <div role="region" aria-labelledby={`${id}-title`} tabIndex={0} className="mt-6 max-w-full overflow-x-auto focus-visible:outline focus-visible:outline-[#e9bd65]">
      <table className="w-full min-w-[680px] border-collapse text-start text-sm"><thead><tr>{headers.map((header) => <th key={header} scope="col" className="border-b border-[#e9bd65]/50 p-3 text-start font-semibold text-[#e9bd65]">{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={index} scope="row" className="border-b border-white/15 p-3 text-start font-semibold">{cell}</th> : <td key={index} className="border-b border-white/15 p-3 align-top leading-relaxed">{cell}</td>)}</tr>)}</tbody></table>
    </div>}
    <p className="mt-5 text-xs text-white/60">PRESDA Data Graphics</p>
  </figure>;
}
