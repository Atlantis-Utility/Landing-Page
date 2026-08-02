import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";
import { services, IconPanel } from "./data";

export default function ServiceDetail() {
  return (
    <div className="divide-y divide-[#E2EDF6]">
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 sm:py-28 scroll-mt-16 ${idx % 2 === 0 ? "bg-white" : "bg-[#F5F8FC]"}`}
        >
          <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>

              {/* Visual */}
              <Reveal className="relative" y={20}>
                {s.heroImage ? (
                  <div className="rounded-3xl overflow-hidden border border-[#E2EDF6] shadow-[0_8px_40px_rgba(27,101,166,0.08)]">
                    <Image src={s.heroImage} alt={s.title} width={640} height={335} className="w-full h-auto" />
                  </div>
                ) : (
                  <IconPanel icon={s.icon} />
                )}
                <div className="absolute -bottom-4 -right-4 bg-white border border-[#E2EDF6] rounded-2xl px-4 py-3 shadow-md hidden sm:flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot flex-shrink-0" />
                  <span className="text-[12px] font-semibold text-[#0E1A28]" style={{ fontFamily: "var(--font-dm)" }}>
                    Local install and support
                  </span>
                </div>
              </Reveal>

              {/* Content */}
              <Reveal delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${s.tagCls}`}
                    style={{ fontFamily: "var(--font-dm)" }}>
                    {s.tag}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E1A28] tracking-tight leading-tight mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}>
                  {s.title}
                </h2>
                <p className="text-[15px] font-semibold text-[#1B65A6] mb-5"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  {s.subtitle}
                </p>

                <div className="space-y-3 mb-7">
                  {s.body.map((para, i) => (
                    <p key={i} className="text-[14.5px] text-[#4A6278] leading-relaxed"
                      style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {para}
                    </p>
                  ))}
                </div>

                <ul className="space-y-2.5 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EEF4FB] border border-[#C0D2E5] flex items-center justify-center flex-shrink-0">
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
                    className="inline-flex items-center gap-2 border border-[#C0D2E5] hover:border-[#1B65A6] hover:text-[#1B65A6] text-[#3A5068] font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px]"
                    style={{ fontFamily: "var(--font-dm)" }}>
                    Schedule a Consultation
                  </MotionLink>
                </div>
              </Reveal>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
