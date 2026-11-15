import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: ["Manuscript painting of Mongol forces outside the walls of Baghdad", "The siege of Baghdad as depicted in a copy of Rashid al-Din’s Compendium of Chronicles, ca. 1430–1434. Bibliothèque nationale de France, public domain.", "Image record"],
  fr: ["Peinture de manuscrit montrant les forces mongoles devant les murailles de Bagdad", "Le siège de Bagdad dans une copie du Compendium des chroniques de Rashid al-Din, vers 1430–1434. Bibliothèque nationale de France, domaine public.", "Notice de l’image"],
  ar: ["لوحة مخطوطة تُظهر القوات المغولية خارج أسوار بغداد", "حصار بغداد في نسخة من «جامع التواريخ» لرشيد الدين، نحو 1430–1434. المكتبة الوطنية الفرنسية، الملك العام.", "سجل الصورة"],
  es: ["Pintura de manuscrito con fuerzas mongolas fuera de las murallas de Bagdad", "El asedio de Bagdad en una copia del Compendio de crónicas de Rashid al-Din, ca. 1430–1434. Biblioteca Nacional de Francia, dominio público.", "Ficha de la imagen"]
};

export function BaghdadChronicleImage({ locale }: { locale: Locale }) {
  const [alt, caption, record] = copy[locale];
  return (
    <figure data-baghdad-chronicle className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
      <LicensedEditorialImage src="/articles/baghdad-1258-jami-al-tawarikh-manuscript.webp" alt={alt} width={1200} height={901} />
      <figcaption className="space-y-2 p-5 text-sm leading-6">
        <p>{caption}</p>
        <a className="underline underline-offset-4" href="https://commons.wikimedia.org/wiki/File:Bagdad1258.jpg">{record}</a>
      </figcaption>
    </figure>
  );
}
