import Link from "next/link";
import { Plus, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand Info */}
                <div className="space-y-8">
                    <Link href="/" className="flex items-center">
                        <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center mr-2 shadow-sm">
                            <Plus size={20} className="text-white" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white">
                            eMedicine
                        </span>
                    </Link>
                    <p className="text-sm leading-relaxed max-w-xs font-medium">
                        Your most trusted online pharmacy partner in Bangladesh. Providing 100% genuine medicines and healthcare essentials delivered right to your doorstep.
                    </p>
                    <div className="space-y-4">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Connect with us</p>
                        <div className="flex items-center space-x-3">
                            <a href="#" className="p-2 bg-slate-800 rounded-lg text-white hover:bg-primary-500 transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg text-white hover:bg-primary-500 transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg text-white hover:bg-primary-500 transition-all">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Company & Support */}
                <div className="grid grid-cols-2 lg:col-span-2 gap-8">
                    <div className="space-y-6">
                        <h4 className="text-xs font-black text-white uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-sm font-semibold hover:text-primary-500 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-sm font-semibold hover:text-primary-500 transition-colors">Contact Us</Link></li>
                            <li><Link href="/faq" className="text-sm font-semibold hover:text-primary-500 transition-colors">FAQ</Link></li>
                            <li><Link href="/privacy" className="text-sm font-semibold hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xs font-black text-white uppercase tracking-widest">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/upload-prescription" className="text-sm font-semibold hover:text-primary-500 transition-colors">Upload Prescription</Link></li>
                            <li><Link href="/consultation" className="text-sm font-semibold hover:text-primary-500 transition-colors">Doctor Consultation</Link></li>
                            <li><Link href="/track-order" className="text-sm font-semibold hover:text-primary-500 transition-colors">Track Order</Link></li>
                            <li><Link href="/refill" className="text-sm font-semibold hover:text-primary-500 transition-colors">Auto Refill</Link></li>
                        </ul>
                    </div>
                </div>

                {/* App Download */}
                <div className="space-y-8">
                    <h4 className="text-xs font-black text-white uppercase tracking-widest">Get our mobile app</h4>
                    <p className="text-xs font-semibold leading-relaxed">Fastest and easiest way to order medicine from your phone.</p>
                    <div className="flex flex-col gap-3">
                        <a href="#" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 p-3 rounded-xl transition-all group">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <img src="https://img.icons8.com/color/48/google-play.png" alt="Play Store" className="w-full" />
                            </div>
                            <div>
                                <p className="text-[8px] font-bold text-slate-400 uppercase leading-none mb-0.5">Get it on</p>
                                <p className="text-[14px] font-black text-white leading-none">Google Play</p>
                            </div>
                        </a>
                        <a href="#" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 p-3 rounded-xl transition-all group">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/apple-app-store--v1.png" alt="App Store" className="w-full" />
                            </div>
                            <div>
                                <p className="text-[8px] font-bold text-slate-400 uppercase leading-none mb-0.5">Download on</p>
                                <p className="text-[14px] font-black text-white leading-none">App Store</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Certification & Payment */}
            <div className="max-w-7xl mx-auto border-t border-slate-800 pt-12 mt-12 mb-12 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center">
                            <img src="https://www.legitscript.com/wp-content/uploads/2019/07/legitscript-certified.png" alt="LegitScript" className="max-h-full" />
                        </div>
                        <p className="text-[10px] font-black w-24 leading-tight uppercase tracking-widest">Globally Certified Pharmacy</p>
                    </div>
                    <div className="h-10 w-px bg-slate-800 hidden md:block" />
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center">
                            <img src="https://img.icons8.com/color/100/hospital.png" alt="DGDA" className="max-h-full" />
                        </div>
                        <p className="text-[10px] font-black w-24 leading-tight uppercase tracking-widest">DGDA Licensed & Verified</p>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-4">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Supported Payment Methods</p>
                    <div className="flex gap-4 h-6 opacity-40 hover:opacity-100 transition-opacity">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/BKash_Logo.svg/1024px-BKash_Logo.svg.png" alt="bKash" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nagad_Logo.svg/1200px-Nagad_Logo.svg.png" alt="Nagad" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold text-slate-600">
                <p>&copy; 2026 eMedicine Online Pharmacy. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <Link href="/terms" className="hover:text-primary-500 transition-colors uppercase tracking-widest">Terms</Link>
                    <Link href="/privacy" className="hover:text-primary-500 transition-colors uppercase tracking-widest">Privacy</Link>
                    <Link href="/refund" className="hover:text-primary-500 transition-colors uppercase tracking-widest">Refund</Link>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
