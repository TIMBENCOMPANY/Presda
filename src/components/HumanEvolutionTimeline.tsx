"use client";

import { useState } from "react";
type Row = { name: string; older: number; younger: number; note: string; refs: readonly { name: string; url?: string }[] };
type Copy = { all: string; recent: string; axis: string; now: string; tap: string; hidden: string; clipped: string; range: string; source: string; caveat: string };

export function HumanEvolutionTimeline({ rows, copy }: { rows: Row[]; copy: Copy }) {
  // Deliberately ephemeral reading aid. Reload restores the complete 4-million-year view.
  const [recent, setRecent] = useState(false);
  const [selected, setSelected] = useState(0);
  const max = recent ? 800 : 4000;
  const visible = rows.filter(row => row.younger < max);
  const active = rows[selected];
  return <>
    <div className="flex flex-wrap gap-2 my-4">
      {[false, true].map(value => <button key={String(value)} type="button" aria-pressed={recent === value} onClick={() => { setRecent(value); if (value && active.younger >= 800) setSelected(rows.findIndex(row => row.younger < 800)); }} className={`min-h-11 rounded-lg border px-3 py-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9bd65] ${recent === value ? "border-[#ff1a1a] bg-[#ff1a1a]/15" : "border-white/35"}`}>{value ? copy.recent : copy.all}</button>)}
    </div>
    <p className="text-sm text-white/80">{copy.tap}</p>
    <p className="my-3 text-sm font-semibold">{copy.axis}</p>
    <div dir="ltr" className="flex justify-between text-xs tabular-nums text-white/75" aria-hidden="true">{[max, max * .75, max * .5, max * .25, 0].map(n => <span key={n}>{n === 0 ? copy.now : n.toLocaleString("en-US")}</span>)}</div>
    <div className="mt-2 space-y-1">
      {visible.map(row => <button type="button" key={row.name} aria-pressed={active.name === row.name} onClick={() => setSelected(rows.indexOf(row))} className={`block w-full rounded-lg px-2 py-2 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9bd65] ${active.name === row.name ? "bg-white/10 ring-1 ring-white/40" : "hover:bg-white/5"}`}>
        <span className="flex flex-wrap justify-between gap-x-3 text-sm"><span className="font-semibold">{row.name}</span><span dir="ltr" className="tabular-nums text-white/75">≈ {row.older.toLocaleString("en-US")} → {row.younger === 0 ? copy.now : row.younger.toLocaleString("en-US")}</span></span>
        <span dir="ltr" className="relative mt-2 block h-4 w-full bg-white/[.04]" aria-hidden="true">
          {[0, 25, 50, 75, 100].map(x => <span key={x} className="absolute inset-y-0 border-s border-white/15" style={{ left: `${x}%` }} />)}
          <span className="absolute inset-y-0 block border border-[#e9bd65]" style={{ left: `${(max - Math.min(row.older, max)) / max * 100}%`, width: `${(Math.min(row.older, max) - row.younger) / max * 100}%`, background: ["Homo heidelbergensis", "Denisovans", "Dénisoviens", "Denisovanos", "الدينيسوفان", "Homo luzonensis"].includes(row.name) ? "repeating-linear-gradient(135deg, #e9bd65 0px, #e9bd65 2px, transparent 2px, transparent 6px)" : "#b18a42" }} />
        </span>
      </button>)}
    </div>
    {recent && <p className="mt-3 text-sm text-white/80">{copy.hidden} {copy.clipped}</p>}
    <div aria-live="polite" aria-atomic="true" className="mt-4 border-s-4 border-[#ff1a1a] ps-4 text-sm leading-relaxed">
      <p className="font-bold">{active.name}</p><p>{active.note}</p>
      <p className="mt-2 flex flex-wrap gap-x-4 gap-y-2">{active.refs.map((ref, i) => <a className="text-[#e9bd65] underline underline-offset-4" key={ref.url} href={ref.url}>{copy.source} {i + 1}</a>)}</p>
    </div>
    <p className="mt-4 text-sm text-white/75">{copy.caveat}</p>
  </>;
}
