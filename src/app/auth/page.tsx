import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthView } from "@/components/auth/AuthView";

export default function Auth() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#f8fafc] py-24 px-4 md:px-8">
                <AuthView />
            </main>
            <Footer />
        </div>
    );
}
