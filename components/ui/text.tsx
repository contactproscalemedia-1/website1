import * as React from "react";
import { cn } from "@/lib/utils";

type TextProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
  size?: "bodyLarge" | "body" | "small" | "caption" | "label";
  tone?: "primary" | "secondary" | "muted";
};

const sizeClassMap = {
  bodyLarge: "text-body-large leading-[1.6]",
  body: "text-body leading-[1.7]",
  small: "text-small leading-[1.5]",
  caption: "text-caption leading-[1.4] tracking-[0.02em]",
  label: "text-label leading-[1.4] tracking-[0.02em]",
};

const toneClassMap = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
};

export function Text({
  as: Component = "p",
  size = "body",
  tone = "primary",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component className={cn(sizeClassMap[size], toneClassMap[tone], className)} {...props}>
      {children}
    </Component>
  );
}
