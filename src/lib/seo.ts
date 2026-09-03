import type { Metadata } from "next";

export const siteUrl = "https://presda.com";
export const siteName = "PRESDA";
export const defaultOgImage = "/presda-p-transparent.png";

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  type = "website"
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      images: [
        {
          url: imageUrl,
          alt: "PRESDA red P brand mark"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(defaultOgImage)
    },
    sameAs: [
      "https://www.instagram.com/presdaofficial",
      "https://x.com/PresdaOfficial",
      "https://www.facebook.com/profile.php?id=61589635535583"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@presda.com",
      contactType: "editorial"
    }
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url)
    }))
  };
}
