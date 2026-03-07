"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Lock, User, Phone, Github, Chrome, ArrowRight, ShieldCheck, Heart, UserPlus, LogIn, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import toast from "react-hot-toast";

const authSchema = z.object({
    fullName: z.string().min(3, "Full name is required").optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    phone: z.string().min(11, "Valid phone number is required").optional(),
});

type AuthFormValues = z.infer<typeof authSchema>;

const AuthView = () => {
    const [mode, setMode] = useState<"login" | "register">("login");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthFormValues>({
        resolver: zodResolver(authSchema),
    });

    const onSubmit = async (data: AuthFormValues) => {
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Auth data:", { ...data, mode });
        toast.success(`${mode === "login" ? "Welcome back!" : "Account created successfully!"}`);
        setIsSubmitting(false);
    };

    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12 min-h-[700px] animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="hidden lg:flex flex-1 relative overflow-hidden rounded-[3.5rem] bg-slate-900 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 via-transparent to-secondary-600/40 mix-blend-overlay group-hover:scale-110 transition-transform duration-[3s]" />
                <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                    alt="Auth Graphic"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[3s]"
                />

                <div className="relative z-10 p-16 flex flex-col h-full justify-between items-start text-white">
                    <Link href="/" className="flex items-center group/logo">
                        <div className="p-3 bg-primary-500 rounded-2xl group-hover/logo:scale-110 transition-transform">
                            <ShieldCheck size={32} strokeWidth={2.5} />
                        </div>
                        <span className="text-3xl font-black tracking-tighter ml-4 drop-shadow-xl">eMedicine BD</span>
                    </Link>

                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-black uppercase tracking-widest italic shadow-xl">
                            {mode === "login" ? "Welcome Back to Health" : "Join the Medical Revolution"}
                        </div>
                        <h2 className="text-6xl font-black leading-tight tracking-tight drop-shadow-2xl">
                            Your Health <br /> <span className="text-primary-400 italic">Redefined</span> Digitally.
                        </h2>
                        <p className="text-xl font-bold text-white/80 max-w-sm drop-shadow-xl underline decoration-primary-500 decoration-dotted lg:underline-offset-8">
                            Bangladesh&apos;s most secure and trusted online pharmacy service.
                        </p>
                    </div>

                    <div className="flex items-center gap-12 pt-10 border-t border-white/10 w-full opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black italic">50K+</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">Happy Users</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black italic">24/7</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Active Support</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-white rounded-[3.5rem] border border-slate-100 shadow-2xl p-10 md:p-16 flex flex-col items-stretch group hover:shadow-primary-500/5 transition-all duration-700">
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
                        <div>
                            <h1 className="text-4xl font-black tracking-tight text-slate-900 leading-none mb-3 italic">
                                {mode === "login" ? "Sign In" : "Register Now"}
                            </h1>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest leading-none">Access your medical records and faster refills</p>
                        </div>
                        <div className="flex bg-slate-50 p-1.5 rounded-2xl shadow-inner border border-slate-100">
                            <button
                                onClick={() => setMode("login")}
                                className={`px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${mode === "login" ? "bg-white text-primary-600 shadow-medium scale-105" : "text-slate-400 font-bold hover:text-slate-600"}`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setMode("register")}
                                className={`px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${mode === "register" ? "bg-white text-primary-600 shadow-medium scale-105" : "text-slate-400 font-bold hover:text-slate-600"}`}
                            >
                                Signup
                            </button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        {mode === "register" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-top-4 duration-500">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Full Name</label>
                                    <Input {...register("fullName")} placeholder="John Doe" error={errors.fullName?.message} icon={<User size={18} />} className="h-16 font-black border-2 focus:ring-0" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Phone Number</label>
                                    <Input {...register("phone")} placeholder="017XXXXXXXX" error={errors.phone?.message} icon={<Phone size={18} />} className="h-16 font-black border-2 focus:ring-0" />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Email Address</label>
                            <Input {...register("email")} placeholder="example@mail.com" type="email" error={errors.email?.message} icon={<Mail size={18} />} className="h-16 font-black border-2 focus:ring-0" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between px-1">
                                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 block leading-none">Secure Password</label>
                                {mode === "login" && (
                                    <button type="button" className="text-[10px] uppercase font-black tracking-widest text-primary-500 hover:text-primary-700 hover:underline underline-offset-4">Forgot Password?</button>
                                )}
                            </div>
                            <Input {...register("password")} placeholder="••••••••" type="password" error={errors.password?.message} icon={<Lock size={18} />} className="h-16 font-black border-2 focus:ring-0" />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full h-20 rounded-[2.5rem] text-xl font-black gap-5 shadow-2xl shadow-primary-500/20 active:scale-95 transition-all text-white bg-primary-500 hover:bg-primary-600 border-none group mt-10"
                        >
                            {isSubmitting ? (
                                <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    {mode === "login" ? "Sign In to Account" : "Create Modern Account"}
                                    {mode === "login" ? (
                                        <LogIn size={24} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                                    ) : (
                                        <UserPlus size={24} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                                    )}
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-16 relative">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t-2 border-slate-50 border-dotted"></div></div>
                        <div className="relative flex justify-center"><span className="bg-white px-8 text-[11px] font-black uppercase tracking-widest text-slate-400 underline decoration-slate-100 underline-offset-8">Continue With Modern Auth</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-16">
                        <button className="h-18 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center justify-center gap-4 hover:bg-white hover:border-primary-100 hover:shadow-medium transition-all group active:scale-95">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                                <Chrome size={24} className="text-primary-500" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-600 group-hover:text-primary-500">Google</span>
                        </button>
                        <button className="h-18 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center justify-center gap-4 hover:bg-white hover:border-primary-100 hover:shadow-medium transition-all group active:scale-95">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                                <Github size={24} className="text-slate-900" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-600 group-hover:text-slate-900">GitHub</span>
                        </button>
                    </div>
                </div>

                <div className="mt-16 pt-10 border-t border-slate-50 flex flex-col items-center gap-6">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-3">
                        <ShieldCheck size={14} className="text-primary-500" />
                        Secure medical-grade encryption
                    </p>
                    <Link href="/" className="text-xs font-black text-slate-400 hover:text-primary-500 transition-colors uppercase tracking-widest flex items-center gap-2 group italic">
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Return to Home Safety
                    </Link>
                </div>
            </div>
        </div>
    );
};

export { AuthView };
