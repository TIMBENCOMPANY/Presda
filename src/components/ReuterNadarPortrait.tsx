import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: ["Black-and-white studio portrait of Reuters founder Paul Julius Reuter", "Paul Julius Reuter, photographed by Nadar ca. 1860. Bibliothèque nationale de France, public domain.", "Image record"],
  fr: ["Portrait de Paul Julius Reuter en studio, en noir et blanc", "Paul Julius Reuter photographié par Nadar vers 1860. Bibliothèque nationale de France, domaine public.", "Notice de l’image"],
  ar: ["صورة استوديو بالأبيض والأسود لبول يوليوس رويتر", "بول يوليوس رويتر بعدسة نادار نحو عام 1860. المكتبة الوطنية الفرنسية، الملك العام.", "سجل الصورة"],
  es: ["Retrato de estudio en blanco y negro de Paul Julius Reuter", "Paul Julius Reuter, fotografiado por Nadar hacia 1860. Biblioteca Nacional de Francia, dominio público.", "Ficha de la imagen"]
};

export function ReuterNadarPortrait({ locale }: { locale: Locale }) {
  const [alt, caption, record] = copy[locale];
  return (
    <figure data-reuter-nadar-portrait className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
      <LicensedEditorialImage src="/articles/paul-julius-reuter-portrait-nadar-circa-1860.webp" alt={alt} width={1000} height={1318} />
      <figcaption className="space-y-2 p-5 text-sm leading-6">
        <p>{caption}</p>
        <a className="underline underline-offset-4" href="https://commons.wikimedia.org/wiki/File:Reuter,_Paul_Julius_von,_Nadar,_Gallica.jpg">{record}</a>
      </figcaption>
    </figure>
  );
}
