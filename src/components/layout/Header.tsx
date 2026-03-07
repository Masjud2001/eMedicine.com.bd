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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full relative z-50">
            {/* Top Utility Bar */}
            <div className="bg-slate-900 text-white py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium space-y-2 md:space-y-0">
                <div className="flex items-center space-x-6">
                    <Link href="/track-order" className="hover:text-primary-500 transition-colors flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary-500" />
                        Track Your Order
                    </Link>
                    <Link href="/consultation" className="hover:text-primary-500 transition-colors flex items-center gap-1.5">
                        <HeartPulse size={14} className="text-primary-500" />
                        Doctor Consultation
                    </Link>
                </div>
                <div className="flex items-center space-x-6">
                    <Link href="tel:+880123456789" className="hover:text-primary-500 transition-colors flex items-center gap-1.5">
                        <Phone size={14} className="text-emerald-400" />
                        Call: +880 1234 567 890
                    </Link>
                    <div className="flex items-center gap-4">
                        <button className="hover:text-primary-500 transition-colors">BN</button>
                        <div className="w-px h-3 bg-slate-700" />
                        <button className="text-primary-500">EN</button>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className={cn(
                "bg-white transition-all sticky top-0 border-b border-slate-100",
                isScrolled ? "py-2 shadow-sm" : "py-4"
            )}>
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-8 md:gap-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center shrink-0">
                        <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mr-2.5">
                            <Plus size={24} className="text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-slate-900">
                            eMedicine <span className="text-secondary-500">BD</span>
                        </span>
                    </Link>

                    {/* Desktop Search */}
                    <div className="hidden lg:flex flex-grow max-w-2xl">
                        <Input
                            placeholder="Search for medicines, health products, brands..."
                            icon={<Search size={18} />}
                            className="rounded-full shadow-sm focus:ring-primary-500/20"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 md:space-x-5">
                        <Link href="/upload-prescription" className="hidden xl:flex items-center gap-2 group">
                            <div className="p-2.5 rounded-full bg-primary-50 group-hover:bg-primary-500 transition-colors transform group-active:scale-95">
                                <FileText size={20} className="text-primary-500 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-slate-900">Upload</span>
                                <span className="text-[10px] text-slate-500 leading-none">Prescription</span>
                            </div>
                        </Link>

                        <Link href="/refill" className="hidden xl:flex items-center gap-2 group">
                            <div className="p-2.5 rounded-full bg-secondary-50 group-hover:bg-secondary-500 transition-colors transform group-active:scale-95">
                                <Repeat size={20} className="text-secondary-500 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-slate-900">Auto</span>
                                <span className="text-[10px] text-slate-500 leading-none">Refill Request</span>
                            </div>
                        </Link>

                        <Link href="/auth" className="flex items-center gap-2 group p-2.5 rounded-full hover:bg-slate-50 transition-colors">
                            <User size={22} className="text-slate-600 group-hover:text-primary-500" />
                            <span className="hidden md:inline text-sm font-medium text-slate-700 group-hover:text-primary-500">Sign In</span>
                        </Link>

                        <Link href="/cart" className="relative group p-2.5 rounded-full hover:bg-slate-50 transition-colors">
                            <ShoppingCart size={22} className="text-slate-600 group-hover:text-primary-500" />
                            {cartCount > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in-50">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden p-2.5 rounded-full hover:bg-slate-50 text-slate-600"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="px-4 pb-2 mt-2 lg:hidden">
                    <Input
                        placeholder="Search for medicines..."
                        icon={<Search size={18} />}
                        className="rounded-full shadow-sm h-10"
                    />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
                    <div className="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                        <div className="p-6 flex items-center justify-between border-b">
                            <span className="text-xl font-bold">Menu</span>
                            <button
                                className="p-2 rounded-full hover:bg-slate-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <Link href="/upload-prescription" className="flex flex-col items-center justify-center p-4 bg-primary-50 rounded-2xl gap-2 hover:bg-primary-100 transition-colors">
                                    <FileText className="text-primary-500" />
                                    <span className="text-xs font-semibold text-center">Upload Prescription</span>
                                </Link>
                                <Link href="/refill" className="flex flex-col items-center justify-center p-4 bg-secondary-50 rounded-2xl gap-2 hover:bg-secondary-100 transition-colors">
                                    <Repeat className="text-secondary-500" />
                                    <span className="text-xs font-semibold text-center">Auto Refill</span>
                                </Link>
                                <Link href="/consultation" className="flex flex-col items-center justify-center p-4 bg-emerald-50 rounded-2xl gap-2 hover:bg-emerald-100 transition-colors">
                                    <HeartPulse className="text-emerald-500" />
                                    <span className="text-xs font-semibold text-center">Doctor Consultation</span>
                                </Link>
                                <Link href="/track-order" className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl gap-2 hover:bg-slate-100 transition-colors">
                                    <MapPin className="text-slate-500" />
                                    <span className="text-xs font-semibold text-center">Track Order</span>
                                </Link>
                            </div>

                            <div className="space-y-1">
                                <Link href="/shop" className="block py-4 text-lg font-semibold border-b border-slate-50 hover:text-primary-500">All Categories</Link>
                                <Link href="/offers" className="block py-4 text-lg font-semibold border-b border-slate-50 hover:text-primary-500">Offers & Deals</Link>
                                <Link href="/about" className="block py-4 text-lg font-semibold border-b border-slate-50 hover:text-primary-500">About Us</Link>
                                <Link href="/contact" className="block py-4 text-lg font-semibold border-b border-slate-50 hover:text-primary-500">Contact Support</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export { Header };
