"use client";

import { Banner } from "@/components/shared/Banner";
import { Sparkles, PhoneCall, Gift, HeartPulse, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const BannerSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden px-4 md:px-8">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Doctor Consultation Banner */}
                <div className="relative group overflow-hidden rounded-[2.5rem] bg-secondary-700 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-2xl transition-all duration-700 hover:shadow-primary-500/10 border border-slate-800">
                    <div className="flex-1 space-y-8 text-center lg:text-left relative z-10">
                        <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 font-black text-[10px] uppercase tracking-[0.2em] shadow-xl border border-emerald-500/20">
                            <HeartPulse size={14} strokeWidth={3} />
                            Professional Healthcare
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-xl">
                            Expert <span className="text-emerald-400">Doctor</span> Advice <br />at Your Fingertips
                        </h2>
                        <p className="text-lg text-slate-400 font-bold leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Connect with verified medical experts in under 15 minutes for personalized healthcare guidance and prescriptions.
                        </p>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                            <Link href="/consultation">
                                <Button size="lg" className="h-16 px-10 rounded-2xl gap-3 text-sm font-black bg-emerald-500 hover:bg-emerald-600 shadow-xl shadow-emerald-500/20 active:scale-95 transition-all text-white border-none uppercase tracking-widest">
                                    Book Now
                                    <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                                </Button>
                            </Link>
                            <Link href="tel:+880123456789">
                                <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl gap-3 text-sm font-black border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-white shadow-xl group transition-all uppercase tracking-widest">
                                    <PhoneCall size={18} />
                                    Call Center
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg aspect-[4/3] relative z-10">
                        <div className="w-full h-full relative group-hover:scale-[1.03] transition-all duration-1000">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                alt="Doctor Consultation"
                                className="w-full h-full object-cover rounded-[2rem] shadow-2xl ring-1 ring-white/10"
                            />
                            {/* Floating Stats */}
                            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-[1.5rem] shadow-2xl flex items-center gap-4 border border-slate-100 group-hover:-translate-y-2 transition-transform duration-500 ring-4 ring-white">
                                <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-500 border border-emerald-100">
                                    <Gift size={24} strokeWidth={2.5} />
                                </div>
                                <div className="pr-4">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Promo Code</p>
                                    <p className="text-base font-black text-slate-900 tracking-tight">VIRTUAL50</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-500/5 blur-[120px] rounded-full -z-10" />
                </div>

                {/* Promo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group overflow-hidden rounded-[2.5rem] bg-primary-500 p-10 text-white shadow-2xl shadow-primary-500/10 hover:-translate-y-1 transition-all duration-500">
                        <div className="relative z-10 space-y-6">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                                <Sparkles size={28} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-3xl font-black leading-tight tracking-tight drop-shadow-lg">
                                Genuine Health <br />Essentials 40% OFF
                            </h3>
                            <p className="text-primary-100 font-bold max-w-sm drop-shadow-md">
                                Use code <span className="bg-white/10 px-3 py-1 rounded-lg text-lg font-black border border-white/20 ml-1">EMED25</span>
                            </p>
                            <Button className="h-14 px-8 rounded-xl bg-white text-primary-600 hover:bg-slate-50 shadow-xl font-black transition-all uppercase tracking-widest text-xs">
                                Shop Now
                            </Button>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                    </div>

                    <div className="relative group overflow-hidden rounded-[2.5rem] bg-emerald-500 p-10 text-white shadow-2xl shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-500">
                        <div className="relative z-10 space-y-6">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                                <Gift size={28} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-3xl font-black leading-tight tracking-tight drop-shadow-lg">
                                Fast Doorstep <br />Delivery across BD
                            </h3>
                            <p className="text-emerald-50 font-bold max-w-sm drop-shadow-md">
                                Always genuine, always fast, always reliable.
                            </p>
                            <Button className="h-14 px-8 rounded-xl bg-white text-emerald-600 hover:bg-slate-50 shadow-xl font-black transition-all uppercase tracking-widest text-xs">
                                View Details
                            </Button>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { BannerSection };
