import { articles } from "@/data/articles";

export function TrendingTicker() {
  const headlines = articles.slice(0, 5).map((article) => article.title);

  return (
    <section className="border-b border-[color:var(--border)] bg-[color:var(--card)]/70">
      <div className="mx-auto grid min-h-14 w-[min(1500px,calc(100%-32px))] grid-cols-[auto_1fr] items-center overflow-hidden">
        <strong className="mr-5 rounded-lg bg-[#FF1A1A] px-4 py-3 font-display text-xs font-black uppercase tracking-wide text-white">
          Trending
        </strong>
        <div className="overflow-hidden">
          <div className="ticker-track flex w-max gap-12">
            {[...headlines, ...headlines].map((headline, index) => (
              <span key={`${headline}-${index}`} className="font-display text-xs font-bold uppercase tracking-wide text-[color:var(--muted)]">
                <span className="mr-4 text-[#FF1A1A]">/</span>
                {headline}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
