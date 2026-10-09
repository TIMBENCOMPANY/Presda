"use client";

import { ArabicCardMetadata } from "@/components/ArabicCardMetadata";
import type { Locale } from "@/lib/i18n/routing";
import { listingMessages, listingDate } from "@/lib/i18n/listing-messages";
import { localizedCategories } from "@/lib/i18n/messages";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HomeImage } from "@/components/HomeImage";
import { HeadlineText } from "@/components/HeadlineText";
import { getArticleCardImage, getArticleCardImagePosition } from "@/lib/articleImages";
import type { ArticleCardRecord } from "@/lib/articleCards";

export function HomeLatestCarousel({ articles, locale = "en" }: { articles: ArticleCardRecord[]; locale?: Locale }) {
  const t = listingMessages[locale];
  const categoryLabels = localizedCategories[locale];
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: articles.length < 2 });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => setEdges({ start: Math.abs(element.scrollLeft) < 2, end: Math.abs(element.scrollLeft) + element.clientWidth >= element.scrollWidth - 2 });
    const resize = new ResizeObserver(update);
    resize.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => { resize.disconnect(); element.removeEventListener("scroll", update); };
  }, [articles.length]);

  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    element.scrollBy({ left: direction * (locale === "ar" ? -1 : 1) * (element.clientWidth + 12), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <section data-ad-free aria-labelledby="home-latest-heading" className="home-latest-row">
      <h2 id="home-latest-heading" className="home-latest-heading font-display text-2xl font-extrabold uppercase">{t.latest}</h2>
      <div className="home-latest-window relative min-w-0">
        <div ref={track} id="home-latest-track" className="home-latest-track flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain">
          {articles.map(article => <div key={article.slug}>
            <Link prefetch={false} href={article.href ?? `/articles/${article.slug}/`} className="home-latest-story group">
              <div className="home-latest-media presda-card-media relative overflow-hidden">
                <HomeImage src={getArticleCardImage(article)} alt={article.coverAlt} fill quality={72} sizes="(max-width: 639px) 112px, (max-width: 1023px) 120px, 160px" className="object-cover" style={{ objectPosition: getArticleCardImagePosition(article) }} />
              </div>
              <div className="home-latest-copy">
                <span className="font-display text-[10px] font-extrabold uppercase text-[#FF1A1A]">{categoryLabels[article.category]}</span>
                <h3 className="font-display font-extrabold uppercase"><HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} /></h3>
                <p className="home-latest-meta">{locale === "ar" ? <ArabicCardMetadata date={article.date} readingTime={article.readingTime} /> : <><time dateTime={article.date}>{listingDate(article.date, locale)}</time><span>{article.readingTime ?? "3 min read"}</span></>}</p>
              </div>
            </Link>
          </div>)}
        </div>
        <button type="button" aria-label={t.previousLatest} aria-controls="home-latest-track" disabled={edges.start} onClick={() => move(-1)} className="home-latest-nav home-latest-prev category-image-arrow"><span><ChevronLeft className={`h-5 w-5 ${locale === "ar" ? "rotate-180" : ""}`} /></span></button>
        <button type="button" aria-label={t.nextLatest} aria-controls="home-latest-track" disabled={edges.end} onClick={() => move(1)} className="home-latest-nav home-latest-next category-image-arrow"><span><ChevronRight className={`h-5 w-5 ${locale === "ar" ? "rotate-180" : ""}`} /></span></button>
      </div>
    </section>
  );
}
