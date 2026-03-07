"use client";

import { CategoryCard } from "@/components/shared/CategoryCard";
import { categories } from "@/data/mock-data";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const CategoryGrid = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden px-4 md:px-8">
            {/* Decorative patterns */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-black text-[10px] uppercase tracking-widest shadow-sm">
                            Browse by Health Needs
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                            Featured Healthcare <span className="text-primary-500 underline decoration-slate-200 decoration-dotted lg:underline-offset-8">Categories</span>
                        </h2>
                        <p className="text-lg text-slate-500 font-semibold max-w-2xl leading-relaxed">
                            Explore our wide range of categories. Find everything from chronic medication to daily wellness essentials.
                        </p>
                    </div>

                    <Link
                        href="/shop"
                        className="group flex items-center gap-3 px-8 py-5 bg-white border border-slate-200 text-slate-800 rounded-2xl font-black text-sm hover:border-primary-500 hover:text-primary-500 hover:shadow-medium transition-all duration-300"
                    >
                        Explore All Categories
                        <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {categories.slice(0, 10).map((category, index) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>

                {/* Call to action for help */}
                <div className="mt-20 p-8 md:p-12 bg-white rounded-[3rem] border border-slate-100 shadow-soft flex flex-col lg:flex-row items-center justify-between gap-12 group hover:shadow-medium transition-all duration-500">
                    <div className="flex items-center gap-8">
                        <div className="w-24 h-24 bg-primary-50 rounded-[2rem] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <img src="https://img.icons8.com/bubbles/100/hospital.png" alt="hospital" className="w-16 h-16" />
                        </div>
                        <div className="space-y-2 text-center lg:text-left">
                            <h3 className="text-2xl font-black text-slate-900 leading-none">Can&apos;t find your specific medicine?</h3>
                            <p className="text-slate-500 font-bold max-w-md">Our pharmacists are ready to help you source rare or specialized medications immediately.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="tel:+880123456789">
                            <Button variant="secondary" size="lg" className="rounded-2xl gap-2 font-black h-16 px-10 shadow-medium">
                                Talk to a Pharmacist
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="rounded-2xl gap-2 font-black h-16 px-10 border-2">
                                Send Inquiry
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { CategoryGrid };
