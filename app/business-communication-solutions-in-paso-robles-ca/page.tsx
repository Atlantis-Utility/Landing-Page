import CitySolutionsPage, { generateCitySolutionsMetadata } from "@/components/city-solutions/CitySolutionsPage";

export const metadata = generateCitySolutionsMetadata("paso-robles");

export default function BusinessCommunicationSolutionsPasoRoblesPage() {
  return <CitySolutionsPage id="paso-robles" />;
}
