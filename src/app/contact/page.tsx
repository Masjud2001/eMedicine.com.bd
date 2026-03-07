import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Globe, MessageSquare, Send, Clock, ShieldCheck, HeartPulse, ChevronRight, Facebook, Twitter, Instagram, Youtube, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#f8fafc] py-24 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {/* Hero */}
                    <div className="flex flex-col lg:flex-row items-center gap-24 relative overflow-hidden">
                        <div className="flex-1 space-y-10 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-primary-100 bg-primary-50 text-primary-700 font-black text-xs uppercase tracking-widest shadow-sm">
                                <MessageSquare size={16} strokeWidth={3} />
                                Always Here For You
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1] tracking-tighter italic italic-underline decoration-slate-100 underline-offset-8">Got a <span className="text-primary-500">Question</span>? Let&apos;s talk about Health.</h1>
                            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Our team of licensed pharmacists and customer support is available 24/7 to help you with your health needs.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-12 pt-8">
                                <div className="flex items-center gap-5 group">
                                    <div className="p-4 bg-white border border-slate-100 rounded-[1.5rem] shadow-medium group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all text-primary-500">
                                        <Phone size={28} />
                                    </div>
                                    <div className="text-left">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none block mb-1">Our Hotline</span>
                                        <p className="text-xl font-black text-slate-900 italic">+880 1234 567 890</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="p-4 bg-white border border-slate-100 rounded-[1.5rem] shadow-medium group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all text-primary-500">
                                        <Mail size={28} />
                                    </div>
                                    <div className="text-left">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none block mb-1">Send Email</span>
                                        <p className="text-xl font-black text-slate-900 italic">support@medicarebd.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-2xl">
                            <div className="bg-white p-10 md:p-16 rounded-[4rem] border-8 border-white shadow-2xl relative group overflow-hidden hover:shadow-primary-500/5 transition-all duration-700">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 blur-[40px] rounded-full pointer-events-none" />
                                <h3 className="text-3xl font-black text-slate-900 leading-none mb-4 italic tracking-tighter">Inquiry Message</h3>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-12 border-b border-slate-50 pb-8">Send us your detailed medical request</p>

                                <form className="space-y-8 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Full Name</label>
                                            <Input placeholder="John Doe" className="h-16 font-black border-2 focus:ring-0" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Phone Number</label>
                                            <Input placeholder="017" className="h-16 font-black border-2 focus:ring-0" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Inquiry Type</label>
                                        <select className="flex h-16 w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 px-6 py-2 text-sm font-black text-slate-900 focus-visible:outline-none focus-visible:border-primary-500 focus-visible:bg-white transition-all">
                                            <option>Medicine Inquiry</option>
                                            <option>Order Support</option>
                                            <option>Payment Issue</option>
                                            <option>Pharmacist Consultation</option>
                                            <option>Others</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 pl-1 block leading-none">Message Body</label>
                                        <textarea className="flex min-h-[140px] w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 px-6 py-4 text-sm font-black text-slate-900 focus-visible:outline-none focus-visible:border-primary-500 focus-visible:bg-white transition-all shadow-inner" placeholder="Tell us about your needs..." />
                                    </div>
                                    <Button size="lg" className="w-full h-20 rounded-[2.5rem] text-xl font-black gap-5 shadow-2xl active:scale-95 transition-all text-white bg-primary-500 hover:bg-primary-600 border-none group mt-10">
                                        Submit Inquiry
                                        <Send size={24} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { label: "Head Office", val: "Road 12, Banani, Dhaka-1213, Bangladesh", icon: <MapPin size={32} /> },
                            { label: "Business Hours", val: "Available 24/7 (Online Orders) Store: 8AM - 11PM", icon: <Clock size={32} /> },
                            { label: "Corporate Info", val: "Licensed by DGDA Reg: #8493-94BD-PHAR", icon: <ShieldCheck size={32} /> },
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-12 rounded-[4rem] text-center border border-slate-100 shadow-soft hover:shadow-2xl hover:border-primary-100 transition-all duration-700 group hover:-translate-y-2">
                                <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-xl group-hover:scale-110 mb-8 mx-auto">
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter italic mb-4">{card.label}</h3>
                                <p className="text-md font-bold text-slate-500 leading-relaxed uppercase tracking-tight">{card.val}</p>
                            </div>
                        ))}
                    </div>

                    {/* Support Channels */}
                    <div className="bg-slate-900 p-12 md:p-24 rounded-[4rem] relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-transparent pointer-events-none" />
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 rounded-full border border-white/20 text-xs font-black uppercase tracking-widest italic text-white shadow-xl">
                                    <HeartPulse size={16} className="text-secondary-400" strokeWidth={3} />
                                    Fast Multi-channel Support
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-2xl italic tracking-tighter">Follow our Social Healthcare Channels.</h2>
                                <p className="text-lg font-medium text-slate-400 max-w-xl opacity-80 uppercase tracking-widest leading-relaxed">Stay updated with latest medicine arrivals and wellness tips.</p>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-8">
                                {[
                                    { icon: <Facebook />, link: "#", color: "hover:bg-blue-600" },
                                    { icon: <Twitter />, link: "#", color: "hover:bg-sky-500" },
                                    { icon: <Instagram />, link: "#", color: "hover:bg-pink-600" },
                                    { icon: <Youtube />, link: "#", color: "hover:bg-red-600" },
                                    { icon: <HelpCircle />, link: "#", color: "hover:bg-emerald-600" },
                                ].map((social, i) => (
                                    <a key={i} href={social.link} className={`p-6 bg-white/10 border border-white/20 rounded-3xl text-white shadow-xl transition-all hover:scale-125 hover:-translate-y-2 active:scale-95 ${social.color} hover:border-transparent group/icon`}>
                                        <div className="group-hover/icon:scale-110 transition-transform">{social.icon}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
