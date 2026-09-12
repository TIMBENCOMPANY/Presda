"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Article } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { HeadlineText } from "@/components/HeadlineText";
import type { HeadlineHighlights } from "@/components/HeadlineText";
import { getArticleCardImage, getArticleCardImagePosition } from "@/lib/articleImages";
import { categoryLabels, formatDate } from "@/lib/categories";

type HomeStory = Pick<
  Article,
  "slug" | "title" | "headlineAccent" | "headlineHighlights" | "excerpt" | "category" | "date" | "coverImage" | "coverAlt" | "homepageImagePosition" | "readingTime"
>;

type HomeReferenceExperienceProps = {
  slides: HomeStory[];
  editorialPicks: HomeStory[];
  moreStories: Article[];
};

const heroHighlightOverrides: Record<string, HeadlineHighlights> = {
  "dinosaurs-rise-fall-fossils-extinction": { red: "DINOSAURS", gold: "RISE AND FALL" },
  "how-humans-learned-to-speak": { red: "LANGUAGE", gold: "HUMANS LEARN TO SPEAK" },
  "titanic-what-really-happened": { red: "TITANIC", gold: "WHAT REALLY HAPPENED" },
  "ancient-greece-civilization-history": { red: "ANCIENT GREECE", gold: "CHANGED HOW WE THINK" },
  "history-of-slavery": { red: "SLAVERY", gold: "HUMANS BECAME A COMMODITY" },
  "depression-what-happens-in-the-brain": { red: "DEPRESSION", gold: "INSIDE THE BRAIN" },
  "mark-zuckerberg-facebook-meta-story": { red: "MARK ZUCKERBERG", gold: "GLOBAL TECH EMPIRE" },
  "carl-sagan-journey-through-our-universe": { red: "CARL SAGAN", gold: "OUR UNIVERSE" },
  "charles-darwin-theory-of-evolution": { red: "CHARLES DARWIN", gold: "THEORY THAT CHANGED" },
  "history-of-the-vikings": { red: "VIKINGS", gold: "WORLD BEYOND THE LEGEND" },
  "ottoman-empire-rise-and-fall": { red: "OTTOMAN EMPIRE", gold: "600 YEARS" },
  "history-of-egyptian-pyramids": { red: "PYRAMIDS", gold: "ANCIENT EGYPT" },
  "avicii-life-music-death-tim-bergling": { red: "Avicii", gold: "EDM Legend" }
};

export function HomeReferenceExperience({ slides, editorialPicks, moreStories }: HomeReferenceExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showMoreStoryImages, setShowMoreStoryImages] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const moreStoriesRef = useRef<HTMLElement | null>(null);
  const resumeTimer = useRef<number | null>(null);
  const autoplayStarted = useRef(false);
  const active = slides[activeIndex] ?? slides[0];
  const sidebarStories = editorialPicks.slice(0, 3);
  const heroHighlights = active ? heroHighlightOverrides[active.slug] ?? active.headlineHighlights : undefined;
  const heroTitleLength = active?.title.length ?? 0;
  const heroTitleSize =
    heroTitleLength > 70
      ? "text-[clamp(1.62rem,4.35vw,2.85rem)]"
      : heroTitleLength > 56
        ? "text-[clamp(1.68rem,4.55vw,3rem)]"
        : heroTitleLength > 44
          ? "text-[clamp(1.76rem,4.8vw,3.12rem)]"
          : "text-[clamp(1.96rem,5.25vw,3.35rem)]";

  useEffect(() => {
    if (isPaused || slides.length < 2) return;
    let interval: number | null = null;
    const isMobileViewport = window.matchMedia("(max-width: 639px)").matches;
    const firstDelay = !autoplayStarted.current && isMobileViewport ? 30000 : 6000;
    const timer = window.setTimeout(() => {
      autoplayStarted.current = true;
      setActiveIndex((index) => (index + 1) % slides.length);
      interval = window.setInterval(() => {
        setActiveIndex((index) => (index + 1) % slides.length);
      }, 6000);
    }, firstDelay);

    return () => {
      window.clearTimeout(timer);
      if (interval) window.clearInterval(interval);
    };
  }, [isPaused, slides.length]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

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

        <div className="mx-auto w-full max-w-[1510px] px-3 py-4 sm:px-6 sm:py-5 lg:pb-6 lg:pt-3 2xl:px-0">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,2.2fr)_minmax(300px,0.8fr)] xl:grid-cols-[minmax(0,2.35fr)_minmax(330px,0.82fr)]">
            <article className="home-editorial-hero relative min-h-[590px] overflow-hidden rounded-2xl border sm:min-h-[590px] lg:min-h-[clamp(720px,calc(100vh-11rem),820px)]">
              <div className="absolute inset-0">
                <Image
                  key={active.slug}
                  src={active.coverImage}
                  alt={active.coverAlt}
                  fill
                  priority
                  fetchPriority="high"
                  quality={76}
                  sizes="(max-width: 1024px) calc(100vw - 24px), 860px"
                  className="object-cover object-center transition duration-700 lg:object-[center_42%]"
                  style={{ objectPosition: active.homepageImagePosition ?? "50% 42%" }}
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.62)_38%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.48)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.82)_0%,transparent_54%)]" />

              <div className="relative z-10 flex min-h-[590px] max-w-3xl flex-col justify-end px-5 pb-6 pt-12 sm:min-h-[590px] sm:px-7 sm:pb-8 lg:min-h-[clamp(720px,calc(100vh-11rem),820px)] lg:px-10 lg:pb-10">
                <p className="font-display text-xs font-extrabold uppercase tracking-wide text-[color:var(--home-red)]">
                  {categoryLabels[active.category]}
                </p>
                <h1 className={`mt-4 max-w-[17ch] text-balance font-display font-extrabold uppercase leading-[1.02] tracking-normal text-white [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:mt-5 sm:max-w-[18ch] sm:leading-[0.99] lg:max-w-[18.5ch] ${heroTitleSize}`}>
                  <HeadlineText title={active.title} highlights={heroHighlights} legacyRed={active.headlineAccent} />
                </h1>
                <p className="editorial-deck home-hero-deck max-w-[20rem] text-white/75 sm:max-w-[34rem]">{active.excerpt}</p>
                <Link
                  href={`/articles/${active.slug}/`}
                  className="mt-5 inline-flex min-h-11 w-fit items-center gap-3 rounded-md border border-[#ff1a1a]/85 bg-black/35 px-5 py-3 font-display text-[11px] font-extrabold uppercase tracking-wide text-white backdrop-blur-md transition hover:bg-[#c40019] sm:mt-7 sm:px-7 sm:py-4 sm:text-xs"
                >
                  Read Full Story
                  <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
                </Link>

                <div className="mt-5 flex w-full max-w-[28rem] items-center gap-3 sm:mt-7 sm:gap-4">
                  <span className="font-display text-sm font-extrabold text-[color:var(--home-red)]">{String(activeIndex + 1).padStart(2, "0")}</span>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full rounded-full bg-[color:var(--home-red)] transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                  <span className="font-display text-sm font-extrabold text-white/50">{String(slides.length).padStart(2, "0")}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-1 gap-y-1.5 sm:gap-2" aria-label="Featured story slides">
                  {slides.map((slide, index) => (
                  <button
                      key={slide.slug}
                      type="button"
                      onClick={() => {
                        pauseBriefly();
                        setActiveIndex(index);
                      }}
                      className="grid h-5 w-5 place-items-center rounded-full transition sm:h-11 sm:w-11"
                      aria-label={`Show featured story ${index + 1}`}
                      aria-current={index === activeIndex ? "true" : undefined}
                    >
                      <span className={`rounded-full border transition sm:h-2.5 sm:w-2.5 ${index === activeIndex ? "h-[10px] w-[10px] border-[color:var(--home-red)] bg-[color:var(--home-red)]" : "h-2 w-2 border-white/25 bg-white/20 hover:border-[color:var(--home-red)]"}`} />
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={goPrevious}
                className="home-hero-arrow home-hero-arrow-left absolute left-1 top-[55.75%] z-20 grid h-[18px] w-4 -translate-y-1/2 place-items-center transition sm:left-5 sm:w-6 lg:left-6"
                aria-label="Previous featured story"
              >
                <svg className="home-hero-chevron" viewBox="0 0 32 40" aria-hidden="true" focusable="false">
                  <path d="M4 4H17.5L28 20L17.5 36H4L12.5 20Z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="home-hero-arrow home-hero-arrow-right absolute right-1 top-[55.75%] z-20 grid h-[18px] w-4 -translate-y-1/2 place-items-center transition sm:right-5 sm:w-6 lg:right-6"
                aria-label="Next featured story"
              >
                <svg className="home-hero-chevron" viewBox="0 0 32 40" aria-hidden="true" focusable="false">
                  <path d="M4 4H17.5L28 20L17.5 36H4L12.5 20Z" />
                </svg>
              </button>
            </article>

            <aside className="grid gap-4 lg:grid-rows-3" aria-label="Editorial highlights">
              {sidebarStories.map((article) => (
                <SidebarStoryCard key={article.slug} article={article} />
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section ref={moreStoriesRef} className="mx-auto w-full max-w-[1510px] px-3 py-8 sm:px-6 sm:py-12 lg:py-14 2xl:px-0">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-l-4 border-[color:var(--home-red)] pl-4 sm:mb-8">
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
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {moreStories.map((article) => (
            <ArticleCard key={article.slug} article={article} showImage={showMoreStoryImages} />
          ))}
        </div>
      </section>
    </main>
  );
}

function SidebarStoryCard({ article, priority = false }: { article: HomeStory; priority?: boolean }) {
  const highlights = heroHighlightOverrides[article.slug] ?? article.headlineHighlights;

  return (
    <Link href={`/articles/${article.slug}/`} className="home-side-card group relative flex min-h-[142px] w-full min-w-0 flex-col overflow-hidden rounded-2xl border transition hover:-translate-y-0.5 sm:min-h-[156px] lg:min-h-0 lg:block">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-black lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src={getArticleCardImage(article)}
          alt={article.coverAlt}
          fill
          priority={priority}
          quality={72}
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 150px, 420px"
          className="object-cover object-center transition duration-500 group-hover:scale-105"
          style={{ objectPosition: getArticleCardImagePosition(article) ?? article.homepageImagePosition }}
        />
        <div className="absolute inset-0 hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.32)_48%,rgba(0,0,0,0.08)_72%)] lg:block" />
        <span className="absolute left-3 top-3 rounded-lg bg-[color:var(--home-red-deep)] px-2.5 py-1 font-display text-[9px] font-extrabold uppercase text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
          {categoryLabels[article.category]}
        </span>
        <time dateTime={article.date} className="absolute right-3 top-3 font-display text-[9px] font-extrabold uppercase text-white/80 drop-shadow">
          {formatDate(article.date)}
        </time>
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-3 lg:absolute lg:inset-x-0 lg:bottom-0 lg:z-10 lg:p-4">
        <h3 className="line-clamp-3 font-display text-[1rem] font-bold uppercase leading-[1.08] tracking-normal text-[color:var(--home-text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-[1.18rem] lg:line-clamp-3 lg:text-white">
          <HeadlineText title={article.title} highlights={highlights} legacyRed={article.headlineAccent} />
        </h3>
      </div>
    </Link>
  );
}
