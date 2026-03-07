"use client";

import { products } from "@/data/mock-data";
import { ProductCard } from "@/components/shared/ProductCard";
import { ChevronDown, SlidersHorizontal, LayoutGrid, List, Info, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const ShopContent = () => {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    return (
        <div className="flex-1 space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
            {/* Top Header & Sort */}
            <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-soft flex flex-col md:flex-row items-center justify-between gap-8 group hover:shadow-medium transition-all duration-500">
                <div className="space-y-4 text-center md:text-left">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-black text-[10px] uppercase tracking-widest shadow-sm">
                        <Info size={12} strokeWidth={3} />
                        Medicine Store
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-none tracking-tight">
                        All Healthcare <span className="text-primary-500 underline decoration-slate-200 underline-offset-8">Products</span>
                    </h1>
                    <p className="text-slate-500 font-bold max-w-lg leading-relaxed text-sm">Showing <span className="text-slate-900">1200+</span> items available for immediate delivery.</p>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-end gap-5">
                    <div className="flex items-center gap-3 p-2.5 bg-slate-50 border border-slate-100 rounded-2xl shadow-inner group/view cursor-pointer">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-3 rounded-xl transition-all ${viewMode === "grid" ? "bg-white text-primary-500 shadow-medium scale-105" : "text-slate-400 hover:text-slate-600 hover:bg-white"}`}
                        >
                            <LayoutGrid size={20} />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-3 rounded-xl transition-all ${viewMode === "list" ? "bg-white text-primary-500 shadow-medium scale-105" : "text-slate-400 hover:text-slate-600 hover:bg-white"}`}
                        >
                            <List size={20} />
                        </button>
                    </div>

                    <div className="relative group/sort">
                        <div className="flex items-center gap-4 px-8 py-5 bg-white border border-slate-200 rounded-2xl cursor-pointer group-hover:border-primary-500 hover:shadow-medium transition-all duration-300">
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Sort By:</span>
                            <span className="text-sm font-black text-slate-900 border-none group-active:scale-95 transition-transform flex items-center gap-3">
                                Popularity
                                <ChevronDown size={14} strokeWidth={3} className="text-primary-500 group-hover:translate-y-0.5 transition-transform" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tags / Active Filters */}
            <div className="flex flex-wrap items-center gap-4 px-2">
                {["Medicines", "Beximco", "Capsule", "Under ৳500"].map((tag) => (
                    <span key={tag} className="px-5 py-2.5 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center gap-3 hover:bg-primary-50 hover:text-primary-500 transition-all cursor-pointer group shadow-soft">
                        {tag}
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                ))}
            </div>

            {/* Grid */}
            <div className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                {/* Repeat mock products for filling the view */}
                {products.slice(0, 3).map((product) => (
                    <ProductCard key={`${product.id}-copy`} product={product} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 pt-20 border-t border-slate-50">
                <button className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:bg-white border border-transparent hover:border-slate-100 hover:text-slate-900 transition-all font-black text-sm uppercase tracking-widest shadow-soft hover:shadow-medium active:scale-95">Prev</button>
                {[1, 2, 3, "...", 12].map((i, idx) => (
                    <button
                        key={idx}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-md transition-all border-none ${i === 1 ? "bg-primary-500 text-white shadow-xl scale-110" : "bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-900 shadow-soft"}`}
                    >
                        {i}
                    </button>
                ))}
                <button className="p-4 rounded-2xl bg-primary-500 text-white font-black text-sm uppercase tracking-widest px-10 shadow-xl hover:bg-primary-600 active:scale-95 transition-all">Next Page</button>
            </div>
        </div>
    );
};

export { ShopContent };
