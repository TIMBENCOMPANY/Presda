import type { CSSProperties, ReactNode } from "react";
import spec from "@/lib/design-system/category-badge.json";

/** Static article category label. Navigation and touch targets belong to its parent. */
export function CategoryBadge({ children, className = "" }: { children: ReactNode; className?: string }) {
  const style: CSSProperties = {
    backgroundColor: `var(--home-red-deep, ${spec.background})`, color: spec.foreground,
    fontSize: `var(--category-badge-font-size, ${spec.fontSize}px)`,
    lineHeight: `var(--category-badge-line-height, ${spec.lineHeight}px)`, fontWeight: spec.fontWeight,
    paddingInline: `var(--category-badge-padding-inline, ${spec.paddingInline}px)`,
    paddingBlock: `var(--category-badge-padding-block, ${spec.paddingBlock}px)`,
    borderRadius: `var(--category-badge-radius, ${spec.radius}px)`,
  };
  return <span data-category-badge className={`category-badge font-display ${className}`} style={style}>{children}</span>;
}
