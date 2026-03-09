"use client";

import Link from "next/link";
import Image from "next/image";
import { Plus, Eye, Star, Info, Heart } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="group relative bg-white rounded-xl border border-slate-100 p-3.5 transition-all hover:shadow-lg hover:border-slate-200 flex flex-col h-full animate-in fade-in duration-500">
            {/* Discount Badge */}
            {product.discountPercentage > 0 && (
                <div className="absolute top-0 left-0 z-10">
                    <div className="bg-secondary-500 text-white text-[9px] font-black px-2 py-1 rounded-tl-xl rounded-br-xl shadow-sm uppercase tracking-tighter">
                        -{product.discountPercentage}% OFF
                    </div>
                </div>
            )}

            {/* Wishlist */}
            <button className="absolute top-3 right-3 z-10 p-1.5 text-slate-300 hover:text-red-500 transition-colors">
                <Heart size={18} />
            </button>

            {/* Image Container */}
            <Link href={`/product/${product.id}`} className="block relative aspect-square mb-3 bg-slate-50/50 rounded-lg overflow-hidden group/img">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 group-hover/img:scale-110 transition-transform duration-500"
                />
            </Link>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                {/* Delivery Estimate (Arogga Style) */}
                <div className="flex items-center gap-1 text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-1.5">
                    <Rocket size={10} fill="currentColor" />
                    12-24 Hours
                </div>

                <Link href={`/product/${product.id}`} className="block mb-1 text-sm font-bold text-slate-800 line-clamp-2 hover:text-primary-500 transition-colors leading-tight min-h-[40px]">
                    {product.name}
                </Link>

                <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} fill={i < Math.floor(product.rating || 4) ? "currentColor" : "none"} strokeWidth={1.5} />
                        ))}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400">({product.reviewsCount || 12})</span>
                </div>

                {/* Price & Action */}
                <div className="mt-auto flex items-end justify-between">
                    <div className="flex flex-col">
                        <div className="flex items-baseline gap-1.5 flex-wrap">
                            <span className="text-base font-black text-slate-900 leading-none">
                                {formatPrice(product.price)}
                            </span>
                            {product.discountPercentage > 0 && (
                                <span className="text-[10px] text-slate-400 line-through font-bold">
                                    {formatPrice(product.mrp)}
                                </span>
                            )}
                        </div>
                    </div>

                    <button className="flex items-center gap-1 px-3 py-1.5 bg-white border-2 border-primary-500 text-primary-500 rounded-lg text-xs font-black hover:bg-primary-500 hover:text-white transition-all transform active:scale-95">
                        <Plus size={14} strokeWidth={3} />
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
};

const Rocket = ({ size, className, fill }: { size: number, className?: string, fill?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" /><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" /></svg>
);

export { ProductCard };


export { ProductCard };
