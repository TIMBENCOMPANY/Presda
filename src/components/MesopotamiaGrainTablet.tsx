import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: {
    alt: "Rounded clay tablet bearing rows of impressed signs and numerical marks",
    caption: "Sumerian account of malt and barley groats, probably from Uruk, ca. 3100–2900 BCE.",
    credit: "The Metropolitan Museum of Art, Raymond and Beverly Sackler Gift, 1988, object 1988.433.3. Public domain (CC0).",
    record: "Museum record"
  },
  fr: {
    alt: "Tablette d’argile arrondie portant des rangées de signes et de marques numériques",
    caption: "Compte sumérien de malt et de gruau d’orge, probablement d’Uruk, vers 3100–2900 av. notre ère.",
    credit: "Metropolitan Museum of Art, don Raymond et Beverly Sackler, 1988, objet 1988.433.3. Domaine public (CC0).",
    record: "Notice du musée"
  },
  ar: {
    alt: "لوح طيني مستدير الحواف تظهر عليه صفوف من العلامات المحفورة والرموز العددية",
    caption: "سجل سومري للشعير المُملّت والجريش، يُرجح أنه من أوروك، نحو 3100 إلى 2900 قبل الميلاد.",
    credit: "متحف المتروبوليتان للفنون، هبة ريموند وبيفرلي ساكلر، 1988، القطعة 1988.433.3. الملك العام (CC0).",
    record: "سجل المتحف"
  },
  es: {
    alt: "Tablilla de arcilla con bordes redondeados y filas de signos y marcas numéricas impresos",
    caption: "Cuenta sumeria de malta y cebada triturada, probablemente de Uruk, ca. 3100–2900 a. C.",
    credit: "Metropolitan Museum of Art, donación de Raymond y Beverly Sackler, 1988, objeto 1988.433.3. Dominio público (CC0).",
    record: "Ficha del museo"
  }
};

export function MesopotamiaGrainTablet({ locale }: { locale: Locale }) {
  const { alt, caption, credit, record } = copy[locale];
  return (
    <figure data-mesopotamia-grain-tablet className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
      <LicensedEditorialImage src="/articles/mesopotamia-sumerian-grain-tablet-met-1988-433-3.webp" alt={alt} width={1100} height={1467} />
      <figcaption className="space-y-2 p-5 text-sm leading-6">
        <p>{caption}</p>
        <p className="text-xs text-white/75">{credit}</p>
        <a href="https://www.metmuseum.org/art/collection/search/327385" className="underline underline-offset-4">{record}</a>
      </figcaption>
    </figure>
  );
}
