import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const photos = {
  finca: {
    src: "/articles/diquis-finca-6-stone-spheres-in-situ.webp",
    credit: "Diego Padilla Durán and Mario Roberto Durán Ortiz",
    source: "https://commons.wikimedia.org/wiki/File:Diquis_Stone_Spheres_in_situ_Finca_6_CR_12_2020.jpg"
  },
  museum: {
    src: "/articles/diquis-stone-spheres-national-museum-costa-rica.webp",
    credit: "Mario Roberto Durán Ortiz",
    source: "https://commons.wikimedia.org/wiki/File:Alignment_Diquis_Stone_Spheres_Museo_Nacional_CRI_01_2020_1855.jpg"
  }
};

const copy = {
  en: { finca: "Diquís stone spheres in their archaeological setting at Finca 6, Palmar Sur.", museum: "Diquís stone spheres of different sizes in a modern museum display in San José.", changes: "Resized and converted to WebP. This version is available under CC BY-SA 4.0.", record: "Photo record" },
  fr: { finca: "Sphères du Diquís dans leur contexte archéologique à Finca 6, Palmar Sur.", museum: "Sphères du Diquís de tailles différentes dans une présentation moderne à San José.", changes: "Image redimensionnée et convertie en WebP, disponible sous CC BY-SA 4.0.", record: "Notice de la photo" },
  ar: { finca: "كرات ديكيس الحجرية في سياقها الأثري بفِينكا 6 في بالمار سور.", museum: "كرات ديكيس الحجرية بأحجام مختلفة في عرض متحفي حديث في سان خوسيه.", changes: "غُيّر الحجم وحُوّلت الصورة إلى WebP. هذه النسخة متاحة بترخيص CC BY-SA 4.0.", record: "سجل الصورة" },
  es: { finca: "Esferas del Diquís en su contexto arqueológico en Finca 6, Palmar Sur.", museum: "Esferas del Diquís de distintos tamaños en una exposición moderna en San José.", changes: "Imagen redimensionada y convertida a WebP, disponible bajo CC BY-SA 4.0.", record: "Ficha de la fotografía" }
};

export function DiquisEvidencePhoto({ photo, locale }: { photo: keyof typeof photos; locale: Locale }) {
  const { src, credit, source } = photos[photo];
  const text = copy[locale];
  return (
    <figure data-diquis-evidence={photo} className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
      <LicensedEditorialImage src={src} alt={text[photo]} width={1200} height={800} />
      <figcaption className="space-y-2 p-5 text-sm leading-6">
        <p>{text[photo]}</p>
        <p dir="auto">{credit}</p>
        <p className="text-xs text-white/75">{text.changes}</p>
        <p><a className="underline underline-offset-4" href={source}>{text.record}</a>{" · "}<a className="underline underline-offset-4" href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a></p>
      </figcaption>
    </figure>
  );
}
