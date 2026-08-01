import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const products = [
  { title: "VoIP PA Systems",          desc: "Clear paging and emergency broadcasts with VoIP-powered PA solutions.", tag: "Audio",          tagCls: "bg-violet-50 text-violet-600 border-violet-200" },
  { title: "NEC & Yealink Phones",     desc: "Feature-rich VoIP desk phones built for speed, voice quality, and scale.", tag: "Hardware",      tagCls: "bg-blue-50 text-blue-600 border-blue-200" },
  { title: "Analog to SIP Conversions",desc: "Modernize analog infrastructure to leverage SIP-based telecom.", tag: "Migration",         tagCls: "bg-amber-50 text-amber-600 border-amber-200" },
  { title: "Digital to VoIP Conversions",desc:"Transition legacy digital phone systems to advanced VoIP technology.", tag: "Migration",      tagCls: "bg-amber-50 text-amber-600 border-amber-200" },
  { title: "IP Camera Systems",        desc: "Professional-grade surveillance for business security and compliance.", tag: "Security",       tagCls: "bg-red-50 text-red-600 border-red-200" },
  { title: "Structured Cabling",       desc: "Foundational cabling for all data, internet, and telecom systems.", tag: "Infrastructure",  tagCls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
];

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">

        {/* Header split */}
        <Reveal className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-14">
          <div>
            <p className="section-label mb-3">Hardware and Technology</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1A28] tracking-tight leading-tight mb-4"
              style={{ fontFamily: "var(--font-syne)" }}>
              Hardware and Technology
              <br />Products We Install
            </h2>
            <p className="text-[#4A6278] text-[15px] leading-relaxed"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              We supply and professionally install the hardware that powers California businesses,
              from VoIP phones to security systems. Performance, reliability, peace of mind.
            </p>
          </div>

          {/* Visual */}
          <div className="hidden lg:block">
            <div className="bg-[#F5F8FC] rounded-3xl p-6 border border-[#E2EDF6]">
              <div className="grid grid-cols-2 gap-3">
                {["VoIP Phones", "PA Systems", "IP Cameras", "SIP Gateways", "CAT6 Cabling", "Analog Adapters"].map((item, i) => (
                  <div key={item} className="bg-white rounded-xl px-4 py-3 flex items-center gap-2.5 border border-[#E2EDF6] shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#1B65A6] flex-shrink-0" style={{ opacity: 0.35 + i * 0.12 }} />
                    <span className="text-[12.5px] font-medium text-[#3A5068]" style={{ fontFamily: "var(--font-dm)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Product grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <StaggerItem key={i}>
              <div className="card p-6 cursor-default bg-white h-full">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[15px] font-bold text-[#0E1A28] leading-snug"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    {p.title}
                  </h3>
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ${p.tagCls}`}
                    style={{ fontFamily: "var(--font-dm)" }}>
                    {p.tag}
                  </span>
                </div>
                <p className="text-[13px] text-[#7290AA] leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                  {p.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10">
          <a href="/products"
            className="inline-flex items-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-[14px] shadow-sm"
            style={{ fontFamily: "var(--font-dm)" }}>
            Learn about our products
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </Reveal>

      </div>
    </section>
  );
}