import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLElement> & {
  tone?: "default" | "elevated";
};

export function Card({ tone = "default", className, children, ...props }: CardProps) {
  const toneClass = tone === "elevated" ? "border-white/10 bg-surface-elevated" : "border-white/10 bg-surface";

  return (
    <div className={cn("rounded-8 border p-6 shadow-(--elevation-subtle)", toneClass, className)} {...props}>
      {children}
    </div>
  );
}
