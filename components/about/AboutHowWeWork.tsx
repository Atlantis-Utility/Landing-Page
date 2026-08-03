import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";

const steps = [
  {
    step: "01",
    title: "Understand your business",
    desc: "We start with a conversation, not a sales pitch. We learn how your team communicates, what your network looks like today, and where things are breaking down.",
  },
  {
    step: "02",
    title: "Design a tailored solution",
    desc: "We recommend the right mix of VoIP, internet, cabling, or managed IT for your size and budget, and walk you through it in plain language before anything is installed.",
  },
  {
    step: "03",
    title: "Install with minimal disruption",
    desc: "Our local technicians handle installation and configuration, scheduled around your business hours so your team can keep working.",
  },
  {
    step: "04",
    title: "Support for the life of the system",
    desc: "Once you are live, we stay on call. Ongoing monitoring, maintenance, and 24/7 support are part of the relationship, not an upsell.",
  },
];

const audiences = [
  {
    title: "Small & growing businesses",
    desc: "Retail, professional services, and local offices that need reliable phones and internet without an in-house IT department.",
  },
  {
    title: "Multi-location companies",
    desc: "Businesses with more than one site across California that need consistent phone systems, network design, and support everywhere they operate.",
  },
  {
    title: "Organizations outgrowing DIY IT",
    desc: "Teams that have relied on ad-hoc tech support and are ready for managed IT, structured cabling, and a real network design.",
  },
];

export default function AboutHowWeWork() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">

        {/* How we work */}
        <Reveal className="max-w-2xl mb-14">
          <p className="section-label mb-3">How We Work</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0E1A28] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}>
            From first call to
            <br />ongoing support.
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {steps.map((s) => (
            <StaggerItem key={s.step}>
              <div className="card p-6 bg-white h-full">
                <div className="text-[31px] font-extrabold text-[#C0D2E5] mb-4 leading-none" style={{ fontFamily: "var(--font-syne)" }}>
                  {s.step}
                </div>
                <h3 className="text-[16px] font-bold text-[#0E1A28] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                  {s.title}
                </h3>
                <p className="text-[14.5px] text-[#7290AA] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Who we serve */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:sticky lg:top-28">
            <p className="section-label mb-3">Who We Serve</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0E1A28] tracking-tight leading-tight mb-5"
              style={{ fontFamily: "var(--font-syne)" }}>
              Businesses across
              <br />California, of every size.
            </h2>
            <p className="text-[#4A6278] text-[16.5px] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              From a single storefront to a multi-location operation, we build telecom and IT
              foundations that scale with your business instead of holding it back.
            </p>
            <MotionLink href="/contact"
              className="inline-flex items-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-[15.5px] shadow-sm"
              style={{ fontFamily: "var(--font-dm)" }}>
              Talk to our team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MotionLink>
          </Reveal>

          <Stagger className="space-y-3">
            {audiences.map((a, i) => (
              <StaggerItem key={i}>
                <div
                  className="flex items-start gap-4 bg-[#F5F8FC] border border-transparent rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2EDF6] flex items-center justify-center text-[#1B65A6] flex-shrink-0 shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M3 15c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[15.5px] font-bold text-[#0E1A28] mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                      {a.title}
                    </div>
                    <div className="text-[14.5px] text-[#7290AA] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {a.desc}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

      </div>
    </section>
  );
}
