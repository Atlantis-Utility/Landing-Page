import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CityHero from "@/components/locations/CityHero";
import CityServices from "@/components/locations/CityServices";
import { locations, getLocation } from "@/components/locations/data";
import { CTABanner, Footer } from "@/components/CtaFooter";
import { BUSINESS, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }) {
  const location = getLocation(params.city);
  if (!location) return {};
  return {
    title: `${location.city}, CA Business VoIP & IT Services`,
    description: `${location.short} ${location.paragraph}`,
    alternates: { canonical: `/locations/${location.slug}` },
    openGraph: {
      title: `${location.city}, CA Business VoIP & IT Services | Atlantis Utility Inc`,
      description: location.short,
      url: `/locations/${location.slug}`,
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const location = getLocation(params.city);
  if (!location) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Atlantis Utility Inc — ${location.city}, CA`,
    url: `${SITE_URL}/locations/${location.slug}`,
    telephone: BUSINESS.telephone,
    areaServed: { "@type": "City", name: `${location.city}, CA` },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    parentOrganization: { "@type": "Organization", name: "Atlantis Utility, Inc", url: SITE_URL },
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <CityHero location={location} />
      <CityServices location={location} />
      <CTABanner />
      <Footer />
    </main>
  );
}
