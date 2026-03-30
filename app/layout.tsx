import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk"
});

export const metadata: Metadata = {
  title: "AMA Transport Logistics | Hospitality FF&E Logistics",
  description:
    "Premium hospitality FF&E logistics, international freight coordination, Miami warehousing, consolidation, and final mile delivery for restaurants, hotels, universities, and developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${grotesk.className} bg-background text-foreground min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
