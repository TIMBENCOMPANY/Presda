import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import { getFeatureEvidence } from "@/data/featureEvidencePhotos";
export { getFeatureEvidence } from "@/data/featureEvidencePhotos";
import type { Locale } from "@/lib/i18n/routing";

const publicDomainLabel = { en: "Public domain", fr: "Domaine public", ar: "الملكية العامة", es: "Dominio público" };

export function FeatureEvidencePhoto({ photo, locale }: { photo: NonNullable<ReturnType<typeof getFeatureEvidence>>; locale: Locale }) {
  const caption = photo.captions[locale];
  return (
    <figure data-feature-evidence={photo.file} className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
      <div className="mx-auto" style={{ maxWidth: photo.width }}>
        <LicensedEditorialImage src={`/articles/${photo.localizedFiles?.[locale] ?? photo.file}`} alt={caption} width={photo.width} height={photo.height} />
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
