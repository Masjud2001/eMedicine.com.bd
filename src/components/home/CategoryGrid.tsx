"use client";

import { CategoryCard } from "@/components/shared/CategoryCard";
import { categories } from "@/data/mock-data";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const CategoryGrid = ({ title = "Categories" }: { title?: string }) => {
    return (
        <section className="py-12 bg-white px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight uppercase">
                        {title}
                    </h2>
                    <Link href="/shop" className="text-sm font-black text-primary-500 hover:text-primary-600 uppercase tracking-widest flex items-center gap-1 group">
                        See All
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {categories.slice(0, 8).map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                    {/* Add few more if space allows */}
                    {categories.slice(8, 16).map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export { CategoryGrid };

