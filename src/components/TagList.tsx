export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-lg border border-[color:var(--border)] px-3 py-2 text-xs font-bold uppercase text-[color:var(--muted)]">
          #{tag}
        </span>
      ))}
    </div>
  );
}
