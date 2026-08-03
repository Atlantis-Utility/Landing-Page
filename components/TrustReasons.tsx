import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const reasons = [
  {
    title: "Local technicians, fast installs",
    desc:  "Our team is based in California. No waiting weeks for a national vendor to show up.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 0 0-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 0 0-6-6Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="8" r="2" fill="currentColor" opacity="0.7"/></svg>),
  },
  {
    title: "Custom-tailored packages",
    desc:  "We design VoIP and internet solutions around your business size, budget, and workflow.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>),
  },
  {
    title: "Honest pricing, no hidden fees",
    desc:  "What we quote is what you pay. No surprise charges after installation.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6v1.5M10 12.5V14M7.5 8.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>),
  },
  {
    title: "SIP, LTE, and enterprise VoIP experts",
    desc:  "Deep expertise in SIP trunking, LTE backup, and large-scale hosted PBX deployments.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6A9 9 0 0 1 17 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 9.5A5 5 0 0 1 14 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="14" r="2" fill="currentColor"/></svg>),
  },
  {
    title: "24/7 ongoing support",
    desc:  "We stay on call. If your system goes down, we are on it immediately.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M10 5v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
];

export default function TrustReasons() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <Reveal className="lg:sticky lg:top-28">
            <p className="section-label mb-3">Our Difference</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1A28] tracking-tight leading-tight mb-5"
              style={{ fontFamily: "var(--font-syne)" }}>
              The Atlantis Utility
              <br />Advantage
            </h2>
            <p className="text-[#4A6278] text-[15px] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              We are not a national carrier or a big-box reseller. We are a local team
              that knows California businesses and builds solutions that fit.
            </p>

            {/* Mini CTA */}
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px] shadow-sm mb-8"
              style={{ fontFamily: "var(--font-dm)" }}>
              Talk to a local expert
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </Reveal>

          {/* Right: reason cards */}
          <Stagger className="space-y-3">
            {reasons.map((r, i) => (
              <StaggerItem key={i}>
                <div
                  className="group flex items-start gap-4 bg-[#F5F8FC] hover:bg-[#EEF4FB] border border-transparent hover:border-[#C0D2E5] rounded-2xl p-5 transition-all duration-200 cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2EDF6] flex items-center justify-center text-[#1B65A6] flex-shrink-0 shadow-sm group-hover:bg-[#1B65A6] group-hover:text-white group-hover:border-[#1B65A6] transition-all duration-200">
                    {r.icon}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#0E1A28] mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                      {r.title}
                    </div>
                    <div className="text-[13px] text-[#7290AA] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {r.desc}
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