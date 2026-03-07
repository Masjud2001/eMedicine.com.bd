import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MessageCircle, Phone, Calendar, Video, Star, ShieldCheck, HeartPulse, Clock, ArrowRight, CheckCircle2, Award, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const doctors = [
    { name: "Dr. Mashrafe Mortaza", specialty: "General Physician", degree: "MBBS, BCS (Health)", rating: "4.9", experience: "12 Years", price: "500", image: "https://i.pravatar.cc/150?u=doc1" },
    { name: "Dr. Tamim Iqbal", specialty: "Cardiologist", degree: "MD (Cardiology), MBBS", rating: "4.8", experience: "15 Years", price: "800", image: "https://i.pravatar.cc/150?u=doc2" },
    { name: "Dr. Mushfiqur Rahim", specialty: "Pediatrics", degree: "MBBS, DCH (BSMMU)", rating: "5.0", experience: "10 Years", price: "600", image: "https://i.pravatar.cc/150?u=doc3" },
    { name: "Dr. Shakib Al Hasan", specialty: "Dermatologist", degree: "MBBS, DDV", rating: "4.9", experience: "8 Years", price: "700", image: "https://i.pravatar.cc/150?u=doc4" },
];

export default function ConsultationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#f8fafc] py-24 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {/* Hero section */}
                    <div className="flex flex-col lg:flex-row items-center gap-24 relative overflow-hidden">
                        <div className="flex-1 space-y-10 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-primary-100 bg-primary-50 text-primary-700 font-black text-xs uppercase tracking-widest shadow-sm">
                                <Video size={16} strokeWidth={3} />
                                Telemedicine Verified
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1] tracking-tighter italic italic-underline decoration-slate-100 underline-offset-8">Consult <span className="text-primary-500">Online</span> with Top Doctors.</h1>
                            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Get expert medical advice from the comfort of your home. Instant prescriptions and follow-ups within minutes.
                            </p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 pt-8">
                                <div className="flex items-center gap-5 group">
                                    <div className="p-4 bg-white border border-slate-100 rounded-[1.5rem] shadow-medium group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all text-primary-500">
                                        <MessageCircle size={28} />
                                    </div>
                                    <div className="text-left">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none block mb-1">Instant Help</span>
                                        <p className="text-xl font-black text-slate-900 italic">Chat Within 2 Mins</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="p-4 bg-white border border-slate-100 rounded-[1.5rem] shadow-medium group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all text-primary-500">
                                        <Video size={28} />
                                    </div>
                                    <div className="text-left">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none block mb-1">Video Call</span>
                                        <p className="text-xl font-black text-slate-900 italic">High-Quality Consult</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-2xl relative">
                            <div className="aspect-[4/3] bg-white border-8 border-white rounded-[4rem] shadow-2xl overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200"
                                    alt="Consultation"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="absolute -bottom-10 -left-10 p-10 bg-slate-900 rounded-[3rem] shadow-2xl text-white space-y-4 max-w-[280px] group-hover:translate-x-[10px] transition-transform duration-700">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-secondary-500 group-hover:text-white transition-all scale-105">
                                    <ShieldCheck size={32} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-black italic tracking-tighter">Verified Professionals</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">BMDC registered doctors with extensive experience.</p>
                            </div>
                        </div>
                    </div>

                    {/* Cards section */}
                    <div className="space-y-16">
                        <div className="flex items-end justify-between border-b border-slate-100 pb-10">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-primary-100 text-primary-600 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">Specialist Directory</div>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none italic">Top Available <span className="text-primary-500 underline decoration-slate-100 underline-offset-8">Doctors</span>.</h2>
                            </div>
                            <Button variant="link" className="p-0 h-auto gap-3 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-primary-500 group">
                                View All Categories
                                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {doctors.map((doc, i) => (
                                <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-soft hover:shadow-2xl hover:border-primary-100 transition-all duration-700 group hover:-translate-y-2 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-primary-500/10 transition-colors" />

                                    <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                                        <div className="w-32 h-32 bg-slate-50 border-4 border-white rounded-[2.5rem] p-1 shadow-medium group-hover:scale-110 transition-transform overflow-hidden">
                                            <img src={doc.image} alt={doc.name} className="w-full h-full object-cover rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700" />
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="text-xl font-black text-slate-900 leading-none italic">{doc.name}</h3>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-primary-500 leading-none mb-1">{doc.specialty}</p>
                                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">{doc.degree}</p>
                                        </div>

                                        <div className="flex items-center gap-10 pt-4 border-t border-slate-50 w-full justify-center">
                                            <div className="flex flex-col items-center">
                                                <div className="flex items-center gap-1.5 text-amber-500 font-black text-xs italic">
                                                    <Star size={12} fill="currentColor" /> {doc.rating}
                                                </div>
                                                <span className="text-[8px] font-black uppercase tracking-widest text-slate-300">Rating</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <span className="text-xs font-black text-slate-900">{doc.experience}</span>
                                                <span className="text-[8px] font-black uppercase tracking-widest text-slate-300">Exp.</span>
                                            </div>
                                        </div>

                                        <div className="w-full bg-slate-50 p-6 rounded-[2rem] flex items-center justify-between group-hover:bg-primary-50 transition-colors shadow-inner mt-4">
                                            <div className="text-left">
                                                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Consultation</span>
                                                <p className="text-xl font-black text-slate-900 tracking-tighter">৳{doc.price}</p>
                                            </div>
                                            <Button size="icon" className="w-12 h-12 rounded-xl bg-white text-primary-500 shadow-soft group-hover:bg-primary-500 group-hover:text-white transition-all active:scale-95 border-none">
                                                <Calendar size={20} strokeWidth={3} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { label: "High Definition", val: "Video consultations with stable video quality.", icon: <Video className="text-primary-500" /> },
                            { label: "Digital Prescription", val: "Instant prescription after consultation via app.", icon: <ShieldCheck className="text-secondary-500" /> },
                            { label: "Quick Connect", val: "Get connected with a doctor in under 5 minutes.", icon: <Zap className="text-amber-500" /> },
                        ].map((f, i) => (
                            <div key={i} className="bg-slate-900 p-12 rounded-[4rem] text-center border border-white/5 shadow-2xl hover:shadow-primary-500/10 transition-all duration-700 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none" />
                                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-slate-900 transition-all shadow-xl mb-8 mx-auto scale-110">
                                    {f.icon}
                                </div>
                                <h3 className="text-2xl font-black text-white italic tracking-tighter mb-4">{f.label}</h3>
                                <p className="text-md font-bold text-slate-400 leading-relaxed uppercase tracking-tight opacity-70">{f.val}</p>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <div className="bg-white p-12 md:p-24 rounded-[4rem] relative overflow-hidden group shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8 text-center md:text-left">
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter italic">Ready to talk with an Expert?</h2>
                            <p className="text-xl font-medium text-slate-500 max-w-xl opacity-80 uppercase tracking-widest leading-relaxed">Book your slot now and start your journey towards a healthier life today.</p>
                        </div>
                        <div className="flex-1 w-full max-w-sm">
                            <Button size="lg" className="w-full h-24 rounded-[2.5rem] text-2xl font-black gap-6 shadow-2xl active:scale-95 transition-all text-white bg-primary-500 hover:bg-primary-600 border-none group">
                                Book Consult Now
                                <ChevronRight size={32} className="group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
