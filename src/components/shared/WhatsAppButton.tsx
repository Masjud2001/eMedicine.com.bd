"use client";

import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-6 animate-in slide-in-from-right duration-500">
            {isVisible && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-2xl text-slate-400 hover:text-primary-500 hover:bg-slate-50 transition-all active:scale-95 group flex items-center justify-center animate-in zoom-in-50"
                >
                    <ArrowUp size={28} className="group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
                </button>
            )}

            <a
                href="https://wa.me/880123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
            >
                <div className="absolute -top-14 right-0 px-6 py-2.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-2xl whitespace-nowrap border border-white/10 pointer-events-none">
                    Chat with Pharmacist
                    <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-slate-900 rotate-45 border-r border-b border-white/10" />
                </div>

                <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] shadow-2xl flex items-center justify-center text-white ring-8 ring-emerald-500/10 hover:scale-110 active:scale-95 transition-all shadow-emerald-500/20 group-hover:rotate-6">
                    <MessageCircle size={36} fill="white" strokeWidth={2.5} />
                </div>

                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-white animate-ping" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-white flex items-center justify-center text-[8px] font-black text-white">1</div>
            </a>
        </div>
    );
};

export { WhatsAppButton };
