import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutDifference from "@/components/about/AboutDifference";
import AboutHowWeWork from "@/components/about/AboutHowWeWork";
import { CTABanner, Footer } from "@/components/CtaFooter";

export const metadata: Metadata = {
  title: "About Us | California VoIP & IT Services Company",
  description:
    "Atlantis Utility Inc is a Ventura, CA based telecom and IT provider serving businesses statewide with VoIP, internet, managed IT, and network infrastructure since day one.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Atlantis Utility Inc | California VoIP & IT Services Company",
    description:
      "Local telecom and IT experts serving California businesses with VoIP, internet, managed IT, and network infrastructure.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutDifference />
      <AboutHowWeWork />
      <CTABanner />
      <Footer />
    </main>
  );
}
