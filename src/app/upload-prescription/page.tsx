import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrescriptionUpload } from "@/components/home/PrescriptionUpload";

export default function UploadPrescriptionPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#0f172a] py-24">
                <PrescriptionUpload />
            </main>
            <Footer />
        </div>
    );
}
