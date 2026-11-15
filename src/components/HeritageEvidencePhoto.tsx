import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const photos = {
  "great-zimbabwe": {
    src: "great-zimbabwe-wall-aart-rietveld-1975.webp",
    height: 837,
    file: "ASC_Leiden_-_Rietveld_Collection_-_East_Africa_1975_-_05_-_033_-_A_wall_of_the_ruins_of_Great_Zimbabwe_-_Masvingo,_Zimbabwe.jpg",
    credit: "Aart Rietveld / African Studies Centre Leiden",
    copy: {
      en: "A dry-stone wall at Great Zimbabwe near Masvingo, photographed in 1975.",
      fr: "Un mur de pierre sèche du Grand Zimbabwe près de Masvingo, photographié en 1975.",
      ar: "جدار حجري في زيمبابوي الكبرى قرب ماسفينغو، في صورة من عام 1975.",
      es: "Un muro de piedra seca de Gran Zimbabue cerca de Masvingo, fotografiado en 1975."
    }
  },
  "bou-regreg": {
    src: "bou-regreg-estuary-from-udayas-kasbah.webp",
    height: 960,
    file: "Kasbah_of_the_Udayas,_Rabat_-_mouth_of_bouregreg.jpg",
    credit: "Aemazy / Wikimedia Commons",
    copy: {
      en: "The Bou Regreg estuary from the Udayas Kasbah in 2026, with Rabat left and Salé right.",
      fr: "L’estuaire du Bouregreg depuis la kasbah des Oudayas en 2026, avec Rabat à gauche et Salé à droite.",
      ar: "مصب أبي رقراق من قصبة الأوداية عام 2026، الرباط يساراً وسلا يميناً.",
      es: "El estuario del Bu Regreg desde la alcazaba de los Udayas en 2026, con Rabat a la izquierda y Salé a la derecha."
    }
  }
};

const resizeCredit = { en: "Resized", fr: "Redimensionnée", ar: "أُعيد تحجيمها", es: "Redimensionada" };

export function HeritageEvidencePhoto({ id, locale }: { id: keyof typeof photos; locale: Locale }) {
  const photo = photos[id];
  return (
    <figure data-heritage-evidence={id} className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
      <LicensedEditorialImage src={`/articles/${photo.src}`} alt={photo.copy[locale]} width={1280} height={photo.height} />
      <figcaption className="p-5 text-sm leading-6">
        <p>{photo.copy[locale]}</p>
        <p><a className="underline" href={`https://commons.wikimedia.org/wiki/File:${photo.file}`}>{photo.credit}</a> · <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · {resizeCredit[locale]}</p>
      </figcaption>
    </figure>
  );
}
