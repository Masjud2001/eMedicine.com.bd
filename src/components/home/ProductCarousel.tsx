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
        <section className="py-24 bg-white relative overflow-hidden px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 relative z-10">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-amber-50 text-amber-600 font-black text-xs uppercase tracking-widest shadow-sm shadow-amber-200">
                            <TrendingUp size={14} strokeWidth={3} />
                            Popular Choice
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none drop-shadow-sm">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-lg text-slate-500 font-semibold max-w-2xl leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="swiper-prev-btn p-5 bg-white border-2 border-slate-100 rounded-3xl text-slate-400 hover:text-primary-500 hover:border-primary-500 hover:shadow-medium transition-all group active:scale-95">
                            <ChevronLeft size={28} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button className="swiper-next-btn p-5 bg-white border-2 border-slate-100 rounded-3xl text-slate-400 hover:text-primary-500 hover:border-primary-500 hover:shadow-medium transition-all group active:scale-95">
                            <ChevronRight size={28} strokeWidth={3} className="group-hover:translate-x-1.5 transition-transform" />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={32}
                    slidesPerView={1}
                    navigation={{
                        prevEl: ".swiper-prev-btn",
                        nextEl: ".swiper-next-btn",
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        el: ".swiper-custom-pagination",
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="pb-24 !overflow-visible"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="h-auto">
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                    {/* Duplicate products to fill carousel better if mock data is small */}
                    {products.map((product) => (
                        <SwiperSlide key={`${product.id}-copy`} className="h-auto">
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center -mt-10">
                    <div className="swiper-custom-pagination flex gap-2 !static !w-auto" />
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </section>
    );
};

export { ProductCarousel };
