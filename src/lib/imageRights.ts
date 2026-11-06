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
  // User-approved AI editorial illustrations: sport-science-oct30/REVIEW.md.
  "/articles/alexander-zverev-first-world-number-one-ai-editorial.webp",
  "/articles/milan-inter-generali-stadium-ai-editorial-concept.webp",
  "/articles/crocodile-river-asteroid-survival-ai-illustration.webp",
  // Approved AI editorial concepts disclosed in titan-mes-oct30/REVIEW.md.
  "/articles/nasa-dragonfly-titan-name-campaign-ai-illustration.webp",
  "/articles/jennifer-lawrence-mes-haircare-ai-editorial.webp",
  // Approved historical AI concepts, disclosed in science-trio-oct29/REVIEW.md.
  "/articles/al-khwarizmi-algebra-ai-editorial.webp",
  "/articles/copernicus-heliocentric-universe-ai-editorial.webp",
  // Approved AI concepts disclosed in docs/editorial/film-cosmology-oct29/REVIEW.md.
  "/articles/dicaprio-lawrence-scorsese-film-ai-editorial.webp",
  "/articles/einstein-cosmic-equations-dark-energy-ai-editorial.webp",
  // Approved AI illustrations with localized disclosures: docs/editorial/news-oct29/REVIEW.md.
  "/articles/red-sprites-upper-atmosphere-storm-ai-illustration.webp",
  "/articles/cristiano-ronaldo-boat-fan-vote-ai-illustration.webp",
  "/articles/meta-nvidia-muse-ai-investment-editorial-illustration.webp",
  // Approved AI illustration, disclosed in docs/editorial/nature-oct28/REVIEW.md.
  "/articles/freeze-tolerant-frog-winter-editorial-illustration.webp",
  // Approved AI illustration, disclosed in docs/editorial/mbappe-china/REVIEW.md.
  "/articles/kylian-mbappe-china-mao-controversy-ai-editorial.webp",
  // Approved AI illustrations with localized disclosures: docs/editorial/nature-culture-oct27/REVIEW.md.
  "/articles/chefchaouen-blue-city-rif-morocco-ai-editorial.webp",
  "/articles/ancient-tree-roots-longevity-ai-editorial.webp",
  "/articles/orangutan-mothers-young-social-play-ai-editorial.webp",
  "/articles/bepicolombo-mercury-esa-jaxa-ai-editorial.webp",
  "/articles/kintsugi-urushi-gold-ceramic-repair-ai-editorial.webp",
  // Approved AI illustration with localized disclosure: docs/editorial/kane-ballon-dor-2026/REVIEW.md.
  "/articles/harry-kane-ballon-dor-2026-ai-editorial.webp",
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
  if (["/articles/peter-margaret-dolphin-pool-telephone-approved.jpg", "/articles/history-of-gold-open-vault-gold-bars-approved.jpg"].includes(source)) return { creditText: "Editorial image supplied for PRESDA" };
  // Approved supplied Green March image; photographer and licence were not provided.
  if (source === "/articles/morocco-green-march-1975-51st-anniversary.jpg") return { creditText: "Editorial image supplied for PRESDA" };
  // User-approved conceptual images; original creator and licence were not supplied.
  if (["/articles/cristiano-ronaldo-portugal-retirement-editorial-nov2026.jpg","/articles/napoleon-short-emperor-myth-editorial.png","/articles/napoleon-short-emperor-myth-approved-portrait.jpg","/articles/atlantis-plato-imagined-underwater-city-editorial.jpg","/articles/romeo-juliet-literary-romance-conceptual-editorial.jpg","/articles/valentines-day-saint-romance-conceptual-editorial.jpg","/articles/mona-lisa-lisa-gherardini-conceptual-editorial.jpg"].includes(source)) return { creditText: "Editorial image supplied for PRESDA" };
  // User-approved conceptual images; original creator and licence were not supplied.
  if (["/articles/ai-consciousness-human-robot-conceptual-editorial.jpg","/articles/free-will-decisions-diverging-paths-conceptual-editorial.jpg","/articles/why-anything-exists-cosmos-human-conceptual-editorial.jpg"].includes(source)) return { creditText: "Editorial image supplied for PRESDA" };
  // User-approved editorial images; original creator and licence were not supplied.
  if (["/articles/android-google-mobile-platform-history-editorial.jpg","/articles/flying-frog-webbed-feet-rainforest-gliding-editorial.jpg","/articles/flamingo-pink-adult-gray-chick-editorial.jpg","/articles/el-dorado-muisca-ritual-raft-conceptual-illustration.jpg","/articles/pele-brazil-football-legacy-editorial-collage.jpg"].includes(source)) return { creditText: "Editorial image supplied for PRESDA" };
  // User-approved editorial images; original creator and licence were not supplied.
  if (["/articles/cappadocia-fairy-chimneys-balloons-turkey-editorial.jpg","/articles/ninja-shinobi-castle-historical-illustration.jpg","/articles/samurai-armour-japan-historical-editorial-illustration.jpg","/articles/quokka-australia-smiling-marsupial-editorial.jpg"].includes(source)) return { creditText: "Editorial image supplied for PRESDA" };
  // User-approved editorial images; original creator and licence were not supplied.
  if (["/articles/red-lipped-batfish-walking-seafloor-editorial.jpg","/articles/giant-flying-fox-philippines-spread-wings-editorial.jpg","/articles/hypatia-alexandria-teaching-historical-reconstruction.jpg","/articles/zheng-he-ming-fleet-historical-reconstruction.jpg","/articles/qr-code-history-phone-scanning-editorial.jpg"].includes(source)) return { creditText: "Editorial image supplied for PRESDA" };
  // User-approved editorial images; original creator and licence were not supplied.
  if (["/articles/cats-of-istanbul-street-cats-galata-editorial.jpg","/articles/dancing-plague-1518-strasbourg-historical-reconstruction.jpg","/articles/blood-falls-antarctica-red-ice-editorial.jpg","/articles/pamukkale-white-travertine-terraces-turkey-editorial.jpg","/articles/ibn-battuta-moroccan-traveler-editorial-reconstruction.jpg"].includes(source)) return { creditText: "Editorial image supplied for PRESDA" };
  // User-approved editorial images; no original creator or licence supplied.
  if (["/articles/milka-2013-chain-of-tenderness-campaign-editorial.webp","/articles/catatumbo-lightning-lake-maracaibo-editorial.webp","/articles/aye-aye-madagascar-primate-editorial.webp","/articles/eye-of-sahara-richat-structure-editorial.webp"].includes(source)) return { creditText: "Editorial image supplied for PRESDA" };
  // User-approved editorial images; no original creator or licence supplied.
  if (["/articles/denisovans-ancient-proteins-ai-concept.webp","/articles/electronic-skin-robot-touch-ai-concept.webp","/articles/glass-octopus-vitreledonella-richardi-ai-illustration.webp","/articles/lev-yashin-ballon-dor-1963-ai-editorial.webp","/articles/eternal-flame-falls-natural-gas-ai-illustration.webp"].includes(source)) return { creditText: "AI-generated editorial illustration supplied for PRESDA" };
  // User-approved editorial images; no original creator or licence supplied.
  if (["/articles/infernogallus-fruit-eating-dinosaur-editorial.webp","/articles/leopardus-tilcayo-new-wild-cat-editorial.webp","/articles/cretodorus-noonoo-cretaceous-amber-insect-editorial.webp","/articles/sperm-whales-vertical-sleep-editorial.webp","/articles/carlos-alcaraz-vienna-open-2026-editorial.webp"].includes(source)) return { creditText: "Editorial image supplied for PRESDA" };
  // User-approved conceptual artwork. No creator or reuse licence was supplied.
  if (["/articles/why-zebras-black-white-stripes-ai-editorial.webp","/articles/ai-city-traffic-lights-ai-editorial.webp","/articles/hidden-world-beneath-antarctica-ice-ai-concept.webp"].includes(source)) return { creditText: "AI-generated editorial illustration supplied for PRESDA" };
  // Supplied for this publication. Creator, copyright and reuse terms were not provided.
  if (["/articles/johan-cruyff-total-football-netherlands-editorial.webp","/articles/white-dwarf-j1328-1450-two-debris-rings-illustration.webp","/articles/youtube-history-three-founders-online-video-editorial.webp"].includes(source)) return { creditText: "Image supplied for PRESDA" };
  if (source === "/articles/tiger-mother-cubs-editorial.webp") {
    // Supplied by the user; photographer, location and reuse terms not inferred.
    return { creditText: "User-supplied editorial image" };
  }
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
