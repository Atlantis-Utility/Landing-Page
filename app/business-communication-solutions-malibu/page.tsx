import CitySolutionsPage, { generateCitySolutionsMetadata } from "@/components/city-solutions/CitySolutionsPage";

export const metadata = generateCitySolutionsMetadata("malibu");

export default function BusinessCommunicationSolutionsMalibuPage() {
  return <CitySolutionsPage id="malibu" />;
}
