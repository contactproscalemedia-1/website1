import * as React from "react";
import { cn } from "@/lib/utils";

type SectionElement = "section" | "div" | "main" | "article";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: SectionElement;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
};

const spacingClassMap = {
  none: "",
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-24 sm:py-32",
  xl: "py-32 sm:py-40",
};

export function Section({
  as: Component = "section",
  spacing = "lg",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "relative w-full",
        spacingClassMap[spacing],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}