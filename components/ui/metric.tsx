import * as React from "react";
import { cn } from "@/lib/utils";

type MetricProps = React.HTMLAttributes<HTMLElement> & {
  value: string;
  label: string;
};

export function Metric({ value, label, className, ...props }: MetricProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <div className="text-display-m font-display uppercase tracking-[0.02em] text-text-primary">
        {value}
      </div>
      <div className="text-label uppercase tracking-[0.2em] text-text-secondary">{label}</div>
    </div>
  );
}
