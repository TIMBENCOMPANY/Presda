# PRESDA Article System

PRESDA is a futuristic premium news platform with a dark-first article system, light mode support, category pages, article listing, and SEO-ready article pages.

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Add Articles

Edit only:

```text
src/data/articles.ts
```

Add a new object to the `articles` array with:

```ts
{
  id: "008",
  slug: "your-article-slug",
  title: "Your Article Title",
  excerpt: "Short summary for cards and SEO.",
  category: "AI",
  date: "2026-05-18",
  author: "PRESDA Editorial",
  coverImage: "/articles/your-cover.png",
  coverAlt: "Clear description of the cover image",
  content: ["Paragraph one.", "Paragraph two."],
  quote: "Optional quote.",
  source: { name: "Source name", url: "https://example.com" },
  tags: ["AI", "Technology"],
  readingTime: "3 min read"
}
```

## Article Images

Put article cover images in:

```text
public/articles
```

Use clean cover images only. Do not use images containing the full article text as the article content.

## Brand Assets

The project includes dark and light versions of the official PRESDA brand assets:

- `logo-dark.png` - full logo for dark backgrounds
- `logo-light.png` - full logo for light backgrounds
- `favicon-dark.png` - P favicon for dark backgrounds
- `favicon-light.png` - P favicon for light backgrounds

The same files are also copied to `public/` for the Next.js build.

## Colors

Change theme colors in:

```text
src/app/globals.css
```

The main variables are `--bg`, `--card`, `--text`, `--muted`, `--border`, and `--accent`.

## Categories

To add a category, update:

- `src/data/articles.ts`
- `src/lib/categories.ts`
- `src/components/CategoryIcon.tsx`

## Theme Mode

The theme toggle lives in `src/components/ThemeToggle.tsx`.

It:

- Uses dark mode by default.
- Respects system preference if no saved preference exists.
- Saves the user choice in `localStorage` under `presda-theme`.
