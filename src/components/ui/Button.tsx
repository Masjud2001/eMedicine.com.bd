import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const Button = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        asChild?: boolean;
        variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "danger" | "accent";
        size?: "sm" | "md" | "lg" | "icon";
    }
>(({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const variants = {
        primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-soft",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-600 shadow-soft",
        accent: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-soft",
        outline: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300",
        ghost: "bg-transparent text-slate-600 hover:bg-slate-100",
        link: "bg-transparent text-primary-500 underline-offset-4 hover:underline",
        danger: "bg-accent-500 text-white hover:bg-red-600",
    };

    const sizes = {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base font-semibold",
        icon: "h-10 w-10 flex items-center justify-center p-0",
    };

    return (
        <Comp
            className={cn(
                "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
                variants[variant],
                sizes[size],
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Button.displayName = "Button";

export { Button };
