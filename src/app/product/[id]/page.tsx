import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductDetailView } from "@/components/product/ProductDetailView";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#fcfcfc] py-24 px-4 md:px-8">
                <ProductDetailView id={id} />
            </main>
            <Footer />
        </div>
    );
}
