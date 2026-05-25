import {
  Bot,
  BriefcaseBusiness,
  Camera,
  Gamepad2,
  Globe2,
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
    case "GAMING":
      return <Gamepad2 {...iconProps} />;
    case "SPORT":
      return <Trophy {...iconProps} />;
    case "BUSINESS":
      return <BriefcaseBusiness {...iconProps} />;
    case "WORLD":
      return <Globe2 {...iconProps} />;
    case "PAPARAZZI":
      return <Camera {...iconProps} />;
    case "LIFESTYLE":
      return <Sparkles {...iconProps} />;
  }
}
