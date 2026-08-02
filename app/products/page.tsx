import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProductsHero from "@/components/products/ProductsHero";
import ProductDetail from "@/components/products/ProductDetail";
import HardwareGallery from "@/components/products/HardwareGallery";
import ProductsCTA from "@/components/products/ProductsCTA";
import { Footer } from "@/components/CtaFooter";

export const metadata: Metadata = {
  title: "VoIP & Telecom Products | Phones, Internet & IP Cameras",
  description:
    "Business VoIP phones, hosted PBX hardware, high-speed internet equipment, LTE backup devices, and IP camera systems from Atlantis Utility Inc, California.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "VoIP & Telecom Products | Atlantis Utility Inc",
    description: "Business VoIP phones, internet equipment, LTE backup devices, and IP camera systems for California businesses.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ProductsHero />
      <ProductDetail />
      <HardwareGallery />
      <ProductsCTA />
      <Footer />
    </main>
  );
}