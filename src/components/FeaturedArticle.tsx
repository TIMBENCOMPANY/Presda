import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import { categoryLabels, formatDate } from "@/lib/categories";

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <section className="mx-auto grid w-[min(1500px,calc(100%-24px))] gap-7 py-10 sm:w-[min(1500px,calc(100%-32px))] sm:gap-8 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
      <div>
        <span className="rounded-lg bg-[#FF1A1A] px-3 py-2 font-display text-xs font-extrabold uppercase tracking-wide text-white">
          {categoryLabels[article.category]}
        </span>
        <p className="mt-6 font-display text-xs font-bold uppercase tracking-wide text-[color:var(--muted)]">
          {formatDate(article.date)} / {article.readingTime}
        </p>
        <h1 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2rem,9vw,3.35rem)] font-extrabold uppercase leading-[1] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-7xl sm:leading-none">
          {article.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:mt-6 sm:text-lg sm:leading-8">{article.excerpt}</p>
        <Link
          href={`/articles/${article.slug}/`}
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#FF1A1A] px-6 py-4 font-display text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-red-500"
        >
          Read More
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </div>
      <Link href={`/articles/${article.slug}/`} className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] shadow-[var(--shadow)] lg:aspect-[4/3]">
        <Image
          src={article.coverImage}
          alt={article.coverAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#FF1A1A]" />
      </Link>
    </section>
  );
}
