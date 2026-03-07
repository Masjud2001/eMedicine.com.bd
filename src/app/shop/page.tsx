import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShopSidebar } from "@/components/shop/ShopSidebar";
import { ShopContent } from "@/components/shop/ShopContent";

export default function Shop() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#f8fafc] py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                    <ShopSidebar />
                    <ShopContent />
                </div>
            </main>
            <Footer />
        </div>
    );
}
