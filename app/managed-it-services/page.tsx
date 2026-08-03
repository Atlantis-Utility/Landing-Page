import ServiceLandingPage from "@/components/services/ServiceLandingPage";

export const metadata = {
  title: "Managed IT Services (MSP) in California | Atlantis Utility Inc",
  description:
    "Proactive managed IT services for California businesses: 24/7 monitoring, patch management, backup and disaster recovery, and flat-rate monthly pricing.",
  alternates: { canonical: "/managed-it-services" },
};

export default function ManagedItServicesPage() {
  return <ServiceLandingPage id="managed-it" />;
}
