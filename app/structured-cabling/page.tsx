import ServiceLandingPage from "@/components/services/ServiceLandingPage";

export const metadata = {
  title: "Structured Cabling in California | Fiber and CAT6 Installation",
  description:
    "Atlantis Utility designs and installs structured cabling for data, VoIP, and security systems across California, labeled and documented for future work.",
  alternates: { canonical: "/structured-cabling" },
};

export default function StructuredCablingPage() {
  return <ServiceLandingPage id="structured-cabling" />;
}
