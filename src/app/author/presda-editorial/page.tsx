import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "PRESDA Editorial",
  description: "Articles by PRESDA Editorial, the independent newsroom team behind PRESDA coverage.",
  path: "/authors/presda-editorial/",
  type: "profile"
});

export default function PresdaEditorialAuthorPage() {
  const editorialArticles = articles.filter((article) => article.author === "PRESDA Editorial");

  return (
    <main className="mx-auto w-[min(1500px,calc(100%-32px))] py-12">
      <header className="mb-9 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-7 shadow-[var(--shadow)]">
        <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">Author</p>
        <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none sm:text-7xl">PRESDA Editorial</h1>
        <p className="mt-5 max-w-2xl leading-7 text-[color:var(--muted)]">
          The migrated editorial archive currently mirrors the static production article dataset.
        </p>
      </header>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {editorialArticles.map((article, index) => (
          <ArticleCard key={article.id} article={article} priority={index === 0} />
        ))}
      </div>
    </main>
  );
}
