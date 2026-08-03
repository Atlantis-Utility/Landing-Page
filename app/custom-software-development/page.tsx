import ServiceLandingPage from "@/components/services/ServiceLandingPage";

export const metadata = {
  title: "Custom Software Development in California | Atlantis Utility Inc",
  description:
    "Custom applications, internal tools, and system integrations built around how your California business actually works, with ongoing maintenance available.",
  alternates: { canonical: "/custom-software-development" },
};

export default function CustomSoftwareDevelopmentPage() {
  return <ServiceLandingPage id="custom-software" />;
}
