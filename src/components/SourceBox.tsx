import { ExternalLink } from "lucide-react";
import type { Article } from "@/data/articles";
import { getArticleReferences } from "@/lib/articleSeo";

export function SourceBox({ article }: { article: Article }) {
  const references = getArticleReferences(article);

  return (
    <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-4">
      <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FF1A1A]">Sources & References</p>
      <p className="mt-2 text-[13px] font-bold text-[color:var(--text)]">Publisher: PRESDA</p>
      {references.length ? (
        <ul className="mt-3 space-y-2.5">
          {references.map((reference) => (
            <li key={`${reference.name}-${reference.url ?? "reference"}`}>
              {reference.url ? (
                <a href={reference.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 text-[13px] font-semibold leading-[1.25rem] text-[color:var(--muted)] transition hover:text-[#FF1A1A]">
                  <span>{reference.name}</span>
                  <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                </a>
              ) : (
                <span className="text-[13px] font-semibold leading-[1.25rem] text-[color:var(--muted)]">{reference.name}</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-[13px] leading-5 text-[color:var(--muted)]">Original PRESDA reporting and editorial review.</p>
      )}
    </div>
  );
}
