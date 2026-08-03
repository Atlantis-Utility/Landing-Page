import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const reasons = [
  {
    title: "Local technicians, fast installs",
    desc: "Our team is based in California. No waiting weeks for a national vendor to send someone out.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 0 0-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 0 0-6-6Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="8" r="2" fill="currentColor" opacity="0.7"/></svg>),
  },
  {
    title: "Custom-tailored solutions",
    desc: "We design VoIP, internet, and IT solutions around your business size, budget, and workflow, not a generic bundle.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>),
  },
  {
    title: "Honest pricing, no hidden fees",
    desc: "What we quote is what you pay. No surprise charges after installation or buried contract terms.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6v1.5M10 12.5V14M7.5 8.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>),
  },
  {
    title: "Telecom and IT under one roof",
    desc: "VoIP, internet, and cabling alongside managed IT, custom software, and help desk support — one team, one point of contact.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6A9 9 0 0 1 17 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 9.5A5 5 0 0 1 14 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="14" r="2" fill="currentColor"/></svg>),
  },
  {
    title: "24/7 ongoing support",
    desc: "We stay on call. If your phones, network, or systems go down, we are on it immediately, not on a ticket queue.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M10 5v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: "No call centers, ever",
    desc: "You will always be able to reach a real person who understands your setup, not an offshore support script.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.5 4.5a2.5 2.5 0 0 1 2.5-2.5h1.14c.72 0 1.34.49 1.52 1.19l.92 3.68a1.56 1.56 0 0 1-.58 1.63l-1.08.81c-.11.08-.14.23-.08.34a10 10 0 0 0 4.68 4.68c.11.06.26.04.34-.08l.81-1.08a1.56 1.56 0 0 1 1.63-.58l3.68.92c.7.18 1.19.8 1.19 1.52V16a2.5 2.5 0 0 1-2.5 2.5h-1.87C7.13 18.5 1.5 12.87 1.5 5.87V4.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>),
  },
];

export default function AboutDifference() {
  return (
    <section className="py-20 sm:py-28 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">

        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label justify-center mb-3"><span>Why Businesses Choose Us</span></p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0E1A28] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}>
            The Atlantis Utility difference
          </h2>
          <p className="text-[#4A6278] text-[16.5px] leading-relaxed"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            We are not a national carrier or a big-box reseller. We are a local team that knows
            California businesses and builds solutions that actually fit.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <StaggerItem key={i}>
              <div className="card p-6 bg-white h-full">
                <div className="service-icon mb-5">{r.icon}</div>
                <h3 className="text-[16.5px] font-bold text-[#0E1A28] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                  {r.title}
                </h3>
                <p className="text-[15px] text-[#7290AA] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                  {r.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
