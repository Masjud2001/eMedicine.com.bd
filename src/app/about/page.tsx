import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, HeartPulse, Award, Users, CheckCircle2, ChevronRight, Globe, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-white py-24 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {/* Hero Section */}
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 space-y-10 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-primary-100 bg-primary-50 text-primary-700 font-black text-xs uppercase tracking-widest shadow-sm">
                                <Globe size={16} strokeWidth={3} />
                                Established in 2026
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight italic underline decoration-slate-100 underline-offset-8">We are <span className="text-primary-500">eMedicine BD</span>. Helping Bangladesh Stay Healthy.</h1>
                            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Your most trusted online pharmacy partner in Bangladesh. Providing genuine medicines and healthcare essentials delivered right to your doorstep with love and care.
                            </p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <Link href="/shop">
                                    <Button size="lg" className="h-20 px-12 rounded-[2.5rem] text-xl font-black gap-4 shadow-2xl active:scale-95 transition-all text-white bg-primary-500 hover:bg-primary-600 border-none group">
                                        Explore Our Services
                                        <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-2xl relative">
                            <div className="aspect-square bg-white border-8 border-white rounded-[4rem] shadow-2xl overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200"
                                    alt="eMedicine BD"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="absolute -bottom-10 -right-10 p-10 bg-slate-900 rounded-[3rem] shadow-2xl text-white space-y-4 max-w-[280px] group-hover:translate-x-[-10px] transition-transform duration-700">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-primary-500 group-hover:text-white transition-all scale-105">
                                    <Award size={32} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-black italic tracking-tighter">Licensed & Verified</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Verified by DGDA and authorized medical distribution partners.</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 border-t border-slate-50">
                        {[
                            { label: "Products Available", val: "15,000+", icon: <HeartPulse className="text-primary-500" /> },
                            { label: "Happy Customers", val: "50,000+", icon: <Users className="text-secondary-500" /> },
                            { label: "Cities Covered", val: "64+", icon: <Globe className="text-emerald-500" /> },
                            { label: "Verified Partners", val: "200+", icon: <Award className="text-amber-500" /> },
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:text-left space-y-4 group">
                                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-4 group-hover:scale-110 transition-transform shadow-soft group-hover:bg-white group-hover:shadow-medium mx-auto md:mx-0">
                                    {stat.icon}
                                </div>
                                <div className="space-y-1">
                                    <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter italic">{stat.val}</span>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 leading-none">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="p-12 md:p-16 bg-slate-50 rounded-[4rem] border border-slate-100 space-y-8 group hover:bg-white hover:shadow-2xl hover:border-primary-100 transition-all duration-700">
                            <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform shadow-xl shadow-primary-500/10">
                                <Zap size={40} strokeWidth={2.5} />
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 underline decoration-primary-100 decoration-8 underline-offset-8 italic">Our Mission</h2>
                            <p className="text-lg font-bold text-slate-500 leading-relaxed uppercase tracking-tight">
                                To revolutionize the healthcare accessibility in Bangladesh by providing 100% authentic medicines via digital platform with maximum security and speed. We aim to ensure every citizen has access to life-saving drugs instantly.
                            </p>
                        </div>
                        <div className="p-12 md:p-16 bg-slate-900 rounded-[4rem] text-white border border-slate-800 space-y-8 group hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-700">
                            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-primary-400 border border-white/20 group-hover:scale-110 transition-transform shadow-xl">
                                <HeartPulse size={40} strokeWidth={2.5} />
                            </div>
                            <h2 className="text-4xl font-black text-white italic tracking-tighter">Our Vision</h2>
                            <p className="text-lg font-bold text-slate-400 leading-relaxed uppercase tracking-tight opacity-80">
                                Becoming the number one digital healthcare ecosystem in Bangladesh where patients can get medicines, consultations, and lab test reports seamlessly from a single platform.
                            </p>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="bg-slate-900 p-12 md:p-24 rounded-[4rem] relative overflow-hidden group shadow-2xl">
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-primary-500/10 to-transparent pointer-events-none" />
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 rounded-full border border-white/20 text-xs font-black uppercase tracking-widest italic text-white shadow-xl">
                                    <CheckCircle2 size={16} className="text-primary-400" strokeWidth={3} />
                                    15,000+ Verified SKU Available
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">Experience Health <br />like Never Before.</h2>
                                <p className="text-lg font-medium text-slate-400 max-w-xl opacity-80 uppercase tracking-widest leading-relaxed">Start your journey with eMedicine BD today and get exclusive discounts.</p>
                            </div>
                            <Link href="/auth">
                                <Button size="lg" className="h-24 px-16 rounded-[2.5rem] text-2xl font-black gap-6 shadow-2xl active:scale-95 transition-all text-white bg-primary-500 hover:bg-primary-600 border-none group">
                                    Join Us Now
                                    <ChevronRight size={32} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
