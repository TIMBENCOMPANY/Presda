import type { CSSProperties, ReactNode } from "react";
import spec from "@/lib/design-system/category-badge.json";

/** Static article category label. Navigation and touch targets belong to its parent. */
export function CategoryBadge({ children, className = "" }: { children: ReactNode; className?: string }) {
  const style: CSSProperties = {
    backgroundColor: `var(--home-red-deep, ${spec.background})`, color: spec.foreground,
    fontSize: spec.fontSize, lineHeight: `${spec.lineHeight}px`, fontWeight: spec.fontWeight,
    paddingInline: spec.paddingInline, paddingBlock: spec.paddingBlock, borderRadius: spec.radius,
  };
  return <span data-category-badge className={`category-badge font-display ${className}`} style={style}>{children}</span>;
}
