import Navbar from "@/components/Navbar";
import CarriersHero from "@/components/carriers/CarriersHero";
import CarrierPartners from "@/components/carriers/CarrierPartners";
import { CTABanner, Footer } from "@/components/CtaFooter";

export const metadata = {
  title: "Carrier Partners | Spectrum, Frontier, T-Mobile, AT&T & Cox",
  description:
    "Atlantis Utility works directly with major carrier partners including Spectrum, Frontier, T-Mobile, AT&T, and Cox to provision the connections behind your service.",
  alternates: { canonical: "/carriers" },
};

export default function CarriersPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <CarriersHero />
      <CarrierPartners />
      <CTABanner />
      <Footer />
    </main>
  );
}
