import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eMedicine | Online Pharmacy & Healthcare Store in Bangladesh",
  description: "eMedicine is your trusted online pharmacy for genuine medicines, health products, and doctor consultation. Fast doorstep delivery across Bangladesh.",
  keywords: "online pharmacy bangladesh, genuine medicine, emedicine, health store dhaka, medicine delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans`}>
        <Toaster position="top-right" />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
