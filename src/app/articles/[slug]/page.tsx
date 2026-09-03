import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { articleJsonLd, authorJsonLd, faqJsonLd, getArticleFaqs, getArticleLastUpdated } from "@/lib/articleSeo";
import { toAuthorSlug } from "@/lib/authors";
import { breadcrumbJsonLd, siteUrl } from "@/lib/seo";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found"
    };
  }

  const url = `${siteUrl}/articles/${article.slug}/`;
  const image = `${siteUrl}${article.coverImage}`;
  const authorUrl = `${siteUrl}/authors/${toAuthorSlug(article.author)}/`;

  return {
    title: article.seoTitle ?? article.title,
    description: article.metaDescription ?? article.excerpt,
    authors: [{ name: article.author, url: authorUrl }],
    category: article.category,
    keywords: article.tags,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      siteName: "PRESDA",
      type: "article",
      publishedTime: article.date,
      modifiedTime: getArticleLastUpdated(article),
      images: [
        {
          url: image,
          alt: article.coverAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [image]
    }
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article, 5);
  const faqs = getArticleFaqs(article);
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Articles", url: "/articles/" },
    { name: article.title, url: `/articles/${article.slug}/` }
  ]);

  return (
    <>
      <script
        id="article-news-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }}
      />
      <script
        id="article-author-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorJsonLd(article)) }}
      />
      <script
        id="article-faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <script
        id="article-breadcrumb-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ArticleLayout article={article} relatedArticles={related} />
    </>
  );
}
