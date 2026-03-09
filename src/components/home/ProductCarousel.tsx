"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/data/mock-data";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import Link from "next/link";

interface ProductCarouselProps {
    title: string;
    subtitle?: string;
}

const ProductCarousel = ({ title, subtitle }: ProductCarouselProps) => {
    return (
        <section className="py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight uppercase">
                            {title}
                        </h2>
                        {subtitle && <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{subtitle}</p>}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/shop" className="text-sm font-black text-primary-500 hover:text-primary-600 uppercase tracking-widest flex items-center gap-1 group">
                            View All
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-2">
                            <button className="swiper-prev-btn w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary-500 hover:border-primary-500 transition-all active:scale-95 shadow-sm">
                                <ChevronLeft size={20} strokeWidth={3} />
                            </button>
                            <button className="swiper-next-btn w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary-500 hover:border-primary-500 transition-all active:scale-95 shadow-sm">
                                <ChevronRight size={20} strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative group/carousel">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        navigation={{
                            prevEl: ".swiper-prev-btn",
                            nextEl: ".swiper-next-btn",
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                            1536: { slidesPerView: 6 },
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className="!overflow-visible"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id} className="h-auto">
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export { ProductCarousel };
