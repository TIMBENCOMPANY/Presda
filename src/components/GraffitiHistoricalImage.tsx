import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import images from "@/data/graffitiHistoricalImages.json";
import type { Locale } from "@/lib/i18n/routing";

type ImageId = keyof typeof images;
export const graffitiImageAtBlock: Partial<Record<number, ImageId>> = { 9: "noir", 18: "ash", 28: "kinder" };
const labels = {
  en: { source: "Source record", license: "Reuse terms", changes: "Resized and converted to WebP by PRESDA. Full composition preserved. Photo derivatives retain the stated license. Artwork reproduction: German UrhG §59." },
  fr: { source: "Notice originale", license: "Conditions de réutilisation", changes: "Redimensionnement et conversion WebP par PRESDA. Composition intégrale conservée. Les fichiers dérivés conservent cette licence photo. Reproduction de l’œuvre : UrhG allemand, §59." },
  es: { source: "Registro original", license: "Condiciones de reutilización", changes: "Redimensionada y convertida a WebP por PRESDA. Composición completa conservada. Los archivos derivados mantienen esta licencia fotográfica. Reproducción de la obra: UrhG alemán, §59." },
  ar: { source: "السجل الأصلي", license: "شروط إعادة الاستخدام", changes: "غيّرت PRESDA الحجم وحوّلت الملف إلى WebP مع الحفاظ على التكوين الكامل. تحتفظ الملفات المشتقة بترخيص الصورة المذكور. إعادة إنتاج العمل وفق المادة 59 من القانون الألماني UrhG." },
};
export function GraffitiHistoricalImage({ id, locale }: { id: ImageId | undefined; locale: Locale }) {
  if (!id) return null;
  const image = images[id], c = image.copy[locale], l = labels[locale];
  const license = image.license === "Public domain" ? ({en:"Public domain",fr:"Domaine public",es:"Dominio público",ar:"الملك العام"}[locale]) : image.license;
  return <figure data-graffiti-image={id} className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
    <div className="mx-auto" style={{maxWidth: Math.min(image.width, image.height > image.width ? 680 : 1100)}}><LicensedEditorialImage src={image.src} alt={c.alt} width={image.width} height={image.height} /></div>
    <figcaption className="space-y-2 p-5 text-sm leading-6">
      <p>{c.caption}</p><p dir="auto"><a href={image.creditUrl} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">{{en:"Artwork",fr:"Œuvre",es:"Obra",ar:"العمل"}[locale]}: {image.artist}. {{en:"Photograph",fr:"Photographie",es:"Fotografía",ar:"الصورة"}[locale]}: {image.photographer}</a></p>
      <p className="text-xs text-white/75">{license}. {l.changes}</p>
      <p><a className="underline underline-offset-4" href={image.source} target="_blank" rel="noopener noreferrer">{l.source}</a>{" · "}<a className="underline underline-offset-4" href={image.licenseUrl} target="_blank" rel="license noopener noreferrer">{l.license}</a></p>
    </figcaption>
  </figure>;
}
