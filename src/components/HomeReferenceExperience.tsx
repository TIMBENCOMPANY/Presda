"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ArticleCardRecord } from "@/lib/articleCards";
import { ArticleCard } from "@/components/ArticleCard";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";

type HomeReferenceExperienceProps = {
  slides: ArticleCardRecord[];
  editorialPicks: ArticleCardRecord[];
  moreStories: ArticleCardRecord[];
};

export function HomeReferenceExperience({ slides, editorialPicks, moreStories }: HomeReferenceExperienceProps) {
  const [showMoreStoryImages, setShowMoreStoryImages] = useState(false);
  const moreStoriesRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = moreStoriesRef.current;
    if (!element || showMoreStoryImages) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShowMoreStoryImages(true);
          observer.disconnect();
        }
      },
      { rootMargin: "480px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [showMoreStoryImages]);

  return (
    <main className="home-page min-h-screen overflow-x-hidden">
      <section className="home-hero-section relative isolate overflow-hidden border-b">
        <div className="home-hero-bg absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-[1510px] px-3 py-2 sm:px-6 sm:py-5 lg:py-3 2xl:px-0">
          <FeaturedCarousel variant="home" slides={slides} sideStories={editorialPicks} />
        </div>
      </section>

      <section ref={moreStoriesRef} className="mx-auto w-full max-w-[1510px] px-3 py-6 sm:px-6 sm:py-8 2xl:px-0">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-l-4 border-[color:var(--home-red)] pl-4 sm:mb-6">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase leading-none tracking-normal text-[color:var(--home-text)] sm:text-4xl">
              Latest Stories
            </h2>
            <p className="mt-2 text-sm text-[color:var(--home-muted)]">Fresh perspectives. Deeper understanding.</p>
          </div>
          <Link href="/articles/" className="inline-flex min-h-11 items-center gap-2 font-display text-xs font-extrabold uppercase tracking-wide text-[color:var(--home-red)] transition hover:text-[color:var(--home-gold)]">
            View All Articles
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </Link>
        </div>
        <div className="home-card-grid grid sm:grid-cols-2 xl:grid-cols-3">
          {moreStories.map((article) => (
            <ArticleCard key={article.slug} article={article} showImage={showMoreStoryImages} sizes="(max-width: 639px) calc(100vw - 24px), (max-width: 1279px) calc(50vw - 32px), (max-width: 1535px) calc((100vw - 80px) / 3), 493px" />
          ))}
        </div>
      </section>
    </main>
  );
}
