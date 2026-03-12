"use client";

import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    // Mock cart data
    const cartItems = [
        {
            id: 1,
            name: "Napa Extend (500mg/65mg)",
            price: 15.00,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200",
            category: "Medicine"
        },
        {
            id: 2,
            name: "Himalaya Herbals Purifying Neem Face Wash",
            price: 245.00,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1556228578-8c7c0f44bb0b?auto=format&fit=crop&q=80&w=200",
            category: "Personal Care"
        }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex justify-end">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                    />

                    {/* Drawer Content */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500">
                                    <ShoppingBag size={20} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-black text-slate-900 tracking-tight leading-none">Your Cart</h2>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{cartItems.length} items selected</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center justify-center"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 group">
                                    <div className="w-20 h-20 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-100">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between py-1">
                                        <div>
                                            <div className="flex justify-between items-start gap-2">
                                                <h3 className="text-sm font-black text-slate-800 leading-snug line-clamp-2">{item.name}</h3>
                                                <button className="text-slate-300 hover:text-red-500 transition-colors">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.category}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center bg-slate-50 rounded-lg p-1 border border-slate-100">
                                                <button className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-primary-500"><Minus size={14} /></button>
                                                <span className="w-8 text-center text-xs font-black text-slate-700">{item.quantity}</span>
                                                <button className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-primary-500"><Plus size={14} /></button>
                                            </div>
                                            <p className="font-black text-slate-900">৳{item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer / Summary */}
                        <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-bold text-slate-500 uppercase tracking-wider">
                                    <span>Subtotal</span>
                                    <span>৳{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm font-bold text-slate-500 uppercase tracking-wider">
                                    <span>Delivery Fee</span>
                                    <span className="text-emerald-500">FREE</span>
                                </div>
                                <div className="pt-2 border-t border-slate-200 flex justify-between items-end">
                                    <span className="text-lg font-black text-slate-900">Total</span>
                                    <span className="text-2xl font-black text-primary-500">৳{subtotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <Link href="/checkout" className="block" onClick={onClose}>
                                <Button className="w-full h-14 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-primary-500/20 group">
                                    Proceed to Checkout
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>

                            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                                Tax included. Shipping calculated at checkout.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export { CartDrawer };
