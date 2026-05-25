import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import { categoryLabels, formatDate } from "@/lib/categories";

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <section className="mx-auto grid w-[min(1500px,calc(100%-32px))] gap-8 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
      <div>
        <span className="rounded-lg bg-[#FF1A1A] px-3 py-2 font-display text-xs font-black uppercase tracking-wide text-white">
          {categoryLabels[article.category]}
        </span>
        <p className="mt-6 font-display text-xs font-bold uppercase tracking-wide text-[color:var(--muted)]">
          {formatDate(article.date)} / {article.readingTime}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-black uppercase leading-none sm:text-7xl">
          {article.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{article.excerpt}</p>
        <Link
          href={`/articles/${article.slug}`}
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#FF1A1A] px-6 py-4 font-display text-xs font-black uppercase tracking-wide text-white transition hover:bg-red-500"
        >
          Read More
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </div>
      <Link href={`/articles/${article.slug}`} className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] shadow-[var(--shadow)]">
        <Image
          src={article.coverImage}
          alt={article.coverAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#FF1A1A]" />
      </Link>
    </section>
  );
}
