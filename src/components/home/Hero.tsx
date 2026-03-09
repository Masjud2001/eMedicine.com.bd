"use client";

import Link from "next/link";
import { Plus, FileUp, Zap, Clock, ShieldCheck, HeartPulse, Star, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const banners = [
    {
        id: 1,
        title: "Stay Ahead with Health Essentials",
        subtitle: "Up to 15% discount on all chronic medications",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=1600",
        cta: "Order Now",
        link: "/shop",
        color: "from-teal-600/20"
    },
    {
        id: 2,
        title: "Prescription Upload Made Easy",
        subtitle: "Order within 2 minutes by uploading your prescription",
        image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1600",
        cta: "Upload Now",
        link: "/upload-prescription",
        color: "from-red-600/20"
    },
    {
        id: 3,
        title: "Baby Care Specials",
        subtitle: "Genuine baby products delivered safely to your home",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=1600",
        cta: "Shop Now",
        link: "/category/baby-care",
        color: "from-amber-600/20"
    }
];

const Hero = () => {
    return (
        <section className="bg-white px-4 md:px-8 pt-6 pb-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
                {/* Main Slider */}
                <div className="flex-[2.5] rounded-[2rem] overflow-hidden shadow-sm relative group">
                    <Swiper
                        modules={[Autoplay, Pagination, EffectFade]}
                        effect="fade"
                        speed={1000}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        className="h-[300px] md:h-[450px]"
                    >
                        {banners.map((banner) => (
                            <SwiperSlide key={banner.id}>
                                <div className="relative w-full h-full">
                                    <img
                                        src={banner.image}
                                        alt={banner.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-r ${banner.color} via-transparent to-transparent`} />
                                    <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 space-y-4">
                                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 max-w-lg leading-tight">
                                            {banner.title}
                                        </h1>
                                        <p className="text-lg md:text-xl font-bold text-slate-600 max-w-md">
                                            {banner.subtitle}
                                        </p>
                                        <Link href={banner.link}>
                                            <Button size="lg" className="rounded-xl h-14 px-8 font-black text-sm uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all">
                                                {banner.cta}
                                                <ArrowRight size={18} className="ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Side Static Banners (Arogga Style) */}
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex-1 rounded-[2rem] bg-primary-500 overflow-hidden relative group cursor-pointer p-8 flex flex-col justify-between shadow-xl shadow-primary-500/10 active:scale-[0.98] transition-all">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-white leading-tight">Upload<br />Prescription</h3>
                            <p className="text-white/80 text-xs font-bold mt-2 uppercase tracking-widest leading-none">Order in 2 mins</p>
                        </div>
                        <Link href="/upload-prescription" className="relative z-10 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-500 shadow-xl group-hover:scale-110 transition-transform">
                            <FileUp size={24} />
                        </Link>
                        {/* Abstract background element */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all" />
                    </div>

                    <div className="flex-1 rounded-[2rem] bg-secondary-500 overflow-hidden relative group cursor-pointer p-8 flex flex-col justify-between shadow-xl shadow-secondary-500/10 active:scale-[0.98] transition-all">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-white leading-tight">Flash Sale<br />Every Hour</h3>
                            <p className="text-white/80 text-xs font-bold mt-2 uppercase tracking-widest leading-none">Upto 40% OFF</p>
                        </div>
                        <Link href="/shop" className="relative z-10 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary-500 shadow-xl group-hover:scale-110 transition-transform">
                            <Zap size={24} fill="currentColor" />
                        </Link>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all" />
                    </div>
                </div>
            </div>

            {/* Sub-hero trust badges */}
            <div className="max-w-7xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-slate-100 pt-12">
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500 transition-all">
                        <ShieldCheck size={28} />
                    </div>
                    <div>
                        <p className="text-sm font-black text-slate-900 leading-none mb-1">Genuine Meds</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">DGDA Certified</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500 transition-all">
                        <Clock size={28} />
                    </div>
                    <div>
                        <p className="text-sm font-black text-slate-900 leading-none mb-1">Fast Delivery</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Across Dhaka</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500 transition-all">
                        <Zap size={28} />
                    </div>
                    <div>
                        <p className="text-sm font-black text-slate-900 leading-none mb-1">Flash Deals</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Best Prices</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500 transition-all">
                        <Search size={28} />
                    </div>
                    <div>
                        <p className="text-sm font-black text-slate-900 leading-none mb-1">10K+ Products</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Wide Range</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hero };
