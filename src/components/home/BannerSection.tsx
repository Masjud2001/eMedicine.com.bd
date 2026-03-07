"use client";

import { Banner } from "@/components/shared/Banner";
import { Sparkles, PhoneCall, Gift, HeartPulse, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const BannerSection = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden px-4 md:px-8">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-100 rounded-full blur-[200px] opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-24">
                {/* Doctor Consultation Banner */}
                <div className="relative group overflow-hidden rounded-[3.5rem] bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 shadow-2xl transition-all duration-700 hover:shadow-primary-500/10 border-8 border-white/5">
                    <div className="flex-1 space-y-10 text-center lg:text-left relative z-10">
                        <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-black text-xs uppercase tracking-widest shadow-xl">
                            <HeartPulse size={16} strokeWidth={3} />
                            Professional Healthcare
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-xl">
                            Get Professional <span className="text-emerald-400">Doctor</span> Advice from Home
                        </h2>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Connect with our certified medical professionals instantly for personalized consultation and prescription guidance.
                        </p>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                            <Link href="/consultation">
                                <Button variant="accent" size="lg" className="h-18 px-12 rounded-2xl gap-3 text-lg font-black bg-emerald-500 hover:bg-emerald-600 shadow-xl shadow-emerald-500/10 active:scale-95 transition-all text-white group border-none">
                                    Book Virtual Consult
                                    <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                                </Button>
                            </Link>
                            <Link href="tel:+880123456789">
                                <Button variant="outline" size="lg" className="h-18 px-12 rounded-2xl gap-3 text-lg font-black border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-white shadow-xl group transition-all">
                                    <PhoneCall size={22} className="group-hover:scale-110 transition-transform" />
                                    Call Now
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg aspect-square relative z-10">
                        <div className="w-full h-full relative group-hover:scale-[1.03] transition-transform duration-1000">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                alt="Doctor Consultation"
                                className="w-full h-full object-cover rounded-[3rem] shadow-2xl ring-4 ring-white/10"
                            />
                            {/* Floating cards for doctor */}
                            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-5 border border-slate-50 group-hover:translate-y-[-10px] transition-transform delay-100 border-white ring-4 ring-white">
                                <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-100">
                                    <Gift size={28} />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none mb-1">First Session</p>
                                    <p className="text-lg font-black text-slate-900">50% Discount</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute -top-10 -right-10 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
                    </div>
                </div>

                {/* Promo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative group overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary-600 to-primary-800 p-8 md:p-12 text-white shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                        <div className="relative z-10 space-y-6">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 group-hover:bg-white group-hover:text-primary-600 transition-all duration-500">
                                <Sparkles size={32} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tight drop-shadow-lg">
                                Mega Savings <br />on First Order
                            </h3>
                            <p className="text-primary-100 font-bold max-w-sm drop-shadow-md">
                                Use code <span className="bg-white text-primary-600 px-3 py-1 rounded-lg text-lg font-black select-all ml-1 ring-4 ring-primary-500/20">MEDICA25</span> for 25% discount.
                            </p>
                            <Button variant="outline" className="h-14 px-8 rounded-xl border-white/20 bg-white/5 hover:bg-white text-white hover:text-primary-600 shadow-xl font-bold transition-all h-16 text-md font-black">
                                Claim Offer Now
                            </Button>
                        </div>
                        <img src="https://img.icons8.com/bubbles/200/pill.png" alt="pill" className="absolute -bottom-10 -right-10 opacity-20 w-64 h-64 pointer-events-none group-hover:scale-125 transition-transform duration-1000 grayscale opacity-10" />
                    </div>

                    <div className="relative group overflow-hidden rounded-[3rem] bg-gradient-to-br from-secondary-600 to-secondary-800 p-8 md:p-12 text-white shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                        <div className="relative z-10 space-y-6">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 group-hover:bg-white group-hover:text-secondary-600 transition-all duration-500">
                                <Gift size={32} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tight drop-shadow-lg">
                                Free Delivery <br />Across Bangladesh
                            </h3>
                            <p className="text-secondary-100 font-bold max-w-sm drop-shadow-md">
                                No minimum order value. Limited time offer for all health essentials.
                            </p>
                            <Button variant="outline" className="h-14 px-8 rounded-xl border-white/20 bg-white/5 hover:bg-white text-white hover:text-secondary-600 shadow-xl font-bold transition-all h-16 text-md font-black">
                                Shop Essentials
                            </Button>
                        </div>
                        <img src="https://img.icons8.com/bubbles/200/truck.png" alt="truck" className="absolute -bottom-10 -right-10 opacity-20 w-64 h-64 pointer-events-none group-hover:scale-125 transition-transform duration-1000 grayscale opacity-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { BannerSection };
