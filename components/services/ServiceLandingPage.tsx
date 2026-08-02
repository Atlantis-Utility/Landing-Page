import Image from "next/image";
import Navbar from "@/components/Navbar";
import { CTABanner, Footer } from "@/components/CtaFooter";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";
import { services, getService, IconPanel } from "./data";

export function generateServiceMetadata(id: string) {
  const service = getService(id);
  if (!service) return {};
  return {
    title: `${service.title} | Atlantis Utility Inc`,
    description: service.subtitle + " " + service.body[0],
    alternates: { canonical: services.find((s) => s.id === id)?.standalonePath },
  };
}

export default function ServiceLandingPage({ id }: { id: string }) {
  const service = getService(id);
  if (!service) return null;

  const related = services.filter((s) => s.id !== id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EEF4FB] blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "radial-gradient(circle, #1B65A6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        </div>

        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 relative">
          <div className={service.heroImage ? "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" : ""}>
            <Reveal>
              <div className="flex items-center gap-2 text-[12px] text-[#7290AA] mb-8" style={{ fontFamily: "var(--font-dm)" }}>
                <a href="/" className="hover:text-[#1B65A6] transition-colors">Home</a>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <a href="/services" className="hover:text-[#1B65A6] transition-colors">Services</a>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-[#3A5068] font-medium">{service.title}</span>
              </div>

              <span className={`inline-flex items-center text-[11px] font-bold px-3 py-1.5 rounded-full border mb-5 ${service.tagCls}`}
                style={{ fontFamily: "var(--font-dm)" }}>
                {service.tag}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0E1A28] tracking-tight leading-[1.08] mb-5"
                style={{ fontFamily: "var(--font-syne)" }}>
                {service.title}
              </h1>
              <p className="text-[#1B65A6] text-[17px] font-semibold mb-4" style={{ fontFamily: "var(--font-dm)" }}>
                {service.subtitle}
              </p>
              <p className="text-[#4A6278] text-[16px] leading-relaxed max-w-2xl"
                style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                {service.body[0]}
              </p>
            </Reveal>

            {service.heroImage && (
              <Reveal delay={0.1} y={20}>
                <div className="rounded-3xl overflow-hidden border border-[#E2EDF6] shadow-[0_20px_60px_rgba(27,101,166,0.13)]">
                  <Image src={service.heroImage} alt={service.title} width={640} height={335} className="w-full h-auto" priority />
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="py-16 sm:py-20 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
          <div className={service.heroImage ? "max-w-2xl mx-auto text-center lg:text-left" : "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"}>

            {!service.heroImage && (
              <Reveal className="relative" y={20}>
                <IconPanel icon={service.icon} />
                <div className="absolute -bottom-4 -right-4 bg-white border border-[#E2EDF6] rounded-2xl px-4 py-3 shadow-md hidden sm:flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot flex-shrink-0" />
                  <span className="text-[12px] font-semibold text-[#0E1A28]" style={{ fontFamily: "var(--font-dm)" }}>
                    Local install and support
                  </span>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.1}>
              <div className="space-y-3 mb-7">
                {(service.heroImage ? service.body.slice(1) : service.body).map((para, i) => (
                  <p key={i} className="text-[14.5px] text-[#4A6278] leading-relaxed"
                    style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                    {para}
                  </p>
                ))}
              </div>

              <ul className="space-y-2.5 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white border border-[#C0D2E5] flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#1B65A6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[13.5px] text-[#3A5068] font-medium" style={{ fontFamily: "var(--font-dm)" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

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
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
          <Reveal className="mb-8">
            <p className="section-label mb-3">Explore More</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E1A28] tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
              Other services businesses pair with this
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <StaggerItem key={r.id}>
                <a href={r.standalonePath ?? `/services#${r.id}`}
                  className="card group p-6 flex flex-col gap-4 no-underline bg-white cursor-pointer h-full">
                  <div className="service-icon">{r.icon}</div>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-[#0E1A28] mb-2 group-hover:text-[#1B65A6] transition-colors" style={{ fontFamily: "var(--font-syne)" }}>
                      {r.title}
                    </h3>
                    <p className="text-[13px] text-[#7290AA] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {r.subtitle}
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
