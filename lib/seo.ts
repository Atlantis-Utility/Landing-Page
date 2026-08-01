export const SITE_URL = "https://www.atlantisutility.com";
export const SITE_NAME = "Atlantis Utility Inc";

export const BUSINESS = {
  legalName: "Atlantis Utility, Inc",
  telephone: "+1-805-658-2329",
  telephoneDisplay: "(805) 658-2329",
  email: "info@atlantisutility.com",
  streetAddress: "1445 Donlon St",
  addressLocality: "Ventura",
  addressRegion: "CA",
  postalCode: "93003",
  addressCountry: "US",
  priceRange: "$$",
  areaServed: [
    "Ventura, CA",
    "Oxnard, CA",
    "Camarillo, CA",
    "Malibu, CA",
    "Thousand Oaks, CA",
    "Paso Robles, CA",
    "Santa Barbara, CA",
  ],
  sameAs: [] as string[],
};

export const CORE_KEYWORDS = [
  "business VoIP California",
  "VoIP phone systems",
  "hosted VoIP PBX",
  "SIP trunking",
  "business internet provider California",
  "LTE backup internet",
  "structured cabling installation",
  "managed IT services",
  "IT support California businesses",
  "telecom cost reduction",
  "network configuration and design",
  "IP camera installation",
  "custom software development",
  "Ventura VoIP provider",
];

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}