export type IndustryIconKey =
  | "leaf"
  | "truck"
  | "store"
  | "building"
  | "wine"
  | "bed"
  | "briefcase"
  | "home";

export type CityIndustry = {
  title: string;
  desc: string;
  icon: IndustryIconKey;
};

export type CityReason = {
  title: string;
  desc: string;
};

export type CitySolution = {
  /** id used as the component prop and as a key, e.g. "oxnard" */
  id: string;
  /** full route path this content lives at */
  path: string;
  city: string;
  /** short badge copy, e.g. "Serving Oxnard, CA" */
  badge: string;
  /** H1 headline, city name is styled separately by the component */
  headline: string;
  /** hero intro paragraph */
  intro: string;
  /** "why this city" section heading + intro */
  whyHeading: string;
  whyIntro: string;
  reasons: CityReason[];
  /** industries section heading + intro */
  industriesHeading: string;
  industriesIntro: string;
  industries: CityIndustry[];
  /** ids referencing components/services/data.tsx `services` array */
  serviceIds: string[];
  metaDescription: string;
};

export const citySolutions: CitySolution[] = [
  {
    id: "oxnard",
    path: "/business-communication-solutions-oxnard",
    city: "Oxnard",
    badge: "Serving Oxnard, CA",
    headline: "Business Communication Solutions in Oxnard, CA",
    intro:
      "Oxnard is one of Ventura County's busiest business hubs, home to agricultural operations, distribution and logistics companies, retail centers, and a growing base of professional offices. Atlantis Utility builds VoIP phone systems, business internet, and managed IT around how Oxnard companies actually operate, from packing houses near the coast to warehouses along the Highway 101 and Rice Avenue corridors.",
    whyHeading: "Why Oxnard businesses choose Atlantis Utility",
    whyIntro:
      "We're based nearby in Ventura, which means faster installs, a technician who already knows the local buildings and carrier access points, and support that doesn't route through a national call center.",
    reasons: [
      {
        title: "Local installs, no long wait times",
        desc: "Our team is minutes away, so new lines, cabling, and equipment installs get scheduled quickly instead of weeks out.",
      },
      {
        title: "Built for multi-site operations",
        desc: "Distribution and agriculture businesses with several Oxnard locations get a phone and network setup that works the same way everywhere.",
      },
      {
        title: "Connectivity that keeps up with volume",
        desc: "Retail counters and warehouse floors both need bandwidth that doesn't slow down at peak hours — we size it to your actual usage.",
      },
      {
        title: "One team for telecom and IT",
        desc: "VoIP, internet, and managed IT come from a single point of contact, so nothing falls through the cracks between vendors.",
      },
    ],
    industriesHeading: "Industries we serve in Oxnard",
    industriesIntro:
      "Oxnard's business mix is broad, and every industry has a different connectivity priority. Here's where we spend most of our time.",
    industries: [
      {
        title: "Agriculture & packing operations",
        desc: "Reliable internet and VoIP across packing houses, cold storage, and field offices, with LTE backup where a dropped line means a missed order.",
        icon: "leaf",
      },
      {
        title: "Logistics & distribution",
        desc: "Multi-site network design and business internet for warehouses and distribution centers that need consistent uptime around the clock.",
        icon: "truck",
      },
      {
        title: "Retail & storefronts",
        desc: "Point-of-sale-ready internet and simple, reliable phone systems for storefronts and shopping centers across Oxnard.",
        icon: "store",
      },
      {
        title: "Professional & office services",
        desc: "Hosted VoIP PBX and managed IT for growing offices that need a phone system and network that scale as headcount does.",
        icon: "briefcase",
      },
    ],
    serviceIds: [
      "business-voip",
      "sip-trunking",
      "high-speed-internet",
      "lte-backup-internet",
      "managed-it",
      "telecom-cost-reduction",
    ],
    metaDescription:
      "Business VoIP, internet, and managed IT solutions for Oxnard, CA companies — agriculture, logistics, retail, and professional offices. Local install and support from Atlantis Utility.",
  },
  {
    id: "malibu",
    path: "/business-communication-solutions-malibu",
    city: "Malibu",
    badge: "Serving Malibu, CA",
    headline: "Business Communication Solutions in Malibu, CA",
    intro:
      "Malibu businesses run on a mix of hospitality, boutique retail, real estate, and remote-first teams working out of home offices and small studios along the coast. Atlantis Utility delivers VoIP phone systems and business internet built to stay online through Malibu's terrain and weather challenges, so client calls and bookings never depend on a single connection.",
    whyHeading: "Why Malibu businesses choose Atlantis Utility",
    whyIntro:
      "Coastal terrain and canyon geography make connectivity harder to get right in Malibu. We plan around it instead of selling a one-size-fits-all package.",
    reasons: [
      {
        title: "Failover built in from day one",
        desc: "LTE backup internet keeps phones and booking systems online when a primary connection drops during outages or storms.",
      },
      {
        title: "Solutions for hybrid and remote teams",
        desc: "VoIP systems built for teams split between an office, a storefront, and home, with mobile apps that keep everyone reachable.",
      },
      {
        title: "White-glove, low-disruption installs",
        desc: "Boutiques, galleries, and hospitality venues can't afford downtime during business hours — we schedule around it.",
      },
      {
        title: "A real local point of contact",
        desc: "No offshore support scripts. You'll reach a technician who understands your setup and Malibu's specific connectivity constraints.",
      },
    ],
    industriesHeading: "Industries we serve in Malibu",
    industriesIntro:
      "From beachfront hospitality to real estate offices in the hills, we tailor connectivity to how each Malibu business actually runs.",
    industries: [
      {
        title: "Hospitality & restaurants",
        desc: "Dependable internet for reservations, point-of-sale, and guest Wi-Fi, with automatic failover so a slow connection never becomes a lost table.",
        icon: "bed",
      },
      {
        title: "Boutique & retail",
        desc: "Simple, reliable phone and internet setups sized right for small storefronts and showrooms.",
        icon: "store",
      },
      {
        title: "Real estate offices",
        desc: "Hosted VoIP PBX and mobile-ready calling for agents who are constantly moving between listings and the office.",
        icon: "home",
      },
      {
        title: "Remote & hybrid professional teams",
        desc: "Business-grade internet and VoIP for home-based offices and small studios that need enterprise-grade reliability.",
        icon: "briefcase",
      },
    ],
    serviceIds: [
      "high-speed-internet",
      "lte-backup-internet",
      "business-voip",
      "hosted-voip-pbx",
      "managed-it",
    ],
    metaDescription:
      "Business VoIP, internet, and managed IT solutions for Malibu, CA companies — hospitality, retail, real estate, and remote teams. Reliable connectivity with LTE failover from Atlantis Utility.",
  },
  {
    id: "paso-robles",
    path: "/business-communication-solutions-in-paso-robles-ca",
    city: "Paso Robles",
    badge: "Serving Paso Robles, CA",
    headline: "Business Communication Solutions in Paso Robles, CA",
    intro:
      "Paso Robles' wine country economy runs on wineries, tasting rooms, hospitality venues, and agricultural operations spread across sprawling properties. Atlantis Utility builds VoIP, business internet, and managed IT that works as well in a tasting room as it does in a back office or a vineyard building a half mile from the main house.",
    whyHeading: "Why Paso Robles businesses choose Atlantis Utility",
    whyIntro:
      "Properties here are often larger and more spread out than a typical office building, so we design connectivity around distance and reliability, not just a single access point.",
    reasons: [
      {
        title: "Coverage across large properties",
        desc: "Network design that reaches tasting rooms, event spaces, and back offices spread across acres, not just a single building.",
      },
      {
        title: "Failover for peak tasting-room hours",
        desc: "LTE backup keeps point-of-sale and card readers running during weekend rushes and harvest season, when a dropped sale really costs you.",
      },
      {
        title: "Seasonal flexibility",
        desc: "Phone and internet setups that can scale up for harvest season and event weekends, then scale back down the rest of the year.",
      },
      {
        title: "One local team for everything",
        desc: "VoIP, internet, structured cabling, and managed IT from a single point of contact who already understands wine country properties.",
      },
    ],
    industriesHeading: "Industries we serve in Paso Robles",
    industriesIntro:
      "Wine country businesses have connectivity needs that look different from a typical office, and we've built for that difference.",
    industries: [
      {
        title: "Wineries & tasting rooms",
        desc: "Point-of-sale-ready internet and VoIP for tasting rooms, with LTE backup so a busy Saturday never means a lost sale.",
        icon: "wine",
      },
      {
        title: "Hospitality & event venues",
        desc: "Reliable connectivity for inns, restaurants, and event spaces that host weddings, tastings, and large weekend crowds.",
        icon: "bed",
      },
      {
        title: "Agriculture & vineyard operations",
        desc: "Network coverage across sprawling vineyard and ranch properties, connecting field offices back to the main house.",
        icon: "leaf",
      },
      {
        title: "Retail & tourism-facing businesses",
        desc: "Simple, dependable phone and internet for shops and tourism businesses that depend on steady foot traffic.",
        icon: "store",
      },
    ],
    serviceIds: [
      "business-voip",
      "high-speed-internet",
      "lte-backup-internet",
      "structured-cabling",
      "telecom-cost-reduction",
    ],
    metaDescription:
      "Business VoIP, internet, and managed IT solutions for Paso Robles, CA companies — wineries, hospitality, and agriculture. Local install and support from Atlantis Utility.",
  },
];

export function getCitySolution(id: string): CitySolution | undefined {
  return citySolutions.find((c) => c.id === id);
}
