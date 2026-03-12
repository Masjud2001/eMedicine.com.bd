"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ShoppingBag, User, Phone, MapPin, Menu, X, Plus, HeartPulse, ChevronDown, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CartDrawer } from "@/components/cart/CartDrawer";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(2); // Mock count
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const categories = ["All", "Medicine", "Healthcare", "Beauty", "Sexual Wellness", "Baby Care"];

    return (
        <>
            <header className="w-full fixed top-0 z-[80] transition-all duration-500">
                {/* Top Utility Bar */}
                <div className={cn(
                    "bg-secondary-700 text-white py-1.5 px-4 md:px-8 flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-500 overflow-hidden",
                    isScrolled ? "h-0 opacity-0" : "h-9 opacity-100"
                )}>
                    <div className="flex items-center space-x-6">
                        <Link href="/track-order" className="hover:text-primary-100 transition-colors flex items-center gap-1.5">
                            <MapPin size={12} className="text-primary-500" />
                            Track Order
                        </Link>
                        <Link href="/consultation" className="hidden md:flex hover:text-primary-100 transition-colors items-center gap-1.5 border-l border-white/10 pl-6">
                            <HeartPulse size={12} className="text-emerald-500" />
                            Doctor Consultation
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link href="https://m.me/emedicine" target="_blank" className="hover:text-primary-100 transition-colors flex items-center gap-1.5">
                            <MessageCircle size={14} className="text-blue-400" />
                            Direct Chat
                        </Link>
                        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                            <button className="hover:text-primary-500 transition-colors opacity-60 hover:opacity-100">বাংলা</button>
                            <button className="text-primary-500 font-black">EN</button>
                        </div>
                    </div>
                </div>

                {/* Main Header */}
                <div className={cn(
                    "transition-all duration-500 border-b",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-xl py-3 shadow-xl border-slate-100/50"
                        : "bg-white py-5 border-slate-100"
                )}>
                    <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-6 lg:gap-10">
                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0 group">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500 rounded-[1.25rem] flex items-center justify-center mr-3 shadow-lg shadow-primary-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <Plus size={24} className="text-white" strokeWidth={3} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-3xl font-black tracking-tight text-slate-900 leading-none">
                                    eMedicine
                                </span>
                                <span className="text-[10px] font-black text-primary-500 uppercase tracking-[0.2em] mt-1 opacity-80">Online Pharmacy</span>
                            </div>
                        </Link>

                        {/* Centered Search Bar */}
                        <div className="hidden md:flex flex-grow max-w-2xl mx-auto items-center relative group">
                            <div className="flex w-full items-center bg-slate-50 border-2 border-slate-100 rounded-[1.25rem] overflow-hidden focus-within:border-primary-500/30 focus-within:bg-white focus-within:shadow-xl focus-within:shadow-primary-500/5 transition-all duration-500">
                                <div className="relative shrink-0 border-r border-slate-200/60">
                                    <select
                                        className="bg-transparent pl-5 pr-10 py-3 text-xs font-black text-slate-500 uppercase tracking-widest appearance-none cursor-pointer focus:outline-none min-w-[120px]"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        {categories.map(cat => <option key={cat}>{cat}</option>)}
                                    </select>
                                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search for medicines, vitamins, health brands..."
                                    className="flex-grow bg-transparent px-6 py-3 text-sm focus:outline-none placeholder:text-slate-400 font-bold text-slate-700"
                                />
                                <button className="bg-primary-500 text-white p-3.5 mr-1 my-1 rounded-xl hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-600/20 transition-all active:scale-95">
                                    <Search size={22} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 md:gap-4 shrink-0">
                            <Link href="/auth" className="hidden sm:flex flex-col items-center group px-3">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500 transition-all duration-300">
                                    <User size={24} strokeWidth={2} />
                                </div>
                                <span className="text-[9px] font-black text-slate-400 mt-2 uppercase tracking-widest group-hover:text-primary-500">Sign In</span>
                            </Link>

                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative flex flex-col items-center group px-3"
                            >
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500 transition-all duration-300">
                                    <ShoppingBag size={24} strokeWidth={2} />
                                </div>
                                <span className="text-[9px] font-black text-slate-400 mt-2 uppercase tracking-widest group-hover:text-primary-500">Bag</span>
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-2 w-5 h-5 bg-primary-500 text-white text-[10px] font-black flex items-center justify-center rounded-lg border-2 border-white shadow-lg shadow-primary-500/30">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            {/* Mobile Toggle */}
                            <button
                                className="md:hidden w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-primary-500 transition-all"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search Bar - Visible only when not scrolled much on mobile */}
                    {!isScrolled && (
                        <div className="px-4 pb-1 mt-4 md:hidden">
                            <div className="flex w-full items-center bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden focus-within:bg-white focus-within:border-primary-500/20 transition-all duration-500">
                                <input
                                    type="text"
                                    placeholder="Search medicines..."
                                    className="flex-grow bg-transparent px-5 py-3.5 text-sm focus:outline-none font-bold text-slate-700"
                                />
                                <button className="bg-primary-500 text-white p-3 mr-1 my-1 rounded-xl">
                                    <Search size={20} strokeWidth={3} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-[60] md:hidden">
                        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
                        <div className="absolute top-[80px] left-4 right-4 max-h-[80vh] bg-white rounded-[2.5rem] shadow-2xl p-8 overflow-y-auto animate-in fade-in zoom-in duration-500">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-5 bg-primary-50 rounded-3xl">
                                    <div className="w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center text-white">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Welcome back</p>
                                        <p className="text-xl font-black text-slate-900">Sign in to eMedicine</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-2 px-2">Top Categories</p>
                                    {categories.slice(1).map(cat => (
                                        <Link
                                            key={cat}
                                            href={`/shop/${cat.toLowerCase()}`}
                                            className="flex items-center justify-between p-5 bg-slate-50 hover:bg-primary-50 hover:text-primary-500 rounded-2xl text-slate-700 font-black uppercase tracking-widest text-xs transition-all"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {cat}
                                            <ChevronRight size={18} className="text-slate-300" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Spacer for sticky header */}
            <div className={cn("transition-all duration-500", isScrolled ? "h-[80px]" : "h-[120px] md:h-[135px]")} />

            {/* Cart Drawer Component */}
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};

export { Header };
