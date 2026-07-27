import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
  spacing?: "default" | "tight" | "loose";
};

const spacingClassMap = {
  default: "py-16 sm:py-20 lg:py-24",
  tight: "py-10 sm:py-14",
  loose: "py-24 sm:py-28 lg:py-32",
};

export function Section({
  as: Component = "section",
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component className={cn("relative w-full", spacingClassMap[spacing], className)} {...props}>
      {children}
    </Component>
  );
}
