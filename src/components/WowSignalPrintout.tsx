import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: { alt: "Computer printout with 6EQUJ5 circled in red and the handwritten note Wow!", caption: "Scan of a copy of Big Ear’s August 15, 1977 computer printout. The six circled readings run down one receiver channel.", credit: "Big Ear Radio Observatory and North American AstroPhysical Observatory. Public domain.", record: "Archival record and reuse information" },
  fr: { alt: "Relevé informatique avec 6EQUJ5 entouré en rouge et la mention manuscrite Wow!", caption: "Numérisation d’une copie du relevé de Big Ear du 15 août 1977. Les six mesures entourées se lisent verticalement dans un même canal.", credit: "Observatoire Big Ear et North American AstroPhysical Observatory. Domaine public.", record: "Notice d’archive et conditions de réutilisation" },
  ar: { alt: "مطبوعة حاسوبية تحيط فيها دائرة حمراء بالسلسلة 6EQUJ5 وبجوارها كلمة Wow بخط اليد", caption: "مسح ضوئي لنسخة من مطبوعة بيغ إير المؤرخة في 15 أغسطس 1977. تظهر القراءات الست المحاطة بدائرة عمودياً في قناة استقبال واحدة.", credit: "مرصد بيغ إير والمرصد الفيزيائي الفلكي لأميركا الشمالية. الملك العام.", record: "سجل الأرشيف ومعلومات إعادة الاستخدام" },
  es: { alt: "Registro impreso con 6EQUJ5 rodeado en rojo y la anotación manuscrita Wow!", caption: "Escaneo de una copia del registro de Big Ear del 15 de agosto de 1977. Las seis lecturas rodeadas se suceden en vertical en un solo canal.", credit: "Big Ear Radio Observatory y North American AstroPhysical Observatory. Dominio público.", record: "Ficha de archivo y condiciones de reutilización" }
};

export function WowSignalPrintout({ locale }: { locale: Locale }) {
  const { alt, caption, credit, record } = copy[locale];
  return (
    <figure data-wow-signal-printout className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
      <LicensedEditorialImage src="/articles/wow-signal-1977-big-ear-printout.webp" alt={alt} width={1024} height={846} />
      <figcaption className="space-y-2 p-5 text-sm leading-6">
        <p>{caption}</p>
        <p className="text-xs text-white/75">{credit}</p>
        <a href="https://commons.wikimedia.org/wiki/File:Wow_signal_(large).jpg" className="underline underline-offset-4">{record}</a>
      </figcaption>
    </figure>
  );
}
