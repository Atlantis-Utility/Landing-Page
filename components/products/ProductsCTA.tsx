import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";

export default function ProductsCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-[#1B65A6]/10" />
        <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full border border-[#1B65A6]/8" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#EEF4FB] blur-[80px]" />
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, #1B65A6 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      </div>

      <div className="max-w-5xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white border border-[#C0D2E5] text-[#1B65A6] text-[12px] font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm"
              style={{ fontFamily: "var(--font-dm)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
              Local installation team
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1A28] tracking-tight leading-tight mb-5"
              style={{ fontFamily: "var(--font-syne)" }}>
              Ready to upgrade your
              <br />hardware infrastructure?
            </h2>
            <p className="text-[#4A6278] text-[15px] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              Our local California team handles everything from product selection and
              procurement through professional installation and ongoing support. No
              national call centers, just local experts who know your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <MotionLink href="tel:8056582329"
                className="inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-bold px-7 py-4 rounded-xl transition-all text-[14.5px]"
                style={{ fontFamily: "var(--font-dm)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.09.408a12.035 12.035 0 0 0 5.61 5.61c.129.074.307.045.408-.09l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"/>
                </svg>
                (805) 658-2329
              </MotionLink>
              <MotionLink href="/"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#C0D2E5] hover:border-[#1B65A6] hover:text-[#1B65A6] text-[#3A5068] font-semibold px-7 py-4 rounded-xl transition-all text-[14.5px]"
                style={{ fontFamily: "var(--font-dm)" }}>
                Back to home
              </MotionLink>
            </div>
          </Reveal>

          {/* Right: info cards */}
          <Stagger className="space-y-3">
            {[
              {
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13.5 3.5a3.5 3.5 0 0 0-4.6 4.2L3 13.6V17h3.4l5.9-5.9a3.5 3.5 0 0 0 4.2-4.6l-2.5 2.5-2-2 2.5-2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>),
                title: "Professional installation",
                desc: "Every product is installed by our certified local technicians with full testing and handover.",
              },
              {
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.5 4.5a2.5 2.5 0 0 1 2.5-2.5h1.14c.72 0 1.34.49 1.52 1.19l.92 3.68a1.56 1.56 0 0 1-.58 1.63l-1.08.81c-.11.08-.14.23-.08.34a10 10 0 0 0 4.68 4.68c.11.06.26.04.34-.08l.81-1.08a1.56 1.56 0 0 1 1.63-.58l3.68.92c.7.18 1.19.8 1.19 1.52V16a2.5 2.5 0 0 1-2.5 2.5h-1.87C7.13 18.5 1.5 12.87 1.5 5.87V4.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>),
                title: "Free consultation",
                desc: "Not sure which product fits your business? We will assess your needs and recommend the right solution.",
              },
              {
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M10 5v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
                title: "Ongoing support",
                desc: "We stay your partner after install. 24/7 support for all hardware we supply and install.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 bg-[#F5F8FC] border border-[#E2EDF6] rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2EDF6] flex items-center justify-center text-[#1B65A6] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#0E1A28] mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                      {item.title}
                    </div>
                    <div className="text-[13px] text-[#4A6278] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {item.desc}
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