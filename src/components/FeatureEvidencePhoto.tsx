import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const publicDomain = "https://creativecommons.org/publicdomain/mark/1.0/";

type EvidencePhoto = {
  afterBlock: number;
  file: string;
  width: number;
  height: number;
  source: string;
  credit: string;
  license: string | null;
  licenseLabel?: string;
  captions: Record<Locale, string>;
};

const evidence: Partial<Record<string, EvidencePhoto>> = {
  "rapa-nui-moai-statues-mystery": {
    afterBlock: 8,
    file: "rano-raraku-unfinished-moai-lbm1948.jpg",
    width: 2144,
    height: 1424,
    source: "https://commons.wikimedia.org/wiki/File:Rano_Raraku_04.jpg",
    credit: "LBM1948 / Wikimedia Commons",
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
    licenseLabel: "CC BY-SA 4.0",
    captions: {
      en: "An unfinished moai in the volcanic rock of the Rano Raraku quarry, Rapa Nui.",
      fr: "Un moaï inachevé dans la roche volcanique de la carrière de Rano Raraku, à Rapa Nui.",
      ar: "تمثال مواي غير مكتمل في الصخر البركاني بمحجر رانو راراكو في رابا نوي.",
      es: "Un moái inacabado en la roca volcánica de la cantera de Rano Raraku, Rapa Nui."
    }
  },
  "kukur-tihar-nepal-festival-honoring-dogs": {
    afterBlock: 7,
    file: "kukur-tihar-ritesh-man-tamrakar-2013.jpg",
    width: 2400,
    height: 3000,
    source: "https://commons.wikimedia.org/wiki/File:Kukur_Tihar.jpg",
    credit: "Ritesh Man Tamrakar / Wikimedia Commons",
    license: "https://creativecommons.org/licenses/by-sa/2.0/",
    licenseLabel: "CC BY-SA 2.0",
    captions: {
      en: "A black-and-white dog with a red tika and an orange flower garland during Kukur Tihar, photographed on November 2, 2013.",
      fr: "Un chien noir et blanc portant un tika rouge et une guirlande orange pour Kukur Tihar, photographié le 2 novembre 2013.",
      ar: "كلب أسود وأبيض يضع علامة تيكا حمراء وإكليلاً برتقالياً خلال كوكور تيهار، في صورة من 2 نوفمبر 2013.",
      es: "Un perro blanco y negro con una tika roja y una guirnalda naranja durante Kukur Tihar, el 2 de noviembre de 2013."
    }
  },
  "chandrayaan-3-india-historic-moon-landing": {
    afterBlock: 9,
    file: "chandrayaan-3-vikram-lroc-2023.png",
    width: 1100,
    height: 1100,
    source: "https://lroc.im-ldi.com/posts/1314",
    credit: "NASA/GSFC/Arizona State University",
    license: publicDomain,
    captions: {
      en: "Vikram’s landing site imaged by the Lunar Reconnaissance Orbiter Camera on August 27, 2023. The lander is near the centre.",
      fr: "Le site de Vikram photographié par la caméra de Lunar Reconnaissance Orbiter le 27 août 2023. L’atterrisseur est près du centre.",
      ar: "موقع هبوط فيكرام كما صورته كاميرا مركبة الاستطلاع القمرية في 27 أغسطس 2023. وتظهر المركبة قرب منتصف الصورة.",
      es: "Lugar de aterrizaje de Vikram fotografiado por la cámara de Lunar Reconnaissance Orbiter el 27 de agosto de 2023. El módulo está cerca del centro."
    }
  },
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
  const item = evidence[slug];
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
          {photo.license && <> · <a className="underline" href={photo.license} rel="license">{photo.licenseLabel ?? publicDomainLabel[locale]}</a></>}
        </p>
      </figcaption>
    </figure>
  );
}
