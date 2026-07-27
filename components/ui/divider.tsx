import * as React from "react";
import { cn } from "@/lib/utils";

type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "strong";
};

export function Divider({ tone = "default", className, ...props }: DividerProps) {
  const toneClass = tone === "strong" ? "border-white/24" : "border-white/10";

  return <div className={cn("border-t", toneClass, className)} {...props} />;
}
