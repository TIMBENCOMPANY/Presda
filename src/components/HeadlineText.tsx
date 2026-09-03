export type HeadlineHighlights = {
  red?: string;
  gold?: string;
};

type HeadlineTextProps = {
  title: string;
  highlights?: HeadlineHighlights;
  legacyRed?: string;
};

type Match = {
  start: number;
  end: number;
  tone: "red" | "gold";
};

export function HeadlineText({ title, highlights, legacyRed }: HeadlineTextProps) {
  const matches = [
    findPhrase(title, highlights?.red ?? legacyRed, "red"),
    findPhrase(title, highlights?.gold, "gold")
  ]
    .filter((match): match is Match => Boolean(match))
    .sort((a, b) => a.start - b.start)
    .reduce<Match[]>((accepted, match) => {
      const overlaps = accepted.some((item) => match.start < item.end && match.end > item.start);
      return overlaps ? accepted : [...accepted, match];
    }, []);

  if (!matches.length) {
    return <>{title}</>;
  }

  const parts: Array<{ text: string; tone?: Match["tone"] }> = [];
  let cursor = 0;

  for (const match of matches) {
    if (match.start > cursor) {
      parts.push({ text: title.slice(cursor, match.start) });
    }

    parts.push({ text: title.slice(match.start, match.end), tone: match.tone });
    cursor = match.end;
  }

  if (cursor < title.length) {
    parts.push({ text: title.slice(cursor) });
  }

  return (
    <>
      {parts.map((part, index) => (
        <span
          key={`${part.text}-${index}`}
          className={
            part.tone === "red"
              ? "headline-accent-red"
              : part.tone === "gold"
                ? "headline-accent-gold"
                : undefined
          }
        >
          {part.text}
        </span>
      ))}
    </>
  );
}

function findPhrase(title: string, phrase: string | undefined, tone: Match["tone"]): Match | null {
  if (!phrase) return null;

  const start = title.toLowerCase().indexOf(phrase.toLowerCase());
  if (start === -1) return null;

  return {
    start,
    end: start + phrase.length,
    tone
  };
}
