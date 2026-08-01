import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FeedbackHero from "@/components/feedback/FeedbackHero";
import SampleTestimonials from "@/components/feedback/SampleTestimonials";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import { CTABanner, Footer } from "@/components/CtaFooter";

export const metadata: Metadata = {
  title: "Customer Feedback & Reviews | Atlantis Utility Inc",
  description:
    "See what California businesses say about Atlantis Utility's VoIP, internet, and IT services, and share your own feedback with our team.",
  alternates: { canonical: "/feedback" },
};

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <FeedbackHero />
      <SampleTestimonials />
      <FeedbackForm />
      <CTABanner />
      <Footer />
    </main>
  );
}
