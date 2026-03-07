"use client";

import { Star, Quote, CheckCircle2, Award, ShieldCheck, HeartPulse } from "lucide-react";
import { TrustBadge } from "@/components/shared/TrustBadge";

const Testimonials = () => {
    const reviews = [
        {
            name: "Ahmed Karim",
            role: "Regular Customer",
            content: "Best online pharmacy in Bangladesh! Medicines are genuine and the delivery speed in Dhaka is unparalleled. Highly recommended for chronic medications.",
            rating: 5,
            image: "https://i.pravatar.cc/100?u=a",
        },
        {
            name: "Sabrina Rahman",
            role: "Verified Patient",
            content: "The prescription upload feature is a lifesaver. No more searching store to store. Their pharmacist contacted me within 10 minutes to verify everything.",
            rating: 5,
            image: "https://i.pravatar.cc/100?u=b",
        },
        {
            name: "Tarek Munir",
            role: "Healthcare Professional",
            content: "Very reliable and well-stocked pharmacy. All items arrived in proper packaging and temperature-controlled bags for cold-chain medicines.",
            rating: 4,
            image: "https://i.pravatar.cc/100?u=c",
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden px-4 md:px-8">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Why Choose Us / Trust Badges */}
                <div className="space-y-16">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 font-black text-xs uppercase tracking-widest shadow-sm">
                            <ShieldCheck size={16} strokeWidth={3} />
                            Quality Assurance
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                            Why Bangladesh Trusts <span className="text-primary-500 underline decoration-slate-200 underline-offset-8">MediCare BD</span>
                        </h2>
                        <p className="text-lg text-slate-500 font-semibold leading-relaxed">
                            We are committed to providing the highest standard of healthcare services and authentic medicines at your doorstep.
                        </p>
                    </div>
                    <TrustBadge />
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-16 border-t border-slate-100">
                    {reviews.map((item, i) => (
                        <div
                            key={i}
                            className="group relative p-10 bg-slate-50/50 rounded-[3rem] border border-slate-100/80 hover:bg-white hover:border-primary-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="absolute top-10 right-10 text-primary-500/10 group-hover:text-primary-500/20 transition-colors pointer-events-none">
                                <Quote size={80} strokeWidth={3} fill="currentColor" />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < item.rating ? "#f59e0b" : "none"} className={i < item.rating ? "text-amber-500 shadow-xl" : "text-slate-200"} strokeWidth={3} />
                                ))}
                            </div>

                            <p className="text-lg font-bold text-slate-700 leading-relaxed mb-10 italic drop-shadow-sm h-32 overflow-hidden">
                                &quot;{item.content}&quot;
                            </p>

                            <div className="flex items-center gap-5 border-t border-slate-200/50 pt-10">
                                <div className="p-1 w-16 h-16 rounded-3xl bg-white border-2 border-slate-100 shadow-xl group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-black text-slate-900 leading-none mb-1">{item.name}</h4>
                                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 group-hover:text-primary-500 transition-colors">{item.role}</span>
                                </div>
                                <div className="ml-auto p-2 bg-emerald-50 rounded-xl">
                                    <CheckCircle2 size={24} className="text-emerald-500 drop-shadow-md" strokeWidth={3} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Corporate Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-12 h-16 opacity-30 px-8">
                    <HeartPulse size={48} className="text-slate-900" />
                    <Award size={48} className="text-slate-900" />
                    <ShieldCheck size={48} className="text-slate-900" />
                    <CheckCircle2 size={48} className="text-slate-900" />
                    <div className="w-px h-8 bg-slate-200" />
                    <p className="text-2xl font-black text-slate-900 tracking-tighter uppercase whitespace-nowrap">DGDA LICENSED PHARMACY</p>
                </div>
            </div>
        </section>
    );
};

export { Testimonials };
