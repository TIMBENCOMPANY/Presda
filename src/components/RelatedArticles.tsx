import type { Article } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  return (
    <section>
      <div className="mb-5 border-t border-[#FF1A1A]/45 pt-5">
        <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FF1A1A]">Related</p>
        <h2 className="mt-2 font-display text-2xl font-black uppercase">Continue Reading</h2>
      </div>
      <div className="grid gap-5">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
