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
            className="group relative bg-white p-4 rounded-2xl border border-slate-100 hover:border-primary-500 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 animate-in fade-in"
        >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105">
                <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-contain p-2"
                />
            </div>

            <h3 className="text-xs md:text-sm font-black text-slate-700 line-clamp-1 group-hover:text-primary-500 transition-colors uppercase tracking-tight">
                {category.name}
            </h3>
        </Link>
    );
};

export { CategoryCard };

