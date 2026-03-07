"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/mock-data";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShoppingCart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
    const [items, setItems] = useState([
        { ...products[0], quantity: 1 },
        { ...products[1], quantity: 2 }
    ]);

    const updateQuantity = (id: string, delta: number) => {
        setItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryCharge = 60;
    const total = subtotal + deliveryCharge;

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#fcfcfc] py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="flex items-end justify-between border-b border-slate-100 pb-12 overflow-hidden">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-primary-100 bg-primary-50 text-primary-700 font-black text-xs uppercase tracking-widest shadow-sm">
                                <ShoppingCart size={16} strokeWidth={3} />
                                Your Health Basket
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none italic underline decoration-slate-100 underline-offset-8">My Shopping <span className="text-primary-500">Cart</span></h1>
                        </div>

                        <div className="hidden md:flex items-center gap-6 opacity-40">
                            <ShieldCheck size={48} className="text-slate-900" />
                            <div className="text-left">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Safe Store</span>
                                <p className="text-sm font-black text-slate-900 uppercase">100% Genuine</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                        <div className="flex-[1.5] space-y-10 group/list">
                            {items.length > 0 ? (
                                <div className="space-y-8">
                                    {items.map((item) => (
                                        <div key={item.id} className="group relative bg-white p-6 md:p-10 rounded-[3rem] border border-slate-100 shadow-soft hover:shadow-medium hover:border-primary-100 transition-all duration-500 flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-in zoom-in-95 fill-mode-both">
                                            <div className="w-40 h-40 bg-slate-50 border-4 border-white rounded-[2rem] flex items-center justify-center p-6 shrink-0 shadow-medium group-hover:scale-105 transition-transform overflow-hidden">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                            </div>

                                            <div className="flex-1 space-y-4 text-center md:text-left">
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{item.brand}</p>
                                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight italic">{item.name}</h3>
                                                    <p className="text-[11px] font-bold text-primary-500 uppercase tracking-widest italic">{item.genericName}</p>
                                                </div>

                                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-4">
                                                    <div className="flex items-center gap-5 bg-slate-50 p-2.5 rounded-2xl border border-slate-100 shadow-inner group/qty">
                                                        <button onClick={() => updateQuantity(item.id, -1)} className="p-2.5 bg-white text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-soft active:scale-95"><Minus size={16} strokeWidth={4} /></button>
                                                        <span className="w-8 text-center text-lg font-black text-slate-900 select-none">{item.quantity}</span>
                                                        <button onClick={() => updateQuantity(item.id, 1)} className="p-2.5 bg-white text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-soft active:scale-95"><Plus size={16} strokeWidth={4} /></button>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Unit Price</span>
                                                        <span className="text-lg font-black text-slate-900">{formatPrice(item.price)}</span>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Price</span>
                                                        <span className="text-xl font-black text-primary-600 underline decoration-primary-100 decoration-4 underline-offset-4">{formatPrice(item.price * item.quantity)}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="p-5 bg-white border border-slate-50 text-slate-300 hover:text-red-500 hover:bg-red-50 hover:border-red-100 rounded-2xl shadow-soft hover:shadow-medium transition-all group active:scale-95"
                                            >
                                                <Trash2 size={24} strokeWidth={3} className="group-hover:rotate-6 transition-transform" />
                                            </button>
                                        </div>
                                    ))}

                                    <div className="flex justify-center pt-8">
                                        <Link href="/shop">
                                            <Button variant="outline" className="h-16 px-10 rounded-2xl gap-3 border-2 font-black uppercase text-xs tracking-widest text-slate-500 hover:text-primary-500 hover:border-primary-500 shadow-soft group">
                                                <Plus size={18} strokeWidth={3} />
                                                Continue Shopping
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center space-y-10 group bg-slate-50/50 rounded-[4rem] border-4 border-white shadow-2xl border-dashed p-12">
                                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center p-10 shadow-2xl border-4 border-slate-100 group-hover:scale-110 transition-transform duration-700 animate-in zoom-in-50">
                                        <ShoppingBag size={80} className="text-slate-100 group-hover:text-primary-500" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black text-slate-900 italic tracking-tighter">Your Bag is Empty</h3>
                                        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest max-w-[280px] leading-relaxed mx-auto opacity-70">Looks like you haven&apos;t added any medicines yet. Let&apos;s boost your health today!</p>
                                    </div>
                                    <Link href="/shop">
                                        <Button size="lg" className="h-18 px-12 rounded-[2rem] gap-3 text-lg font-black shadow-xl h-20 group">
                                            Start Shopping
                                            <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="flex-1">
                            <div className="sticky top-12 space-y-10 group-summary">
                                <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group hover:shadow-primary-500/10 transition-all duration-700">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 blur-[60px] rounded-full pointer-events-none" />

                                    <h3 className="text-3xl font-black text-white mb-12 border-b border-white/10 pb-10 flex items-center justify-between italic tracking-tighter">
                                        Payment Info
                                        <ShoppingBag size={28} className="text-primary-400 shrink-0" strokeWidth={2.5} />
                                    </h3>

                                    <div className="space-y-8 mb-16">
                                        <div className="flex items-center justify-between opacity-60">
                                            <span className="text-[10px] font-black uppercase tracking-widest underline decoration-white/20 underline-offset-8 decoration-dotted">Original Amount</span>
                                            <span className="text-lg font-black">{formatPrice(subtotal)}</span>
                                        </div>
                                        <div className="flex items-center justify-between opacity-60">
                                            <span className="text-[10px] font-black uppercase tracking-widest underline decoration-white/20 underline-offset-8 decoration-dotted">Delivery Charges</span>
                                            <span className="text-lg font-black">{formatPrice(deliveryCharge)}</span>
                                        </div>
                                        <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] shadow-inner group-hover:bg-white group-hover:text-slate-900 transition-all duration-500 flex items-center justify-between mt-10">
                                            <span className="text-[10px] font-black uppercase tracking-widest">Grand Total</span>
                                            <span className="text-5xl font-black tracking-tighter italic drop-shadow-2xl">{formatPrice(total)}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <Link href="/checkout" className="block">
                                            <Button
                                                size="lg"
                                                className="w-full h-24 rounded-[2.5rem] text-2xl font-black gap-6 shadow-2xl active:scale-95 transition-all text-white bg-primary-500 hover:bg-primary-600 border-none group"
                                                disabled={items.length === 0}
                                            >
                                                Proceed to Ships
                                                <ArrowRight size={28} className="group-hover:translate-x-1.5 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
                                            </Button>
                                        </Link>

                                        {/* Trust indicator */}
                                        <div className="flex items-center justify-center gap-3 pt-4 group-hover/btn:scale-105 transition-transform">
                                            <ShieldCheck size={14} className="text-emerald-400" />
                                            <span className="text-[10px] font-black text-white opacity-40 uppercase tracking-widest">DGDA Licensed Operation</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex items-start gap-6 group hover:border-primary-100 transition-all shadow-soft group hover:shadow-medium">
                                    <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform shadow-medium shrink-0">
                                        <img src="https://img.icons8.com/bubbles/50/checked-truck.png" alt="truck" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Need Help?</h4>
                                        <p className="text-sm font-black text-slate-900 uppercase">Track current order flow</p>
                                        <p className="text-[11px] font-bold text-slate-400 italic">Call: +880 1234 567 890</p>
                                    </div>
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
