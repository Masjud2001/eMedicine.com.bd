"use client";

import { products } from "@/data/mock-data";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Plus, Minus, ShoppingCart, Heart, Share2, Info, Star, ShieldCheck, CheckCircle2, ChevronRight, MessageCircle, HeartPulse, ArrowRight } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { ProductCard } from "@/components/shared/ProductCard";
import Link from "next/link";

interface ProductDetailViewProps {
    id: string;
}

const ProductDetailView = ({ id }: ProductDetailViewProps) => {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<"description" | "safety" | "usage">("description");

    // Use first product as mock
    const product = products[0];

    const handleAddToCart = () => {
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-24 p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-16 md:gap-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                {/* Gallery */}
                <div className="flex-1 space-y-8">
                    <div className="relative aspect-square md:aspect-[5/4] bg-white rounded-[3.5rem] border-8 border-white shadow-2xl overflow-hidden group">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-8 left-8 flex flex-col gap-3">
                            {product.discountPercentage > 0 && (
                                <span className="px-5 py-2.5 bg-accent-500 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl">
                                    {product.discountPercentage}% DISCOUNT
                                </span>
                            )}
                            {product.prescriptionRequired && (
                                <span className="px-5 py-2.5 bg-secondary-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl flex items-center gap-2 group/tip">
                                    <Plus size={16} strokeWidth={3} />
                                    Rx Required
                                </span>
                            )}
                        </div>
                        <button className="absolute bottom-8 right-8 p-4 bg-white/80 backdrop-blur-md text-slate-400 hover:text-red-500 rounded-2xl shadow-xl transition-all hover:scale-110 active:scale-95">
                            <Heart size={24} strokeWidth={3} />
                        </button>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-white border-4 border-white rounded-[1.5rem] shadow-soft hover:shadow-medium hover:border-primary-100 cursor-pointer overflow-hidden transition-all group">
                                <img src={product.image} alt="thumbnail" className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform opacity-60 group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Details Content */}
                <div className="flex-1 space-y-10 py-4">
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 font-black text-[10px] uppercase tracking-widest leading-none mb-1 ring-1 ring-slate-100">{product.brand}</span>
                            {product.stockStatus === "In Stock" ? (
                                <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-black text-[10px] uppercase tracking-widest leading-none border border-emerald-100">Instantly Available</span>
                            ) : (
                                <span className="px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-black text-[10px] uppercase tracking-widest leading-none border border-red-100">Out of Stock</span>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">{product.name}</h1>
                        <div className="flex items-center gap-6 border-b border-slate-100 pb-8">
                            <div className="flex items-center gap-2">
                                <div className="flex text-amber-500"><Star size={16} fill="currentColor" strokeWidth={3} /> <Star size={16} fill="currentColor" strokeWidth={3} /> <Star size={16} fill="currentColor" strokeWidth={3} /> <Star size={16} fill="currentColor" strokeWidth={3} /> <Star size={16} fill="currentColor" strokeWidth={3} /></div>
                                <span className="text-sm font-black text-slate-900 drop-shadow-sm">4.9 / 5.0 <span className="text-slate-400 font-bold ml-1">({product.reviewsCount} Reviews)</span></span>
                            </div>
                            <div className="w-px h-6 bg-slate-100" />
                            <span className="text-sm font-black text-primary-500 uppercase tracking-widest border-b-2 border-primary-500 leading-none">Generic: {product.genericName}</span>
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                        {product.shortDescription}
                    </p>

                    <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row items-end md:items-center justify-between gap-8 group hover:bg-white hover:shadow-medium hover:border-primary-100 transition-all duration-500">
                        <div className="space-y-2">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Net Payable Total</span>
                            <div className="flex items-center gap-5">
                                <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{formatPrice(product.price * quantity)}</span>
                                {product.discountPercentage > 0 && (
                                    <span className="text-lg font-bold text-slate-400 line-through decoration-red-400 decoration-2">{formatPrice(product.mrp * quantity)}</span>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group/qty bg-white/50 p-2 rounded-2xl shadow-inner border border-white">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="p-3.5 bg-white text-slate-600 rounded-xl hover:bg-primary-500 hover:text-white transition-all shadow-medium active:scale-95"
                            >
                                <Minus size={20} strokeWidth={3} />
                            </button>
                            <span className="w-12 text-center text-xl font-black text-slate-900 border-none select-none">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="p-3.5 bg-white text-slate-600 rounded-xl hover:bg-primary-500 hover:text-white transition-all shadow-medium active:scale-95"
                            >
                                <Plus size={20} strokeWidth={3} />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                        <Button
                            size="lg"
                            className="flex-1 min-w-[240px] h-20 rounded-[2rem] gap-4 font-black shadow-2xl transition-all active:scale-95 text-xl tracking-tighter"
                            onClick={handleAddToCart}
                        >
                            <ShoppingCart size={24} strokeWidth={3} />
                            Add to Healthcare Bag
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-20 w-20 rounded-[2rem] p-0 border-2 border-slate-200 hover:bg-slate-50 transition-all hover:scale-110 active:scale-95"
                        >
                            <Share2 size={24} strokeWidth={3} className="text-slate-600" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-10 border-t border-slate-100">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-soft group-hover:bg-primary-500 group-hover:text-white transition-all">
                                <ShieldCheck size={28} />
                            </div>
                            <div className="text-left">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block leading-none mb-1">Authenticity</span>
                                <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">100% Genuine</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-soft group-hover:bg-primary-500 group-hover:text-white transition-all">
                                <CheckCircle2 size={28} />
                            </div>
                            <div className="text-left">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block leading-none mb-1">Certification</span>
                                <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">DGDA Approved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="space-y-12">
                <div className="flex items-center gap-8 md:gap-12 border-b-2 border-slate-50 overflow-x-auto no-scrollbar pb-0">
                    {["Description", "Safety & Warnings", "Usage Guide", "Reviews"].map((tab) => (
                        <button
                            key={tab}
                            className={`py-6 text-sm font-black uppercase tracking-widest border-b-4 transition-all whitespace-nowrap px-4 ${tab.toLowerCase().includes(activeTab) ? "border-primary-500 text-primary-500 scale-105" : "border-transparent text-slate-400 hover:text-slate-900"}`}
                            onClick={() => setActiveTab(tab.toLowerCase().includes("description") ? "description" : tab.toLowerCase().includes("safety") ? "safety" : "usage")}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="bg-white p-10 md:p-16 rounded-[3.5rem] border border-slate-100 shadow-soft relative overflow-hidden group">
                    <div className="absolute top-10 right-10 text-primary-500/5 group-hover:text-primary-500/10 pointer-events-none transition-colors">
                        <Info size={160} strokeWidth={3} />
                    </div>
                    <div className="prose prose-slate prose-lg lg:prose-xl max-w-4xl relative z-10 leading-relaxed font-medium text-slate-600">
                        {activeTab === "description" && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                <h3 className="text-2xl font-black text-slate-900">What is {product.name}?</h3>
                                <p>{product.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                                    <ul className="space-y-4">
                                        {["Provides fast relief within 15-30 minutes", "Gentle on the stomach", "Effective up to 6 hours", "Sugar-free and low sodium"].map((li, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-900 uppercase tracking-tight">
                                                <div className="p-1 bg-emerald-50 rounded-lg text-emerald-500"><Plus size={14} strokeWidth={4} /></div>
                                                {li}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl space-y-3">
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Brand Contact</p>
                                        <p className="text-sm font-black text-slate-900">{product.brand}</p>
                                        <Button variant="link" className="p-0 h-auto text-primary-500 text-xs font-black uppercase tracking-widest gap-2 group/btn">
                                            Visit Brand Page <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "safety" && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="p-10 bg-red-50/50 border border-red-100 rounded-3xl space-y-4 shadow-xl">
                                    <div className="flex items-center gap-4 text-red-600">
                                        <Info size={32} strokeWidth={3} />
                                        <h3 className="text-2xl font-black uppercase tracking-tighter italic">Safety Disclaimer</h3>
                                    </div>
                                    <p className="text-red-950 font-black text-md leading-relaxed">
                                        Strictly follow your doctor&apos;s advice for dosage. Do not take more than the recommended dose. This medicine may not be suitable for people with certain health conditions.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest">Side Effects</h4>
                                        <p className="text-sm font-medium">Mild side effects may include dizziness, dry mouth or headache. If you experience rash, difficulties in breathing, seek medical help immediately.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest">Interaction</h4>
                                        <p className="text-sm font-medium">Ask your doctor before using with other medications, especially those containing similar generic ingredients.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "usage" && (
                            <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-8">
                                <h3 className="text-2xl font-black text-slate-900">Recommended Usage</h3>
                                <p className="font-bold">Take with a full glass of water, either after or before meals as directed by your physician.</p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-8 py-5 bg-primary-100 rounded-2xl flex flex-col gap-1 items-center shadow-xl shadow-primary-500/10 scale-105">
                                        <span className="text-[10px] font-black text-primary-600 uppercase tracking-widest">Adult</span>
                                        <span className="text-2xl font-black text-primary-950">1 Tablet</span>
                                    </div>
                                    <div className="px-8 py-5 bg-secondary-100 rounded-2xl flex flex-col gap-1 items-center shadow-xl shadow-secondary-500/10">
                                        <span className="text-[10px] font-black text-secondary-600 uppercase tracking-widest">Max Dose</span>
                                        <span className="text-2xl font-black text-secondary-950">4g / Day</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Consultation Sticky */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group hover:shadow-primary-500/10 transition-shadow duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent pointer-events-none" />
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="space-y-4 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs font-black uppercase tracking-widest italic shadow-xl">
                            <HeartPulse size={14} className="text-primary-400 animate-pulse" />
                            Medicines alone might not be enough
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-xl">Confused about medication?</h2>
                        <p className="text-slate-400 font-bold max-w-xl text-lg opacity-80 uppercase tracking-tight">Speak with our licensed doctors from the safety of your home instantly.</p>
                    </div>
                    <Link href="/consultation">
                        <Button size="lg" className="h-20 px-12 rounded-3xl gap-4 font-black shadow-2xl active:scale-95 text-xl tracking-tighter bg-primary-500 hover:bg-primary-600 border-none group">
                            <MessageCircle size={24} className="group-hover:translate-y-[-2px] transition-transform" />
                            Book Virtual Consult
                            <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform" />
                        </Button>
                    </Link>
                </div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-500/10 blur-[100px] rounded-full group-hover:bg-primary-500/20 transition-all duration-1000" />
            </div>

            {/* Related Products */}
            <div className="space-y-12">
                <div className="flex items-end justify-between border-b border-slate-100 pb-10">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary-100 text-primary-600 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">Relevant Health Needs</div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight italic">Recommended for <span className="text-primary-500 underline decoration-slate-200 underline-offset-8">You</span></h2>
                    </div>
                    <Button variant="link" className="p-0 h-auto gap-3 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-primary-500 group">
                        View All
                        <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export { ProductDetailView };
