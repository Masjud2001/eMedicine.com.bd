import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RefillRequest } from "@/components/home/RefillRequest";

export default function RefillPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-white py-24">
                <RefillRequest />
            </main>
            <Footer />
        </div>
    );
}
