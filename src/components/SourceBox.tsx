import { ExternalLink } from "lucide-react";
import type { Article } from "@/data/articles";

export function SourceBox({ source }: { source: Article["source"] }) {
  if (!source) return null;

  return (
    <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-5">
      <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FF1A1A]">Source</p>
      {source.url ? (
        <a href={source.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[color:var(--text)] transition hover:text-[#FF1A1A]">
          {source.name}
          <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
        </a>
      ) : (
        <p className="mt-3 text-sm font-bold text-[color:var(--text)]">{source.name}</p>
      )}
    </div>
  );
}
