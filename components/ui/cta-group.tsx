import * as React from "react";
import { cn } from "@/lib/utils";

type CTAGroupProps = React.HTMLAttributes<HTMLDivElement>;

export function CTAGroup({ className, children, ...props }: CTAGroupProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)} {...props}>
      {children}
    </div>
  );
}
