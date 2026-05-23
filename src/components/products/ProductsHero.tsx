const categories = [
  { label: "VoIP PA Systems",           href: "#voip-pa"       },
  { label: "NEC Phone Systems",         href: "#nec-phones"    },
  { label: "Analog to SIP",             href: "#analog-sip"    },
  { label: "Digital to VoIP",           href: "#digital-voip"  },
  { label: "IP Camera Systems",         href: "#ip-cameras"    },
];

export default function ProductsHero() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] text-[#7290AA] mb-8" style={{ fontFamily: "var(--font-dm)" }}>
          <a href="/" className="hover:text-[#1B65A6] transition-colors">Home</a>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[#3A5068] font-medium">Products</span>
        </div>

        <div className="max-w-3xl mb-12">
          <p className="section-label mb-4">Hardware and Technology</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0E1A28] tracking-tight leading-[1.06] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}>
            Professional telecom
            <br />
            <span className="text-[#1B65A6]">hardware we install.</span>
          </h1>
          <p className="text-[#4A6278] text-[17px] leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            We supply and professionally install the hardware that powers Ventura businesses.
            Every product is sourced from industry-leading manufacturers and backed by our
            local installation and support team.
          </p>
        </div>

        {/* Category nav pills */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <a key={c.label} href={c.href}
              className="inline-flex items-center gap-1.5 bg-white border border-[#C0D2E5] hover:bg-[#1B65A6] hover:text-white hover:border-[#1B65A6] text-[#1B65A6] text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-150"
              style={{ fontFamily: "var(--font-dm)" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}