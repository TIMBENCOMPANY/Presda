"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import type { ArticleCardRecord } from "@/lib/articleCards";

export function HomeLatestCarousel({ articles }: { articles: ArticleCardRecord[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: articles.length < 2 });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => setEdges({ start: element.scrollLeft < 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 });
    const resize = new ResizeObserver(update);
    resize.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => { resize.disconnect(); element.removeEventListener("scroll", update); };
  }, [articles.length]);

  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    element.scrollBy({ left: direction * (element.clientWidth + 12), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <section aria-labelledby="home-latest-heading">
      <div className="mb-3 flex items-center justify-between gap-3 border-l-4 border-[#FF1A1A] pl-3">
        <h2 id="home-latest-heading" className="font-display text-2xl font-extrabold uppercase">Latest Articles</h2>
        <div className="flex gap-1">
          <button type="button" aria-label="Previous latest articles" aria-controls="home-latest-track" disabled={edges.start} onClick={() => move(-1)} className="category-image-arrow grid h-11 w-11 place-items-center rounded-xl disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A]"><span><ChevronLeft className="h-5 w-5" /></span></button>
          <button type="button" aria-label="Next latest articles" aria-controls="home-latest-track" disabled={edges.end} onClick={() => move(1)} className="category-image-arrow grid h-11 w-11 place-items-center rounded-xl disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A]"><span><ChevronRight className="h-5 w-5" /></span></button>
        </div>
      </div>
      <div ref={track} id="home-latest-track" className="home-latest-track flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain">
        {articles.map(article => <div key={article.slug}><ArticleCard article={article} sizes="(max-width: 639px) calc(100vw - 24px), (max-width: 1023px) calc((100vw - 60px) / 2), (max-width: 1535px) calc((100vw - 72px) / 3), 495px" /></div>)}
      </div>
    </section>
  );
}
