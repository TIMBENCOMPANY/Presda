import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedArticle } from "@/components/FeaturedArticle";
import { NewsletterBox } from "@/components/NewsletterBox";
import { TrendingTicker } from "@/components/TrendingTicker";
import { articles } from "@/data/articles";

export default function HomePage() {
  const [featured, ...rest] = articles;
  const latest = articles.slice(0, 6);
  const trending = rest.slice(0, 4);

  return (
    <main>
      <TrendingTicker />
      <FeaturedArticle article={featured} />

      <CategoryGrid />

      <section id="latest" className="mx-auto w-[min(1500px,calc(100%-32px))] py-14">
        <div className="mb-8 flex flex-col gap-4 border-t border-[#FF1A1A]/45 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FF1A1A]">Latest News</p>
            <h2 className="mt-2 font-display text-4xl font-black uppercase leading-none sm:text-5xl">Fresh Signal</h2>
          </div>
          <Link href="/articles" className="inline-flex w-fit items-center gap-2 rounded-lg border border-[color:var(--border)] px-4 py-3 font-display text-xs font-black uppercase tracking-wide transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]">
            View All
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latest.map((article, index) => (
            <ArticleCard key={article.id} article={article} priority={index === 0} />
          ))}
        </div>
      </section>

      <section id="trending" className="border-y border-[color:var(--border)] bg-[color:var(--card)]/55 py-14">
        <div className="mx-auto w-[min(1500px,calc(100%-32px))]">
          <div className="mb-8 border-t border-[#FF1A1A]/45 pt-5">
            <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FF1A1A]">Trending</p>
            <h2 className="mt-2 font-display text-4xl font-black uppercase leading-none sm:text-5xl">Most Watched</h2>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {trending.map((article) => (
              <div key={article.id} className="min-w-[310px] max-w-[390px] flex-1">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="topics" className="mx-auto w-[min(1500px,calc(100%-32px))] py-14">
        <div className="mb-8 border-t border-[#FF1A1A]/45 pt-5">
          <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FF1A1A]">Topics</p>
          <h2 className="mt-2 font-display text-4xl font-black uppercase leading-none sm:text-5xl">Editorial Radar</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {["AI Innovation", "Creator Economy", "Global Markets", "Future Sport", "Luxury Systems", "Digital Culture"].map((topic) => (
            <Link key={topic} href="/articles" className="rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-5 font-display text-lg font-black uppercase transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]">
              {topic}
            </Link>
          ))}
        </div>
      </section>

      <NewsletterBox />
    </main>
  );
}
