import { Reveal } from "@/components/motion/Reveal";

export default function NewsHero() {
  return (
    <section className="relative pt-28 pb-16 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EEF4FB] blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, #1B65A6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 relative">
        <div className="flex items-center gap-2 text-[13px] text-[#7290AA] mb-8" style={{ fontFamily: "var(--font-dm)" }}>
          <a href="/" className="hover:text-[#1B65A6] transition-colors">Home</a>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[#3A5068] font-medium">News</span>
        </div>

        <Reveal className="max-w-3xl">
          <p className="section-label mb-4">Company Announcements</p>
          <h1 className="text-5xl sm:text-6xl lg:text-[61.5px] font-extrabold text-[#0E1A28] tracking-tight leading-[1.06] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}>
            What's new at
            <br />
            <span className="text-[#1B65A6]">Atlantis Utility.</span>
          </h1>
          <p className="text-[#4A6278] text-[18.5px] leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            Service updates, new offerings, and seasonal tips from our team — a quick way
            to stay current on what's changing at Atlantis Utility.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
