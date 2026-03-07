"use client";

import Link from "next/link";
import { Plus, ChevronRight, FileUp, Zap, Clock, ShieldCheck, HeartPulse, Sparkles, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-10 pb-20 md:pt-16 md:pb-32 px-4 md:px-8">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[60%] h-full bg-slate-50 opacity-40 blur-3xl pointer-events-none -skew-x-12" />
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-40 right-40 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-20" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                <div className="flex-1 space-y-10 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 font-black text-xs uppercase tracking-widest shadow-sm shadow-emerald-200"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-500/20" />
                        Your Health, Our Priority
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl xl:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight drop-shadow-sm"
                    >
                        Genuine <span className="text-primary-500">Medicines</span> Delivered to Your <span className="text-secondary-600">Doorstep</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
                    >
                        Get authentic medicines, healthcare essentials, and pharmacist support within hours. Bangladesh's most reliable online pharmacy service.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                    >
                        <Link href="/upload-prescription">
                            <Button size="lg" className="rounded-2xl gap-3 shadow-2xl px-10 hover:scale-[1.03] active:scale-95 transition-all h-20 text-lg group">
                                <FileUp size={24} className="group-hover:translate-y-[-1px] transition-transform" strokeWidth={2.5} />
                                Upload Prescription
                            </Button>
                        </Link>
                        <Link href="/shop">
                            <Button variant="outline" size="lg" className="rounded-2xl gap-3 px-10 hover:scale-[1.03] active:scale-95 transition-all h-20 text-lg border-2 border-slate-200 group">
                                Order Medicines
                                <ArrowRight size={24} className="text-primary-500 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Quick Metrics */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-70"
                    >
                        <div className="flex items-center gap-2 group">
                            <div className="flex -space-x-3 group-hover:-space-x-2 transition-all">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden ring-4 ring-slate-50">
                                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-500 flex items-center justify-center text-[10px] font-bold text-white ring-4 ring-slate-50">
                                    50K+
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-amber-500"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                                <span className="text-[11px] font-black text-slate-800 uppercase tracking-tighter">Trusted Clients</span>
                            </div>
                        </div>
                        <div className="w-px h-10 bg-slate-200" />
                        <div className="flex items-center gap-2.5">
                            <ShieldCheck className="text-secondary-500" size={28} />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-900 leading-none">DGDA Certified</span>
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Licensed Pharmacy</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Illustration / Graphics */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full max-w-2xl relative"
                >
                    {/* Main Visual */}
                    <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-[3rem] bg-white shadow-2xl overflow-hidden border-8 border-white group">
                        <img
                            src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200"
                            alt="MediCare BD Pharmacy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

                        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                            <div className="px-6 py-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-emerald-500 rounded-xl text-white">
                                        <Zap size={24} fill="white" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-black text-slate-400 uppercase tracking-wider block leading-none mb-1">Estimated Delivery</span>
                                        <p className="text-xl font-black text-slate-900">Across Dhaka in <span className="text-emerald-500">2-4 Hours</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating cards */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-12 -right-12 z-20 p-5 bg-white rounded-3xl shadow-2xl border border-slate-50 max-w-[200px]"
                    >
                        <div className="flex flex-col gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center">
                                <HeartPulse className="text-primary-500" size={28} />
                            </div>
                            <p className="text-sm font-bold text-slate-900 leading-snug">Expert Pharmacist Support Always Available</p>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-primary-500 rounded-full" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-10 -left-10 z-20 p-6 bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 flex items-center gap-5"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
                            <Clock className="text-emerald-400" size={32} />
                        </div>
                        <div>
                            <p className="text-sm font-black text-white uppercase tracking-wider mb-1">Fast Refill</p>
                            <p className="text-xs text-slate-400 leading-relaxed font-medium">Order previous medications<br />with just one tap.</p>
                        </div>
                    </motion.div>
            </div>
        </div>
    </section >
  );
};

export { Hero };
