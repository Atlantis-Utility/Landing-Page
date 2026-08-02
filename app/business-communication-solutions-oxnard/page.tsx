import CitySolutionsPage, { generateCitySolutionsMetadata } from "@/components/city-solutions/CitySolutionsPage";

export const metadata = generateCitySolutionsMetadata("oxnard");

export default function BusinessCommunicationSolutionsOxnardPage() {
  return <CitySolutionsPage id="oxnard" />;
}
