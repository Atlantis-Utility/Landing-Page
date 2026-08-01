import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import { CTABanner, Footer } from "@/components/CtaFooter";

export const metadata: Metadata = {
  title: "Contact Us | Free VoIP & IT Consultation in California",
  description:
    "Talk to a local telecom and IT expert. Call (805) 658-2329 or request a free consultation for business VoIP, internet, structured cabling, or managed IT in California.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Atlantis Utility Inc | Free VoIP & IT Consultation",
    description: "Request a free consultation for business VoIP, internet, cabling, or managed IT in California.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <CTABanner />
      <Footer />
    </main>
  );
}
