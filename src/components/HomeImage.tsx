"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/** Keep home images visible when Vercel cannot serve an optimized variant. */
export function HomeImage({ src, alt, unoptimized, onError, ...props }: ImageProps) {
  const [failedSource, setFailedSource] = useState<ImageProps["src"] | null>(null);
  return <Image {...props} src={src} alt={alt} unoptimized={unoptimized || failedSource === src} onError={event => {
    setFailedSource(src);
    onError?.(event);
  }} />;
}
