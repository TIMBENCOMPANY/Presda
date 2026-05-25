import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/articles";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

const siteUrl = "https://presda.com";

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

  const url = `${siteUrl}/articles/${article.slug}`;
  const image = `${siteUrl}${article.coverImage}`;

  return {
    title: article.title,
    description: article.excerpt,
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
      modifiedTime: article.date,
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

  const url = `${siteUrl}/articles/${article.slug}`;
  const image = `${siteUrl}${article.coverImage}`;
  const related = getRelatedArticles(article);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: "PRESDA",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-light.png`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleLayout article={article} relatedArticles={related} />
    </>
  );
}
