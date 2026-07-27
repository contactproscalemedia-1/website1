import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold uppercase tracking-[0.1em] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]",
  {
    variants: {
      variant: {
        primary: "bg-[var(--color-accent-red)] text-white hover:opacity-85",
        ghost:
          "border border-white/25 text-white hover:border-white",
        pill: "rounded-full bg-[var(--color-accent-red)] text-white shadow-[0_8px_32px_rgba(232,21,42,0.4)] hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(232,21,42,0.6)]",
        pillGhost:
          "rounded-full border border-white/25 text-white hover:border-white hover:-translate-y-0.5",
      },
      size: {
        default: "text-xs px-8 py-3.5",
        sm: "text-xs px-5 py-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
