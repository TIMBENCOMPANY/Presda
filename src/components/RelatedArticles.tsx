import type { Article } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import { HeadlineText } from "@/components/HeadlineText";
import { getArticleCardImage, getArticleCardImagePosition } from "@/lib/articleImages";
import { categoryLabels, formatDate } from "@/lib/categories";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  const visibleArticles = articles.slice(0, 3);

  return (
    <section>
      <div className="mb-5 border-t border-[#FF1A1A]/45 pt-5">
        <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">Related</p>
        <h2 className="mt-2 font-display text-2xl font-extrabold uppercase">Continue Reading</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleArticles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}/`}
            className="group block overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] shadow-[var(--home-card-shadow)] transition duration-200 hover:-translate-y-0.5 hover:border-[#FF1A1A]/70"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-black">
              <Image
                src={getArticleCardImage(article)}
                alt={article.coverAlt}
                fill
                quality={72}
                sizes="(max-width: 768px) calc(100vw - 24px), (max-width: 1280px) calc(50vw - 40px), 460px"
                className="object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: getArticleCardImagePosition(article) }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.42),rgba(0,0,0,0.04)_58%,transparent)]" />
            </div>
            <div className="p-4">
              <p className="font-display text-[10px] font-extrabold uppercase tracking-wide text-[#FF1A1A]">
                {categoryLabels[article.category]}
              </p>
              <h3 className="mt-2 line-clamp-3 font-display text-base font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:text-lg">
                <HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} />
              </h3>
              <p className="mt-3 font-display text-[10px] uppercase tracking-wide text-[color:var(--home-muted)]">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                {article.readingTime ? ` / ${article.readingTime}` : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
