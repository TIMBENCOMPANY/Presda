"use client";

import { useEffect, useRef } from "react";

/** Keep the shared desktop frame fixed while accommodating translated headlines. */
export function DesktopArticleHeroFit() {
  const marker = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const hero = marker.current?.closest<HTMLElement>(".article-hero");
    const copy = hero?.querySelector<HTMLElement>(".article-hero-content");
    if (!hero || !copy) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    let frame = 0;
    let disposed = false;

    const fit = () => {
      if (disposed) return;
      if (!desktop.matches) {
        hero.style.removeProperty("--hero-copy-scale");
        hero.style.removeProperty("--hero-viewport-height");
        return;
      }
      const documentTop = hero.getBoundingClientRect().top + window.scrollY;
      hero.style.setProperty("--hero-viewport-height", `${Math.max(240, window.innerHeight - documentTop - 16)}px`);
      const fits = (scale: number) => {
        hero.style.setProperty("--hero-copy-scale", String(scale));
        const style = getComputedStyle(copy);
        const children = Array.from(copy.children);
        const required = children.reduce((height, child) => height + child.getBoundingClientRect().height, 0)
          + parseFloat(style.rowGap) * Math.max(0, children.length - 1)
          + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        return required <= copy.clientHeight - 1;
      };
      if (fits(1)) return;
      // Find the largest readable setting that fits; never truncate editorial text.
      let low = 0.45;
      let high = 1;
      for (let step = 0; step < 10; step++) {
        const middle = (low + high) / 2;
        if (fits(middle)) low = middle;
        else high = middle;
      }
      hero.style.setProperty("--hero-copy-scale", String(low));
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(hero);
    window.addEventListener("resize", schedule);
    desktop.addEventListener("change", schedule);
    document.fonts.ready.then(schedule);
    schedule();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", schedule);
      desktop.removeEventListener("change", schedule);
    };
  }, []);

  return <span ref={marker} hidden aria-hidden="true" />;
}
