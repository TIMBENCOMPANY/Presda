import type { Metadata } from "next";
import { ArticleBrowser } from "@/components/ArticleBrowser";
import { articles } from "@/data/articles";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Latest Articles",
  description: "Search and filter the latest PRESDA articles across AI, business, sport, world, paparazzi, lifestyle, travel, science, and World Cup 2026 coverage.",
  path: "/articles/"
});

export default function ArticlesPage() {
  return (
    <main className="mx-auto w-[min(1500px,calc(100%-24px))] py-8 sm:w-[min(1500px,calc(100%-32px))] sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Articles", url: "/articles/" }
            ])
          )
        }}
      />
      <header className="mb-9 border-t border-[#FF1A1A]/45 pt-5">
        <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">Article Library</p>
        <h1 className="mt-3 text-balance font-display text-[clamp(2rem,10.5vw,2.85rem)] font-extrabold uppercase leading-[1] text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-7xl sm:leading-none">Latest Articles</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:mt-5 sm:text-base">
          Browse PRESDA stories by category, search for topics, and sort the newsroom feed by date.
        </p>
      </header>
      <ArticleBrowser articles={articles} />
    </main>
  );
}
