"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FileUp, Send, CheckCircle2, CloudUpload, Info, X, MapPin, Phone, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState, useCallback } from "react";
import toast from "react-hot-toast";

const prescriptionSchema = z.object({
    fullName: z.string().min(3, "Full name is required"),
    phone: z.string().min(11, "Valid phone number is required"),
    address: z.string().min(5, "Delivery address is required"),
    notes: z.string().optional(),
});

type PrescriptionFormValues = z.infer<typeof prescriptionSchema>;

const PrescriptionUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<PrescriptionFormValues>({
        resolver: zodResolver(prescriptionSchema),
    });

    const handleDrag = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const onSubmit = async (data: PrescriptionFormValues) => {
        if (!file) {
            toast.error("Please upload a prescription image");
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Prescription data:", { ...data, file });
        toast.success("Prescription uploaded successfully! Our pharmacist will contact you soon.");
        setFile(null);
        reset();
        setIsSubmitting(false);
    };

    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative px-4 md:px-8">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[100px] border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 blur-[100px] border border-white/5 rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                <div className="flex-1 space-y-10 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-primary-400 font-black text-xs uppercase tracking-widest shadow-xl">
                        <FileUp size={16} strokeWidth={3} />
                        E-Prescription Service
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-xl">
                        Order Medicine by <span className="text-primary-400 font-black relative italic underline-offset-8">Uploading</span> Prescription
                    </h2>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Skip the manual search! Just take a clear picture of your prescription and upload it here. Our licensed pharmacists will process it for you.
                    </p>

                    <ul className="space-y-6 max-w-md mx-auto lg:mx-0">
                        {[
                            "100% Genuine Prescription Medicines",
                            "Pharmacist review within 15 minutes",
                            "Easy Doorstep Delivery options",
                            "Strict Medical Confidentiality"
                        ].map((text, i) => (
                            <li key={i} className="flex items-center gap-4 text-white hover:text-primary-400 transition-colors group">
                                <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl group-hover:scale-110 transition-transform shadow-2xl">
                                    <CheckCircle2 size={24} className="text-primary-500 drop-shadow-lg" strokeWidth={3} />
                                </div>
                                <span className="font-bold text-lg md:text-xl drop-shadow-sm">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 w-full max-w-2xl">
                    <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-2xl relative border-8 border-white group/form hover:shadow-primary-500/5 transition-all duration-700">
                        <h3 className="text-3xl font-black text-slate-900 mb-2 leading-none">Complete Your Order</h3>
                        <p className="text-slate-500 font-bold mb-10 pb-10 border-b border-slate-100 uppercase text-[10px] tracking-widest">Provide delivery details for faster processing</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                            <div
                                className={`relative w-full aspect-video md:aspect-[2/1] rounded-3xl border-3 border-dashed transition-all flex flex-col items-center justify-center p-8 text-center group ${dragActive ? "border-primary-500 bg-primary-50 scale-[0.99] shadow-inner" : "border-slate-100 bg-slate-50 hover:border-slate-200 hover:bg-slate-100"
                                    } ${file ? "border-emerald-200 bg-emerald-50/30" : ""}`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleFileChange}
                                    accept="image/*,.pdf"
                                />
                                {!file ? (
                                    <>
                                        <div className="p-6 rounded-[2rem] bg-white shadow-medium group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 text-slate-400">
                                            <CloudUpload size={48} strokeWidth={2.5} />
                                        </div>
                                        <div className="mt-6 flex flex-col gap-1.5 px-4 w-full max-w-xs mx-auto">
                                            <p className="text-lg font-black text-slate-900">Drag or Click to Upload</p>
                                            <p className="text-xs text-slate-500 font-bold leading-relaxed px-4">Upload a clear photo of your prescription. (JPEG, PNG, PDF supported)</p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-full flex items-center justify-between gap-6 p-4 bg-white rounded-3xl shadow-medium border border-emerald-100 animate-in zoom-in-95 duration-500 group-hover:scale-[1.02] transition-transform">
                                        <div className="flex items-center gap-4 min-w-0">
                                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0 shadow-lg">
                                                <CheckCircle2 size={32} strokeWidth={3} />
                                            </div>
                                            <div className="text-left min-w-0">
                                                <p className="text-sm font-black text-slate-900 truncate pr-2 uppercase tracking-tighter">{file.name}</p>
                                                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Ready for Upload</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={(e) => { e.preventDefault(); setFile(null); }}
                                            className="p-3.5 bg-slate-100 text-slate-600 rounded-2xl hover:bg-red-50 hover:text-red-500 hover:scale-105 transition-all shadow-sm active:scale-95"
                                        >
                                            <X size={20} strokeWidth={3} />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Full Name</label>
                                    <Input
                                        {...register("fullName")}
                                        placeholder="Enter full name"
                                        error={errors.fullName?.message}
                                        icon={<User size={18} />}
                                        className="h-14 font-bold border-2 focus:ring-0"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Phone Number</label>
                                    <Input
                                        {...register("phone")}
                                        placeholder="01XXXXXXXXX"
                                        error={errors.phone?.message}
                                        icon={<Phone size={18} />}
                                        className="h-14 font-bold border-2 focus:ring-0"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Delivery Address</label>
                                <Input
                                    {...register("address")}
                                    placeholder="Enter detailed delivery address"
                                    error={errors.address?.message}
                                    icon={<MapPin size={18} />}
                                    className="h-14 font-bold border-2 focus:ring-0"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Notes (Optional)</label>
                                <div className="relative group">
                                    <MessageSquare size={18} className="absolute left-3.5 top-4.5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                    <textarea
                                        {...register("notes")}
                                        placeholder="Tell us what you need or special instructions..."
                                        className="flex min-h-[140px] w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 px-11 py-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:border-primary-500 focus-visible:bg-white transition-all disabled:cursor-not-allowed disabled:opacity-50 shadow-inner"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full text-lg h-20 rounded-[2rem] gap-4 font-black shadow-2xl shadow-primary-500/20 active:scale-95 transition-all text-white bg-primary-500 hover:bg-primary-600 border-none group"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Prescription
                                        <Send size={24} className="group-hover:translate-x-1.5 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
                                    </>
                                )}
                            </Button>

                            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-tight flex items-center justify-center gap-2">
                                <Info size={12} className="text-primary-400" />
                                Protected by MediCare BD Privacy Guarantee
                            </p>
                        </form>

                        {/* Decoration card */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary-100 rounded-[2rem] blur-xl opacity-40 -z-10 animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-100 rounded-[2.5rem] blur-xl opacity-40 -z-10 animate-pulse delay-75" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { PrescriptionUpload };
