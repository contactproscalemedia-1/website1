import * as React from "react";
import { cn } from "@/lib/utils";

type TextElement = "p" | "span" | "div" | "label";

type TextProps = React.HTMLAttributes<HTMLElement> & {
  as?: TextElement;
  size?: "xs" | "sm" | "md" | "lg" | "bodyLarge";
  tone?: "default" | "muted" | "subtle" | "secondary";
};

const sizeClassMap = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  bodyLarge: "text-lg leading-relaxed sm:text-xl",
};

const toneClassMap = {
  default: "text-white",
  muted: "text-white/70",
  subtle: "text-white/50",
  secondary: "text-white/70",
};

export function Text({
  as: Component = "p",
  size = "md",
  tone = "default",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        sizeClassMap[size],
        toneClassMap[tone],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}