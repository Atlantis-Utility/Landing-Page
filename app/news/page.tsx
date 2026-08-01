import Navbar from "@/components/Navbar";
import NewsHero from "@/components/news/NewsHero";
import NewsList from "@/components/news/NewsList";
import { CTABanner, Footer } from "@/components/CtaFooter";

export const metadata = {
  title: "Company News | Atlantis Utility Inc",
  description: "Company announcements, new service launches, and seasonal tips from Atlantis Utility Inc, California's local VoIP and IT services provider.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <NewsHero />
      <NewsList />
      <CTABanner />
      <Footer />
    </main>
  );
}
