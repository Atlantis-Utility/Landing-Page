import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const areas = [
  { city: "Ventura, CA",      desc: "Our home base and central service hub for telecom and VoIP.",                        home: true  },
  { city: "Oxnard, CA",       desc: "Complete VoIP and internet solutions for businesses of all sizes.",                  home: false },
  { city: "Camarillo, CA",    desc: "Network and internet services for offices, stores, and facilities.",                 home: false },
  { city: "Malibu, CA",       desc: "High-speed telecom for Malibu businesses and remote teams.",                        home: false },
  { city: "Thousand Oaks, CA",desc: "Cutting-edge telecom and IP security for growing companies.",                       home: false },
  { city: "Paso Robles, CA",  desc: "Business communication solutions for wineries, retailers, and tech.",               home: false },
  { city: "Santa Barbara, CA",desc: "New market. Request service availability in Santa Barbara.",                        home: false },
];

export default function Areas() {
  return (
    <section id="areas" className="py-20 sm:py-28 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">

        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-label justify-center mb-3">
            <span>Coverage Area</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1A28] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}>
            Areas We Serve Across<br />California
          </h2>
          <p className="text-[#4A6278] text-[15px] leading-relaxed"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            We proudly serve businesses throughout California, from our Ventura home base
            to coastal and inland communities statewide. Wherever you are, we offer on-site
            installation, remote IT support, and ongoing service.
          </p>
        </Reveal>

        {/* Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {areas.map((a, i) => (
            <StaggerItem key={i}>
              <div
                className={`rounded-2xl p-5 border transition-all duration-200 cursor-default h-full ${
                  a.home
                    ? "bg-[#1B65A6] border-[#134d80] shadow-lg shadow-blue-200/50"
                    : "card bg-white"
                }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.home ? "bg-white/70" : "bg-[#1B65A6]/40"}`} />
                    <h3 className={`text-[14px] font-bold ${a.home ? "text-white" : "text-[#1B65A6]"}`}
                      style={{ fontFamily: "var(--font-syne)" }}>
                      {a.city}
                    </h3>
                  </div>
                  {a.home && (
                    <span className="text-[9px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full border border-white/25">
                      HQ
                    </span>
                  )}
                </div>
                <p className={`text-[12.5px] leading-relaxed ${a.home ? "text-blue-100/90" : "text-[#7290AA]"}`}
                  style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                  {a.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}