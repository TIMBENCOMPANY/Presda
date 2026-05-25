import type { Metadata } from "next";
import { ArticleBrowser } from "@/components/ArticleBrowser";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Latest Articles",
  description: "Search and filter the latest PRESDA articles across AI, gaming, sport, business, world, paparazzi, and lifestyle.",
  alternates: {
    canonical: "/articles"
  }
};

export default function ArticlesPage() {
  return (
    <main className="mx-auto w-[min(1500px,calc(100%-32px))] py-12">
      <header className="mb-9 border-t border-[#FF1A1A]/45 pt-5">
        <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FF1A1A]">Article Library</p>
        <h1 className="mt-3 font-display text-5xl font-black uppercase leading-none sm:text-7xl">Latest Articles</h1>
        <p className="mt-5 max-w-2xl leading-7 text-[color:var(--muted)]">
          Browse PRESDA stories by category, search for topics, and sort the newsroom feed by date.
        </p>
      </header>
      <ArticleBrowser articles={articles} />
    </main>
  );
}
