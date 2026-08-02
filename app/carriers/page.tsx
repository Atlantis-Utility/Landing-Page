import Navbar from "@/components/Navbar";
import CarriersHero from "@/components/carriers/CarriersHero";
import CarrierCategories from "@/components/carriers/CarrierCategories";
import NetworkReliability from "@/components/carriers/NetworkReliability";
import CarrierPartners from "@/components/carriers/CarrierPartners";
import { CTABanner, Footer } from "@/components/CtaFooter";

export const metadata = {
  title: "Carriers & Network Infrastructure | Fiber, LTE & Voice",
  description:
    "A look at the carrier-grade fiber, LTE failover, and voice network infrastructure behind every Atlantis Utility VoIP and internet service in California.",
  alternates: { canonical: "/carriers" },
};

export default function CarriersPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <CarriersHero />
      <CarrierCategories />
      <NetworkReliability />
      <CarrierPartners />
      <CTABanner />
      <Footer />
    </main>
  );
}
