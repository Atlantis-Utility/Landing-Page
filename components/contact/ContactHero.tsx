import { Reveal } from "@/components/motion/Reveal";

export default function ContactHero() {
  return (
    <section className="relative pt-28 pb-16 bg-white overflow-hidden">
      {/* Background geometry */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EEF4FB] blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#EEF4FB] blur-[80px] opacity-40 translate-y-1/2 -translate-x-1/3" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, #1B65A6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] text-[#7290AA] mb-8" style={{ fontFamily: "var(--font-dm)" }}>
          <a href="/" className="hover:text-[#1B65A6] transition-colors">Home</a>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[#3A5068] font-medium">Contact</span>
        </div>

        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white border border-[#C0D2E5] text-[#1B65A6] text-[13px] font-semibold px-4 py-2 rounded-full mb-6 shadow-sm"
            style={{ fontFamily: "var(--font-dm)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
            We usually reply within one business day
          </div>

          <p className="section-label mb-4">Get In Touch</p>
          <h1 className="text-5xl sm:text-6xl lg:text-[61.5px] font-extrabold text-[#0E1A28] tracking-tight leading-[1.06] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}>
            Let&apos;s talk about
            <br />
            <span className="text-[#1B65A6]">your business.</span>
          </h1>
          <p className="text-[#4A6278] text-[18.5px] leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            Whether you need a quote for VoIP and internet, help with managed IT, or just have a
            question, our California-based team is ready to help. Call us directly or send a
            message below.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
