import * as React from "react";
import { cn } from "@/lib/utils";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "display" | "section" | "subtle";
};

const variantClassMap = {
  display: "font-display uppercase tracking-[0.02em] text-text-primary",
  section: "font-sans text-heading font-semibold tracking-[0.01em] text-text-primary",
  subtle: "font-sans text-body-large font-medium tracking-[0] text-text-secondary",
};

export function Heading({
  as: Component = "h2",
  variant = "section",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component className={cn(variantClassMap[variant], className)} {...props}>
      {children}
    </Component>
  );
}
