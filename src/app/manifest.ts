import type { MetadataRoute } from "next";
import { defaultOgImage } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PRESDA",
    short_name: "PRESDA",
    start_url: "/",
    display: "browser",
    background_color: "#000000",
    icons: [{ src: defaultOgImage, sizes: "1254x1254", type: "image/png", purpose: "any" }]
  };
}
