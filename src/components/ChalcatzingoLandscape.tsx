import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: ["Rocky hillside in the archaeological landscape of Chalcatzingo, Morelos", "A hill at Chalcatzingo, Morelos. Photo by HJPD, resized and converted to WebP.", "Photo record"],
  fr: ["Colline rocheuse dans le paysage archéologique de Chalcatzingo, au Morelos", "Une colline de Chalcatzingo, au Morelos. Photo de HJPD, redimensionnée et convertie en WebP.", "Notice de la photo"],
  ar: ["تل صخري ضمن المشهد الأثري لتشالكاتزينغو في موريلوس", "تل في تشالكاتزينغو بولاية موريلوس. تصوير HJPD، مع تغيير الحجم والتحويل إلى WebP.", "سجل الصورة"],
  es: ["Cerro rocoso en el paisaje arqueológico de Chalcatzingo, Morelos", "Un cerro de Chalcatzingo, Morelos. Foto de HJPD, redimensionada y convertida a WebP.", "Ficha de la fotografía"]
};

export function ChalcatzingoLandscape({ locale }: { locale: Locale }) {
  const [alt, caption, record] = copy[locale];
  return (
    <figure data-chalcatzingo-landscape className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
      <LicensedEditorialImage src="/articles/chalcatzingo-morelos-archaeological-landscape.webp" alt={alt} width={1200} height={732} />
      <figcaption className="space-y-2 p-5 text-sm leading-6">
        <p>{caption}</p>
        <p><a className="underline underline-offset-4" href="https://commons.wikimedia.org/wiki/File:Chalcatzingo_Cerro.jpg">{record}</a>{" · "}<a className="underline underline-offset-4" href="https://creativecommons.org/licenses/by/3.0/" rel="license">CC BY 3.0</a></p>
      </figcaption>
    </figure>
  );
}
