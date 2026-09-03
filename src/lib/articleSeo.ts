import type { Article } from "@/data/articles";
import { getAuthorProfile, toAuthorSlug } from "@/lib/authors";
import { categoryLabels } from "@/lib/categories";
import { absoluteUrl, siteName, siteUrl } from "@/lib/seo";

export type ArticleSection = {
  id: string;
  title: string;
  level: 2 | 3;
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type ArticleReference = {
  name: string;
  url?: string;
};

export type ArticleContentBlock = {
  block: string;
  originalIndex: number;
};

export function articleSectionId(index: number) {
  return `section-${index}`;
}

export function getArticleLastUpdated(article: Article) {
  return article.lastUpdated ?? article.date;
}

export function getArticleSections(article: Article): ArticleSection[] {
  return article.content.flatMap((block, index) => {
    if (!block.startsWith("## ") && !block.startsWith("### ")) {
      return [];
    }

    const level = block.startsWith("### ") ? 3 : 2;
    const title = block.replace(/^#{2,3}\s+/, "");

    if (title.toLowerCase() === "faq" || title.toLowerCase() === "source references") {
      return [];
    }

    return [
      {
        id: articleSectionId(index),
        title,
        level
      }
    ];
  });
}

export function getArticleFaqs(article: Article): ArticleFaq[] {
  if (article.faq?.length) {
    return article.faq;
  }

  const faqIndex = article.content.findIndex((block) => block.trim().toLowerCase() === "## faq");

  if (faqIndex !== -1) {
    const faqs: ArticleFaq[] = [];

    for (let index = faqIndex + 1; index < article.content.length; index += 1) {
      const block = article.content[index];

      if (block.startsWith("## ")) {
        break;
      }

      if (block.startsWith("### ")) {
        const answer = article.content[index + 1];

        if (answer && !answer.startsWith("#")) {
          faqs.push({
            question: block.replace(/^###\s+/, ""),
            answer
          });
          index += 1;
        }
      }
    }

    if (faqs.length) {
      return faqs;
    }
  }

  return [
    {
      question: `What is this PRESDA article about?`,
      answer: article.excerpt
    },
    {
      question: `Which category does this story belong to?`,
      answer: `This story is part of PRESDA's ${categoryLabels[article.category]} coverage.`
    },
    {
      question: `Who published this article?`,
      answer: `${article.title} was published by ${article.author} on PRESDA.`
    }
  ];
}

export function getArticleReferences(article: Article): ArticleReference[] {
  if (article.references?.length) {
    return article.references;
  }

  if (article.source?.url && !article.source.url.includes("example.com")) {
    return [article.source];
  }

  return [];
}

export function getArticleContentWithoutInlineFaq(article: Article): ArticleContentBlock[] {
  const faqIndex = article.content.findIndex((block) => block.trim().toLowerCase() === "## faq");
  const withOriginalIndex = article.content.map((block, originalIndex) => ({ block, originalIndex }));

  if (faqIndex === -1) {
    return withOriginalIndex;
  }

  const nextSectionIndex = article.content.findIndex((block, index) => index > faqIndex && block.startsWith("## "));

  if (nextSectionIndex === -1) {
    return withOriginalIndex.slice(0, faqIndex);
  }

  return [...withOriginalIndex.slice(0, faqIndex), ...withOriginalIndex.slice(nextSectionIndex)];
}

export function articleJsonLd(article: Article) {
  const url = `${siteUrl}/articles/${article.slug}/`;
  const image = absoluteUrl(article.coverImage);
  const authorUrl = `${siteUrl}/authors/${toAuthorSlug(article.author)}/`;

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image,
    datePublished: article.date,
    dateModified: getArticleLastUpdated(article),
    articleSection: categoryLabels[article.category],
    keywords: article.tags.join(", "),
    citation: getArticleReferences(article).map((reference) => reference.url ?? reference.name),
    author: {
      "@type": "Person",
      name: article.author,
      url: authorUrl
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/presda-p-transparent.png")
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };
}

export function authorJsonLd(article: Article) {
  const author = getAuthorProfile(toAuthorSlug(article.author));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: article.author,
    url: `${siteUrl}/authors/${toAuthorSlug(article.author)}/`,
    jobTitle: author?.role,
    description: author?.bio,
    worksFor: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName
    }
  };
}

export function faqJsonLd(faqs: ArticleFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
