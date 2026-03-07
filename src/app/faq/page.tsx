"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { Search, ChevronDown, HelpCircle, ShieldCheck, Truck, CreditCard, HeartPulse, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

const faqs = [
    {
        category: "Ordering Medicines",
        icon: <Plus className="text-primary-500" />,
        items: [
            { question: "How do I upload my prescription?", answer: "You can upload your prescription directly from the homepage 'Upload Prescription' button or the dedicated upload page. Once uploaded, our registered pharmacist will verify and process your order." },
            { question: "Can I order medicine without a prescription?", answer: "Only Over-The-Counter (OTC) medicines can be ordered without a prescription. For all other scheduled medications, a valid prescription from a registered doctor is mandatory as per DGDA regulations." },
            { question: "How long does verification take?", answer: "Prescription verification usually takes 15-30 minutes during our business hours (8 AM - 11 PM)." }
        ]
    },
    {
        category: "Delivery & Areas",
        icon: <Truck className="text-secondary-500" />,
        items: [
            { question: "Where do you deliver?", answer: "We deliver all across Bangladesh. Inside Dhaka city, we provide express delivery within 4-6 hours. Outside Dhaka, it usually takes 24-48 hours via our logistics partners." },
            { question: "What are the delivery charges?", answer: "Standard delivery inside Dhaka is ৳60. For outside Dhaka, the charge starts from ৳120 depending on weight and location." }
        ]
    },
    {
        category: "Payments & Refunds",
        icon: <CreditCard className="text-emerald-500" />,
        items: [
            { question: "What payment methods are available?", answer: "We accept Cash on Delivery (COD), bKash, Nagad, and all major Debit/Credit cards." },
            { question: "How do I get a refund?", answer: "If you receive damaged or incorrect medicine, notify us within 24 hours for a full refund or replacement. Refund processing takes 3-7 business days." }
        ]
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>("0-0");
    const [searchTerm, setSearchTerm] = useState("");

    const toggle = (idx: string) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#fcfcfc] py-24 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {/* Hero */}
                    <div className="text-center space-y-10 group">
                        <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-primary-100 bg-primary-50 text-primary-700 font-black text-xs uppercase tracking-widest shadow-sm">
                            <HelpCircle size={16} strokeWidth={3} />
                            Knowledge Center
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1] tracking-tighter italic">Common <span className="text-primary-500 underline decoration-slate-100 underline-offset-8 decoration-dotted">Health</span> Inquiries.</h1>
                        <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto uppercase tracking-tight">
                            Find instant answers to your questions about orders, prescriptions, delivery, and more.
                        </p>

                        <div className="max-w-2xl mx-auto relative group/search mt-16 scale-110">
                            <Input
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search your question here..."
                                className="h-20 font-black text-xl border-2 focus:ring-0 px-10 rounded-[2.5rem] bg-white shadow-2xl group-hover/search:shadow-primary-500/10 transition-all"
                                icon={<Search size={24} className="text-primary-500" />}
                            />
                            <button className="absolute right-4 top-4 bottom-4 px-10 bg-slate-900 text-white rounded-[2rem] text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95">Search</button>
                        </div>
                    </div>

                    {/* Faq List */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
                        <div className="lg:col-span-1 space-y-8 sticky top-12 h-fit">
                            <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 blur-[60px] rounded-full pointer-events-none" />
                                <h3 className="text-2xl font-black italic tracking-tighter mb-8 border-b border-white/10 pb-6 leading-none">Help Categories</h3>
                                <div className="space-y-6">
                                    {faqs.map((cat, i) => (
                                        <button key={i} className="flex items-center justify-between w-full group/cat hover:translate-x-3 transition-transform">
                                            <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover/cat:text-primary-400">{cat.category}</span>
                                            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-white shadow-xl opacity-40 group-hover/cat:opacity-100 group-hover/cat:bg-primary-500 group-hover/cat:text-white transition-all">
                                                {cat.icon}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-emerald-50/50 p-8 rounded-[3rem] border border-emerald-100 space-y-4 shadow-xl shadow-emerald-500/5 group hover:bg-white transition-colors">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-medium group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={32} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-md font-black text-slate-900 italic tracking-tighter">Still Need Experts?</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">Chat with our online pharmacist now for free medical guidance.</p>
                                </div>
                                <Button variant="link" className="p-0 h-auto text-primary-500 text-xs font-black uppercase tracking-widest gap-2 flex group/btn">
                                    Live Chat <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-3 space-y-16 group/content">
                            {faqs.map((cat, catIdx) => (
                                <div key={catIdx} className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-[100ms]">
                                    <div className="flex items-center gap-6 border-b border-slate-100 pb-8">
                                        <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-medium text-slate-900">
                                            {cat.icon}
                                        </div>
                                        <h2 className="text-3xl font-black text-slate-900 italic tracking-tighter leading-none">{cat.category}</h2>
                                    </div>

                                    <div className="space-y-6">
                                        {cat.items.map((item, itemIdx) => {
                                            const idx = `${catIdx}-${itemIdx}`;
                                            const isOpen = openIndex === idx;
                                            return (
                                                <div key={itemIdx} className={`bg-white rounded-[2.5rem] border transition-all duration-500 overflow-hidden group/item ${isOpen ? 'border-primary-100 shadow-2xl' : 'border-slate-100 shadow-soft hover:shadow-medium hover:border-slate-200'}`}>
                                                    <button
                                                        onClick={() => toggle(idx)}
                                                        className="w-full p-8 md:p-10 flex items-center justify-between text-left group-active:scale-95 transition-transform"
                                                    >
                                                        <h4 className={`text-lg md:text-xl font-black tracking-tight italic transition-colors ${isOpen ? 'text-primary-600' : 'text-slate-900'}`}>{item.question}</h4>
                                                        <div className={`p-3 rounded-xl border-2 transition-all shrink-0 ${isOpen ? 'bg-primary-500 border-primary-500 text-white rotate-180 shadow-xl' : 'bg-slate-50 border-slate-50 text-slate-400 group-hover/item:border-primary-100 group-hover/item:text-primary-500'}`}>
                                                            <ChevronDown size={24} strokeWidth={3} />
                                                        </div>
                                                    </button>
                                                    <div className={`transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-10' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                                                        <div className="px-10 md:px-14 py-2 border-t border-slate-50 mx-8 mt-4 pt-10">
                                                            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-3xl italic">
                                                                {item.answer}
                                                            </p>
                                                            <div className="mt-8 flex items-center gap-6">
                                                                <span className="text-[10px] font-black uppercase text-slate-300 tracking-widest leading-none">Was this helpful?</span>
                                                                <div className="flex items-center gap-3">
                                                                    <button className="px-4 py-2 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400 rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Yes</button>
                                                                    <button className="px-4 py-2 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors">No</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* More Help */}
                    <div className="bg-slate-900/5 p-12 md:p-24 rounded-[4rem] border-4 border-white shadow-2xl border-dashed text-center space-y-12 group hover:bg-white transition-all duration-700">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none italic">Didn&apos;t find your answer?</h2>
                            <p className="text-slate-500 font-bold uppercase text-[11px] tracking-widest opacity-60">Reach out to our specialist team immediately.</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <Link href="/contact" className="w-full md:w-auto">
                                <Button size="lg" className="w-full h-20 px-12 rounded-[2rem] gap-4 font-black shadow-2xl active:scale-95 transition-all text-white bg-slate-900 hover:bg-black border-none group">
                                    Contact Support
                                    <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                                </Button>
                            </Link>
                            <div className="flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-[2rem] shadow-medium">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 shadow-xl shadow-primary-500/5">
                                    <HelpCircle size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black uppercase text-slate-400 leading-none mb-1">24/7 Hotline</p>
                                    <p className="text-xl font-black text-slate-900 italic">+880 1234 567 890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
