import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "fr" | "ar" | "es";
const documents = {
  napoleon: {
    file: "gillray-plumb-pudding-1805-met-public-domain.webp", width: 1200, height: 867,
    source: "https://www.metmuseum.org/art/collection/search/367748",
    credit: "James Gillray / The Metropolitan Museum of Art",
    alt: {
      en: "Gillray’s 1805 caricature of Napoleon and William Pitt carving a globe-shaped pudding.",
      fr: "Caricature de 1805 de Gillray : Napoléon et William Pitt découpent un pudding en forme de globe.",
      ar: "كاريكاتير غيلراي عام 1805 لنابليون ووليام بيت وهما يقسمان حلوى على شكل الكرة الأرضية.",
      es: "Caricatura de Gillray de 1805: Napoleón y William Pitt cortan un pudín con forma de globo."
    },
    caption: {
      en: "The Plumb-pudding in danger (1805). Gillray’s Napoleon is a political caricature, not a measured record of his height. Public domain.",
      fr: "The Plumb-pudding in danger (1805). Le Napoléon de Gillray est une caricature politique, pas un relevé de sa taille. Domaine public.",
      ar: "The Plumb-pudding in danger (1805). نابليون هنا شخصية في هجاء سياسي، وليس سجلاً مقاساً لطوله. ملكية عامة.",
      es: "The Plumb-pudding in danger (1805). El Napoleón de Gillray es una caricatura política, no una medición de su estatura. Dominio público."
    }
  },
  monalisa: {
    file: "mona-lisa-documentary-reproduction.webp", width: 960, height: 1431,
    source: "https://commons.wikimedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg",
    credit: "Leonardo da Vinci; C2RMF / Wikimedia Commons (retouched digital reproduction)",
    alt: {
      en: "Digital reproduction of Leonardo da Vinci’s Mona Lisa, showing the seated sitter and landscape.",
      fr: "Reproduction numérique de La Joconde de Léonard de Vinci, avec le modèle assis devant un paysage.",
      ar: "نسخة رقمية من لوحة الموناليزا لليوناردو دا فينشي، تظهر المرأة جالسة أمام منظر طبيعي.",
      es: "Reproducción digital de la Mona Lisa de Leonardo da Vinci, con la modelo sentada ante un paisaje."
    },
    caption: {
      en: "The painting itself, shown here as a retouched digital reproduction. This documentary image is distinct from the conceptual hero illustration. Public domain.",
      fr: "Le tableau lui-même, présenté dans une reproduction numérique retouchée. Cette image documentaire se distingue du visuel conceptuel d’ouverture. Domaine public.",
      ar: "اللوحة نفسها في نسخة رقمية منقحة. تختلف هذه الصورة التوثيقية عن الرسم التصوري في افتتاح المقال. ملكية عامة.",
      es: "El cuadro, presentado en una reproducción digital retocada. Esta imagen documental se distingue de la ilustración conceptual de cabecera. Dominio público."
    }
  }
};

export function HistorySportNov06Document({ slug, locale }: { slug: string; locale: Locale }) {
  const d = slug.startsWith("napoleon-") ? documents.napoleon : documents.monalisa;
  const canonical = `https://presda.com${locale === "en" ? "" : `/${locale}`}/articles/${slug}/`;
  const image = `https://presda.com/articles/${d.file}`;
  const license = "https://creativecommons.org/publicdomain/mark/1.0/";
  const labels = { en: ["Source", "Public domain"], fr: ["Source", "Domaine public"], ar: ["المصدر", "ملكية عامة"], es: ["Fuente", "Dominio público"] }[locale];
  return <figure data-history-sport-document className="my-8">
    <Link href={canonical} className={`mx-auto block ${d === documents.monalisa ? "max-w-[480px]" : "max-w-[900px]"}`}>
      <Image src={`/articles/${d.file}`} alt={d.alt[locale]} width={d.width} height={d.height} unoptimized loading="lazy" className="h-auto w-full rounded-xl" />
    </Link>
    <figcaption className="mt-3 text-sm leading-relaxed text-[color:var(--home-muted)]">
      {d.caption[locale]} <span>{d.credit}.</span>{" "}
      <a href={d.source} className="underline" rel="noopener noreferrer">{labels[0]}</a>{" · "}
      <a href={license} className="underline" rel="noopener noreferrer">{labels[1]}</a>
    </figcaption>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "ImageObject", "@id": `${canonical}#documentary-image`,
      contentUrl: image, url: image, width: d.width, height: d.height, caption: d.caption[locale],
      creditText: d.credit, license, acquireLicensePage: d.source, mainEntityOfPage: canonical
    }).replace(/</g, "\\u003c") }} />
  </figure>;
}
