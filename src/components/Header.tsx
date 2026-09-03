"use client";

import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories } from "@/data/articles";
import { categoryLabels, toCategorySlug } from "@/lib/categories";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/articles/", label: "Articles" },
  { href: "/trending/", label: "Trending" },
  { href: "/world-cup-2026/", label: "World Cup 2026" },
  { href: "/contact/", label: "Contact" },
  { href: "/newsletter/", label: "Newsletter" }
];

const categoryMenuLinks = categories.map((category) => ({
  href: category === "World Cup 2026" ? "/world-cup-2026/" : `/category/${toCategorySlug(category)}/`,
  label: categoryLabels[category]
}));

function isActivePath(pathname: string | null, href: string) {
  if (!pathname) {
    return false;
  }

  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="home-header sticky top-0 z-50 overflow-visible border-b backdrop-blur-xl">
      <nav className="relative mx-3 grid min-h-[72px] max-w-[1510px] grid-cols-[auto_1fr_auto] items-center sm:mx-6 sm:min-h-[86px] 2xl:mx-auto">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="home-glass-control col-start-1 grid h-11 w-11 place-items-center rounded-full transition sm:h-14 sm:w-14"
          aria-label={open ? "Close categories menu" : "Open categories menu"}
          aria-expanded={open}
          aria-controls="presda-category-menu"
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.6} /> : <Menu className="h-5 w-5" strokeWidth={1.6} />}
        </button>

        <Link href="/" aria-label="PRESDA home" className="absolute left-1/2 top-1/2 z-10 grid h-14 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center sm:h-16 sm:w-24">
          <Image src="/presda-p-transparent.png" alt="PRESDA P logo" width={156} height={104} priority className="h-9 w-auto object-contain drop-shadow-[0_0_18px_rgba(255,26,26,0.45)] sm:h-12" />
        </Link>

        <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-end gap-1.5 sm:gap-3">
          <Link
            href="/articles/"
            className="home-glass-control hidden h-11 w-11 place-items-center rounded-full transition min-[460px]:grid sm:h-14 sm:w-14"
            aria-label="Search articles"
          >
            <Search className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
          </Link>
          <ThemeToggle variant="home" />
          <Link
            href="/contact/"
            className="hidden rounded-lg border border-[#ff1a1a]/35 bg-gradient-to-b from-[#ff1a1a] to-[#8f0012] px-4 py-3 font-display text-[10px] font-extrabold uppercase tracking-wide text-white shadow-[0_18px_42px_rgba(196,0,25,0.28)] transition hover:brightness-110 min-[540px]:inline-flex sm:px-7 sm:py-4 sm:text-xs"
          >
            Login
          </Link>
        </div>
      </nav>

      {open ? (
        <div id="presda-category-menu" className="absolute left-3 right-3 top-full z-50 pt-3 sm:left-6 sm:right-6">
          <div className="home-menu-panel mx-auto max-w-[1510px] rounded-2xl p-3 sm:p-4">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`home-menu-card rounded-xl px-4 py-3.5 font-display text-[11px] font-extrabold uppercase tracking-wide transition ${isActivePath(pathname, link.href) ? "home-menu-card-active" : ""}`}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {categoryMenuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`home-menu-link rounded-xl px-4 py-3 font-display text-[10px] font-extrabold uppercase tracking-wide transition sm:text-[11px] ${isActivePath(pathname, link.href) ? "home-menu-link-active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
