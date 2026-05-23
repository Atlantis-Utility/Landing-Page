import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import Services     from "@/components/Services";
import Products     from "@/components/Products";
import Areas        from "@/components/Areas";
import TrustReasons from "@/components/TrustReasons";
import FAQ          from "@/components/FAQ";
import { CTABanner, Footer } from "@/components/CtaFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Areas />
      <TrustReasons />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}