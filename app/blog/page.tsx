import Navbar from "@/components/Navbar";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import { CTABanner, Footer } from "@/components/CtaFooter";

export const metadata = {
  title: "Blog | VoIP, IT & Telecom Insights for California Businesses",
  description: "Practical guides on VoIP, connectivity, SIP trunking, structured cabling, cybersecurity, and managed IT for California businesses.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <BlogHero />
      <BlogList />
      <CTABanner />
      <Footer />
    </main>
  );
}
