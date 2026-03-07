import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckoutView } from "@/components/checkout/CheckoutView";

export default function Checkout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#f8fafc] py-24 px-4 md:px-8">
                <CheckoutView />
            </main>
            <Footer />
        </div>
    );
}
