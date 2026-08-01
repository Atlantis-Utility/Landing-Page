import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TermsHero from "@/components/terms/TermsHero";
import TermsContent from "@/components/terms/TermsContent";
import { Footer } from "@/components/CtaFooter";

export const metadata: Metadata = {
  title: "Terms and Conditions | Atlantis Utility Inc",
  description: "Services & Terms of Agreement for Atlantis Utility Inc. telecommunications services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <TermsHero />
      <TermsContent />
      <Footer />
    </main>
  );
}
