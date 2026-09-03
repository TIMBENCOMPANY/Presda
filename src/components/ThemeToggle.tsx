"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem("presda-theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeToggle({ variant = "default" }: { variant?: "default" | "home" }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const className =
    variant === "home"
      ? "home-glass-control grid h-11 w-11 place-items-center rounded-full transition sm:h-14 sm:w-14"
      : "grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]";

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    window.localStorage.setItem("presda-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Moon className="h-5 w-5" strokeWidth={1.5} /> : <Sun className="h-5 w-5" strokeWidth={1.5} />}
    </button>
  );
}
