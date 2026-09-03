import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        presda: {
          red: "#d60000",
          hot: "#ff1a1a",
          ink: "#030303",
          charcoal: "#0a0a0c",
          panel: "#121215"
        }
      },
      fontFamily: {
        display: ["var(--font-article-display)", "var(--font-inter)", "Arial", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 32px rgba(214,0,0,.36)",
        poster: "0 28px 90px rgba(0,0,0,.75)"
      },
      backgroundImage: {
        "red-vignette": "radial-gradient(circle at top right, rgba(214,0,0,.24), transparent 30%), linear-gradient(135deg, #070707, #000)"
      }
    }
  },
  plugins: []
};

export default config;
