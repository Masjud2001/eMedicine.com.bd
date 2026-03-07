import Link from "next/link";
import { Category } from "@/types";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
    category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <Link
            href={`/category/${category.slug}`}
            className="group relative bg-white p-5 rounded-2xl border border-slate-100 hover:border-primary-100 hover:shadow-medium transition-all duration-300 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in slide-in-from-bottom-2"
        >
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-slate-50 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500 ring-2 ring-transparent group-hover:ring-primary-100">
                <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="space-y-1 w-full">
                <h3 className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-primary-500 transition-colors">
                    {category.name}
                </h3>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 group-hover:text-secondary-500 flex items-center justify-center gap-1">
                    Explore <ChevronRight size={10} strokeWidth={3} />
                </p>
            </div>

            {/* Decorative accent */}
            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-primary-100 rounded-full group-hover:bg-primary-500 transition-colors" />
        </Link>
    );
};

export { CategoryCard };
