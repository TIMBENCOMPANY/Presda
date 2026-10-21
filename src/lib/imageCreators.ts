export type ImageCreator = { "@type": "Person" | "Organization"; name: string };

// The brand mark and illustrations explicitly credited as PRESDA productions.
// Evidence: docs/image-creator-metadata.md and docs/image-rights-metadata.md.
export const presdaImageCreator: ImageCreator = { "@type": "Organization", name: "PRESDA" };

const verifiedCreators: Record<string, ImageCreator> = {
  "/favicon-dark.png": presdaImageCreator,
  "/articles/extinct-2026-hero.jpg": presdaImageCreator,
  "/articles/tartaria-2026-hero.jpg": presdaImageCreator,
  "/articles/supermarket-2026-hero.png": presdaImageCreator,
  "/articles/bee-hero.png": presdaImageCreator,
  "/articles/dna-hero.png": presdaImageCreator,
  "/articles/brain-hero.png": presdaImageCreator,
  "/articles/bacteria-hero.png": presdaImageCreator,
  "/articles/universe-presda-hero.png": presdaImageCreator,
  "/articles/solar-hero.png": presdaImageCreator,
  "/articles/rj-mitte-gage-skidmore-2018.jpg": { "@type": "Person", name: "Gage Skidmore" },
  "/images/editorial/yassine-bounou.jpg": { "@type": "Person", name: "Franco Arland" }
};

/** Unknown sources have no default creator, including AI or supplied artwork. */
export function getImageCreator(source: string): ImageCreator | undefined {
  return Object.prototype.hasOwnProperty.call(verifiedCreators, source) ? verifiedCreators[source] : undefined;
}

/** Separate the photographer from the archive/agency retained in creditText. */
export function getPhenomenonImageCreator(number: number, creditedAuthor: string): ImageCreator | undefined {
  // The source identifies a book and uploader, not the illustrator.
  if (number === 11) return undefined;
  const photographers: Record<number, string> = { 4: "R. Hadian", 8: "Peter Rejcek", 12: "Chris Ratzlaff" };
  if (photographers[number]) return { "@type": "Person", name: photographers[number] };
  return { "@type": creditedAuthor === "NASA" ? "Organization" : "Person", name: creditedAuthor };
}
