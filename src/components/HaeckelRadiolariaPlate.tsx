import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const text = {
  en: ["An illustrated plate of radiolarians with latticed shells and spines", "Radiolarians of the group Stephoidea, plate 71 of Ernst Haeckel’s Kunstformen der Natur (1904). Public domain.", "Image record"],
  fr: ["Planche de radiolaires à squelettes ajourés et épineux", "Radiolaires du groupe Stephoidea, planche 71 de Kunstformen der Natur, Ernst Haeckel (1904). Domaine public.", "Notice de l’image"],
  ar: ["لوحة لشعاعيات ذات هياكل شبكية وأشواك", "شعاعيات من مجموعة Stephoidea، اللوحة 71 من كتاب «أشكال الفن في الطبيعة» لإرنست هيكل (1904). الملك العام.", "سجل الصورة"],
  es: ["Lámina de radiolarios con esqueletos reticulados y espinas", "Radiolarios del grupo Stephoidea, lámina 71 de Kunstformen der Natur, Ernst Haeckel (1904). Dominio público.", "Ficha de la imagen"]
};

export function HaeckelRadiolariaPlate({ locale }: { locale: Locale }) {
  const [alt, caption, record] = text[locale];
  return (
    <figure data-haeckel-radiolaria-plate className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
      <LicensedEditorialImage src="/articles/ernst-haeckel-stephoidea-radiolaria-plate-71.webp" alt={alt} width={1050} height={1490} />
      <figcaption className="space-y-2 p-5 text-sm leading-6">
        <p>{caption}</p>
        <a className="underline underline-offset-4" href="https://commons.wikimedia.org/wiki/File:Haeckel_Stephoidea_edit.jpg">{record}</a>
      </figcaption>
    </figure>
  );
}
