import ServiceLandingPage from "@/components/services/ServiceLandingPage";

export const metadata = {
  title: "LTE Internet for Business in California | Backup & Failover Solutions",
  description:
    "Get fast, reliable LTE internet for your business across California. Atlantis Utility provides backup and failover LTE to keep you online during outages.",
  alternates: { canonical: "/lte-internet" },
};

export default function LteInternetPage() {
  return <ServiceLandingPage id="lte-backup-internet" />;
}
