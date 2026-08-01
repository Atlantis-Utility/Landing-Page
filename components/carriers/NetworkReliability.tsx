import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";

const layers = [
  { name: "Fiber Backbone",   uptime: 99.9 },
  { name: "LTE Failover",     uptime: 99.5 },
  { name: "Voice & SIP",      uptime: 99.7 },
  { name: "Edge Equipment",   uptime: 99.2 },
];

const principles = [
  { title: "Redundant paths",      desc: "Multiple routes for data and voice traffic, so one failure point doesn't mean a business-wide outage." },
  { title: "Automatic failover",   desc: "Backup connections engage without manual intervention the moment a primary path drops." },
  { title: "Proactive monitoring", desc: "Network health is watched continuously so issues are caught before customers notice them." },
];

export default function NetworkReliability() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label justify-center mb-3">
            <span>Built for Reliability</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1A28] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}>
            How the layers work together
          </h2>
          <p className="text-[#4A6278] text-[15px] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            Every service we install draws on these network layers. None of them are meant
            to be perfect alone — together, they're designed so your business stays
            connected even when one layer has a bad day.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Uptime bars */}
          <Reveal className="card p-7 bg-white">
            <div className="text-[13px] font-bold uppercase tracking-widest text-[#7290AA] mb-6" style={{ fontFamily: "var(--font-dm)" }}>
              Representative Layer Reliability
            </div>
            <Stagger className="space-y-5">
              {layers.map((l) => (
                <StaggerItem key={l.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-[13.5px] text-[#3A5068] font-medium" style={{ fontFamily: "var(--font-dm)" }}>
                        {l.name}
                      </span>
                    </div>
                    <span className="text-[13px] font-bold text-[#1B65A6]" style={{ fontFamily: "var(--font-syne)" }}>
                      <Counter value={`${l.uptime}%`} />
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#EEF4FB] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-[#1B65A6]" style={{ width: `${l.uptime}%` }} />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <p className="text-[11.5px] text-[#7290AA] mt-6 leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              Figures shown are representative targets for a well-designed, redundant
              installation and vary by site and service mix.
            </p>
          </Reveal>

          {/* Principles */}
          <Stagger className="space-y-4">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="card p-6 bg-white flex items-start gap-4">
                  <div className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0E1A28] mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                      {p.title}
                    </h3>
                    <p className="text-[13.5px] text-[#7290AA] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

        </div>
      </div>
    </section>
  );
}
