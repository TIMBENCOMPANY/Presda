import { Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/articles";
import { categoryLabels, toCategorySlug } from "@/lib/categories";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[color:var(--border)]">
      <div className="mx-auto grid w-[min(1500px,calc(100%-32px))] gap-10 py-12 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image src="/logo-dark.png" alt="PRESDA official logo for dark mode" width={188} height={58} className="theme-logo-dark h-auto w-44" />
          <Image src="/logo-light.png" alt="PRESDA official logo for light mode" width={188} height={58} className="theme-logo-light h-auto w-44" />
          <p className="mt-5 max-w-md leading-7 text-[color:var(--muted)]">
            PRESDA is a futuristic premium news platform built for clean reporting, visual context, and fast-moving digital culture.
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-black uppercase tracking-[0.18em]">Categories</h3>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <Link key={category} href={`/category/${toCategorySlug(category)}`} className="text-sm text-[color:var(--muted)] transition hover:text-[#FF1A1A]">
                {categoryLabels[category]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-sm font-black uppercase tracking-[0.18em]">Social</h3>
          <div className="mt-5 flex gap-3">
            <a href="https://www.instagram.com/presdaofficial" target="_blank" rel="noopener noreferrer" aria-label="PRESDA on Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]">
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="https://x.com/PresdaOfficial" target="_blank" rel="noopener noreferrer" aria-label="PRESDA on X" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] font-display text-xs font-black transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]">
              X
            </a>
            <a href="https://www.facebook.com/profile.php?id=61589635535583" target="_blank" rel="noopener noreferrer" aria-label="PRESDA on Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]">
              <Facebook className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="mailto:contact@presda.com" aria-label="Email PRESDA" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]">
              <Mail className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
          <p className="mt-5 text-sm text-[color:var(--muted)]">contact@presda.com</p>
        </div>
      </div>
    </footer>
  );
}
