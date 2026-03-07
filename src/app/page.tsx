import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { PrescriptionUpload } from "@/components/home/PrescriptionUpload";
import { BannerSection } from "@/components/home/BannerSection";
import { RefillRequest } from "@/components/home/RefillRequest";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />

        <div className="-mt-12 relative z-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-4 border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
                <img src="https://img.icons8.com/bubbles/50/pill.png" alt="meds" />
              </div>
              <span className="text-sm font-black text-slate-800 uppercase tracking-tighter">10K+ Medicines</span>
            </div>
            <div className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center text-secondary-500 group-hover:scale-110 transition-transform">
                <img src="https://img.icons8.com/bubbles/50/checked-truck.png" alt="truck" />
              </div>
              <span className="text-sm font-black text-slate-800 uppercase tracking-tighter">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                <img src="https://img.icons8.com/bubbles/50/medical-doctor.png" alt="doc" />
              </div>
              <span className="text-sm font-black text-slate-800 uppercase tracking-tighter">Top Doctors</span>
            </div>
            <div className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                <img src="https://img.icons8.com/bubbles/50/safe.png" alt="safe" />
              </div>
              <span className="text-sm font-black text-slate-800 uppercase tracking-tighter">100% Secure</span>
            </div>
          </div>
        </div>

        <CategoryGrid />

        <ProductCarousel
          title="Bestselling Medicines"
          subtitle="Top rated and most ordered essential medications by our customers this month."
        />

        <PrescriptionUpload />

        <BannerSection />

        <ProductCarousel
          title="Weekly Health Deals"
          subtitle="Grab your daily healthcare needs with exclusive discounts and bundled offers."
        />

        <RefillRequest />

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
