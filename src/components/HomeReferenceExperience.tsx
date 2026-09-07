"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Article } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { HeadlineText } from "@/components/HeadlineText";
import { categoryLabels } from "@/lib/categories";

type HomeStory = Pick<
  Article,
  "slug" | "title" | "headlineAccent" | "headlineHighlights" | "excerpt" | "category" | "coverImage" | "coverAlt" | "homepageImagePosition" | "readingTime"
>;

type HomeReferenceExperienceProps = {
  slides: HomeStory[];
  latest: HomeStory[];
  moreStories: Article[];
};

export function HomeReferenceExperience({ slides, latest, moreStories }: HomeReferenceExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const resumeTimer = useRef<number | null>(null);
  const active = slides[activeIndex] ?? slides[0];
  const isLongHeroTitle = (active?.title.length ?? 0) > 48;

  useEffect(() => {
    if (isPaused || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  const progress = useMemo(() => ((activeIndex + 1) / slides.length) * 100, [activeIndex, slides.length]);

  function goNext() {
    pauseBriefly();
    setActiveIndex((index) => (index + 1) % slides.length);
  }

  function goPrevious() {
    pauseBriefly();
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  }

  function pauseBriefly() {
    setIsPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setIsPaused(false), 9000);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    setIsPaused(true);
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLElement>) {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) {
      pauseBriefly();
      return;
    }

    const distance = startX - (event.changedTouches[0]?.clientX ?? startX);
    if (Math.abs(distance) > 42) {
      distance > 0 ? goNext() : goPrevious();
      return;
    }

    pauseBriefly();
  }

  if (!active) return null;

  return (
    <main className="home-page min-h-screen overflow-x-hidden">
      <section
        className="home-hero-section relative isolate overflow-hidden border-b"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="home-hero-bg absolute inset-0 -z-10" />
        <div className="absolute inset-y-0 right-0 -z-10 w-[62%] opacity-80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(255,28,28,0.26),transparent_18rem)]" />
          <div className="home-orbital absolute right-[7%] top-[24%] hidden h-80 w-80 rounded-full border blur-[0.2px] lg:block" />
        </div>

        <div className="mx-3 max-w-[1510px] pt-1 sm:mx-6 2xl:mx-auto">
          <div className="relative grid min-h-[auto] items-center gap-4 py-4 sm:min-h-[612px] sm:gap-6 sm:py-5 lg:h-[626px] lg:grid-cols-[0.42fr_0.58fr] lg:gap-8 lg:py-0">
            <div className="relative z-10 w-full min-w-0 max-w-[24rem] overflow-hidden sm:max-w-[38rem] lg:pl-28">
              <p className="flex items-center gap-3 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-[color:var(--home-red)]">
                <span className="h-2 w-2 rounded-full bg-[color:var(--home-red)] shadow-[0_0_18px_rgba(255,26,26,0.8)]" />
                {categoryLabels[active.category]}
              </p>
              <h1 className={`mt-4 line-clamp-4 max-w-full text-balance font-display font-extrabold uppercase leading-[1.04] tracking-normal text-[color:var(--home-text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:mt-5 sm:line-clamp-4 sm:text-[clamp(2.25rem,3.9vw,4.15rem)] sm:leading-[1] lg:min-h-[15.4rem] xl:text-[clamp(2.55rem,4.05vw,4.55rem)] ${
                isLongHeroTitle ? "text-[clamp(1.42rem,7vw,1.78rem)]" : "text-[clamp(1.58rem,7.7vw,1.98rem)]"
              }`}>
                <HeadlineText title={active.title} highlights={active.headlineHighlights} legacyRed={active.headlineAccent} />
              </h1>
              <p className="editorial-deck home-hero-deck">{active.excerpt}</p>
              <Link
                href={`/articles/${active.slug}/`}
                className="mt-4 inline-flex items-center gap-3 rounded-md border border-[#c40019]/80 bg-[color:var(--home-panel)] px-5 py-3 font-display text-[11px] font-extrabold uppercase tracking-wide text-[color:var(--home-red)] shadow-[0_0_30px_rgba(196,0,25,0.14)] backdrop-blur-xl transition hover:bg-[#c40019] hover:text-white sm:mt-7 sm:px-7 sm:py-4 sm:text-xs"
              >
                Read Full Story
                <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
              </Link>

              <div className="mt-5 flex w-full max-w-[21rem] items-center gap-3 sm:mt-8 sm:max-w-[24rem] sm:gap-4">
                <span className="font-display text-sm font-extrabold text-[color:var(--home-red)]">{String(activeIndex + 1).padStart(2, "0")}</span>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-[color:var(--home-border)]">
                  <div className="h-full rounded-full bg-[color:var(--home-red)] shadow-[0_0_18px_rgba(255,26,26,0.9)] transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
                <span className="font-display text-sm font-extrabold text-[color:var(--home-soft)]">{String(slides.length).padStart(2, "0")}</span>
              </div>
            </div>

            <div className="home-media-frame relative h-[clamp(220px,64vw,276px)] overflow-hidden rounded-[14px] sm:h-[410px] md:h-[470px] lg:h-[548px] lg:rounded-[18px]">
              <div className="absolute inset-y-0 left-0 right-0">
                {slides.map((slide, index) => (
                  <Image
                    key={slide.slug}
                    src={slide.coverImage}
                    alt={slide.coverAlt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 57vw"
                    className={`object-cover object-center transition duration-700 lg:object-[center_42%] ${
                      index === activeIndex ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                    }`}
                    style={{ objectPosition: slide.homepageImagePosition ?? "50% 42%" }}
                  />
                ))}
              </div>
              <div className="home-media-bottom absolute inset-x-0 bottom-0 h-36" />
              <div className="home-media-left absolute inset-y-0 left-0 w-1/3" />
            </div>

            <button
              type="button"
              onClick={goPrevious}
              className="home-glass-control absolute left-2 top-[62%] z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full transition sm:left-4 lg:left-1 lg:top-1/2 lg:h-14 lg:w-14"
              aria-label="Previous featured story"
            >
              <ArrowLeft className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="home-glass-control absolute right-2 top-[62%] z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full transition sm:right-4 lg:right-1 lg:top-1/2 lg:h-14 lg:w-14"
              aria-label="Next featured story"
            >
              <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={2} />
            </button>
          </div>

          <div className="pb-5">
            <div className="grid gap-4 border-t border-[color:var(--home-border)] pt-5 xl:grid-cols-[120px_1fr] xl:items-center">
              <h2 className="font-display text-xl font-extrabold uppercase leading-none tracking-normal text-[color:var(--home-red)]">Latest News</h2>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {latest.slice(0, 4).map((article, index) => (
                  <LatestCard key={article.slug} article={article} priority={index === 0} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1500px,calc(100%-24px))] py-10 sm:w-[min(1500px,calc(100%-48px))] sm:py-14 lg:py-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[color:var(--home-red)] sm:text-xs">PRESDA</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-none tracking-normal text-[color:var(--home-text)] sm:text-4xl">
              More Stories
            </h2>
          </div>
          <Link href="/articles/" className="inline-flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-wide text-[color:var(--home-red)] transition hover:text-[color:var(--home-gold)]">
            View All
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {moreStories.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}

function LatestCard({ article, priority = false }: { article: HomeStory; priority?: boolean }) {
  return (
    <Link href={`/articles/${article.slug}/`} className="home-latest-card group grid min-h-[112px] grid-cols-[96px_1fr] items-stretch gap-3 rounded-lg p-3 backdrop-blur-xl transition hover:-translate-y-0.5 sm:min-h-[118px] sm:grid-cols-[116px_1fr] sm:gap-4">
      <div className="relative h-full min-h-[88px] overflow-hidden rounded-lg bg-black sm:min-h-[92px]">
        <Image
          src={article.coverImage}
          alt={article.coverAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 96px, 116px"
          className="object-cover object-center transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-col py-1">
        <p className="font-display text-[10px] font-extrabold uppercase tracking-wide text-[color:var(--home-red)]">{categoryLabels[article.category]}</p>
        <h3 className="mt-2 line-clamp-2 font-display text-[1.05rem] font-bold uppercase leading-[1.08] tracking-normal text-[color:var(--home-text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-[1.18rem]">
          <HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} />
        </h3>
        <p className="mt-auto pt-3 font-display text-[10px] uppercase tracking-[0.14em] text-[color:var(--home-soft)]">{article.readingTime ?? "3 min read"}</p>
      </div>
    </Link>
  );
}
