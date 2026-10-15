import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import images from "@/data/teslaHistoricalImages.json";
import type { Locale } from "@/lib/i18n/routing";

type ImageId = keyof typeof images;
export const teslaImageAtBlock: Partial<Record<number, ImageId>> = {
  2: "portrait", 10: "motor", 18: "niagara", 22: "lab", 30: "colorado", 33: "tower",
};
const labels = {
  en: { source: "Image record", license: "Reuse terms", changes: "Resized and converted to WebP by PRESDA without further cropping or color alteration.", share: "This resized image remains available under CC BY-SA 4.0." },
  fr: { source: "Notice de l’image", license: "Conditions de réutilisation", changes: "Redimensionnement et conversion WebP par PRESDA, sans recadrage supplémentaire ni modification des couleurs.", share: "Cette image redimensionnée reste disponible sous CC BY-SA 4.0." },
  es: { source: "Ficha de la imagen", license: "Condiciones de reutilización", changes: "Redimensionada y convertida a WebP por PRESDA sin recortes adicionales ni alteración del color.", share: "Esta imagen redimensionada sigue disponible bajo CC BY-SA 4.0." },
  ar: { source: "سجل الصورة", license: "شروط إعادة الاستخدام", changes: "غيّرت PRESDA الحجم وحوّلت الملف إلى WebP من دون اقتصاص إضافي أو تعديل الألوان.", share: "تبقى هذه النسخة المعدلة الحجم متاحة بترخيص CC BY-SA 4.0." },
};
export function TeslaHistoricalImage({ id, locale }: { id: ImageId | undefined; locale: Locale }) {
  if (!id) return null;
  const image = images[id], c = image.copy[locale], l = labels[locale];
  const license = image.license === "Public domain" ? ({en:"Public domain",fr:"Domaine public",es:"Dominio público",ar:"الملك العام"}[locale]) : image.license;
  return <figure data-tesla-image={id} className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
    <div className="mx-auto" style={{maxWidth: Math.min(image.width, image.height > image.width ? 680 : 1100)}}><LicensedEditorialImage src={image.src} alt={c.alt} width={image.width} height={image.height} /></div>
    <figcaption className="space-y-2 p-5 text-sm leading-6">
      <p>{c.caption}</p><p dir="auto">{image.credit}</p>
      <p className="text-xs text-white/75">{license}. {l.changes} {image.license === "CC BY-SA 4.0" && l.share}</p>
      <p><a className="underline underline-offset-4" href={image.source} target="_blank" rel="noopener noreferrer">{l.source}</a>{" · "}<a className="underline underline-offset-4" href={image.licenseUrl} target="_blank" rel="license noopener noreferrer">{l.license}</a></p>
    </figcaption>
  </figure>;
}
