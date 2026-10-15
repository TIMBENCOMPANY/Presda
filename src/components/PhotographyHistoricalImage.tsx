import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import images from "@/data/photographyHistoricalImages.json";
import type { Locale } from "@/lib/i18n/routing";

type ImageId = keyof typeof images;
export const photographyImageAtBlock: Partial<Record<number, ImageId>> = {
  6: "niepce", 10: "daguerre", 20: "kodak", 27: "film", 34: "digital",
};
const labels = {
  en: { source: "Image record", license: "Reuse terms", changes: "Resized and converted to WebP by PRESDA without further cropping or color alteration.", share: "This resized image remains available under CC BY-SA 3.0." },
  fr: { source: "Notice de l’image", license: "Conditions de réutilisation", changes: "Redimensionnement et conversion WebP par PRESDA, sans recadrage supplémentaire ni modification des couleurs.", share: "Cette image redimensionnée reste disponible sous CC BY-SA 3.0." },
  es: { source: "Ficha de la imagen", license: "Condiciones de reutilización", changes: "Redimensionada y convertida a WebP por PRESDA sin recortes adicionales ni alteración del color.", share: "Esta imagen redimensionada sigue disponible bajo CC BY-SA 3.0." },
  ar: { source: "سجل الصورة", license: "شروط إعادة الاستخدام", changes: "غيّرت PRESDA الحجم وحوّلت الملف إلى WebP من دون اقتصاص إضافي أو تعديل الألوان.", share: "تبقى هذه النسخة المعدلة الحجم متاحة بترخيص CC BY-SA 3.0." },
};
const rights = {
  en: { daguerre: "Public-domain dedication by the photographer", film: "US public domain; Library of Congress: no known restrictions on publication" },
  fr: { daguerre: "Versement au domaine public par le photographe", film: "Domaine public aux États-Unis ; Bibliothèque du Congrès : aucune restriction de publication connue" },
  es: { daguerre: "Dedicación al dominio público por el fotógrafo", film: "Dominio público en Estados Unidos; Biblioteca del Congreso: sin restricciones conocidas de publicación" },
  ar: { daguerre: "إتاحة في الملك العام من صاحب حقوق الصورة", film: "الملك العام في الولايات المتحدة؛ مكتبة الكونغرس: لا قيود معروفة على النشر" },
};
export function PhotographyHistoricalImage({ id, locale }: { id: ImageId | undefined; locale: Locale }) {
  if (!id) return null;
  const image = images[id], c = image.copy[locale], l = labels[locale];
  const license = id === "daguerre" || id === "film" ? rights[locale][id] : image.license;
  return <figure data-photography-image={id} className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
    <LicensedEditorialImage src={image.src} alt={c.alt} width={image.width} height={image.height} />
    <figcaption className="space-y-2 p-5 text-sm leading-6">
      <p>{c.caption}</p><p dir="auto">{image.credit}</p>
      <p className="text-xs text-white/75">{license}. {l.changes} {id === "digital" && l.share}</p>
      <p><a className="underline underline-offset-4" href={image.source} target="_blank" rel="noopener noreferrer">{l.source}</a>{" · "}<a className="underline underline-offset-4" href={image.licenseUrl} target="_blank" rel="license noopener noreferrer">{l.license}</a></p>
    </figcaption>
  </figure>;
}
