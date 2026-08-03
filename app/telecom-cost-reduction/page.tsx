import ServiceLandingPage from "@/components/services/ServiceLandingPage";

export const metadata = {
  title: "Telecom Cost Reduction in California | Lower Your Monthly Bills",
  description:
    "Atlantis Utility audits your phone, internet, and IT contracts to find savings. Free bill audit and no-obligation recommendations for California businesses.",
  alternates: { canonical: "/telecom-cost-reduction" },
};

export default function TelecomCostReductionPage() {
  return <ServiceLandingPage id="telecom-cost-reduction" />;
}
