import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export default function AboutHero() {
  return (
    <section className="relative pt-28 pb-20 bg-white overflow-hidden">
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
          <span className="text-[#3A5068] font-medium">About Us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#C0D2E5] text-[#1B65A6] text-[13px] font-semibold px-4 py-2 rounded-full mb-6 shadow-sm"
              style={{ fontFamily: "var(--font-dm)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
              California owned & operated
            </div>

            <p className="section-label mb-4">About Atlantis Utility</p>
            <h1 className="text-5xl sm:text-6xl lg:text-[61.5px] font-extrabold text-[#0E1A28] tracking-tight leading-[1.06] mb-6"
              style={{ fontFamily: "var(--font-syne)" }}>
              A local telecom & IT team
              <br />
              <span className="text-[#1B65A6]">that actually picks up the phone.</span>
            </h1>
            <p className="text-[#4A6278] text-[18.5px] leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              Atlantis Utility Inc. is a California-based telecom and IT services provider.
              We design, install, and support the phone systems, internet connections, and
              IT infrastructure that businesses across the state depend on every day, with
              real technicians instead of call centers.
            </p>
          </Reveal>

          <Reveal delay={0.1} y={20}>
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#E2EDF6] shadow-[0_20px_60px_rgba(27,101,166,0.13)]">
              <Image src="/atlantis/managed-it-services.jpg" alt="Atlantis Utility technician supporting a client" fill className="object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
