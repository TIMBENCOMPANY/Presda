import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getArticleBySlug, getPublishedArticles, getRelatedArticles } from "@/data/articles";
import {
  articleJsonLd,
  authorJsonLd,
  faqJsonLd,
  getArticleFaqs,
  getArticleLastUpdated,
  hasArticleSpecificFaqs
} from "@/lib/articleSeo";
import { toAuthorSlug } from "@/lib/authors";
import { getArticleCanonicalUrl } from "@/lib/articleValidation";
import { breadcrumbJsonLd, siteUrl } from "@/lib/seo";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found"
    };
  }

  const url = getArticleCanonicalUrl(article.slug);
  const image = `${siteUrl}${article.coverImage}`;
  const authorUrl = `${siteUrl}/authors/${toAuthorSlug(article.author)}/`;
  const metadataTitle = article.seoTitle ?? article.title;
  const metadataDescription = article.metaDescription ?? article.excerpt;

  return {
    title: metadataTitle,
    description: metadataDescription,
    authors: [{ name: article.author, url: authorUrl }],
    category: article.category,
    keywords: article.tags,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
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
      title: metadataTitle,
      description: metadataDescription,
      images: [image]
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

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
      {hasArticleSpecificFaqs(article) ? (
        <script
          id="article-faq-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
      ) : null}
      <script
        id="article-breadcrumb-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ArticleLayout article={article} relatedArticles={related} />
    </>
  );
}
