import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: { hero: "AI artistic reconstruction supplied for this feature. The palace, people and ceremony are imagined, not documentary evidence of the 1414 presentation.", alt: "Historical Chinese silk painting of a tall giraffe with geometric patches and two small keepers, from The Met", caption: "Giraffe with Two Keepers. Unidentified Chinese artist, seventeenth century or later; Qing dynasty. Ink and color on silk. A later depiction of the subject, not an eyewitness image from 1414.", credit: "The Metropolitan Museum of Art, 47.18.21. From the Collection of A. W. Bahr, Purchase, Fletcher Fund, 1947.", rights: "Public domain / CC0, The Met Open Access. Resized and converted to WebP without cropping or color alteration.", source: "Museum record", license: "Reuse policy" },
  fr: { hero: "Reconstitution artistique par IA fournie pour cet article. Palais, personnages et cérémonie sont imaginés ; ils ne documentent pas la présentation de 1414.", alt: "Peinture chinoise ancienne sur soie montrant une grande girafe aux motifs géométriques et deux petits gardiens, collection du Met", caption: "Girafe avec deux gardiens. Artiste chinois non identifié, XVIIe siècle ou après ; dynastie Qing. Encre et couleurs sur soie. Représentation ultérieure, pas une image de témoin de 1414.", credit: "The Metropolitan Museum of Art, 47.18.21. Collection A. W. Bahr, achat, Fletcher Fund, 1947.", rights: "Domaine public / CC0, Open Access du Met. Redimensionnement et conversion WebP, sans recadrage ni modification des couleurs.", source: "Notice du musée", license: "Conditions de réutilisation" },
  es: { hero: "Reconstrucción artística con IA proporcionada para este artículo. El palacio, las personas y la ceremonia son imaginarios, no documentación de la presentación de 1414.", alt: "Pintura china histórica sobre seda con una jirafa alta de manchas geométricas y dos pequeños cuidadores, colección del Met", caption: "Jirafa con dos cuidadores. Artista chino no identificado, siglo XVII o posterior; dinastía Qing. Tinta y color sobre seda. Representación posterior, no imagen testimonial de 1414.", credit: "The Metropolitan Museum of Art, 47.18.21. Colección de A. W. Bahr, compra, Fletcher Fund, 1947.", rights: "Dominio público / CC0, Open Access del Met. Redimensionada y convertida a WebP sin recorte ni alteración del color.", source: "Ficha del museo", license: "Política de reutilización" },
  ar: { hero: "تصور فني مولد بالذكاء الاصطناعي ومقدم لهذا المقال. القصر والشخصيات والمراسم متخيلة، وليست أدلة توثق تقديم الزرافة سنة 1414.", alt: "لوحة صينية تاريخية على الحرير لزرافة طويلة ذات بقع هندسية وحارسين صغيرين من مجموعة متحف المتروبوليتان", caption: "زرافة مع حارسين. فنان صيني مجهول، القرن السابع عشر أو بعده، من عهد أسرة تشينغ. حبر وألوان على حرير. معالجة لاحقة للموضوع، وليست صورة شاهد عيان من سنة 1414.", credit: "متحف المتروبوليتان للفنون، 47.18.21. من مجموعة أ. و. بار، شراء بتمويل صندوق فليتشر، 1947.", rights: "الملك العام / CC0، برنامج الوصول المفتوح في المتروبوليتان. تغيير الحجم والتحويل إلى WebP من دون اقتصاص أو تعديل الألوان.", source: "سجل المتحف", license: "سياسة إعادة الاستخدام" }
};

export function GiraffeHeroCaption({ locale }: { locale: Locale }) {
  return <p className="mt-3 text-xs leading-relaxed text-[color:var(--home-muted)]">{copy[locale].hero}</p>;
}

export function GiraffeMuseumImage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <figure data-giraffe-museum-image className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
    <div className="mx-auto" style={{ maxWidth: 680 }}><LicensedEditorialImage src="/articles/giraffe-china/met-giraffe-two-keepers.webp" alt={c.alt} width={2185} height={3689} /></div>
    <figcaption className="space-y-2 p-5 text-sm leading-6">
      <p>{c.caption}</p><p>{c.credit}</p><p className="text-xs text-white/75">{c.rights}</p>
      <p><a className="underline underline-offset-4" href="https://www.metmuseum.org/art/collection/search/51649" target="_blank" rel="noopener noreferrer">{c.source}</a>{" · "}<a className="underline underline-offset-4" href="https://www.metmuseum.org/hubs/open-access" target="_blank" rel="noopener noreferrer">{c.license}</a></p>
    </figcaption>
  </figure>;
}
