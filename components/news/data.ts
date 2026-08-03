export type NewsItem = {
  date: string;
  tag: string;
  title: string;
  summary: string;
  image?: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "August 2026",
    tag: "Company Update",
    title: "Company Update for Affordable Telephone Systems",
    image: "/atlantis/affordable.png",
    summary:
      "We are happy to announce that Atlantis Utility, INC and Affordable Telephone have joined forces.\n\n" +
      "Affordable Telephone and Atlantis Utility, INC will continue to sell, support, and service: NEC, ESI, Panasonic, and AVAYA Communication systems.\n\n" +
      "Atlantis Utility, INC brings much more than just phone system services, such as Telecom Cost Analysis, Contract Negotiations, Hosted VoIP Services, Cost Reduction, Security Camera Systems, Voice and Data Network Cabling, service, repair and much more. Please browse our website to learn more about what Atlantis Utility has to offer you and your company.\n\n" +
      "Jack Green has retired from the day-to-day operation but will be available to consult with Atlantis Utility, INC/ Affordable Telephone on an as needed basis.\n\n" +
      "Our goal is to continue providing Affordable Telephone Customers the Highest Quality Solutions and Quality Service you have come to rely on over the past 38 years.\n\n" +
      "Please feel free to call us with any questions or if you would like us to stop by and say hi!\n\n" +
      "Our number has stayed the same (805) 658-2329.\n\n" +
      "We look forward to seeing you soon.\nSincerely,\nAtlantis Utility Inc.",
  },
  {
    date: "June 2026",
    tag: "Company Update",
    title: "Now serving all of California",
    summary:
      "Atlantis Utility has expanded from a Ventura County-focused provider to serving businesses statewide. Our local hub cities remain the backbone of our on-the-ground support, but our VoIP, internet, and managed IT services are now available to companies anywhere in California.",
  },
  {
    date: "April 2026",
    tag: "New Service",
    title: "New Managed IT Services launched",
    summary:
      "We've rolled out a formal Managed IT Services (MSP) offering covering help desk support, network monitoring, and ongoing maintenance — giving businesses a single point of contact for both their connectivity and their day-to-day IT needs.",
  },
  {
    date: "February 2026",
    tag: "Seasonal Tip",
    title: "Wildfire and storm season: check your backup connectivity",
    summary:
      "As California moves into another wildfire and storm season, now is a good time to confirm your business has a backup internet path. A short call with our team can tell you whether LTE failover is available at your location and how quickly it engages during an outage.",
  },
  {
    date: "December 2025",
    tag: "New Service",
    title: "SIP trunking now available for multi-location businesses",
    summary:
      "Businesses running multiple offices or storefronts can now consolidate their phone lines onto a single SIP trunking setup, simplifying billing and giving every location the same call quality and features without separate legacy phone lines.",
  },
  {
    date: "October 2025",
    tag: "Company Update",
    title: "Custom software development team expands",
    summary:
      "To keep up with demand for internal tools and business automation, we've grown our custom software development team. If your business relies on spreadsheets or manual processes that a small internal tool could replace, reach out to talk through what's possible.",
  },
];
