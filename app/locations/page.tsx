import Navbar from "@/components/Navbar";
import LocationsHero from "@/components/locations/LocationsHero";
import LocationsGrid from "@/components/locations/LocationsGrid";
import { CTABanner, Footer } from "@/components/CtaFooter";

export const metadata = {
  title: "Service Areas | VoIP & IT Services Across California",
  description:
    "Atlantis Utility serves businesses across California, with local hubs in Ventura, Oxnard, Camarillo, Malibu, Thousand Oaks, Paso Robles, and Santa Barbara.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <LocationsHero />
      <LocationsGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}
