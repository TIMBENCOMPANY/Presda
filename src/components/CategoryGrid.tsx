import Link from "next/link";
import { categories } from "@/data/articles";
import { CategoryIcon } from "@/components/CategoryIcon";
import { categoryDescriptions, categoryLabels, toCategorySlug } from "@/lib/categories";

export function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto w-[min(1500px,calc(100%-24px))] py-10 sm:w-[min(1500px,calc(100%-32px))] sm:py-14">
      <div className="mb-6 border-t border-[#FF1A1A]/45 pt-5 sm:mb-8">
        <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">Top Categories</p>
        <h2 className="mt-2 text-balance font-display text-3xl font-extrabold uppercase leading-none text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-5xl">News Desks</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${toCategorySlug(category)}/`}
            className="group rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-4 transition hover:border-[#FF1A1A] sm:p-5"
          >
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-lg border border-[color:var(--border)] text-[#FF1A1A]">
              <CategoryIcon category={category} />
            </div>
            <h3 className="text-balance font-display text-base font-extrabold uppercase leading-tight [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-lg">{categoryLabels[category]}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-[color:var(--muted)]">{categoryDescriptions[category]}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
