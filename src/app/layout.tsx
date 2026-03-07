import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediCare BD | Online Pharmacy & Healthcare Store in Bangladesh",
  description: "MediCare BD is your trusted online pharmacy for genuine medicines, health products, and doctor consultation. Fast doorstep delivery across Bangladesh.",
  keywords: "online pharmacy bangladesh, genuine medicine, medicare bd, health store dhaka, medicine delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} antialiased font-sans`}>
        <Toaster position="top-right" />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
