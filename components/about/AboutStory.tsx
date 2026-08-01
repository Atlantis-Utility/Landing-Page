import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";

const stats = [
  { value: "24/7", label: "Support" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "15+", label: "Years local" },
  { value: "500+", label: "Businesses served" },
];

export default function AboutStory() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: copy */}
          <Reveal>
            <p className="section-label mb-3">Our Story</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1A28] tracking-tight leading-tight mb-5"
              style={{ fontFamily: "var(--font-syne)" }}>
              Built for California
              <br />businesses, not call centers.
            </h2>
            <div className="space-y-4 text-[#4A6278] text-[15px] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              <p>
                Atlantis Utility started with a simple observation: business owners were tired of
                being routed through national carriers, offshore support queues, and reseller
                middlemen every time their phones or internet went down. We built a different kind
                of telecom and IT company — one where the person who designs your system is the
                same person who shows up to install it and answers when you call for help.
              </p>
              <p>
                Today we support businesses across California with everything from VoIP phone
                systems and business internet to fully managed IT, custom software, and network
                infrastructure. Whether a client needs a single hosted phone line or a complete
                overhaul of their network, cabling, and help desk support, our approach stays the
                same: understand the business first, then build the right solution around it.
              </p>
              <p>
                We are not the biggest telecom provider in the state, and that is intentional.
                Staying local and hands-on means faster installs, technicians who know your setup
                by name, and support that does not disappear after the contract is signed.
              </p>
            </div>
          </Reveal>

          {/* Right: stats + mission card */}
          <Reveal delay={0.1} className="relative">
            <div className="bg-[#F5F8FC] border border-[#E2EDF6] rounded-3xl p-7 sm:p-8">
              <div className="w-12 h-12 rounded-2xl bg-[#1B65A6] flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2 A9 9 0 0 1 20 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <circle cx="11" cy="11" r="3" fill="white"/>
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#0E1A28] mb-3" style={{ fontFamily: "var(--font-syne)" }}>
                Our mission
              </h3>
              <p className="text-[#4A6278] text-[14.5px] leading-relaxed mb-8" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                Keep California businesses connected and running with honest pricing, fast local
                support, and technology that is actually built around how they work &mdash; not a
                one-size-fits-all package.
              </p>

              <Stagger className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <StaggerItem key={s.label}>
                    <div className="bg-white border border-[#E2EDF6] rounded-2xl p-4 text-center shadow-sm">
                      <div className="text-[22px] sm:text-[24px] font-extrabold text-[#1B65A6] leading-none mb-1"
                        style={{ fontFamily: "var(--font-syne)" }}>
                        <Counter value={s.value} />
                      </div>
                      <div className="text-[11px] text-[#7290AA] font-medium" style={{ fontFamily: "var(--font-dm)" }}>
                        {s.label}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
