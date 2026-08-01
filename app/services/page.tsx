import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import { CTABanner, Footer } from "@/components/CtaFooter";

export const metadata: Metadata = {
  title: "Services | Business VoIP, SIP Trunking, Internet & Managed IT",
  description:
    "Business VoIP, hosted VoIP PBX, SIP trunking, high-speed internet, LTE backup, structured cabling, managed IT services, custom software, and network design across California.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Business VoIP, Internet & Managed IT Services | Atlantis Utility Inc",
    description:
      "Business VoIP, SIP trunking, high-speed internet, LTE backup, structured cabling, and managed IT services for California businesses.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ServicesHero />
      <ServiceDetail />
      <CTABanner />
      <Footer />
    </main>
  );
}
