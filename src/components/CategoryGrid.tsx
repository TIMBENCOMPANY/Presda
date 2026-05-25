import Link from "next/link";
import { categories } from "@/data/articles";
import { CategoryIcon } from "@/components/CategoryIcon";
import { categoryDescriptions, categoryLabels, toCategorySlug } from "@/lib/categories";

export function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto w-[min(1500px,calc(100%-32px))] py-14">
      <div className="mb-8 border-t border-[#FF1A1A]/45 pt-5">
        <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FF1A1A]">Top Categories</p>
        <h2 className="mt-2 font-display text-4xl font-black uppercase leading-none sm:text-5xl">News Desks</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${toCategorySlug(category)}`}
            className="group rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-5 transition hover:border-[#FF1A1A]"
          >
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-lg border border-[color:var(--border)] text-[#FF1A1A]">
              <CategoryIcon category={category} />
            </div>
            <h3 className="font-display text-lg font-black uppercase">{categoryLabels[category]}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-[color:var(--muted)]">{categoryDescriptions[category]}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
