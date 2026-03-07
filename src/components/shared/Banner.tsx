"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Percent } from "lucide-react";
import { cn } from "@/lib/utils";

interface BannerProps {
    variant?: "primary" | "secondary" | "accent";
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    image: string;
    className?: string;
}

const Banner = ({
    variant = "primary",
    title,
    subtitle,
    ctaText,
    ctaLink,
    image,
    className,
}: BannerProps) => {
    const variants = {
        primary: "from-primary-600 to-primary-700 text-white",
        secondary: "from-secondary-600 to-secondary-700 text-white",
        accent: "from-emerald-600 to-emerald-700 text-white",
    };

    const icons = {
        primary: <Sparkles className="text-white/20 animate-pulse" size={48} />,
        secondary: <Zap className="text-white/20 animate-bounce" size={48} />,
        accent: <Percent className="text-white/20 animate-spin-slow" size={48} />,
    };

    return (
        <div className={cn(
            "relative rounded-3xl overflow-hidden shadow-medium p-8 md:p-12 mb-16",
            "bg-gradient-to-br transition-all hover:scale-[1.01] hover:shadow-2xl duration-500",
            variants[variant],
            className
        )}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                <div className="max-w-xl space-y-6 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-widest text-white shadow-xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        Exclusive Offer
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight drop-shadow-md">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed max-w-md drop-shadow-sm">
                        {subtitle}
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <Link
                            href={ctaLink}
                            className="px-10 py-5 bg-white text-primary-700 rounded-2xl font-black flex items-center gap-3 hover:translate-x-1 hover:bg-slate-50 transition-all shadow-2xl active:scale-95"
                        >
                            {ctaText}
                            <ArrowRight size={20} strokeWidth={3} />
                        </Link>
                    </div>
                </div>

                <div className="relative w-full max-w-sm aspect-video md:aspect-square bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 p-2 group shadow-2xl">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-400/20 rounded-full blur-3xl opacity-30" />
                </div>
            </div>

            {/* Decorative Icons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                {icons[variant]}
            </div>

            {/* Mesh Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.05),transparent)]" />
        </div>
    );
};

export { Banner };
