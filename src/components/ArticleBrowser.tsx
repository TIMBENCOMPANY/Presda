"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Article, ArticleCategory } from "@/data/articles";
import { categories } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { categoryLabels } from "@/lib/categories";

type ArticleBrowserProps = {
  articles: Article[];
  initialCategory?: ArticleCategory | "ALL";
};

export function ArticleBrowser({ articles, initialCategory = "ALL" }: ArticleBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArticleCategory | "ALL">(initialCategory);
  const [sort, setSort] = useState("latest");

  const filtered = useMemo(() => {
    return articles
      .filter((article) => category === "ALL" || article.category === category)
      .filter((article) => {
        const search = query.trim().toLowerCase();
        if (!search) return true;
        return [article.title, article.excerpt, article.category, article.author, ...article.tags]
          .join(" ")
          .toLowerCase()
          .includes(search);
      })
      .sort((a, b) => {
        if (sort === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime();
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [articles, category, query, sort]);

  return (
    <section>
      <div className="mb-8 grid gap-3 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-4 lg:grid-cols-[1fr_auto_auto]">
        <label className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted)]" strokeWidth={1.5} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles..."
            className="min-h-12 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] pl-11 pr-4 text-sm outline-none transition focus:border-[#FF1A1A]"
          />
        </label>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value as ArticleCategory | "ALL")}
          className="min-h-12 rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 text-sm outline-none transition focus:border-[#FF1A1A]"
          aria-label="Filter by category"
        >
          <option value="ALL">All Categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {categoryLabels[item]}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="min-h-12 rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 text-sm outline-none transition focus:border-[#FF1A1A]"
          aria-label="Sort articles"
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center text-[color:var(--muted)]">
          No articles found for this search.
        </div>
      ) : null}
    </section>
  );
}
