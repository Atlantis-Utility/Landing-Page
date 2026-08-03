import ServiceLandingPage from "@/components/services/ServiceLandingPage";

export const metadata = {
  title: "Network Configuration & Design in California | Atlantis Utility Inc",
  description:
    "Switches, routers, firewalls, and business Wi-Fi configured and hardened as one coherent system, fully documented, for California businesses.",
  alternates: { canonical: "/network-configuration" },
};

export default function NetworkConfigurationPage() {
  return <ServiceLandingPage id="network-configuration" />;
}
