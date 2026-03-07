import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement> & {
        error?: string;
        icon?: React.ReactNode;
    }
>(({ className, type, error, icon, ...props }, ref) => {
    return (
        <div className="w-full relative group">
            {icon && (
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors pointer-events-none">
                    {icon}
                </div>
            )}
            <input
                type={type}
                className={cn(
                    "flex h-12 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/20 focus-visible:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                    icon && "pl-11",
                    error && "border-red-500 focus-visible:ring-red-500/20 focus-visible:border-red-500",
                    className
                )}
                ref={ref}
                {...props}
            />
            {error && (
                <p className="text-xs text-red-500 mt-1 ml-1">{error}</p>
            )}
        </div>
    );
});
Input.displayName = "Input";

export { Input };
