import { ExternalLink } from "lucide-react";
import type { Article } from "@/data/articles";
import { getArticleReferences } from "@/lib/articleSeo";

export function SourceBox({ article }: { article: Article }) {
  const references = getArticleReferences(article);

  return (
    <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-5">
      <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">Sources & References</p>
      <p className="mt-3 text-sm font-bold text-[color:var(--text)]">Publisher: PRESDA</p>
      {references.length ? (
        <ul className="mt-4 space-y-3">
          {references.map((reference) => (
            <li key={`${reference.name}-${reference.url ?? "reference"}`}>
              {reference.url ? (
                <a href={reference.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 text-sm font-semibold leading-5 text-[color:var(--muted)] transition hover:text-[#FF1A1A]">
                  <span>{reference.name}</span>
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                </a>
              ) : (
                <span className="text-sm font-semibold leading-5 text-[color:var(--muted)]">{reference.name}</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">Original PRESDA reporting and editorial review.</p>
      )}
    </div>
  );
}
