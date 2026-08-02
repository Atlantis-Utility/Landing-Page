import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import VoipNetworkProductsHero from "@/components/products/VoipNetworkProductsHero";
import ProductDetail from "@/components/products/ProductDetail";
import HardwareGallery from "@/components/products/HardwareGallery";
import ProductsCTA from "@/components/products/ProductsCTA";
import { Footer } from "@/components/CtaFooter";

export const metadata: Metadata = {
  title: "VoIP & Network Products | Phones, Gateways, Cabling & Cameras",
  description:
    "VoIP handsets, SIP gateways, PA and paging systems, structured cabling, and IP camera hardware sourced and installed by Atlantis Utility Inc, California.",
  alternates: { canonical: "/voip-network-products" },
  openGraph: {
    title: "VoIP & Network Products | Atlantis Utility Inc",
    description: "VoIP handsets, SIP gateways, structured cabling, and IP camera hardware for California businesses.",
    url: "/voip-network-products",
  },
};

export default function VoipNetworkProductsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <VoipNetworkProductsHero />
      <ProductDetail />
      <HardwareGallery />
      <ProductsCTA />
      <Footer />
    </main>
  );
}
