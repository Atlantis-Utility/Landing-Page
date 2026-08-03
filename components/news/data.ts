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
];
