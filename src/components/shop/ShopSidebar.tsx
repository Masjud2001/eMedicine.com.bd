"use client";

import { Checkbox } from "@radix-ui/react-checkbox";
import { categories } from "@/data/mock-data";
import { Check, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = {
    brands: ["Beximco", "Square", "Incepta", "Healthcare", "Renata", "ACI", "Radiant"],
    priceRanges: [
        { label: "Under ৳100", value: "0-100" },
        { label: "৳100 - ৳500", value: "100-500" },
        { label: "৳500 - ৳2000", value: "500-2000" },
        { label: "Above ৳2000", value: "2000+" },
    ],
    requirements: [
        { label: "Prescription Required", value: "rx" },
        { label: "OTC (Non-Prescription)", value: "otc" },
    ],
};

const ShopSidebar = () => {
    return (
        <div className="w-full lg:w-72 space-y-10 animate-in fade-in slide-in-from-left-4 duration-500">
            {/* Categories */}
            <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                    <Filter size={18} className="text-primary-500" />
                    <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase text-sm">Categories</h3>
                </div>
                <div className="space-y-2 max-h-[400px] overflow-y-auto no-scrollbar pr-2">
                    {categories.map((cat) => (
                        <label key={cat.id} className="flex items-center justify-between group cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition-all">
                            <span className="text-sm font-bold text-slate-600 group-hover:text-primary-500 transition-colors">{cat.name}</span>
                            <span className="text-[10px] font-black bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full group-hover:bg-primary-50 group-hover:text-primary-400 transition-colors">12</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Brands */}
            <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                    <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase text-sm leading-none">Pharma Brands</h3>
                </div>
                <div className="space-y-4">
                    {filters.brands.map((brand) => (
                        <div key={brand} className="flex items-center gap-3 group px-2">
                            <div className="w-5 h-5 rounded-md border-2 border-slate-200 flex items-center justify-center cursor-pointer group-hover:border-primary-500 transition-all active:scale-95">
                                <div className="w-2.5 h-2.5 bg-primary-500 rounded-sm scale-0 group-hover:scale-100 transition-transform" />
                            </div>
                            <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{brand}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                    <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase text-sm leading-none">Price Range</h3>
                </div>
                <div className="space-y-4">
                    {filters.priceRanges.map((range) => (
                        <div key={range.value} className="flex items-center gap-3 group px-2">
                            <div className="w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center cursor-pointer group-hover:border-secondary-500 transition-all active:scale-95">
                                <div className="w-2.5 h-2.5 bg-secondary-500 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                            </div>
                            <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{range.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rx Requirements */}
            <div className="space-y-6 bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 blur-[40px] rounded-full pointer-events-none" />
                <h3 className="text-white font-black uppercase text-xs tracking-widest leading-none mb-8 border-b border-white/10 pb-4">Medication Type</h3>
                <div className="space-y-5">
                    {filters.requirements.map((req) => (
                        <div key={req.value} className="flex items-center gap-4 group/item cursor-pointer">
                            <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-primary-400 group-hover/item:bg-white/10 transition-all">
                                <Check size={14} className="text-primary-400 scale-0 group-hover/item:scale-100 transition-transform" />
                            </div>
                            <span className="text-sm font-bold text-slate-400 group-hover/item:text-white transition-colors">{req.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { ShopSidebar };
