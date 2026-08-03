export type LocationService = { label: string; href: string };

export type Location = {
  slug: string;
  city: string;
  short: string;
  paragraph: string;
  home?: boolean;
  photo?: string;
  services: LocationService[];
};

export const locations: Location[] = [
  {
    slug: "ventura",
    city: "Ventura",
    short: "Our home base and central service hub for telecom and VoIP.",
    paragraph:
      "Ventura is home to Atlantis Utility's headquarters, so it's where our response times are fastest and our technicians know the local buildings, landlords, and carrier access points best. From downtown offices to industrial parks along the 101 corridor, we design, install, and support VoIP and connectivity for businesses of every size — with a local team just minutes away.",
    home: true,
    services: [
      { label: "Business VoIP", href: "/services#business-voip" },
      { label: "Hosted VoIP PBX", href: "/services#hosted-voip-pbx" },
      { label: "High-Speed Internet", href: "/services#high-speed-internet" },
      { label: "Managed IT Services (MSP)", href: "/services#managed-it" },
      { label: "Structured Cabling", href: "/services#structured-cabling" },
    ],
  },
  {
    slug: "oxnard",
    city: "Oxnard",
    short: "Complete VoIP and internet solutions for businesses of all sizes.",
    paragraph:
      "Oxnard's mix of agriculture, logistics, retail, and growing office space means businesses need connectivity that scales with them. We provide complete VoIP and internet solutions for Oxnard companies — from single-location retail counters to multi-site distribution operations — with local installation and ongoing support.",
    services: [
      { label: "Business VoIP", href: "/services#business-voip" },
      { label: "SIP Trunking", href: "/services#sip-trunking" },
      { label: "High-Speed Internet", href: "/services#high-speed-internet" },
      { label: "Telecom Cost Reduction", href: "/services#telecom-cost-reduction" },
      { label: "Network Configuration & Design", href: "/services#network-configuration" },
    ],
  },
  {
    slug: "camarillo",
    city: "Camarillo",
    short: "Network and internet services for offices, stores, and facilities.",
    paragraph:
      "Camarillo's business parks, retail centers, and manufacturing facilities rely on us for dependable network and internet services. Whether you're outfitting a new office build-out or upgrading aging cabling in an existing facility, our team handles design, installation, and long-term support in one place.",
    services: [
      { label: "High-Speed Internet", href: "/services#high-speed-internet" },
      { label: "Structured Cabling", href: "/services#structured-cabling" },
      { label: "Network Configuration & Design", href: "/services#network-configuration" },
      { label: "Managed IT Services (MSP)", href: "/services#managed-it" },
      { label: "Help Desk & Desk Support", href: "/services#help-desk" },
    ],
  },
  {
    slug: "malibu",
    city: "Malibu",
    short: "High-speed telecom for Malibu businesses and remote teams.",
    paragraph:
      "Malibu's businesses and remote-first teams need connectivity that stays up even when the terrain and weather don't cooperate. We deliver high-speed internet with LTE backup failover so client calls and cloud tools keep working through outages, plus VoIP systems built for hybrid and distributed teams.",
    services: [
      { label: "High-Speed Internet", href: "/services#high-speed-internet" },
      { label: "LTE Backup Internet", href: "/services#lte-backup-internet" },
      { label: "Business VoIP", href: "/services#business-voip" },
      { label: "Help Desk & Desk Support", href: "/services#help-desk" },
    ],
  },
  {
    slug: "thousand-oaks",
    city: "Thousand Oaks",
    short: "Cutting-edge telecom and IP security for growing companies.",
    paragraph:
      "Thousand Oaks is home to a fast-growing base of corporate offices and tech-forward companies, and we support them with cutting-edge telecom and IP security infrastructure. From hosted VoIP PBX rollouts to structured cabling and camera systems for new builds, our team scales alongside growing headcounts.",
    services: [
      { label: "Hosted VoIP PBX", href: "/services#hosted-voip-pbx" },
      { label: "SIP Trunking", href: "/services#sip-trunking" },
      { label: "Structured Cabling", href: "/services#structured-cabling" },
      { label: "Custom Software Development", href: "/services#custom-software" },
      { label: "Managed IT Services (MSP)", href: "/services#managed-it" },
    ],
  },
  {
    slug: "paso-robles",
    city: "Paso Robles",
    short: "Business communication solutions for wineries, retailers, and tech.",
    paragraph:
      "Paso Robles' wineries, hospitality venues, and retailers each have different connectivity needs — tasting-room point-of-sale, back-office VoIP, or reliable internet across sprawling properties. We build business communication solutions tailored to each, with LTE backup for locations where a dropped connection means a lost sale.",
    services: [
      { label: "Business VoIP", href: "/services#business-voip" },
      { label: "High-Speed Internet", href: "/services#high-speed-internet" },
      { label: "LTE Backup Internet", href: "/services#lte-backup-internet" },
      { label: "Structured Cabling", href: "/services#structured-cabling" },
      { label: "Telecom Cost Reduction", href: "/services#telecom-cost-reduction" },
    ],
  },
  {
    slug: "santa-barbara",
    city: "Santa Barbara",
    short: "New market. Request service availability in Santa Barbara.",
    paragraph:
      "Santa Barbara is one of our newest markets as we expand service across California. Availability varies by building and neighborhood, so we recommend reaching out directly to confirm coverage — our team can walk you through what's available today and what's coming online soon.",
    services: [
      { label: "Business VoIP", href: "/services#business-voip" },
      { label: "High-Speed Internet", href: "/services#high-speed-internet" },
      { label: "Managed IT Services (MSP)", href: "/services#managed-it" },
      { label: "Telecom Cost Reduction", href: "/services#telecom-cost-reduction" },
    ],
  },
  {
    slug: "goleta",
    city: "Goleta",
    short: "New market. Request service availability in Goleta.",
    photo: "/atlantis/goleta.png",
    paragraph:
      "Goleta's mix of tech companies, university-adjacent businesses, and coastal offices is one of our newest markets as we expand service across California. Availability varies by building and neighborhood, so we recommend reaching out directly to confirm coverage — our team can walk you through what's available today and what's coming online soon.",
    services: [
      { label: "Business VoIP", href: "/services#business-voip" },
      { label: "High-Speed Internet", href: "/services#high-speed-internet" },
      { label: "Managed IT Services (MSP)", href: "/services#managed-it" },
      { label: "Telecom Cost Reduction", href: "/services#telecom-cost-reduction" },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
