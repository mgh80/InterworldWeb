import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Interworld Logistics",
  description: "Tu puerta al mundo - logística global",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans bg-gray-50 text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
