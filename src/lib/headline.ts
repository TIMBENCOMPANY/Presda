export type HeadlineHighlights = {
  red?: string | string[];
  gold?: string | string[];
};

export type HeadlinePart = { text: string; tone?: "red" | "gold" };
type Range = { start: number; end: number };

// Function words keep automatic accents on content words across our languages.
// No article IDs or title-specific rules belong in the presentation layer.
const functionWords = new Set((
  "a an the of and or to from in on at by for with without into through how why what when where who which " +
  "is are was were be been this that these those we our their it its as not just " +
  "le la les un une des du de et ou à au aux en dans par pour avec sans sur comment pourquoi qui que " +
  "el los las una unos unas del y o a al con sin por para como cómo qué un " +
  "من إلى في على عن مع بين أو كيف لماذا ما هذا هذه التي الذي"
).split(/\s+/));

const wordPattern = new RegExp(String.raw`\p{N}+(?:[,.]\p{N}+)+|[\p{L}\p{M}\p{N}]+(?:[’'\-][\p{L}\p{M}\p{N}]+)*`, "gu");
const wordCharacter = new RegExp(String.raw`[\p{L}\p{M}\p{N}]`, "u");

function words(text: string) {
  return Array.from(text.matchAll(wordPattern)).map(match => ({
    text: match[0], start: match.index!, end: match.index! + match[0].length
  }));
}

function phrases(value?: string | string[]) {
  return (Array.isArray(value) ? value : value ? [value] : []).filter(Boolean);
}

function findPhrase(title: string, phrase: string): Range | undefined {
  const escaped = phrase.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!escaped) return;
  for (const match of Array.from(title.matchAll(new RegExp(escaped, "giu")))) {
    const start = match.index!;
    const end = start + match[0].length;
    if (!wordCharacter.test(title.slice(start - 1, start)) &&
        !wordCharacter.test(title.slice(end, end + 1))) return { start, end };
  }
}

function overlaps(a: Range, b: Range) {
  return a.start < b.end && a.end > b.start;
}

/** One topic and one secondary phrase; preserve the exact original wording. */
export function headlineParts(title: string, highlights?: HeadlineHighlights, legacyRed?: string): HeadlinePart[] {
  const tokens = words(title);
  if (!tokens.length) return [{ text: title }];
  const contentWords = tokens.filter(word => !functionWords.has(word.text.toLowerCase()));
  const candidates = contentWords.length ? contentWords : tokens;
  const redHints = [...phrases(highlights?.red), ...phrases(legacyRed)];
  const red = redHints.map(phrase => findPhrase(title, phrase)).find((range): range is Range =>
    Boolean(range && (tokens.length === 1 || words(title.slice(range.start, range.end)).length < tokens.length))
  ) ?? (() => {
    const colon = title.search(/[:：]/);
    const topic = candidates.filter(word => colon > 0 && word.end <= colon);
    const selected = topic.length && topic.length <= 6 ? topic : candidates.slice(0, tokens.length > 3 ? 2 : 1);
    return { start: selected[0].start, end: selected[selected.length - 1].end };
  })();

  // Prefer a complete editorial phrase to a short keyword, with just one gold
  // range even when older records supply multiple accents.
  const goldHint = phrases(highlights?.gold).map(phrase => findPhrase(title, phrase))
    .filter((range): range is Range => Boolean(range && !overlaps(red, range)))
    .sort((a, b) => (b.end - b.start) - (a.end - a.start))[0];
  const available = candidates.filter(word => !overlaps(red, word));
  const last = available[available.length - 1];
  let gold = goldHint;
  if (!gold && last) {
    // Final content phrase, up to three words, after punctuation/connectors.
    let start = last.start;
    const tail = tokens.filter(word => word.end <= last.end && !overlaps(red, word));
    for (let index = tail.length - 2, count = 1; index >= 0 && count < 3; index--, count++) {
      const word = tail[index];
      if (functionWords.has(word.text.toLowerCase()) || /[^\s]/.test(title.slice(word.end, start))) break;
      start = word.start;
    }
    gold = { start, end: last.end };
  }

  const accents = [{ ...red, tone: "red" as const }, ...(gold ? [{ ...gold, tone: "gold" as const }] : [])]
    .sort((a, b) => a.start - b.start);
  const parts: HeadlinePart[] = [];
  let cursor = 0;
  for (const accent of accents) {
    if (accent.start > cursor) parts.push({ text: title.slice(cursor, accent.start) });
    parts.push({ text: title.slice(accent.start, accent.end), tone: accent.tone });
    cursor = accent.end;
  }
  if (cursor < title.length) parts.push({ text: title.slice(cursor) });
  return parts;
}
