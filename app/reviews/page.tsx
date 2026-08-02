import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ReviewsHero from "@/components/reviews/ReviewsHero";
import ReviewsGrid from "@/components/reviews/ReviewsGrid";
import LeaveReviewCta from "@/components/reviews/LeaveReviewCta";
import { CTABanner, Footer } from "@/components/CtaFooter";

export const metadata: Metadata = {
  title: "Customer Reviews | Atlantis Utility Inc",
  description:
    "See what California businesses say about Atlantis Utility's VoIP, internet, and managed IT services, and read reviews across a range of industries.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ReviewsHero />
      <ReviewsGrid />
      <LeaveReviewCta />
      <CTABanner />
      <Footer />
    </main>
  );
}
