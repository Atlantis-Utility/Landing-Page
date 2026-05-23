import Navbar from "@/components/Navbar";
import ProductsHero from "@/components/products/ProductsHero";
import ProductDetail from "@/components/products/ProductDetail";
import ProductsCTA from "@/components/products/ProductsCTA";
import { Footer } from "@/components/CtaFooter";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ProductsHero />
      <ProductDetail />
      <ProductsCTA />
      <Footer />
    </main>
  );
}