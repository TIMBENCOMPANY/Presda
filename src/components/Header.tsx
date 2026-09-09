"use client";

import { Info, Mail, Menu, Newspaper, Search, UserPlus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { categoryLabels, toCategorySlug } from "@/lib/categories";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/about/", label: "About Us", icon: Info },
  { href: "/contact/", label: "Contact Us", icon: Mail },
  { href: "/contact/", label: "Join Us", icon: UserPlus },
  { href: "/newsletter/", label: "Newsletter", icon: Newspaper }
];

const homepageCategoryLinks = ["World", "Sport", "Business", "AI", "Science", "History", "Lifestyle", "Paparazzi"] as const;

function isActivePath(pathname: string | null, href: string) {
  if (!pathname) {
    return false;
  }

  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

export function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<number | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (headerRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  function isDesktopHover() {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function clearCloseTimer() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openMenuOnHover() {
    if (!isDesktopHover()) return;
    clearCloseTimer();
    setOpen(true);
  }

  function closeMenuAfterLeave() {
    if (!isDesktopHover()) return;
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(false), 200);
  }

  function toggleMenu() {
    clearCloseTimer();
    setOpen((value) => !value);
  }

  return (
    <header ref={headerRef} className="home-header sticky top-0 z-50 overflow-visible border-b backdrop-blur-xl" onMouseEnter={clearCloseTimer} onMouseLeave={closeMenuAfterLeave}>
      <nav className="relative mx-3 grid min-h-[72px] max-w-[1510px] grid-cols-[auto_1fr_auto] items-center sm:mx-6 sm:min-h-[80px] 2xl:mx-auto">
        <button
          type="button"
          onClick={toggleMenu}
          onMouseEnter={openMenuOnHover}
          className="home-icon-control col-start-1 grid h-11 w-11 place-items-center transition sm:h-12 sm:w-12"
          aria-label={open ? "Close site menu" : "Open site menu"}
          aria-expanded={open}
          aria-controls="presda-site-menu"
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.6} /> : <Menu className="h-5 w-5" strokeWidth={1.6} />}
        </button>

        <Link href="/" aria-label="PRESDA home" className="absolute left-1/2 top-1/2 z-10 grid h-14 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center sm:h-16 sm:w-24">
          <Image src="/presda-p-transparent.png" alt="PRESDA P logo" width={156} height={104} priority className="h-9 w-auto object-contain drop-shadow-[0_0_14px_rgba(255,26,26,0.34)] sm:h-11" />
        </Link>

        <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-end gap-1.5 sm:gap-3">
          <Link
            href="/articles/"
            className="home-search-box hidden h-11 items-center gap-3 rounded-lg px-3 transition md:flex md:w-[240px] lg:w-[292px]"
            aria-label="Search articles"
          >
            <Search className="h-5 w-5 shrink-0" strokeWidth={1.6} />
            <span className="truncate text-sm text-[color:var(--home-soft)]">Search articles...</span>
          </Link>
          <ThemeToggle variant="home" />
          <Link
            href="/newsletter/"
            className="hidden rounded-lg border border-[#ff1a1a]/35 bg-gradient-to-b from-[#ff1a1a] to-[#b00016] px-4 py-3 font-display text-[10px] font-extrabold uppercase tracking-wide text-white shadow-[0_16px_34px_rgba(196,0,25,0.22)] transition hover:brightness-110 min-[540px]:inline-flex sm:px-6 sm:text-xs"
          >
            Subscribe
          </Link>
        </div>
      </nav>

      {isHome ? (
        <div className="home-category-rail border-t">
          <nav aria-label="Homepage categories" className="mx-auto flex w-full max-w-[1510px] gap-7 overflow-x-auto px-3 sm:px-6 lg:justify-center lg:gap-12 2xl:px-0">
            {homepageCategoryLinks.map((category) => {
              const href = `/category/${toCategorySlug(category)}/`;
              const active = isActivePath(pathname, href);

              return (
                <Link
                  key={category}
                  href={href}
                  className={`home-category-tab shrink-0 py-4 font-display text-xs font-extrabold uppercase tracking-normal transition ${active ? "home-category-tab-active" : ""}`}
                >
                  {categoryLabels[category]}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}

      {open ? (
        <div id="presda-site-menu" className="absolute left-3 top-full z-50 w-[min(320px,calc(100vw-24px))] pt-3 sm:left-6" onMouseEnter={clearCloseTimer}>
          <div className="home-menu-panel rounded-2xl p-3 sm:p-4">
            <div className="mb-2 flex items-center justify-between border-b border-[color:var(--home-border)] pb-2">
              <span className="font-display text-[10px] font-extrabold uppercase tracking-wide text-[color:var(--home-soft)]">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="home-icon-control grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--home-border)] transition"
                aria-label="Close site menu"
              >
                <X className="h-4 w-4" strokeWidth={1.7} />
              </button>
            </div>
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`home-menu-card flex items-center gap-3 rounded-xl px-4 py-3.5 font-display text-[11px] font-extrabold uppercase tracking-wide transition ${isActivePath(pathname, link.href) ? "home-menu-card-active" : ""}`}
                >
                  <link.icon className="h-4 w-4 shrink-0" strokeWidth={1.6} aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
