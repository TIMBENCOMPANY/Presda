import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import { HeadlineText } from "@/components/HeadlineText";
import { categoryLabels, formatDate } from "@/lib/categories";

type ArticleCardProps = {
  article: Article;
  priority?: boolean;
};

export function ArticleCard({ article, priority = false }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}/`}
      className="group block overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] shadow-[var(--shadow)] transition hover:border-[#FF1A1A]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <Image
          src={article.coverImage}
          alt={article.coverAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-lg bg-[#FF1A1A] px-3 py-1 font-display text-[10px] font-extrabold uppercase text-white">
          {categoryLabels[article.category]}
        </span>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[color:var(--muted)]">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>{article.readingTime ?? "3 min read"}</span>
        </div>
        <h3 className="mt-3 text-balance font-display text-lg font-extrabold uppercase leading-snug text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-xl sm:leading-tight">
          <HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} />
        </h3>
        <p className="editorial-deck mt-3 line-clamp-3 text-sm leading-[1.75] text-[color:var(--muted)]">{article.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-wide text-[#FF1A1A]">
          Read More
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  );
}
