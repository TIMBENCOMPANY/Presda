import type { Metadata } from "next";
import type { TranslationRoute } from "./routing";
import { localizedCategories } from "./messages";
import { listingMessages } from "./listing-messages";
import { fromCategorySlug } from "@/lib/categories";
import { createPageMetadata, absoluteUrl } from "@/lib/seo";

const categoryDescriptions = {
  fr: {
    world: "Découvrez les analyses de PRESDA sur l’actualité internationale, la géopolitique et les événements qui façonnent le monde.",
    sport: "Retrouvez les articles de PRESDA sur le sport, les athlètes, les grandes compétitions et les histoires qui marquent leur époque.",
    business: "Explorez l’économie, les entreprises, les marchés et les transformations du monde des affaires avec PRESDA.",
    ai: "Découvrez les avancées de l’intelligence artificielle, ses applications et ses effets sur la société avec PRESDA.",
    science: "Explorez les découvertes scientifiques, l’espace, la nature et les grandes questions de la recherche avec PRESDA.",
    history: "Découvrez les civilisations, les personnalités et les événements historiques qui ont façonné notre monde avec PRESDA.",
    travel: "Explorez des destinations, des cultures et des lieux remarquables à travers les récits et guides de voyage de PRESDA.",
    lifestyle: "Découvrez les articles de PRESDA sur l’art de vivre, le bien-être, la culture et les tendances du quotidien.",
    paparazzi: "Retrouvez les portraits, les parcours et les actualités des célébrités et du monde du spectacle avec PRESDA."
  },
  ar: {
    world: "اكتشف تحليلات PRESDA للشؤون الدولية والجغرافيا السياسية والأحداث التي تشكل عالمنا.",
    sport: "تابع مقالات PRESDA عن الرياضة والرياضيين والبطولات الكبرى والقصص التي صنعت تاريخ المنافسة.",
    business: "استكشف الاقتصاد والشركات والأسواق والتحولات في عالم الأعمال مع PRESDA.",
    ai: "اكتشف تطورات الذكاء الاصطناعي وتطبيقاته وتأثيراته في المجتمع مع PRESDA.",
    science: "استكشف الاكتشافات العلمية والفضاء والطبيعة والأسئلة الكبرى في البحث العلمي مع PRESDA.",
    history: "اكتشف الحضارات والشخصيات والأحداث التاريخية التي شكلت عالمنا مع PRESDA.",
    travel: "استكشف وجهات وثقافات وأماكن مميزة من خلال قصص وأدلة السفر على PRESDA.",
    lifestyle: "اكتشف مقالات PRESDA عن أسلوب الحياة والعافية والثقافة والتوجهات التي تشكل حياتنا اليومية.",
    paparazzi: "تابع سير المشاهير ومسيراتهم وأخبار عالم الفن والترفيه مع PRESDA."
  },
  es: {
    world: "Descubre los análisis de PRESDA sobre actualidad internacional, geopolítica y los acontecimientos que transforman el mundo.",
    sport: "Explora los artículos de PRESDA sobre deportes, atletas, grandes competiciones e historias que marcaron una época.",
    business: "Explora la economía, las empresas, los mercados y las transformaciones del mundo empresarial con PRESDA.",
    ai: "Descubre los avances de la inteligencia artificial, sus aplicaciones y sus efectos en la sociedad con PRESDA.",
    science: "Explora descubrimientos científicos, el espacio, la naturaleza y las grandes preguntas de la investigación con PRESDA.",
    history: "Descubre las civilizaciones, las figuras y los acontecimientos históricos que dieron forma a nuestro mundo con PRESDA.",
    travel: "Explora destinos, culturas y lugares extraordinarios a través de las historias y guías de viaje de PRESDA.",
    lifestyle: "Descubre los artículos de PRESDA sobre estilo de vida, bienestar, cultura y tendencias cotidianas.",
    paparazzi: "Descubre los perfiles, las trayectorias y las noticias de las celebridades y del mundo del espectáculo con PRESDA."
  }
};

export function listingMetadata(route: TranslationRoute): Metadata {
  const t = listingMessages[route.locale];
  const slug = route.englishPath.split("/")[2];
  const category = slug ? fromCategorySlug(slug) : undefined;
  const title = category ? localizedCategories[route.locale][category] : route.englishPath === "/" ? t.homeTitle : t.latest;
  const description = category ? categoryDescriptions[route.locale][slug as keyof typeof categoryDescriptions.fr] : route.englishPath === "/" ? t.homeDescription : t.intro;
  const metadata = createPageMetadata({ title, description, path: route.path });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, locale: { fr: "fr_FR", ar: "ar_AR", es: "es_ES" }[route.locale], images: [{ url: absoluteUrl("/presda-p-transparent.png"), alt: t.brandAlt }] }
  };
}

export function listingJsonLd(route: TranslationRoute) {
  const metadata = listingMetadata(route);
  return {
    "@context": "https://schema.org", "@type": "CollectionPage",
    "@id": absoluteUrl(`${route.path}#webpage`), url: absoluteUrl(route.path),
    name: metadata.title, description: metadata.description, inLanguage: route.locale,
    isPartOf: { "@type": "WebSite", "@id": "https://presda.com/#website", name: "PRESDA", url: "https://presda.com/" },
    publisher: { "@id": "https://presda.com/#organization" }
  };
}
