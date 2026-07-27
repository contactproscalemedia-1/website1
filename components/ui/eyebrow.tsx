import * as React from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = React.HTMLAttributes<HTMLElement>;

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-label uppercase tracking-[0.28em] text-text-secondary",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
