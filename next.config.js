/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // --- Legacy pages: old slug -> new slug ---
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
      { source: "/malibu", destination: "/business-communication-solutions-malibu", permanent: true },

      // --- Legacy duplicate/near-duplicate city-solutions URLs -> canonical new page ---
      { source: "/business-communication-solutions-in-oxnard-ca", destination: "/business-communication-solutions-oxnard", permanent: true },
      { source: "/business-communications-solutions-in-paso-robles", destination: "/business-communication-solutions-in-paso-robles-ca", permanent: true },

      // --- Legacy blog posts -> closest matching new content ---
      { source: "/blog/the-future-of-business-communication-voip-trends-to-watch-in-2024", destination: "/blog/ai-phone-systems-small-business-2026", permanent: true },
      { source: "/blog/business-voip-vs-traditional-phone-systems-which-is-right-for-you", destination: "/blog/voip-vs-landline-california-businesses", permanent: true },
      { source: "/blog/the-importance-of-utility-locating-before-construction-what-you-need-to-know", destination: "/blog", permanent: true },
      { source: "/blog/telecommunication-solutions-for-remote-work-in-paso-robles", destination: "/locations/paso-robles", permanent: true },
      { source: "/blog/the-history-of-telecommunications-in-paso-robles-from-landlines-to-fiber-optic", destination: "/locations/paso-robles", permanent: true },
      { source: "/blog/how-atlantis-utilitys-lte-and-5g-solutions-empower-businesses", destination: "/lte-internet", permanent: true },
      { source: "/blog/atlantis-utilitys-innovative-pots-replacement-solutions", destination: "/sip-trunking", permanent: true },
      { source: "/blog/customized-solutions-tailoring-business-voip-and-internet-packages-for-malibu-enterprises", destination: "/business-communication-solutions-malibu", permanent: true },
      { source: "/blog/the-advantages-of-business-voip-why-malibu-companies-should-make-the-switch", destination: "/business-communication-solutions-malibu", permanent: true },
      { source: "/blog/innovative-communication-solutions-for-california-businesses", destination: "/services", permanent: true },
      { source: "/blog/the-importance-of-communicating-concerns-why-you-should-speak-up-to-your-telephone-utility-provider", destination: "/contact", permanent: true },
      { source: "/blog/are-your-legitimate-calls-being-marked-as-spam", destination: "/blog", permanent: true },
      { source: "/blog/unveiling-the-pitfalls-why-relying-on-wireless-hotspots-can-sabotage-your-companys-operations", destination: "/high-speed-internet", permanent: true },
      { source: "/blog/benefits-to-having-atlantis-utility-be-your-go-to-company-for-phone-internet-cameras-and-cabling", destination: "/services", permanent: true },
      { source: "/blog/benefits-to-letting-atlantis-utility-prequalify-your-next-new-location-before-you-sign-the-lease", destination: "/carriers", permanent: true },
      { source: "/blog/unlocking-seamless-communication-how-voip-solutions-boost-productivity-for-ventura-california-businesses", destination: "/locations/ventura", permanent: true },
      { source: "/blog/importance-of-having-a-backup-internet-connection", destination: "/blog/signs-you-need-backup-internet", permanent: true },
      { source: "/blog/importance-of-replacing-an-aging-phone-system", destination: "/business-voip", permanent: true },
      { source: "/blog/benefits-of-speeding-up-your-local-network-for-business", destination: "/high-speed-internet", permanent: true },
      { source: "/blog/saving-money-with-voip-services", destination: "/blog/telecom-bill-audit-cost-reduction-2026", permanent: true },
      { source: "/blog/the-most-common-business-data-networking-mistakes", destination: "/services", permanent: true },
      { source: "/blog/five-reasons-to-switch-to-business-voip", destination: "/business-voip", permanent: true },
    ];
  },
};
module.exports = nextConfig;
