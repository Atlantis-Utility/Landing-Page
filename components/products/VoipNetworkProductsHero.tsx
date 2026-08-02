import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const categories = [
  { label: "VoIP Phones",               href: "#nec-phones"    },
  { label: "SIP Gateways",              href: "#analog-sip"    },
  { label: "PA & Paging Systems",       href: "#voip-pa"       },
  { label: "IP Cameras",                href: "#ip-cameras"    },
  { label: "Structured Cabling",        href: "#structured-cabling" },
];

export default function VoipNetworkProductsHero() {
  return (
    <section className="relative pt-28 pb-20 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EEF4FB] blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#EEF4FB] blur-[80px] opacity-40 translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, #1B65A6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] text-[#7290AA] mb-8" style={{ fontFamily: "var(--font-dm)" }}>
          <a href="/" className="hover:text-[#1B65A6] transition-colors">Home</a>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[#3A5068] font-medium">VoIP &amp; Network Products</span>
        </div>

        <Reveal className="max-w-3xl mb-12">
          <p className="section-label mb-4">VoIP &amp; Network Hardware</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0E1A28] tracking-tight leading-[1.06] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}>
            The hardware behind
            <br />
            <span className="text-[#1B65A6]">every network we build.</span>
          </h1>
          <p className="text-[#4A6278] text-[17px] leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            From VoIP handsets and SIP gateways to the cabling and cameras that tie a network
            together, we source, configure, and install every piece of hardware behind your
            phone and network systems.
          </p>
        </Reveal>

        {/* Category nav pills */}
        <Stagger className="flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <StaggerItem key={c.label}>
              <a href={c.href}
                className="inline-flex items-center gap-1.5 bg-white border border-[#C0D2E5] hover:bg-[#1B65A6] hover:text-white hover:border-[#1B65A6] text-[#1B65A6] text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-150"
                style={{ fontFamily: "var(--font-dm)" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {c.label}
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
