import { Reveal } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.09.408a12.035 12.035 0 0 0 5.61 5.61c.129.074.307.045.408-.09l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
  </svg>
);

export default function ThankYouContent() {
  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-28 bg-white overflow-hidden min-h-[80vh] flex items-center">
      {/* Background geometry */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EEF4FB] blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#EEF4FB] blur-[80px] opacity-40 translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, #1B65A6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="max-w-4xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 relative w-full">
        <Reveal className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-2xl bg-[#EEF4FB] flex items-center justify-center mb-8">
            <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#1B65A6" strokeWidth="2" />
              <path d="M8.5 14.5l3.5 3.5 7-8" stroke="#1B65A6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 bg-white border border-[#C0D2E5] text-[#1B65A6] text-[12px] font-semibold px-4 py-2 rounded-full shadow-sm mb-6"
            style={{ fontFamily: "var(--font-dm)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
            Submission received
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E1A28] tracking-tight leading-[1.08] mb-5"
            style={{ fontFamily: "var(--font-syne)" }}>
            Thanks &mdash; we&apos;ll be in touch.
          </h1>
          <p className="text-[#4A6278] text-[16px] leading-relaxed max-w-lg mb-10"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            We received your request and a member of our California team will follow up within
            one business day. If it&apos;s urgent, feel free to call us directly &mdash; a real
            person always picks up.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <MotionLink href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-[14px] shadow-sm"
              style={{ fontFamily: "var(--font-dm)" }}>
              Back to Home
            </MotionLink>
            <MotionLink href="tel:8056582329"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#C0D2E5] hover:border-[#1B65A6] hover:text-[#1B65A6] text-[#3A5068] font-semibold px-7 py-3.5 rounded-xl transition-all text-[14px]"
              style={{ fontFamily: "var(--font-dm)" }}>
              <PhoneIcon />
              (805) 658-2329
            </MotionLink>
          </div>

          <div className="flex items-center gap-6 text-[13.5px]" style={{ fontFamily: "var(--font-dm)" }}>
            <a href="/services" className="text-[#1B65A6] font-semibold hover:text-[#134d80] transition-colors inline-flex items-center gap-1.5">
              Explore our services
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <span className="text-[#C0D2E5]">|</span>
            <a href="/blog" className="text-[#1B65A6] font-semibold hover:text-[#134d80] transition-colors inline-flex items-center gap-1.5">
              Read our blog
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
