import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { PrescriptionUpload } from "@/components/home/PrescriptionUpload";
import { BannerSection } from "@/components/home/BannerSection";
import { RefillRequest } from "@/components/home/RefillRequest";
import { Testimonials } from "@/components/home/Testimonials";
import Link from "next/link";
import { Truck, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Campaign Section / Especially For You */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/upload-prescription" className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-32 relative">
            <img src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 bg-primary-600/80 p-6 flex items-center justify-between text-white">
              <div>
                <h3 className="text-xl font-black">Prescription</h3>
                <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Upload & Order</p>
              </div>
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-500 shadow-lg">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </Link>
          <Link href="/consultation" className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-32 relative">
            <img src="https://images.unsplash.com/photo-1559839734-2b71f1536b1a?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 bg-secondary-600/80 p-6 flex items-center justify-between text-white">
              <div>
                <h3 className="text-xl font-black">Doctor</h3>
                <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Book Consultation</p>
              </div>
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary-500 shadow-lg">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </Link>
          <div className="bg-slate-900 rounded-3xl p-6 flex items-center justify-between text-white group h-32 cursor-pointer border border-slate-800 hover:bg-slate-800 transition-all">
            <div>
              <h3 className="text-xl font-black">Track Order</h3>
              <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Real-time update</p>
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:rotate-45 transition-transform">
              <Truck size={24} />
            </div>
          </div>
        </section>

        <CategoryGrid title="Shop by Category" />

        <div className="bg-slate-50 py-16">
          <ProductCarousel
            title="Flash Sales"
            subtitle="Limited time offers with massive discounts. Grab them before they're gone!"
          />
        </div>

        <BannerSection />

        <div className="white py-16">
          <ProductCarousel
            title="Bestselling Medicines"
            subtitle="Top rated and most ordered essential medications by our customers this month."
          />
        </div>

        <PrescriptionUpload />

        <RefillRequest />

        <Testimonials />
      </main>
      <Footer />
    </div>

  );
}
