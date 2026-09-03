import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "World Cup 2026",
  description: "PRESDA coverage of FIFA World Cup 2026 stories, fixtures, teams, stadiums, and tournament context.",
  path: "/world-cup-2026/"
});

export default function WorldCup2026Page() {
  const worldCupArticles = articles.filter(
    (article) => article.category === "World Cup 2026" || article.tags.some((tag) => tag.toLowerCase().includes("world cup"))
  );

  return (
    <main className="mx-auto w-[min(1500px,calc(100%-24px))] py-8 sm:w-[min(1500px,calc(100%-32px))] sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "World Cup 2026", url: "/world-cup-2026/" }
            ])
          )
        }}
      />
      <header className="mb-7 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-5 shadow-[var(--shadow)] sm:mb-9 sm:p-7">
        <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">World Cup 2026</p>
        <h1 className="mt-3 text-balance font-display text-[clamp(2rem,10.5vw,2.85rem)] font-extrabold uppercase leading-[1] text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-7xl sm:leading-none">FIFA World Cup 2026</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted)] sm:mt-5 sm:text-base">
          PRESDA's migrated World Cup route for the current production URL, backed by the same article source of truth.
        </p>
        <Link
          href="/world-cup-2026/match-center/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FF1A1A] px-4 py-3 font-display text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-red-500 sm:mt-7"
        >
          Match Center
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </header>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {worldCupArticles.map((article, index) => (
          <ArticleCard key={article.id} article={article} priority={index === 0} />
        ))}
      </div>
    </main>
  );
}
