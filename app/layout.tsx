import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS, CORE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Atlantis Utility Inc | VoIP, Internet, Telecom & IT Services in California",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Business VoIP, high-speed internet, SIP trunking, LTE backup, structured cabling, IP cameras, and full IT services across California. Local techs, honest pricing, 24/7 support.",
  keywords: CORE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  category: "Telecommunications & IT Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: "/",
    title: "Atlantis Utility Inc | VoIP, Internet, Telecom & IT Services in California",
    description:
      "Business VoIP, high-speed internet, SIP trunking, LTE backup, structured cabling, IP cameras, and full IT services across California.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlantis Utility Inc | VoIP, Internet, Telecom & IT Services in California",
    description:
      "Business VoIP, high-speed internet, SIP trunking, LTE backup, structured cabling, IP cameras, and full IT services across California.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    // Paste your Google Search Console verification string here once the property is registered.
    google: "",
    other: {
      // Paste your Bing Webmaster Tools verification string here.
      "msvalidate.01": "",
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  legalName: BUSINESS.legalName,
  url: SITE_URL,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  image: `${SITE_URL}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  },
  areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: BUSINESS.sameAs,
  makesOffer: [
    "Business VoIP",
    "Hosted VoIP PBX",
    "SIP Trunking",
    "High-Speed Business Internet",
    "LTE Backup Internet",
    "Structured Cabling",
    "Managed IT Services",
    "Custom Software Development",
    "Network Configuration & Design",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}