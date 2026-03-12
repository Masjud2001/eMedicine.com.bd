import Link from "next/link";
import { Plus, Eye, Star, Info, Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="group relative bg-white rounded-2xl border border-slate-100 p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-500/20 flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Top Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.discountPercentage > 0 && (
                    <div className="bg-primary-500 text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-lg shadow-primary-500/20 uppercase tracking-tighter">
                        -{product.discountPercentage}%
                    </div>
                )}
                {product.isNew && (
                    <div className="bg-accent-500 text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-lg shadow-accent-500/20 uppercase tracking-tighter">
                        NEW
                    </div>
                )}
            </div>

            {/* Wishlist */}
            <button className="absolute top-4 right-4 z-20 p-2.5 bg-white/80 backdrop-blur-md rounded-xl text-slate-300 hover:text-rose-500 hover:scale-110 shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Heart size={18} fill={product.isWishlisted ? "currentColor" : "none"} />
            </button>

            {/* Image Container */}
            <Link href={`/product/${product.id}`} className="block relative aspect-square mb-4 bg-slate-50/30 rounded-2xl overflow-hidden group/img cursor-pointer">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover/img:scale-110 transition-transform duration-700"
                />
                {/* Overlay Action */}
                <div className="absolute inset-0 bg-primary-600/10 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-500 shadow-xl transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-500">
                        <Eye size={22} />
                    </div>
                </div>
            </Link>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                {/* Status Bar */}
                <div className="flex items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-500 uppercase tracking-[0.1em]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        In Stock
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-black text-slate-400">
                        <Star size={10} className="text-amber-400" fill="currentColor" />
                        {product.rating || 4.8}
                    </div>
                </div>

                <Link href={`/product/${product.id}`} className="block mb-2 text-base font-black text-slate-800 line-clamp-2 hover:text-primary-500 transition-colors leading-tight min-h-[44px] tracking-tight">
                    {product.name}
                </Link>

                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{product.category || "Healthcare"}</p>

                {/* Price & Action */}
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-lg font-black text-slate-900 leading-none">
                            ৳{formatPrice(product.price)}
                        </span>
                        {product.discountPercentage > 0 && (
                            <span className="text-xs text-slate-400 line-through font-bold mt-1 opacity-60">
                                ৳{formatPrice(product.mrp)}
                            </span>
                        )}
                    </div>

                    <button className="relative w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all duration-300 group/btn border-none transform active:scale-95">
                        <Plus size={22} strokeWidth={3} className="group-hover/btn:rotate-90 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export { ProductCard };
