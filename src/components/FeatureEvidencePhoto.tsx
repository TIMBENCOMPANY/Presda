import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const publicDomain = "https://creativecommons.org/publicdomain/mark/1.0/";

const evidence = {
  "uae-hope-probe-first-arab-mars-mission": {
    afterBlock: 20,
    file: "deimos-hirise-nasa-2009.jpg",
    width: 1505,
    height: 772,
    source: "https://science.nasa.gov/photojournal/martian-moon-deimos-in-high-resolution/",
    credit: "NASA/JPL-Caltech/University of Arizona",
    license: null,
    captions: {
      en: "Colour-enhanced views of Deimos from NASA’s Mars Reconnaissance Orbiter, photographed by HiRISE on February 21, 2009.",
      fr: "Vues de Déimos en couleurs renforcées, prises par HiRISE à bord de la sonde Mars Reconnaissance Orbiter le 21 février 2009.",
      ar: "صورتان بألوان محسّنة لديموس التقطتهما كاميرا هايرايز على متن مركبة الاستطلاع المريخية التابعة لناسا في 21 فبراير 2009.",
      es: "Vistas de Deimos con el color realzado, tomadas por HiRISE desde la Mars Reconnaissance Orbiter de la NASA el 21 de febrero de 2009."
    }
  },
  "72-days-andes-flight-571-survival": {
    afterBlock: 6,
    file: "andes-flight-571-crash-memorial-2006.jpg",
    width: 2048,
    height: 1536,
    source: "https://commons.wikimedia.org/wiki/File:Crash_site.JPG",
    credit: "BoomerKC / Wikimedia Commons",
    license: publicDomain,
    captions: {
      en: "The memorial at the Flight 571 crash site, photographed in 2006 with the Andes in the background.",
      fr: "Le mémorial du vol 571, photographié en 2006 sur le lieu de l’accident, avec les Andes en arrière-plan.",
      ar: "النصب التذكاري للرحلة 571 في موقع التحطم، في صورة من عام 2006 تظهر جبال الأنديز في الخلفية.",
      es: "El monumento en el lugar del accidente del vuelo 571, fotografiado en 2006 con los Andes al fondo."
    }
  },
  "1904-olympic-marathon-st-louis": {
    afterBlock: 14,
    file: "thomas-hicks-1904-olympic-report.jpg",
    width: 319,
    height: 358,
    source: "https://commons.wikimedia.org/wiki/File:1904_Thomas_J_Hicks.jpg",
    credit: "1904 Olympic report / Wikimedia Commons",
    license: publicDomain,
    captions: {
      en: "Thomas J. Hicks at the 1904 Olympic Games, reproduced from the contemporary Olympic report.",
      fr: "Thomas J. Hicks aux Jeux olympiques de 1904, d’après le rapport olympique de l’époque.",
      ar: "توماس ج. هيكس في أولمبياد 1904، في صورة منشورة في التقرير الأولمبي المعاصر.",
      es: "Thomas J. Hicks en los Juegos Olímpicos de 1904, en una imagen del informe olímpico de la época."
    }
  }
};

const publicDomainLabel = { en: "Public domain", fr: "Domaine public", ar: "الملكية العامة", es: "Dominio público" };

export function getFeatureEvidence(slug: string, index: number) {
  const item = evidence[slug as keyof typeof evidence];
  return item?.afterBlock === index ? item : undefined;
}

export function FeatureEvidencePhoto({ photo, locale }: { photo: NonNullable<ReturnType<typeof getFeatureEvidence>>; locale: Locale }) {
  const caption = photo.captions[locale];
  return (
    <figure data-feature-evidence={photo.file} className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
      <div className="mx-auto" style={{ maxWidth: photo.width }}>
        <LicensedEditorialImage src={`/articles/${photo.file}`} alt={caption} width={photo.width} height={photo.height} />
      </div>
      <figcaption className="p-5 text-sm leading-6">
        <p>{caption}</p>
        <p>
          <a className="underline" href={photo.source}>{photo.credit}</a>
          {photo.license && <> · <a className="underline" href={photo.license} rel="license">{publicDomainLabel[locale]}</a></>}
        </p>
      </figcaption>
    </figure>
  );
}
