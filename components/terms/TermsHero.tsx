import { Reveal } from "@/components/motion/Reveal";

export default function TermsHero() {
  return (
    <section className="relative pt-28 pb-16 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EEF4FB] blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, #1B65A6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="max-w-4xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 relative">
        <Reveal>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-[#7290AA] mb-8" style={{ fontFamily: "var(--font-dm)" }}>
            <a href="/" className="hover:text-[#1B65A6] transition-colors">Home</a>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-[#3A5068] font-medium">Terms and Conditions</span>
          </div>

          <p className="section-label mb-4">Legal</p>
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#0E1A28] tracking-tight leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-syne)" }}>
            Terms and Conditions
          </h1>
          <p className="text-[#4A6278] text-[15px] leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            Services &amp; Terms of Agreement for Atlantis Utility Inc.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
