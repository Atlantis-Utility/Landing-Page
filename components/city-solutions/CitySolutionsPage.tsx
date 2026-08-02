import Navbar from "@/components/Navbar";
import { CTABanner, Footer } from "@/components/CtaFooter";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";
import { getService } from "@/components/services/data";
import { getCitySolution, type IndustryIconKey } from "./data";

function IndustryIcon({ icon }: { icon: IndustryIconKey }) {
  switch (icon) {
    case "leaf":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M17 3C9 3 3 9 3 17c8 0 14-6 14-14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M4 16C9 11 12 8 17 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "truck":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="1.5" y="6" width="9" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10.5 8.5h3.5l3 3v2h-6.5v-5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <circle cx="5" cy="15" r="1.6" fill="currentColor" opacity="0.8" />
          <circle cx="14.5" cy="15" r="1.6" fill="currentColor" opacity="0.8" />
        </svg>
      );
    case "store":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M2.5 7l1-4h13l1 4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M2.5 7a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M3.5 7v9h13V7" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 16v-4.5h4V16" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case "building":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="2.5" width="14" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M6.5 6h1.5M12 6h1.5M6.5 9.5h1.5M12 9.5h1.5M6.5 13h1.5M12 13h1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "wine":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 2.5h8l-1 6a3 3 0 0 1-6 0l-1-6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M10 11.5V16M7 17.5h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "bed":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M2.5 11V6a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 10.5 6v2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M10.5 8h5.5A1.5 1.5 0 0 1 17.5 9.5V11" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M1.5 11h17v5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.5 14.5v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "home":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 9l7-6 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 8v8h11V8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M8 16v-4h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case "briefcase":
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="6" width="16" height="10" rx="1.8" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7 6V4.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M2 10.5h16" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
  }
}

export function generateCitySolutionsMetadata(id: string) {
  const city = getCitySolution(id);
  if (!city) return {};
  return {
    title: `Business Communication Solutions in ${city.city}, CA | Atlantis Utility Inc`,
    description: city.metaDescription,
    alternates: { canonical: city.path },
    openGraph: {
      title: `Business Communication Solutions in ${city.city}, CA | Atlantis Utility Inc`,
      description: city.metaDescription,
      url: city.path,
    },
  };
}

export default function CitySolutionsPage({ id }: { id: string }) {
  const city = getCitySolution(id);
  if (!city) return null;

  const cityServices = city.serviceIds
    .map((sid) => getService(sid))
    .filter((s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s));

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EEF4FB] blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#EEF4FB] blur-[80px] opacity-40 translate-y-1/2 -translate-x-1/3" />
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "radial-gradient(circle, #1B65A6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        </div>

        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-[#7290AA] mb-8 flex-wrap" style={{ fontFamily: "var(--font-dm)" }}>
            <a href="/" className="hover:text-[#1B65A6] transition-colors">Home</a>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <a href="/locations" className="hover:text-[#1B65A6] transition-colors">Locations</a>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-[#3A5068] font-medium">{city.city}</span>
          </div>

          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-[#C0D2E5] text-[#1B65A6] text-[12px] font-semibold px-4 py-2 rounded-full shadow-sm mb-6"
              style={{ fontFamily: "var(--font-dm)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
              {city.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0E1A28] tracking-tight leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-syne)" }}>
              {city.headline}
            </h1>
            <p className="text-[#4A6278] text-[16.5px] leading-relaxed max-w-2xl mb-8"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              {city.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <MotionLink href="tel:8056582329"
                className="inline-flex items-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px] shadow-sm"
                style={{ fontFamily: "var(--font-dm)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.09.408a12.035 12.035 0 0 0 5.61 5.61c.129.074.307.045.408-.09l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"/>
                </svg>
                Call Today
              </MotionLink>
              <MotionLink href="/contact"
                className="inline-flex items-center gap-2 bg-white border border-[#C0D2E5] hover:border-[#1B65A6] hover:text-[#1B65A6] text-[#3A5068] font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px]"
                style={{ fontFamily: "var(--font-dm)" }}>
                Schedule a Consultation
              </MotionLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why this city */}
      <section className="py-20 sm:py-24 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="section-label mb-3">Local Advantage</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1A28] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-syne)" }}>
              {city.whyHeading}
            </h2>
            <p className="text-[#4A6278] text-[15px] leading-relaxed"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              {city.whyIntro}
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {city.reasons.map((r) => (
              <StaggerItem key={r.title}>
                <div className="card p-6 bg-white h-full">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#C0D2E5] flex items-center justify-center mb-5">
                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#1B65A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[14.5px] font-bold text-[#0E1A28] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                    {r.title}
                  </h3>
                  <p className="text-[13px] text-[#7290AA] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                    {r.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Industries we serve */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="section-label mb-3">Industries We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1A28] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-syne)" }}>
              {city.industriesHeading}
            </h2>
            <p className="text-[#4A6278] text-[15px] leading-relaxed"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              {city.industriesIntro}
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {city.industries.map((ind) => (
              <StaggerItem key={ind.title}>
                <div className="card p-6 bg-white flex items-start gap-4 h-full">
                  <div className="service-icon"><IndustryIcon icon={ind.icon} /></div>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-[#0E1A28] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                      {ind.title}
                    </h3>
                    <p className="text-[13.5px] text-[#7290AA] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 sm:py-24 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="section-label mb-3">What We Set Up</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1A28] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-syne)" }}>
              Services for {city.city} businesses
            </h2>
            <p className="text-[#4A6278] text-[15px] leading-relaxed"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              The most requested telecom and IT services for companies in and around {city.city}.
              Availability may vary by exact address — call us to confirm what&apos;s ready to go
              at your location.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityServices.map((s) => (
              <StaggerItem key={s.id}>
                <a href={s.standalonePath ?? `/services#${s.id}`}
                  className="card group p-6 flex flex-col gap-4 no-underline bg-white cursor-pointer h-full">
                  <div className="service-icon">{s.icon}</div>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-[#0E1A28] mb-2 group-hover:text-[#1B65A6] transition-colors" style={{ fontFamily: "var(--font-syne)" }}>
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-[#7290AA] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {s.subtitle}
                    </p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-8">
            <a href="/services" className="inline-flex items-center gap-2 text-[#1B65A6] font-semibold text-[14px]" style={{ fontFamily: "var(--font-dm)" }}>
              View all Telecom &amp; IT Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </Reveal>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
