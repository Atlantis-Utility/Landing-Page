import { Reveal } from "@/components/motion/Reveal";

function FiberIllustration() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="440" height="280" rx="20" fill="#F5F8FC" stroke="#E2EDF6" strokeWidth="1.5" />
      {/* Central node */}
      <circle cx="240" cy="160" r="40" fill="#1B65A6" opacity="0.10" />
      <circle cx="240" cy="160" r="26" fill="#1B65A6" opacity="0.18" />
      <circle cx="240" cy="160" r="15" fill="#1B65A6" />
      <path d="M234 160h12M240 154v12" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      {/* Ring nodes */}
      {[[110,90],[370,90],[400,200],[240,270],[80,200]].map(([x, y], i) => (
        <g key={i}>
          <line x1="240" y1="160" x2={x} y2={y} stroke="#1B65A6" strokeWidth="1.4" strokeDasharray="5 3" opacity="0.35" />
          <circle cx={x} cy={y} r="9" fill="white" stroke="#C0D2E5" strokeWidth="1.4" />
          <circle cx={x} cy={y} r="4" fill="#22C55E" opacity="0.7" />
        </g>
      ))}
      <rect x="168" y="238" width="144" height="34" rx="9" fill="white" stroke="#C0D2E5" strokeWidth="1" />
      <text x="240" y="259" textAnchor="middle" fontSize="10" fill="#1B65A6" fontFamily="var(--font-syne)" fontWeight="700">Redundant Fiber Ring</text>
    </svg>
  );
}

function LTEIllustration() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="440" height="280" rx="20" fill="#F5F8FC" stroke="#E2EDF6" strokeWidth="1.5" />
      {/* Tower */}
      <g transform="translate(210,60)">
        <path d="M30 0l30 140h-60L30 0Z" fill="none" stroke="#1B65A6" strokeWidth="2" opacity="0.5" />
        <line x1="14" y1="46" x2="46" y2="46" stroke="#1B65A6" strokeWidth="1.6" opacity="0.4" />
        <line x1="8" y1="90" x2="52" y2="90" stroke="#1B65A6" strokeWidth="1.6" opacity="0.4" />
        <circle cx="30" cy="0" r="6" fill="#1B65A6" />
        {/* Signal arcs */}
        <path d="M12 -8a26 26 0 0 1 36 0" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <path d="M2 -18a40 40 0 0 1 56 0" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </g>
      {/* Devices receiving signal */}
      {[[90,220],[400,220],[240,260]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x - 16},${y - 16})`}>
          <rect width="32" height="32" rx="8" fill="white" stroke="#C0D2E5" strokeWidth="1.4" />
          <circle cx="16" cy="16" r="6" fill="#1B65A6" opacity="0.5" />
        </g>
      ))}
      <rect x="152" y="18" width="176" height="30" rx="9" fill="white" stroke="#C0D2E5" strokeWidth="1" />
      <text x="240" y="38" textAnchor="middle" fontSize="10" fill="#1B65A6" fontFamily="var(--font-syne)" fontWeight="700">Automatic Wireless Failover</text>
    </svg>
  );
}

function VoiceIllustration() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="440" height="280" rx="20" fill="#F5F8FC" stroke="#E2EDF6" strokeWidth="1.5" />
      {/* Waveform */}
      <g transform="translate(90,130)">
        {[6, 18, 30, 14, 40, 22, 10, 32, 20, 8, 26, 16, 36, 12, 24].map((h, i) => (
          <rect key={i} x={i * 20} y={30 - h / 2} width="8" height={h} rx="4" fill="#1B65A6" opacity={0.25 + (i % 5) * 0.12} />
        ))}
      </g>
      {/* Endpoints */}
      <g transform="translate(60,60)">
        <rect width="60" height="60" rx="14" fill="white" stroke="#C0D2E5" strokeWidth="1.4" />
        <path d="M18 20a3 3 0 0 1 3-3h4a2 2 0 0 1 2 1.6l1.4 5.4a2.3 2.3 0 0 1-.9 2.4l-1.6 1.2c1.6 3.4 4.3 6.1 7.7 7.7l1.2-1.6a2.3 2.3 0 0 1 2.4-.9l5.4 1.4a2 2 0 0 1 1.6 2v4a3 3 0 0 1-3 3C25.6 43.2 18 35.6 18 20Z" fill="#1B65A6" opacity="0.6" />
      </g>
      <g transform="translate(360,60)">
        <rect width="60" height="60" rx="14" fill="white" stroke="#C0D2E5" strokeWidth="1.4" />
        <path d="M18 20a3 3 0 0 1 3-3h4a2 2 0 0 1 2 1.6l1.4 5.4a2.3 2.3 0 0 1-.9 2.4l-1.6 1.2c1.6 3.4 4.3 6.1 7.7 7.7l1.2-1.6a2.3 2.3 0 0 1 2.4-.9l5.4 1.4a2 2 0 0 1 1.6 2v4a3 3 0 0 1-3 3C25.6 43.2 18 35.6 18 20Z" fill="#1B65A6" opacity="0.6" />
      </g>
      <rect x="150" y="230" width="180" height="34" rx="9" fill="white" stroke="#C0D2E5" strokeWidth="1" />
      <text x="240" y="251" textAnchor="middle" fontSize="10" fill="#1B65A6" fontFamily="var(--font-syne)" fontWeight="700">Carrier-Grade Voice Routing</text>
    </svg>
  );
}

const categories = [
  {
    id: "fiber-backbone",
    tag: "Wired Infrastructure",
    tagCls: "bg-blue-50 text-blue-600 border-blue-200",
    title: "Tier-1 Fiber Backbone",
    subtitle: "The wired foundation everything else runs on",
    body: [
      "Every internet and VoIP service we deliver rides on top of Tier-1 fiber backbone connections — the same class of core infrastructure that major carriers use to move traffic between cities and data centers.",
      "We design each installation around redundant fiber paths where available, so a single fiber cut or equipment fault at one point on the network doesn't take your business offline.",
    ],
    features: ["Redundant ring topology where available", "Low-latency routing for VoIP and video", "Scales from single offices to multi-site rollouts", "Monitored 24/7 for faults and congestion"],
    illustration: <FiberIllustration />,
    flip: false,
  },
  {
    id: "lte-failover",
    tag: "Wireless Backup",
    tagCls: "bg-amber-50 text-amber-600 border-amber-200",
    title: "Nationwide LTE Failover",
    subtitle: "A second path when the primary line goes down",
    body: [
      "Wired connections are the backbone, but no single line is bulletproof. That's why our internet installs can include nationwide LTE wireless failover — an independent path that keeps calls and critical systems online during a fiber cut, outage, or construction accident.",
      "Failover is automatic. If we detect your primary connection drop, traffic shifts to the wireless path without anyone needing to touch a switch.",
    ],
    features: ["Automatic failover, no manual switch required", "Independent wireless carrier path", "Ideal for point-of-sale, VoIP, and remote sites", "Especially valuable during wildfire and storm season"],
    illustration: <LTEIllustration />,
    flip: true,
  },
  {
    id: "voice-sip",
    tag: "Voice Infrastructure",
    tagCls: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "Voice & SIP Carriers",
    subtitle: "Call quality and reliability that carries your business",
    body: [
      "Behind every VoIP extension and SIP trunk we provision is a carrier-grade voice network built for call quality, uptime, and clean number routing — not a consumer-grade internet phone app.",
      "We work with underlying voice and SIP carrier partners chosen for call clarity, E911 compliance, and reliable number porting, so switching to VoIP never means compromising on how your business sounds on the phone.",
    ],
    features: ["HD voice quality across extensions", "E911-compliant call routing", "Reliable number porting from legacy carriers", "Built-in redundancy for inbound call handling"],
    illustration: <VoiceIllustration />,
    flip: false,
  },
];

export default function CarrierCategories() {
  return (
    <div className="divide-y divide-[#E2EDF6]">
      {categories.map((c, idx) => (
        <section key={c.id} id={c.id} className={`py-20 sm:py-28 ${idx % 2 === 0 ? "bg-white" : "bg-[#F5F8FC]"}`}>
          <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${c.flip ? "lg:[&>*:first-child]:order-2" : ""}`}>

              {/* Illustration */}
              <Reveal className="relative" y={20}>
                <div className="rounded-3xl overflow-hidden border border-[#E2EDF6] shadow-[0_8px_40px_rgba(27,101,166,0.08)] aspect-[4/3] flex items-center justify-center bg-[#F5F8FC]">
                  {c.illustration}
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white border border-[#E2EDF6] rounded-2xl px-4 py-3 shadow-md hidden sm:flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot flex-shrink-0" />
                  <span className="text-[13px] font-semibold text-[#0E1A28]" style={{ fontFamily: "var(--font-dm)" }}>
                    Actively monitored
                  </span>
                </div>
              </Reveal>

              {/* Content */}
              <Reveal delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[12px] font-bold px-3 py-1.5 rounded-full border ${c.tagCls}`} style={{ fontFamily: "var(--font-dm)" }}>
                    {c.tag}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[37.5px] font-extrabold text-[#0E1A28] tracking-tight leading-tight mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}>
                  {c.title}
                </h2>
                <p className="text-[16.5px] font-semibold text-[#1B65A6] mb-5" style={{ fontFamily: "var(--font-dm)" }}>
                  {c.subtitle}
                </p>

                <div className="space-y-3 mb-7">
                  {c.body.map((para, i) => (
                    <p key={i} className="text-[16px] text-[#4A6278] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {para}
                    </p>
                  ))}
                </div>

                <ul className="space-y-2.5">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EEF4FB] border border-[#C0D2E5] flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="#1B65A6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[15px] text-[#3A5068] font-medium" style={{ fontFamily: "var(--font-dm)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
