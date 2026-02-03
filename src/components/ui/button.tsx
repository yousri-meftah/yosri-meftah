import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-display tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        arcade: [
          "relative overflow-hidden",
          "bg-primary text-primary-foreground",
          "border-2 border-primary",
          "shadow-[0_0_20px_hsl(185_100%_50%_/_0.4),_inset_0_1px_0_hsl(185_100%_70%_/_0.3)]",
          "hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.6),_inset_0_1px_0_hsl(185_100%_70%_/_0.5)]",
          "hover:scale-105 active:scale-95",
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none",
          "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/20 after:to-transparent after:pointer-events-none",
        ].join(" "),
        arcadeOutline: [
          "relative overflow-hidden",
          "bg-transparent text-primary",
          "border-2 border-primary",
          "shadow-[0_0_15px_hsl(185_100%_50%_/_0.2)]",
          "hover:bg-primary/10",
          "hover:shadow-[0_0_25px_hsl(185_100%_50%_/_0.4)]",
          "hover:scale-105 active:scale-95",
        ].join(" "),
        arcadeSecondary: [
          "relative overflow-hidden",
          "bg-secondary text-secondary-foreground",
          "border-2 border-secondary",
          "shadow-[0_0_20px_hsl(320_100%_60%_/_0.4)]",
          "hover:shadow-[0_0_30px_hsl(320_100%_60%_/_0.6)]",
          "hover:scale-105 active:scale-95",
        ].join(" "),
        arcadeAccent: [
          "relative overflow-hidden",
          "bg-accent text-accent-foreground",
          "border-2 border-accent",
          "shadow-[0_0_20px_hsl(45_100%_55%_/_0.4)]",
          "hover:shadow-[0_0_30px_hsl(45_100%_55%_/_0.6)]",
          "hover:scale-105 active:scale-95",
        ].join(" "),
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
