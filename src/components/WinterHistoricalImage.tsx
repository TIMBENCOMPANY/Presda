import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import images from "@/data/winterHistoricalImages.json";
import type { Locale } from "@/lib/i18n/routing";

type ImageId = keyof typeof images;
export const winterImageAtBlock: Partial<Record<number, ImageId>> = { 6: "swim", 10: "tail", 14: "care" };
const labels = {
  en: { source: "Source record", license: "Reuse terms", changes: "Resized and converted to WebP by PRESDA. Full composition preserved. These image versions retain the stated ShareAlike license." },
  fr: { source: "Notice originale", license: "Conditions de réutilisation", changes: "Redimensionnement et conversion WebP par PRESDA. Composition intégrale conservée. Ces versions restent sous la licence de partage à l’identique indiquée." },
  es: { source: "Registro original", license: "Condiciones de reutilización", changes: "Redimensionada y convertida a WebP por PRESDA. Composición completa conservada. Estas versiones mantienen la licencia CompartirIgual indicada." },
  ar: { source: "السجل الأصلي", license: "شروط إعادة الاستخدام", changes: "غيّرت PRESDA الحجم وحوّلت الملف إلى WebP مع الحفاظ على التكوين الكامل. تحتفظ هذه النسخ بترخيص المشاركة بالمثل المبين." },
};
export function WinterHistoricalImage({ id, locale }: { id: ImageId | undefined; locale: Locale }) {
  if (!id) return null;
  const image = images[id], c = image.copy[locale], l = labels[locale];
  const license = image.license === "Public domain" ? ({en:"Public domain",fr:"Domaine public",es:"Dominio público",ar:"الملك العام"}[locale]) : image.license;
  return <figure data-winter-image={id} className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
    <div className="mx-auto" style={{maxWidth: Math.min(image.width, image.height > image.width ? 680 : 1100)}}><LicensedEditorialImage src={image.src} alt={c.alt} width={image.width} height={image.height} /></div>
    <figcaption className="space-y-2 p-5 text-sm leading-6">
      <p>{c.caption}</p><p dir="auto"><a href={image.creditUrl} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">{image.credit}</a></p>
      <p className="text-xs text-white/75">{license}. {l.changes}</p>
      <p><a className="underline underline-offset-4" href={image.source} target="_blank" rel="noopener noreferrer">{l.source}</a>{" · "}<a className="underline underline-offset-4" href={image.licenseUrl} target="_blank" rel="license noopener noreferrer">{l.license}</a></p>
    </figcaption>
  </figure>;
}
