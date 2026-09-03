import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Trending News",
  description: "Trending PRESDA stories across world affairs, sport, culture, business, science, travel, and technology.",
  path: "/trending/"
});

export default function TrendingPage() {
  const trending = articles.slice(0, 12);

  return (
    <main className="mx-auto w-[min(1500px,calc(100%-24px))] py-8 sm:w-[min(1500px,calc(100%-32px))] sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Trending", url: "/trending/" }
            ])
          )
        }}
      />
      <header className="mb-9 border-t border-[#FF1A1A]/45 pt-5">
        <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">Trending</p>
        <h1 className="mt-3 text-balance font-display text-[clamp(2rem,10.5vw,2.85rem)] font-extrabold uppercase leading-[1] text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-7xl sm:leading-none">Trending News</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:mt-5 sm:text-base">
          The latest PRESDA stories currently represented in the migrated Next.js article data.
        </p>
      </header>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {trending.map((article, index) => (
          <ArticleCard key={article.id} article={article} priority={index === 0} />
        ))}
      </div>
    </main>
  );
}
