import ServiceLandingPage from "@/components/services/ServiceLandingPage";

export const metadata = {
  title: "Help Desk & Desk Support in California | Atlantis Utility Inc",
  description:
    "Remote and on-site help desk support for California businesses: fast response times, new employee setup, and printer, Wi-Fi, and device troubleshooting.",
  alternates: { canonical: "/help-desk-support" },
};

export default function HelpDeskSupportPage() {
  return <ServiceLandingPage id="help-desk" />;
}
