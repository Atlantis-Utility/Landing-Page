export type Review = {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  service: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    quote:
      "We manage six properties across Ventura County and needed one phone system that worked the same way at every site. Atlantis set up hosted VoIP PBX across all of them and it just works.",
    author: "Renee Ashford",
    role: "Property Manager",
    company: "Harborline Property Group",
    initials: "RA",
    service: "Hosted VoIP PBX",
    rating: 5,
  },
  {
    quote:
      "Our restaurants can't afford a dropped card reader on a Friday night. The LTE backup internet has already kicked in twice during outages and nobody at the table even noticed.",
    author: "Tom Delgado",
    role: "Operations Manager",
    company: "Delgado Restaurant Group",
    initials: "TD",
    service: "LTE Backup Internet",
    rating: 5,
  },
  {
    quote:
      "The cabling in our shop was a mess from three different vendors over the years. Atlantis pulled new CAT6 runs, labeled everything, and documented it so the next tech won't have to guess.",
    author: "Priya Nair",
    role: "Facilities Lead",
    company: "Coastal Machine Works",
    initials: "PN",
    service: "Structured Cabling",
    rating: 5,
  },
  {
    quote:
      "We were paying for phone lines we hadn't used in years. Their audit found it in a single call and our monthly telecom bill dropped by almost a third.",
    author: "Gary Feldman",
    role: "Managing Partner",
    company: "Feldman & Cho CPAs",
    initials: "GF",
    service: "Telecom Cost Reduction",
    rating: 5,
  },
  {
    quote:
      "As a small nonprofit we don't have an IT department, so having a help desk we can actually call when a laptop won't connect has been a huge relief for our staff.",
    author: "Marisol Trujillo",
    role: "Executive Director",
    company: "Ventura County Youth Alliance",
    initials: "MT",
    service: "Help Desk & Desk Support",
    rating: 4,
  },
  {
    quote:
      "Every one of our shop locations needed reliable internet for diagnostics equipment and card payments. Atlantis got all four locations upgraded within the same month.",
    author: "Danny Kessler",
    role: "Owner",
    company: "Kessler Auto Repair",
    initials: "DK",
    service: "High-Speed Internet",
    rating: 5,
  },
  {
    quote:
      "They built us a simple internal tool to track job sites and crew schedules that actually talks to our existing accounting software. No more spreadsheets emailed back and forth.",
    author: "Alan Whitfield",
    role: "Project Director",
    company: "Whitfield Construction",
    initials: "AW",
    service: "Custom Software Development",
    rating: 5,
  },
  {
    quote:
      "Managed IT has meant our front desk software and imaging systems stay patched and monitored without anyone here having to think about it. Support answers fast when we do need them.",
    author: "Dr. Elena Ruiz",
    role: "Practice Owner",
    company: "Ruiz Veterinary Clinic",
    initials: "ER",
    service: "Managed IT Services (MSP)",
    rating: 5,
  },
];

export function averageRating(): number {
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
}
