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
        <div className="group relative bg-white rounded-2xl border border-slate-100 p-4 transition-all hover:shadow-medium hover:border-primary-100 flex flex-col h-full animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both">
            {/* Badge */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.discountPercentage > 0 && (
                    <span className="bg-accent-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                        {product.discountPercentage}% OFF
                    </span>
                )}
                {product.prescriptionRequired && (
                    <span className="bg-secondary-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Info size={10} />
                        Rx Required
                    </span>
                )}
            </div>

            {/* Wishlist */}
            <button className="absolute top-4 right-4 z-10 p-2.5 bg-white/80 backdrop-blur-md rounded-full text-slate-400 hover:text-red-500 hover:bg-white shadow-soft transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                <Heart size={18} />
            </button>

            {/* Image Container */}
            <Link href={`/product/${product.id}`} className="block relative aspect-square mb-5 bg-slate-50 rounded-xl overflow-hidden group/img">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover/img:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity" />
            </Link>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                <div className="mb-0.5">
                    <Link href={`/brand/${product.brand}`} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-primary-500 transition-colors">
                        {product.brand}
                    </Link>
                </div>
                <Link href={`/product/${product.id}`} className="block mb-2 text-sm font-bold text-slate-900 line-clamp-2 hover:text-primary-500 transition-colors leading-tight">
                    {product.name}
                </Link>

                {product.genericName && (
                    <p className="text-[11px] text-slate-500 mb-2 italic line-clamp-1 h-4">
                        {product.genericName}
                    </p>
                )}

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={1.5} />
                        ))}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500">
                        ({product.reviewsCount})
                    </span>
                </div>

                {/* Price & Action */}
                <div className="mt-auto flex items-end justify-between">
                    <div className="space-y-0.5">
                        {product.discountPercentage > 0 && (
                            <span className="text-[11px] text-slate-400 line-through font-medium">
                                {formatPrice(product.mrp)}
                            </span>
                        )}
                        <div className="text-lg font-black text-slate-900 flex items-center gap-1">
                            {formatPrice(product.price)}
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="p-2.5 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors">
                            <Eye size={18} />
                        </button>
                        <Button size="icon" className="w-10 h-10 rounded-xl">
                            <Plus size={20} strokeWidth={2.5} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ProductCard };
