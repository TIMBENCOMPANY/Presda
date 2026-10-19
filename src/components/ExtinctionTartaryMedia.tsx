import media from "@/data/extinctionTartaryMedia.json";
import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

export function ExtinctionTartaryImage({ id, locale }: { id: string; locale: Locale }) {
  const item = media.find(image => image.id === id);
  if (!item) return null;
  const copy = item.copy[locale];
  const labels = {
    en: ["Source and rights", "Resized and converted to WebP; no cropping or content changes."],
    fr: ["Source et droits", "Redimensionnement et conversion WebP, sans recadrage ni modification du contenu."],
    es: ["Fuente y derechos", "Redimensionada y convertida a WebP, sin recorte ni cambios de contenido."],
    ar: ["المصدر والحقوق", "أعيد تحجيم الصورة وتحويلها إلى WebP دون قص أو تعديل المحتوى."],
  }[locale];
  return <figure data-extinction-tartary-image={id} className="my-8 overflow-hidden rounded-xl border border-white/10 bg-white/[0.025]">
    <div className="mx-auto" style={{ maxWidth: Math.min(item.width, item.height > item.width ? 680 : 1100) }}>
      <LicensedEditorialImage src={item.src} width={item.width} height={item.height} alt={copy.alt} />
    </div>
    <figcaption className="space-y-2 p-4 text-xs leading-relaxed text-[color:var(--home-muted)] sm:p-5 sm:text-sm">
      <p>{copy.caption}</p>
      <p>{item.credit}. <a href={item.source} className="underline underline-offset-4">{labels[0]}</a>. <a href={item.licenseUrl} className="underline underline-offset-4">{item.license}</a>.</p>
      <p>{labels[1]}</p>
    </figcaption>
  </figure>;
}

