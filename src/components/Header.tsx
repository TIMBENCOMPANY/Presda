"use client";

import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/articles";
import { categoryLabels, toCategorySlug } from "@/lib/categories";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/category/ai/", label: "AI" },
  { href: "/category/business/", label: "Business" },
  { href: "/category/sport/", label: "Sport" },
  { href: "/world-cup-2026/", label: "World Cup 2026" },
  { href: "/category/world/", label: "World" },
  { href: "/category/paparazzi/", label: "Paparazzi" },
  { href: "/category/lifestyle/", label: "Lifestyle" },
  { href: "/contact/", label: "Contact" },
  { href: "/newsletter/", label: "Newsletter" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/85 backdrop-blur-xl">
      <nav className="mx-auto grid min-h-20 w-[min(1500px,calc(100%-32px))] grid-cols-[auto_1fr_auto] items-center gap-5">
        <Link href="/" className="flex flex-col" aria-label="PRESDA home">
          <Image src="/logo-dark.png" alt="PRESDA official logo for dark mode" width={188} height={58} priority className="theme-logo-dark h-auto w-40 sm:w-44" />
          <Image src="/logo-light.png" alt="PRESDA official logo for light mode" width={188} height={58} priority className="theme-logo-light h-auto w-40 sm:w-44" />
        </Link>

        <div className="hidden items-center justify-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-display text-xs font-black uppercase tracking-wide text-[color:var(--muted)] transition hover:text-[#FF1A1A]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/articles"
            className="hidden h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A] sm:grid"
            aria-label="Search articles"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </Link>
          <ThemeToggle />
          <Link
            href="/#newsletter"
            className="hidden rounded-lg bg-[#FF1A1A] px-5 py-3 font-display text-xs font-black uppercase tracking-wide text-white transition hover:bg-red-500 md:inline-flex"
          >
            Subscribe
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A] lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--bg)] p-4 lg:hidden">
          <div className="mx-auto grid w-[min(1500px,100%)] gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-4 font-display text-xs font-black uppercase tracking-wide text-[color:var(--muted)]">
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Link key={category} href={`/category/${toCategorySlug(category)}`} onClick={() => setOpen(false)} className="rounded-lg border border-[color:var(--border)] px-4 py-3 text-xs font-bold uppercase text-[color:var(--muted)]">
                  {categoryLabels[category]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
