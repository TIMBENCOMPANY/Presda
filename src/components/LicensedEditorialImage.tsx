import variants from "@/data/editorialImageVariants.json";

// Static, locally generated variants preserve the licensed image's full aspect ratio.
export function LicensedEditorialImage({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  const files = (variants as Record<string, { width: number; src: string }[]>)[src];
  return (
    // Native srcset avoids a server image transform and unnecessary full-size mobile downloads.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={files?.[files.length - 1]?.src ?? src} srcSet={files?.map(file => `${file.src} ${file.width}w`).join(", ")} sizes={height > width ? "(max-width: 768px) calc(100vw - 64px), 680px" : "(max-width: 768px) calc(100vw - 64px), (max-width: 1200px) 800px, 1100px"} alt={alt} width={width} height={height} loading="lazy" decoding="async" className={`mx-auto h-auto w-full ${height > width ? "max-w-[680px]" : "max-w-[1100px]"}`} />
  );
}
