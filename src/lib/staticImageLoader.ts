"use client";

import manifest from "./image-manifest.generated.json";
import type { ImageLoaderProps } from "next/image";

// The generated tuple shape is validated for every entry by test-image-policy.cjs.
const images = manifest as unknown as Record<string, [number, string][]>;

/** One URL per source/width, independent of page, locale or component quality. */
export default function staticImageLoader({ src, width }: ImageLoaderProps) {
  const variants = images[src];
  if (!variants?.length) return src;
  return (variants.find(([candidate]) => candidate >= width) ?? variants[variants.length - 1])[1];
}
