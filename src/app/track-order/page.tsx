import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrackView } from "@/components/track/TrackView";

export default function TrackOrder() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#fcfcfc] py-24 px-4 md:px-8">
                <TrackView />
            </main>
            <Footer />
        </div>
    );
}
