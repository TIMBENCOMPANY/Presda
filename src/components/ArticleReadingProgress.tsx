"use client";

import { useEffect, useState } from "react";

export function ArticleReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const article = document.querySelector("[data-article-progress-root]");
      const rect = article?.getBoundingClientRect();

      if (!rect) {
        setProgress(0);
        return;
      }

      const scrollable = rect.height - window.innerHeight;
      const read = Math.min(Math.max(-rect.top, 0), Math.max(scrollable, 1));
      setProgress((read / Math.max(scrollable, 1)) * 100);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-[#FF1A1A] shadow-[0_0_18px_rgba(255,26,26,0.88)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
