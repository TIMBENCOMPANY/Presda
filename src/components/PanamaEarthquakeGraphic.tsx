import Image from "next/image";
import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: {
    title: "Panama earthquake: the reviewed USGS record",
    labels: ["Moment magnitude", "Depth", "Origin time, UTC", "Epicenter coordinates"],
    values: ["7.7", "12.6 km", "17:56:06", "7.5868° N, 80.7690° W"],
    note: "October 9, 2026. Verification cutoff: 22:30 UTC. Event us6000u18k. Magnitude and intensity measure different things; reviewed values can change.",
    alt: "Official USGS ShakeMap showing estimated shaking across Panama and neighboring areas, with the epicenter near Pitaloza Arriba marked by a star",
    caption: "USGS ShakeMap, version 7, processed October 9 at 22:06:56 UTC. Colors estimate shaking intensity, not observed building losses. The star marks the epicenter. Native map labels and intensity legend are in English.",
    record: "Open the reviewed USGS event", map: "Open the official full-size map", source: "Source: USGS Earthquake Hazards Program"
  },
  fr: {
    title: "Séisme au Panama : les données révisées de l’USGS",
    labels: ["Magnitude de moment", "Profondeur", "Heure d’origine, UTC", "Coordonnées de l’épicentre"],
    values: ["7,7", "12,6 km", "17:56:06", "7,5868° N, 80,7690° O"],
    note: "9 octobre 2026. Vérification jusqu’à 22 h 30 UTC. Événement us6000u18k. Magnitude et intensité mesurent des choses différentes ; les données révisées peuvent évoluer.",
    alt: "ShakeMap officielle de l’USGS montrant l’intensité estimée au Panama et dans les régions voisines, avec une étoile près de Pitaloza Arriba",
    caption: "ShakeMap USGS, version 7, traitée le 9 octobre à 22 h 06 min 56 s UTC. Les couleurs estiment les secousses, pas les pertes constatées dans les bâtiments. L’étoile marque l’épicentre. Les noms et la légende d’origine sont en anglais.",
    record: "Voir l’événement révisé de l’USGS", map: "Voir la carte officielle en pleine taille", source: "Source : USGS Earthquake Hazards Program"
  },
  ar: {
    title: "زلزال بنما: بيانات USGS المراجعة",
    labels: ["قوة العزم", "العمق", "وقت الحدوث العالمي", "إحداثيات المركز"],
    values: ["7.7", "12.6 km", "17:56:06", "7.5868° N, 80.7690° W"],
    note: "9 أكتوبر 2026. التحقق حتى 22:30 بالتوقيت العالمي. الحدث us6000u18k. القوة وشدة الاهتزاز مقياسان مختلفان، وقد تتغير البيانات المراجعة.",
    alt: "خريطة الاهتزاز الرسمية لهيئة USGS لتقدير الشدة في بنما والمناطق المجاورة، مع نجمة لمركز الزلزال قرب بيتالوزا أريبا",
    caption: "خريطة USGS، الإصدار 7، عولجت في 9 أكتوبر عند 22:06:56 بالتوقيت العالمي. تقدر الألوان شدة الاهتزاز، لا خسائر المباني المرصودة. تحدد النجمة المركز. تبقى التسميات ومفتاح الشدة في الخريطة الأصلية بالإنجليزية.",
    record: "افتح سجل USGS المراجع", map: "افتح الخريطة الرسمية بحجمها الكامل", source: "المصدر: برنامج مخاطر الزلازل في USGS"
  },
  es: {
    title: "Terremoto en Panamá: el registro revisado del USGS",
    labels: ["Magnitud de momento", "Profundidad", "Hora de origen, UTC", "Coordenadas del epicentro"],
    values: ["7,7", "12,6 km", "17:56:06", "7,5868° N, 80,7690° O"],
    note: "9 de octubre de 2026. Verificación hasta las 22:30 UTC. Evento us6000u18k. Magnitud e intensidad miden cosas distintas; los valores revisados pueden cambiar.",
    alt: "ShakeMap oficial del USGS con la intensidad estimada en Panamá y zonas vecinas, y una estrella cerca de Pitaloza Arriba que marca el epicentro",
    caption: "ShakeMap USGS, versión 7, procesada el 9 de octubre a las 22:06:56 UTC. Los colores estiman las sacudidas, no pérdidas observadas en edificios. La estrella indica el epicentro. Los nombres y la leyenda originales están en inglés.",
    record: "Abrir el registro revisado del USGS", map: "Abrir el mapa oficial a tamaño completo", source: "Fuente: USGS Earthquake Hazards Program"
  }
};

export function PanamaEarthquakeGraphic({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <figure id="panama-earthquake-usgs-map" dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby="panama-earthquake-map-title" className="my-10 scroll-mt-28 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
    <figcaption id="panama-earthquake-map-title" className="font-display text-xl font-bold sm:text-2xl">{c.title}</figcaption>
    <p className="mt-3 text-sm leading-relaxed text-white/75">{c.note}</p>
    <dl className="my-5 grid gap-3 sm:grid-cols-2">
      {c.labels.map((label, i) => <div key={label} className="rounded-lg border border-white/15 p-4">
        <dt className="text-sm text-white/75">{label}</dt>
        <dd dir="ltr" className="mt-2 break-words font-display text-xl font-bold text-[#e9bd65]">{c.values[i]}</dd>
      </div>)}
    </dl>
    <a href="https://earthquake.usgs.gov/product/shakemap/us6000u18k/us/1791583708116/download/intensity.jpg" aria-label={c.map} className="mx-auto block max-w-[650px] rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9bd65]">
      <Image src="/maps/panama-usgs-shakemap-2026-10-09.jpg" alt={c.alt} width={812} height={954} unoptimized className="h-auto w-full rounded-lg" />
    </a>
    <p className="mt-4 text-sm leading-relaxed text-white/75">{c.caption}</p>
    <p className="mt-4 text-sm leading-relaxed">{c.source}. <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000u18k/executive" className="text-[#e9bd65] underline">{c.record}</a>. <a href="https://earthquake.usgs.gov/product/shakemap/us6000u18k/us/1791583708116/download/intensity.jpg" className="text-[#e9bd65] underline">{c.map}</a>.</p>
    <p className="mt-4 text-xs text-white/60">PRESDA Data Graphics</p>
  </figure>;
}
