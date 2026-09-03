import {
  Bot,
  BriefcaseBusiness,
  Camera,
  FlaskConical,
  Globe2,
  Plane,
  Sparkles,
  Trophy
} from "lucide-react";
import type { ArticleCategory } from "@/data/articles";

type CategoryIconProps = {
  category: ArticleCategory;
  className?: string;
};

export function CategoryIcon({ category, className = "h-6 w-6" }: CategoryIconProps) {
  const iconProps = {
    className,
    strokeWidth: 1.5,
    "aria-hidden": true
  };

  switch (category) {
    case "AI":
      return <Bot {...iconProps} />;
    case "Business":
      return <BriefcaseBusiness {...iconProps} />;
    case "Sport":
      return <Trophy {...iconProps} />;
    case "World":
      return <Globe2 {...iconProps} />;
    case "Paparazzi":
      return <Camera {...iconProps} />;
    case "Lifestyle":
      return <Sparkles {...iconProps} />;
    case "Travel":
      return <Plane {...iconProps} />;
    case "Science":
      return <FlaskConical {...iconProps} />;
    case "World Cup 2026":
      return <Trophy {...iconProps} />;
  }
}
