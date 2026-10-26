import { getImageCreator } from "@/lib/imageCreators";

type ImageRights = {
  creditText?: string;
  copyrightNotice?: string;
  license?: string;
  acquireLicensePage?: string;
};

// Exact published credits, not ownership or licensing inferred from a filename.
// Provenance and deliberately unresolved fields: docs/image-rights-metadata.md.
const publishedPresdaCredits = new Set([
  // Approved AI illustrations with localized disclosures: docs/editorial/culture-oct26/REVIEW.md.
  "/articles/halloween-jack-o-lanterns-townhouse-editorial.webp",
  "/articles/lula-brazil-2026-election-editorial-illustration.webp",
  "/articles/day-of-the-dead-catrina-marigolds-editorial.webp",
  "/articles/diwali-diyas-riverside-festival-lights-editorial.webp",
  "/articles/black-friday-electronics-shopping-editorial.webp",
  // Supplied AI illustrations, localized disclosures: docs/editorial/features-oct25/REVIEW.md.
  "/articles/features-oct25-audi-hero.png",
  "/articles/features-oct25-capsule-hero.png",
  "/articles/features-oct25-lebron-hero.jpg",
  // Supplied historical illustrations, disclosed in docs/editorial/business-oct25/REVIEW.md.
  "/articles/business-oct25-mcdonalds-hero.png",
  "/articles/business-oct25-cocacola-hero.png",
  // Approved AI illustrations with localized disclosures: docs/editorial/news-oct24-late/REVIEW.md.
  "/articles/news-oct24-late-dogs-hero.png",
  "/articles/news-oct24-late-dexter-hero.png",
  "/articles/news-oct24-late-hotels-hero.png",
  // Approved AI illustrations with localized disclosures: docs/editorial/news-oct24-batch/REVIEW.md.
  "/articles/news-oct24-batch-loris-hero.png",
  "/articles/news-oct24-batch-lupin-hero.png",
  "/articles/news-oct24-batch-sudan-hero.png",
  // Approved AI news illustrations: docs/editorial/news-oct23-late/REVIEW.md.
  "/articles/news-oct23-late-scent-hero.png",
  "/articles/news-oct23-late-amex-hero.png",
  "/articles/news-oct23-late-guler-hero.png",
  // Approved AI news illustrations with localized disclosures: docs/editorial/news-oct23-batch/REVIEW.md.
  "/articles/news-oct23-volvo-hero.png",
  "/articles/news-oct23-legend-hero.png",
  "/articles/news-oct23-ebola-hero.png",
  "/articles/news-oct23-tunisia-hero.png",
  // Approved AI editorial illustrations; see docs/editorial/bird-batch/REVIEW.md.
  "/articles/bird-nils-hero.png",
  "/articles/bird-alex-hero.png",
  // Supplied illustrations with explanatory localized captions: docs/editorial/discovery-batch/REVIEW.md.
  "/articles/discovery-darksky-hero.png",
  "/articles/discovery-cables-hero.png",
  "/articles/discovery-handedness-hero.png",
  // Approved editorial illustrations, not documentary photographs: docs/editorial/ownership-batch/REVIEW.md.
  "/articles/ownership-collecting-hero.png",
  "/articles/ownership-robbie-hero.png",
  "/articles/ownership-diamonds-hero.png",
  // User-approved editorial illustrations: docs/editorial/gaming-batch/REVIEW.md.
  "/articles/gaming-history-hero.png",
  "/articles/gaming-console-hero.png",
  // User-approved illustrations, with localized visible credits: docs/editorial/travel-batch/REVIEW.md.
  "/articles/travel-africa-hero.png",
  "/articles/travel-safari-hero.png",
  "/articles/travel-pompeii-hero.png",
  "/articles/travel-orient-hero.png",
  "/articles/bilingual-brains-hero.png",
  "/articles/electric-cars-2026-hero.png",
  "/articles/psg-qsi-hero.png",
  "/articles/roman-empire-power-luxury-life-ancient-rome.png",
  "/articles/natural-disasters-earthquakes-volcanoes-tsunamis.png",
  "/articles/highest-paid-athletes-2026.png",
  "/articles/history-future-of-medicine.png",
  "/articles/denisovans-lost-humans-dna.png",
  "/images/articles/peter-margaret-dolphin-experiment.webp",
  "/images/articles/apple-iphone-18-foldable-future-products.webp"
]);

export function getImageRights(source: string): ImageRights {
  if (source === "/articles/business-oct25-skims-hero.jpg") {
    // Getty asset 2237352473 confirms the credit; no reuse terms inferred.
    return { creditText: "Kevin Mazur/Getty Images for SKIMS" };
  }
  if (source === "/favicon-dark.png") {
    // Existing Terms explicitly cover logos, permission and a contact channel.
    // This applies only to the official brand asset, never to article images.
    return {
      creditText: "PRESDA",
      license: "https://presda.com/terms/",
      acquireLicensePage: "https://presda.com/terms/"
    };
  }
  if (source === "/images/editorial/yassine-bounou.jpg") {
    // Original Getty IPTC/XMP: AssetID 2269536756. Both destinations verified.
    return {
      creditText: "Franco Arland/Getty Images",
      copyrightNotice: "2026 Getty Images",
      license: "https://www.gettyimages.com/eula?utm_medium=organic&utm_source=google&utm_campaign=iptcurl",
      acquireLicensePage: "https://www.gettyimages.com/detail/2269536756?utm_medium=organic&utm_source=google&utm_campaign=iptcurl"
    };
  }
  if (source === "/articles/rj-mitte-gage-skidmore-2018.jpg") {
    return {
      creditText: "Gage Skidmore / Wikimedia Commons",
      license: "https://creativecommons.org/licenses/by-sa/2.0/",
      acquireLicensePage: "https://commons.wikimedia.org/wiki/File:RJ_Mitte_at_San_Diego_Con.jpg#Licensing"
    };
  }
  if (getImageCreator(source)?.name === "PRESDA" || publishedPresdaCredits.has(source)) {
    return { creditText: "PRESDA" };
  }
  // Creation credits do not establish copyright ownership or reuse terms.
  // No publisher, generic contact-page or blanket site-license fallback.
  return {};
}
