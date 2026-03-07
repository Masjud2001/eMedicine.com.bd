"use client";

import { useState } from "react";
import { Search, MapPin, Truck, CheckCircle2, Clock, Phone, AlertCircle, ArrowRight, ShieldCheck, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import toast from "react-hot-toast";

const TrackView = () => {
    const [orderId, setOrderId] = useState("");
    const [status, setStatus] = useState<"none" | "found">("none");
    const [loading, setLoading] = useState(false);

    const handleTrack = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!orderId) {
            toast.error("Please enter Order ID");
            return;
        }
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("found");
        setLoading(false);
    };

    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-16 md:gap-24 animate-in fade-in slide-in-from-bottom-8 duration-700 min-h-[700px]">
            <div className="flex-1 space-y-16 py-12">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 font-black text-xs uppercase tracking-widest shadow-sm">
                        <Truck size={16} strokeWidth={3} />
                        Real-time Logistics
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none italic underline decoration-slate-100 underline-offset-8">Track Your <span className="text-primary-500">Medicine</span> Delivery</h1>
                    <p className="text-slate-500 font-bold max-w-xl text-lg opacity-80 uppercase tracking-tight">Enter your unique order ID from SMS or email to get instant live status updates.</p>
                </div>

                <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-2xl p-8 md:p-12 relative overflow-hidden group hover:shadow-primary-500/5 transition-all duration-700">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 blur-[40px] rounded-full pointer-events-none" />

                    <h3 className="text-2xl font-black text-slate-900 mb-10 pb-10 border-b border-slate-50 italic tracking-tighter shrink-0 flex items-center justify-between">
                        Order Inquiry Form
                        <Search size={24} className="text-primary-500" />
                    </h3>

                    <form onSubmit={handleTrack} className="space-y-10 relative z-10">
                        <div className="space-y-3">
                            <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Unique Order Identifier</label>
                            <Input
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                placeholder="e.g. #MED-12345678"
                                className="h-20 font-black text-2xl border-2 focus:ring-0 px-8 rounded-3xl bg-slate-50/50 shadow-inner"
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            disabled={loading}
                            className="w-full h-24 rounded-[2.5rem] text-2xl font-black gap-6 shadow-2xl shadow-primary-500/20 active:scale-95 transition-all text-white bg-primary-500 hover:bg-primary-600 border-none group"
                        >
                            {loading ? (
                                <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Locate Package
                                    <ArrowRight size={28} className="group-hover:translate-x-1.5 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                        <div className="flex items-center gap-4 text-slate-400">
                            <AlertCircle size={20} strokeWidth={3} />
                            <h4 className="text-[10px] uppercase font-black tracking-widest">Need Immediate Help?</h4>
                        </div>
                        <p className="text-xs font-bold text-slate-500 leading-relaxed uppercase tracking-widest opacity-80">If you haven&apos;t received an order ID within 15 minutes of placing your order, please call our 24/7 hotline at <span className="text-slate-900 border-b-2 border-primary-500 pb-0.5">+880 1234 567 890</span></p>
                    </div>
                </div>
            </div>

            <div className="flex-1 lg:pt-12">
                {status === "none" ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-10 group bg-slate-50/50 rounded-[4rem] border-4 border-white shadow-2xl border-dashed">
                        <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center p-8 shadow-2xl border-4 border-slate-100 group-hover:scale-110 transition-transform duration-700 animate-pulse ring-8 ring-primary-50/50">
                            <Truck size={80} className="text-slate-200 group-hover:text-primary-500 transition-colors" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-3xl font-black text-slate-900 tracking-tight italic">Waiting for Input...</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest max-w-[240px] leading-relaxed mx-auto opacity-60">Enter your order ID on the left to see live tracking information.</p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-12 animate-in zoom-in-95 duration-700 h-full">
                        <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 blur-[60px] rounded-full pointer-events-none" />

                            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
                                <div className="space-y-2">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-primary-400 opacity-80 leading-none">Order Tracking: {orderId}</span>
                                    <h3 className="text-4xl font-black text-white italic tracking-tighter">On Its Way!</h3>
                                </div>
                                <div className="px-6 py-3 bg-white/10 border border-white/20 rounded-2xl flex items-center gap-3 backdrop-blur-2xl shadow-xl">
                                    <Clock size={20} className="text-primary-400" />
                                    <span className="text-[11px] font-black uppercase tracking-widest">Est. Today: <span className="text-primary-400">4:30 PM</span></span>
                                </div>
                            </div>

                            <div className="space-y-0 relative">
                                {/* Step indicators */}
                                <div className="absolute left-[31px] top-6 bottom-6 w-1 bg-white/10 rounded-full" />

                                {[
                                    { label: "Order Received", time: "10:30 AM", status: "completed", icon: <CheckCircle2 size={16} /> },
                                    { label: "Medication Verified", time: "10:45 AM", status: "completed", icon: <ShieldCheck size={16} /> },
                                    { label: "Package Picked Up", time: "1:20 PM", status: "completed", icon: <Truck size={16} /> },
                                    { label: "Out for Delivery", time: "Now", status: "active", icon: <Clock size={16} /> },
                                    { label: "Delivered", time: "Pending", status: "pending", icon: <MapPin size={16} /> },
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-10 py-6 group/step items-start">
                                        <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-all shadow-xl ${step.status === 'completed' ? 'bg-primary-500 text-white shadow-primary-500/20 scale-110' : step.status === 'active' ? 'bg-secondary-500 text-white animate-pulse' : 'bg-slate-800 text-slate-500 border border-white/5'}`}>
                                            {step.icon}
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <h4 className={`text-xl font-black tracking-tighter uppercase transition-colors ${step.status === 'completed' ? 'text-white' : step.status === 'active' ? 'text-secondary-400' : 'text-slate-500'}`}>{step.label}</h4>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-80">{step.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 pt-10 border-t border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-xl p-1">
                                        <img src="https://i.pravatar.cc/100?u=rider" className="w-full h-full object-cover rounded-xl grayscale" alt="rider" />
                                    </div>
                                    <div className="text-left">
                                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 leading-none block mb-1">Assigned Rider</span>
                                        <p className="text-lg font-black text-white italic tracking-tighter">Shohel Rana</p>
                                    </div>
                                </div>
                                <button className="p-4 bg-primary-500 text-white rounded-[1.5rem] shadow-xl hover:scale-110 transition-transform active:scale-95">
                                    <Phone size={24} strokeWidth={3} />
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => setStatus("none")}
                            className="w-full h-20 bg-white rounded-3xl border-2 border-slate-100 flex items-center justify-center gap-4 hover:border-primary-500 hover:text-primary-500 transition-all font-black uppercase text-sm tracking-widest shadow-soft group"
                        >
                            <ChevronLeft size={20} strokeWidth={3} className="group-hover:-translate-x-1.5 transition-transform" />
                            Track Another Order
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export { TrackView };
