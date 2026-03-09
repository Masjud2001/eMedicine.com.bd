"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Phone, MapPin, Menu, X, Trash, Plus, Minus, FileText, Repeat, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
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
        <header className="w-full relative z-50">
            {/* Top Utility Bar - More eMedicine style */}
            <div className="bg-slate-900 text-white py-1.5 px-4 md:px-8 flex justify-between items-center text-[10px] md:text-xs font-medium">
                <div className="flex items-center space-x-4 md:space-x-6">
                    <Link href="/track-order" className="hover:text-primary-100 transition-colors flex items-center gap-1.5">
                        <MapPin size={12} className="text-primary-500" />
                        Track Your Order
                    </Link>
                    <Link href="/consultation" className="hidden md:flex hover:text-primary-100 transition-colors items-center gap-1.5">
                        <HeartPulse size={12} className="text-secondary-500" />
                        Doctor Consultation
                    </Link>
                </div>
                <div className="flex items-center space-x-4 md:space-x-6">
                    <Link href="https://m.me/emedicinebd" target="_blank" className="hover:text-primary-100 transition-colors flex items-center gap-1.5">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center p-0.5">
                            <span className="text-[8px]">💬</span>
                        </div>
                        Chat with us
                    </Link>
                    <div className="flex items-center gap-3">
                        <button className="hover:text-primary-500 transition-colors">বাংলা</button>
                        <div className="w-px h-3 bg-slate-700" />
                        <button className="text-primary-500 font-bold">English</button>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className={cn(
                "bg-white transition-all sticky top-0 border-b border-slate-100",
                isScrolled ? "py-2 shadow-md" : "py-3 md:py-4"
            )}>
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-4 lg:gap-8">
                    {/* Logo & Location */}
                    <div className="flex items-center gap-6 shrink-0">
                        <Link href="/" className="flex items-center">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-500 rounded-xl flex items-center justify-center mr-2 shadow-sm">
                                <Plus size={20} className="text-white" />
                            </div>
                            <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-900">
                                eMedicine
                            </span>
                        </Link>

                        <div className="hidden lg:flex flex-col border-l border-slate-200 pl-4">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Delivery To</span>
                            <div className="flex items-center gap-1 text-primary-500 cursor-pointer hover:text-primary-600 transition-colors">
                                <span className="text-sm font-bold">Dhaka, Bangladesh</span>
                                <ChevronDown size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Prominent Search Bar (eMedicine Style) */}
                    <div className="hidden md:flex flex-grow max-w-2xl relative">
                        <div className="flex w-full items-center bg-slate-100 rounded-lg overflow-hidden border-2 border-transparent focus-within:border-primary-500/30 transition-all">
                            <div className="relative group shrink-0">
                                <select
                                    className="bg-transparent pl-4 pr-8 py-2.5 text-xs font-bold text-slate-600 appearance-none cursor-pointer focus:outline-none min-w-[100px]"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map(cat => <option key={cat}>{cat}</option>)}
                                </select>
                                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                            </div>
                            <div className="w-px h-6 bg-slate-300 mx-1" />
                            <input
                                type="text"
                                placeholder="Search for medicines, health products, brands..."
                                className="flex-grow bg-transparent px-4 py-2.5 text-sm focus:outline-none placeholder:text-slate-400 font-medium"
                            />
                            <button className="bg-primary-500 text-white p-2.5 hover:bg-primary-600 transition-colors">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center ml-auto gap-2 md:gap-4">
                        <Link href="/auth" className="flex flex-col items-center group px-2">
                            <User size={22} className="text-slate-700 group-hover:text-primary-500 transition-colors" />
                            <span className="text-[10px] font-bold text-slate-500 mt-1 uppercase group-hover:text-primary-500">Sign In</span>
                        </Link>

                        <Link href="/cart" className="relative flex flex-col items-center group px-2">
                            <ShoppingCart size={22} className="text-slate-700 group-hover:text-primary-500 transition-colors" />
                            <span className="text-[10px] font-bold text-slate-500 mt-1 uppercase group-hover:text-primary-500">Cart</span>
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-1 w-4 h-4 bg-secondary-500 text-white text-[9px] font-black flex items-center justify-center rounded-full border-2 border-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 rounded-lg bg-slate-50 text-slate-600"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="px-4 pb-3 mt-2 md:hidden">
                    <div className="flex w-full items-center bg-slate-100 rounded-lg overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search medicines..."
                            className="flex-grow bg-transparent px-4 py-2.5 text-sm focus:outline-none"
                        />
                        <button className="bg-primary-500 text-white p-2.5">
                            <Search size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] md:hidden">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
                    <div className="absolute top-0 left-0 w-[85%] h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
                        <div className="p-6 bg-primary-500 text-white flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <User size={24} />
                                <span className="font-bold">Welcome, Guest</span>
                            </div>
                            <button onClick={() => setIsMobileMenuOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            <div className="p-4 space-y-1">
                                <Link href="/upload-prescription" className="flex items-center gap-3 p-4 bg-secondary-50 text-secondary-600 rounded-xl font-bold mb-4">
                                    <FileText size={20} />
                                    Upload Prescription
                                </Link>

                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2 mb-2">Categories</div>
                                {categories.slice(1).map(cat => (
                                    <Link key={cat} href={`/shop/${cat.toLowerCase()}`} className="flex items-center justify-between p-3.5 hover:bg-slate-50 rounded-lg text-slate-700 font-medium">
                                        {cat}
                                        <ChevronRight size={16} className="text-slate-300" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

const ChevronDown = ({ size, className }: { size: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6" /></svg>
);

const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
);

export { Header };
