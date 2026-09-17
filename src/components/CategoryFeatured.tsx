"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HeadlineText } from "@/components/HeadlineText";
import { categoryLabels, formatDate } from "@/lib/categories";
import { getArticleCardImage, getArticleHeroImagePosition } from "@/lib/articleImages";
import type { CategoryStory } from "@/lib/categoryCuration";

export function CategoryFeatured({ slides, sideStories }: { slides: CategoryStory[]; sideStories: CategoryStory[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const touch = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion(); updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (slides.length < 2 || paused || hovered || focused || reducedMotion || !visible) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % slides.length), 4500);
    return () => window.clearTimeout(timer);
  }, [active, slides.length, paused, hovered, focused, reducedMotion, visible]);

  function move(direction: number) {
    setPaused(true);
    setActive(index => (index + direction + slides.length) % slides.length);
  }

  if (!slides.length) return null;
  // A small category can still show two supporting stories without repeating
  // the active hero: the other carousel story trades places on each rotation.
  const supportingStories = sideStories.length === 1 && slides.length === 2
    ? [slides[(active + 1) % slides.length], ...sideStories]
    : sideStories;

  return (
    <section aria-label="Featured articles" className={`grid gap-4 ${sideStories.length ? "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]" : ""}`}>
      <div
        role="region" aria-roledescription="carousel" aria-label={`${categoryLabels[slides[0].category]} featured stories`}
        className="min-w-0 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-black text-white"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
        onTouchStart={event => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; setPaused(true); }}
        onTouchEnd={event => {
          if (!touch.current) return;
          const dx = event.changedTouches[0].clientX - touch.current.x;
          const dy = event.changedTouches[0].clientY - touch.current.y;
          touch.current = null;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
        }}
        onTouchCancel={() => { touch.current = null; }}
      >
        <div className="grid" aria-live={paused ? "polite" : "off"}>
          {slides.map((article, index) => (
            <article key={article.slug} aria-hidden={index !== active} aria-label={`${index + 1} of ${slides.length}`} aria-roledescription="slide"
              className={`relative col-start-1 row-start-1 transition-opacity duration-700 motion-reduce:transition-none ${index === active ? "z-10 opacity-100" : "pointer-events-none opacity-0"}`}>
              <Link href={`/articles/${article.slug}/`} tabIndex={index === active ? 0 : -1} className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#FF1A1A]">
                <div className="relative aspect-video lg:absolute lg:inset-0 lg:aspect-auto">
                  <Image src={article.coverImage} alt={article.coverAlt} fill priority={index === 0} quality={76}
                    sizes="(max-width: 1023px) calc(100vw - 24px), (max-width: 1536px) 65vw, 1000px"
                    className="object-contain lg:object-cover" style={{ objectPosition: getArticleHeroImagePosition(article) ?? "50% 42%" }} />
                </div>
                <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black via-black/35 to-transparent lg:block" />
                <div className="relative flex flex-col justify-end p-5 sm:p-7 lg:min-h-[540px] lg:p-8">
                  <p className="mb-3 font-display text-xs font-extrabold uppercase text-[#FF1A1A]">{categoryLabels[article.category]}</p>
                  <h2 className="max-w-[28ch] text-balance font-display text-2xl font-extrabold uppercase leading-tight sm:text-3xl lg:text-4xl">
                    <HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} />
                  </h2>
                  <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/80"><time dateTime={article.date}>{formatDate(article.date)}</time><span>{article.readingTime}</span></p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        {slides.length > 1 && <div className="flex items-center justify-between gap-3 border-t border-white/15 px-4 py-2">
          <span className="text-xs tabular-nums text-white/80">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          <div className="flex gap-1">
            <button type="button" onClick={() => move(-1)} aria-label="Previous featured article" className="grid h-11 w-11 place-items-center rounded-lg transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A]"><ChevronLeft className="h-5 w-5" /></button>
            {!reducedMotion && <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? "Play featured rotation" : "Pause featured rotation"} className="grid h-11 w-11 place-items-center rounded-lg transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A]">{paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}</button>}
            <button type="button" onClick={() => move(1)} aria-label="Next featured article" className="grid h-11 w-11 place-items-center rounded-lg transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A]"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>}
      </div>
      {sideStories.length > 0 && <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {supportingStories.map(article => <Link key={article.slug} href={`/articles/${article.slug}/`} className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-black text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A]">
          <div className="relative aspect-video lg:absolute lg:inset-0 lg:aspect-auto">
            <Image src={getArticleCardImage(article)} alt={article.coverAlt} fill quality={76} sizes="(max-width: 639px) calc(100vw - 24px), (max-width: 1023px) 50vw, 500px" className="object-contain lg:object-cover" style={{ objectPosition: getArticleHeroImagePosition(article) ?? "50% 35%" }} />
          </div>
          <div className="absolute inset-0 hidden bg-gradient-to-t from-black via-black/40 to-transparent lg:block" />
          <div className="relative flex flex-col justify-end p-5 lg:h-full lg:min-h-[260px]">
            <p className="mb-2 font-display text-[10px] font-extrabold uppercase text-[#FF1A1A]">{categoryLabels[article.category]}</p>
            <h2 className="text-balance font-display text-xl font-extrabold uppercase leading-tight"><HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} /></h2>
            <p className="mt-3 text-xs text-white/80">{article.readingTime}</p>
          </div>
        </Link>)}
      </div>}
    </section>
  );
}

