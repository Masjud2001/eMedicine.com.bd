"use client";

import { useState } from "react";
import { Repeat, Search, ArrowRight, History, CheckCircle2, TrendingUp, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import toast from "react-hot-toast";

const RefillRequest = () => {
    const [orderId, setOrderId] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!orderId) {
            toast.error("Please enter Order ID or Phone Number");
            return;
        }
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast.error("Order not found. Please double check your details.");
        setIsLoading(false);
    };

    return (
        <section className="py-24 bg-white overflow-hidden px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 w-full max-w-2xl order-2 lg:order-1">
                    <div className="relative group/box">
                        {/* Background card */}
                        <div className="absolute inset-0 bg-secondary-500 rounded-[3rem] rotate-2 -z-10 group-hover:rotate-1 transition-transform duration-500 shadow-2xl opacity-10" />
                        <div className="absolute inset-0 bg-white border-2 border-slate-100 rounded-[3rem] -z-10 shadow-medium" />

                        <div className="p-8 md:p-12 relative">
                            <div className="flex items-center gap-5 mb-10 border-b border-slate-50 pb-10">
                                <div className="p-4 bg-secondary-50 rounded-2xl text-secondary-500 group-hover:scale-110 transition-transform shadow-medium border border-secondary-100">
                                    <History size={32} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-slate-900 leading-none mb-2">Check Last Order</h3>
                                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest leading-none">Find your previous medication history</p>
                                </div>
                            </div>

                            <form onSubmit={handleSearch} className="space-y-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Order ID or Phone Number</label>
                                    <div className="relative flex flex-col md:flex-row gap-4">
                                        <Input
                                            value={orderId}
                                            onChange={(e) => setOrderId(e.target.value)}
                                            placeholder="e.g. #ORD12345 or 01700000000"
                                            className="h-16 font-black text-lg border-2 focus:ring-0 flex-1 px-8 rounded-2xl md:rounded-[2rem] bg-slate-50/50 focus:bg-white transition-all shadow-inner"
                                        />
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="h-16 px-10 rounded-2xl md:rounded-[2rem] gap-3 bg-slate-900 hover:bg-black text-white font-black text-lg shadow-xl shrink-0 group"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Search
                                                    <Search size={20} strokeWidth={3} className="group-hover:scale-110 transition-transform" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <button type="button" className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:bg-primary-50 hover:border-primary-200 transition-all group active:scale-95 shadow-soft">
                                        <TrendingUp className="mx-auto mb-3 text-primary-500 group-hover:scale-110 transition-transform" size={24} />
                                        <span className="block text-xs font-black text-slate-900 uppercase tracking-widest">Order Again</span>
                                    </button>
                                    <button type="button" className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:bg-secondary-50 hover:border-secondary-200 transition-all group active:scale-95 shadow-soft">
                                        <Repeat className="mx-auto mb-3 text-secondary-500 group-hover:scale-110 transition-transform" size={24} />
                                        <span className="block text-xs font-black text-slate-900 uppercase tracking-widest">Setup Auto-Refill</span>
                                    </button>
                                </div>

                                <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-start gap-3">
                                    <Info size={16} className="text-secondary-500 shrink-0 mt-0.5" />
                                    <p className="text-[11px] font-bold text-slate-500 leading-relaxed uppercase tracking-tight">
                                        Auto-refill helps you never run out of your essential medications. We&apos;ll notify you before your stock is low.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="flex-1 space-y-10 text-center lg:text-left order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-secondary-100 bg-secondary-50 text-secondary-700 font-black text-xs uppercase tracking-widest shadow-sm">
                        <Repeat size={16} strokeWidth={3} />
                        Convenience First
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                        Medicine <span className="text-secondary-500 underline decoration-secondary-100 underline-offset-8">Refill</span> Just Got Easier in One Tap
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Never miss a dose again. Use our quick refill service to re-order your chronic medications or daily vitamins in seconds.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-5 group">
                            <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl shadow-medium flex items-center justify-center text-primary-500 font-black text-xl group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                1
                            </div>
                            <div className="text-left">
                                <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Enter Details</h4>
                                <p className="text-slate-500 font-bold leading-none">Find your last medicine order</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 group">
                            <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl shadow-medium flex items-center justify-center text-primary-500 font-black text-xl group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                2
                            </div>
                            <div className="text-left">
                                <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Review Items</h4>
                                <p className="text-slate-500 font-bold leading-none">Select the ones you need to refill</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 group">
                            <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl shadow-medium flex items-center justify-center text-primary-500 font-black text-xl group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                3
                            </div>
                            <div className="text-left">
                                <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Confirm Delivery</h4>
                                <p className="text-slate-500 font-bold leading-none">Get it delivered at your door today</p>
                            </div>
                        </div>
                    </div>

                    <Button variant="link" className="p-0 h-auto text-secondary-600 font-black text-sm uppercase tracking-widest gap-2 group">
                        Read our Refill Policy
                        <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export { RefillRequest };
