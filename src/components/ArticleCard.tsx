import { ArabicCardMetadata } from "@/components/ArabicCardMetadata";
import type { Locale } from "@/lib/i18n/routing";
import { listingMessages, listingDate } from "@/lib/i18n/listing-messages";
import { localizedCategories } from "@/lib/i18n/messages";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ArticleCardRecord } from "@/lib/articleCards";
import { HomeImage } from "@/components/HomeImage";
import { HeadlineText } from "@/components/HeadlineText";
import { getArticleCardImage, getArticleCardImagePosition } from "@/lib/articleImages";

type ArticleCardProps = {
  locale?: Locale;
  article: ArticleCardRecord;
  priority?: boolean;
  showImage?: boolean;
  sizes?: string;
  fallbackToSource?: boolean;
};

export function ArticleCard({ article, locale = "en", priority = false, showImage = true, fallbackToSource = false, sizes = "(max-width: 767px) calc(100vw - 24px), (max-width: 1279px) calc(50vw - 26px), (max-width: 1531px) calc((100vw - 72px) / 3), 487px" }: ArticleCardProps) {
  const t = listingMessages[locale];
  const categoryLabels = localizedCategories[locale];
  const CardImage = fallbackToSource ? HomeImage : Image;
  return (
    <Link
      prefetch={false}
      href={article.href ?? `/articles/${article.slug}/`}
      className="group block overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-[var(--shadow)] transition hover:border-[#FF1A1A]"
    >
      <div className="article-card-media relative presda-card-media overflow-hidden bg-black">
        {showImage ? (
          <CardImage
            src={getArticleCardImage(article)}
            alt={article.coverAlt}
            fill
            priority={priority}
            quality={72}
            sizes={sizes}
            className="object-cover object-center transition duration-500"
            style={{ objectPosition: getArticleCardImagePosition(article) }}
          />
        ) : (
          <div className="absolute inset-0 bg-[color:var(--home-panel-strong)]" aria-hidden="true" />
        )}
        <span className="absolute left-4 top-4 rounded-lg bg-[color:var(--home-red-deep)] px-3 py-1 font-display text-[10px] font-extrabold uppercase text-white">
          {categoryLabels[article.category]}
        </span>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[color:var(--muted)]">
          {locale === "ar" ? <ArabicCardMetadata date={article.date} readingTime={article.readingTime} /> : <>
          <time dateTime={article.date}>{listingDate(article.date, locale)}</time>
          <span>{article.readingTime ?? "3 min read"}</span>
          </>}
        </div>
        <h3 className="mt-3 text-balance font-display text-lg font-extrabold uppercase leading-snug text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-xl sm:leading-tight">
          <HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} />
        </h3>
        <p className="editorial-deck mt-3 line-clamp-3 text-sm leading-[1.75] text-[color:var(--muted)]">{article.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-wide text-[#FF1A1A]">
          {t.readMore}
          <ArrowRight className={`h-4 w-4 transition ${locale === "ar" ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  );
}
