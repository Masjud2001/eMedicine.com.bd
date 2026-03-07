"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Lock, Truck, CreditCard, ShoppingBag, MapPin, Phone, User, Mail, ChevronRight, CheckCircle2, QrCode, CreditCard as CardIcon, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { products } from "@/data/mock-data";
import { formatPrice } from "@/lib/utils";
import toast from "react-hot-toast";

const checkoutSchema = z.object({
    fullName: z.string().min(3, "Full name is required"),
    phone: z.string().min(11, "Valid phone number is required"),
    email: z.string().email("Invalid email address").optional(),
    address: z.string().min(5, "Full address is required"),
    city: z.string().min(2, "City is required"),
    area: z.string().min(2, "Area is required"),
    paymentMethod: z.enum(["COD", "bKash", "Nagad", "Card"]),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const CheckoutView = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<"COD" | "bKash" | "Nagad" | "Card">("COD");

    const subtotal = products[0].price * 2;
    const deliveryCharge = 50;
    const total = subtotal + deliveryCharge;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: { paymentMethod: "COD" },
    });

    const onSubmit = async (data: CheckoutFormValues) => {
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Order submitted:", { ...data, paymentMethod });
        toast.success("Order placed successfully! Order ID: #MED-48293");
        setIsSubmitting(false);
    };

    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex-[1.5] space-y-16">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-primary-100 bg-primary-50 text-primary-700 font-black text-xs uppercase tracking-widest shadow-sm">
                        <Lock size={16} strokeWidth={3} />
                        Secure Checkout
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none italic underline decoration-slate-100 underline-offset-8">Complete Shipping <span className="text-primary-500">Details</span></h1>
                    <p className="text-slate-500 font-bold max-w-xl text-lg opacity-80 uppercase tracking-tight">Standard delivery across Bangladesh within 24-48 hours. Express delivery available for Dhaka.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                    {/* Shipping Info */}
                    <div className="space-y-10 group">
                        <h3 className="text-2xl font-black text-slate-900 flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 shadow-soft group-hover:scale-110 transition-transform">
                                <MapPin size={24} />
                            </div>
                            Shipping Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Receiver Full Name</label>
                                <Input {...register("fullName")} placeholder="John Doe" error={errors.fullName?.message} icon={<User size={18} />} className="h-16 font-black border-2 focus:ring-0" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Phone Number</label>
                                <Input {...register("phone")} placeholder="017XXXXXXXX" error={errors.phone?.message} icon={<Phone size={18} />} className="h-16 font-black border-2 focus:ring-0" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Email address (Optional)</label>
                                <Input {...register("email")} placeholder="example@mail.com" error={errors.email?.message} icon={<Mail size={18} />} className="h-16 font-black border-2 focus:ring-0" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">City / District</label>
                                <Input {...register("city")} placeholder="Dhaka" error={errors.city?.message} className="h-16 font-black border-2 focus:ring-0" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Detailed Delivery Address</label>
                                <Input {...register("address")} placeholder="House, Road, Block, Sector..." error={errors.address?.message} icon={<MapPin size={18} />} className="h-16 font-black border-2 focus:ring-0" />
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-10 group">
                        <h3 className="text-2xl font-black text-slate-900 flex items-center gap-4">
                            <div className="w-10 h-10 bg-secondary-50 rounded-xl flex items-center justify-center text-secondary-500 shadow-soft group-hover:scale-110 transition-transform">
                                <CreditCard size={24} />
                            </div>
                            Payment Method Selection
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {[
                                { id: "COD", label: "Cash on Delivery", icon: <Truck size={24} /> },
                                { id: "bKash", label: "bKash payment", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/BKash_Logo.svg/1024px-BKash_Logo.svg.png" className="h-6" alt="bkash" /> },
                                { id: "Nagad", label: "Nagad payment", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nagad_Logo.svg/1200px-Nagad_Logo.svg.png" className="h-8" alt="nagad" /> },
                                { id: "Card", label: "Card payment", icon: <CardIcon size={24} /> },
                            ].map((method) => (
                                <label
                                    key={method.id}
                                    className={`relative p-8 rounded-3xl border-2 transition-all flex flex-col items-center justify-center text-center gap-3 cursor-pointer group shadow-soft hover:shadow-medium active:scale-95 ${paymentMethod === method.id ? "border-primary-500 bg-primary-50/50 shadow-primary-500/10" : "border-slate-100 hover:border-primary-100"}`}
                                    onClick={() => setPaymentMethod(method.id as any)}
                                >
                                    <div className={`p-4 rounded-xl transition-all ${paymentMethod === method.id ? "bg-primary-500 text-white shadow-xl scale-110" : "bg-slate-50 text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500"}`}>
                                        {method.icon}
                                    </div>
                                    <span className={`text-[11px] font-black uppercase tracking-widest ${paymentMethod === method.id ? "text-primary-700" : "text-slate-400 group-hover:text-slate-600"}`}>
                                        {method.label}
                                    </span>
                                    {paymentMethod === method.id && (
                                        <div className="absolute top-3 right-3 text-primary-500 bg-white rounded-full shadow-xl p-1 animate-in zoom-in-50">
                                            <CheckCircle2 size={16} fill="currentColor" className="text-primary-500" />
                                        </div>
                                    )}
                                </label>
                            ))}
                        </div>
                    </div>
                </form>
            </div>

            <div className="flex-1">
                <div className="sticky top-12 space-y-10 group/summary">
                    <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-2xl p-8 md:p-12 relative overflow-hidden group hover:shadow-primary-500/5 transition-all duration-700">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 blur-[40px] rounded-full pointer-events-none" />

                        <h3 className="text-3xl font-black text-slate-900 mb-10 border-b border-slate-50 pb-10 flex items-center justify-between italic tracking-tighter">
                            Order Summary
                            <ShoppingBag size={28} className="text-primary-500 shrink-0" strokeWidth={2.5} />
                        </h3>

                        <div className="space-y-8 mb-12">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex gap-6 group/item">
                                    <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-3 group-hover/item:scale-105 transition-transform overflow-hidden shadow-soft">
                                        <img src={products[0].image} alt="p" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h4 className="text-sm font-black text-slate-900 leading-none">Napa 500mg</h4>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Size: 10 Tabs</p>
                                        <div className="flex items-center justify-between pt-2">
                                            <div className="flex items-center gap-4 bg-slate-50 px-3 py-1.5 rounded-xl scale-90 -ml-2 border border-slate-100 shadow-inner">
                                                <button className="text-slate-400 hover:text-black transition-colors"><Minus size={12} strokeWidth={4} /></button>
                                                <span className="text-xs font-black">2</span>
                                                <button className="text-slate-400 hover:text-black transition-colors"><Plus size={12} strokeWidth={4} /></button>
                                            </div>
                                            <span className="text-sm font-black text-slate-900">{formatPrice(products[0].price)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 pt-10 border-t border-slate-50">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">Bag Subtotal</span>
                                <span className="text-lg font-black text-slate-700">{formatPrice(subtotal)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">Delivery Charges</span>
                                <span className="text-lg font-black text-slate-700">{formatPrice(deliveryCharge)}</span>
                            </div>
                            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group-hover:bg-primary-50 transition-colors shadow-inner flex items-center justify-between">
                                <span className="text-sm font-black text-slate-900 uppercase tracking-widest">Grand Total</span>
                                <span className="text-4xl font-black text-primary-600 tracking-tighter drop-shadow-sm">{formatPrice(total)}</span>
                            </div>
                        </div>

                        <div className="mt-12 space-y-6">
                            <div className="relative group/promo">
                                <Input placeholder="Enter Promo Code" className="h-16 font-black border-2 focus:ring-0 pr-24 rounded-2xl md:rounded-[2rem] bg-white border-slate-100 shadow-soft" />
                                <button className="absolute right-3 top-3 bottom-3 px-6 bg-slate-900 text-white rounded-xl md:rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all active:scale-95 shadow-xl">Apply</button>
                            </div>

                            <Button
                                onClick={handleSubmit(onSubmit)}
                                disabled={isSubmitting}
                                size="lg"
                                className="w-full h-24 rounded-[2.5rem] text-2xl font-black gap-6 shadow-2xl shadow-primary-500/20 active:scale-95 transition-all text-white bg-primary-500 hover:bg-primary-600 border-none group"
                            >
                                {isSubmitting ? (
                                    <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Confirm Place Order
                                        <ArrowRight size={28} className="group-hover:translate-x-1.5 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
                                    </>
                                )}
                            </Button>
                        </div>

                        <p className="text-center mt-8 text-[11px] text-slate-400 font-bold uppercase tracking-tight flex items-center justify-center gap-3">
                            <Lock size={14} className="text-emerald-500 shadow-xl" />
                            Your payment is strictly secured & encrypted
                        </p>
                    </div>

                    <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex items-center gap-6 group hover:bg-emerald-500 hover:text-white transition-all duration-500 shadow-xl shadow-emerald-500/5">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-medium group-hover:scale-110 transition-transform">
                            <QrCode size={32} />
                        </div>
                        <div>
                            <h4 className="text-lg font-black leading-none mb-1">bKash QR Code</h4>
                            <p className="text-[10px] uppercase font-black tracking-widest opacity-60">Scan to pay instantly for 5% cashback</p>
                        </div>
                        <ChevronRight size={24} className="ml-auto opacity-30 group-hover:translate-x-2' transition-transform" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CheckoutView };
