import Image from "next/image";
import type { Article } from "@/data/articles";
import { NewsletterBox } from "@/components/NewsletterBox";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ShareButtons } from "@/components/ShareButtons";
import { SourceBox } from "@/components/SourceBox";
import { TagList } from "@/components/TagList";
import { categoryLabels, formatDate } from "@/lib/categories";

type ArticleLayoutProps = {
  article: Article;
  relatedArticles: Article[];
};

export function ArticleLayout({ article, relatedArticles }: ArticleLayoutProps) {
  const canonicalUrl = `https://presda.com/articles/${article.slug}`;

  return (
    <main>
      <article className="mx-auto grid w-[min(1500px,calc(100%-32px))] gap-10 py-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.65fr)] lg:py-12">
        <div className="order-2 lg:order-1">
          <div className="mb-6 flex flex-wrap items-center gap-3 font-display text-xs font-bold uppercase tracking-wide text-[color:var(--muted)]">
            <span className="rounded-lg bg-[#FF1A1A] px-3 py-2 text-white">{categoryLabels[article.category]}</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="font-display text-4xl font-black uppercase leading-none sm:text-6xl lg:text-7xl">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">{article.excerpt}</p>
          <p className="mt-6 text-sm font-bold text-[color:var(--muted)]">By {article.author}</p>

          <div className="mt-10 space-y-7">
            {article.content.map((paragraph) => (
              <p key={paragraph} className="font-body text-lg leading-9 text-[color:var(--text)]">
                {paragraph}
              </p>
            ))}
          </div>

          {article.quote ? (
            <blockquote className="my-10 border-l-4 border-[#FF1A1A] bg-[color:var(--card)] p-6 font-display text-2xl font-black uppercase leading-tight shadow-[var(--shadow)] sm:text-3xl">
              "{article.quote}"
            </blockquote>
          ) : null}

          <div className="mt-10 grid gap-5">
            <SourceBox source={article.source} />
            <TagList tags={article.tags} />
            <div>
              <p className="mb-4 font-display text-xs font-black uppercase tracking-[0.18em] text-[#FF1A1A]">Share</p>
              <ShareButtons title={article.title} url={canonicalUrl} />
            </div>
          </div>
        </div>

        <aside className="order-1 lg:order-2">
          <div className="sticky top-28 grid gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] shadow-[var(--shadow)]">
              <Image
                src={article.coverImage}
                alt={article.coverAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <RelatedArticles articles={relatedArticles} />
            <NewsletterBox compact />
          </div>
        </aside>
      </article>
    </main>
  );
}
