import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ThankYouContent from "@/components/thank-you/ThankYouContent";
import { Footer } from "@/components/CtaFooter";

export const metadata: Metadata = {
  title: "Thank You | Atlantis Utility Inc",
  description: "Thanks for reaching out to Atlantis Utility. Our California team will follow up within one business day.",
  alternates: { canonical: "/thank-you-page" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ThankYouContent />
      <Footer />
    </main>
  );
}
