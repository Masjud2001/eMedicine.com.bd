import Link from "next/link";
import { Plus, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
                {/* Brand Info */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center">
                        <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mr-2.5">
                            <Plus size={24} className="text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white">
                            eMedicine <span className="text-secondary-500">BD</span>
                        </span>
                    </Link>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Your most trusted online pharmacy partner in Bangladesh. Providing genuine medicines and healthcare essentials delivered right to your doorstep.
                    </p>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="p-2.5 bg-slate-800 rounded-full text-white hover:bg-primary-500 transition-colors transform hover:-translate-y-1">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="p-2.5 bg-slate-800 rounded-full text-white hover:bg-primary-500 transition-colors transform hover:-translate-y-1">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="p-2.5 bg-slate-800 rounded-full text-white hover:bg-primary-500 transition-colors transform hover:-translate-y-1">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="p-2.5 bg-slate-800 rounded-full text-white hover:bg-primary-500 transition-colors transform hover:-translate-y-1">
                            <Youtube size={18} />
                        </a>
                    </div>
                </div>

                {/* Categories */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider text-sm">Popular Categories</h4>
                    <ul className="space-y-3.5">
                        <li><Link href="/category/medicines" className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all">Medicines</Link></li>
                        <li><Link href="/category/otc-medicines" className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all">OTC Medicines</Link></li>
                        <li><Link href="/category/vitamins-supplements" className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all">Vitamins & Supplements</Link></li>
                        <li><Link href="/category/diabetic-care" className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all">Diabetic Care</Link></li>
                        <li><Link href="/category/baby-mom" className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all">Baby & Mom Care</Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider text-sm">Customer Service</h4>
                    <ul className="space-y-3.5">
                        <li><Link href="/track-order" className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all">Track Order</Link></li>
                        <li><Link href="/upload-prescription" className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all">Upload Prescription</Link></li>
                        <li><Link href="/refill" className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all">Request Refill</Link></li>
                        <li><Link href="/faq" className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all">Frequent Questions (FAQ)</Link></li>
                        <li><Link href="/contact" className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider text-sm">Get In Touch</h4>
                    <ul className="space-y-5">
                        <li className="flex gap-3">
                            <MapPin size={22} className="text-primary-500 shrink-0 mt-0.5" />
                            <div>
                                <span className="text-sm text-slate-200 font-semibold block mb-1">Our Office</span>
                                <p className="text-xs leading-5">Road 12, Banani, Dhaka-1213,<br />Bangladesh</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <Phone size={22} className="text-emerald-500 shrink-0 mt-0.5" />
                            <div>
                                <span className="text-sm text-slate-200 font-semibold block mb-1">Call Center</span>
                                <p className="text-xs leading-5 italic">Available 24/7 for you</p>
                                <p className="text-sm font-bold text-white mt-1">+880 1234 567 890</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <Mail size={22} className="text-secondary-500 shrink-0 mt-0.5" />
                            <div>
                                <span className="text-sm text-slate-200 font-semibold block mb-1">Support Email</span>
                                <p className="text-sm text-white">support@emedicinebd.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Pay & Trust Indicators */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-b border-slate-800 pb-12 mb-8">
                <div className="flex flex-wrap items-center justify-center gap-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg">
                        <CheckCircle2 size={16} className="text-primary-500" />
                        <span className="text-xs font-semibold text-white">Genuine Medicine Only</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        <span className="text-xs font-semibold text-white">Licensed Pharmacy Operations</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg">
                        <CheckCircle2 size={16} className="text-secondary-500" />
                        <span className="text-xs font-semibold text-white">Secure Checkout Guaranteed</span>
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <span className="text-xs font-bold text-slate-500">WE ACCEPT:</span>
                    <div className="flex gap-3 h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all opacity-cursor-pointer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/BKash_Logo.svg/1024px-BKash_Logo.svg.png" alt="bKash" className="h-full" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nagad_Logo.svg/1200px-Nagad_Logo.svg.png" alt="Nagad" className="h-full" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-full" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-full" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
                <p>&copy; 2026 eMedicine BD Online Pharmacy. All rights reserved.</p>
                <div className="flex space-x-6">
                    <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
                    <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link href="/return" className="hover:text-white">Return & Refund Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
