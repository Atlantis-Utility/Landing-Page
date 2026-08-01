import { Reveal } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";

function IconPanel({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-[#E2EDF6] shadow-[0_8px_40px_rgba(27,101,166,0.08)] aspect-[4/3] flex items-center justify-center bg-[#F5F8FC]">
      <div className="absolute inset-0 opacity-[0.5]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(27,101,166,0.14) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
      <div className="absolute w-56 h-56 rounded-full bg-[#1B65A6]/8 blur-3xl" />
      <div className="relative w-28 h-28 rounded-3xl bg-white border border-[#E2EDF6] shadow-lg flex items-center justify-center text-[#1B65A6]">
        <div className="scale-[2]">{icon}</div>
      </div>
    </div>
  );
}

const services = [
  {
    id: "business-voip",
    tag: "Phone Systems", tagCls: "bg-blue-50 text-blue-600 border-blue-200",
    title: "Business VoIP",
    subtitle: "Feature-rich phone systems tailored to your business.",
    body: [
      "Move your business phone system to VoIP and get clearer calls, lower monthly costs, and features that legacy phone lines simply can't match.",
      "We design the system around how your team actually works, not a one-size-fits-all package, and handle setup and training so your team is calling on day one.",
    ],
    features: ["Auto-attendants and call routing", "Voicemail-to-email and mobile apps", "Scales from 2 lines to 200+", "Free number porting"],
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 3.5C5 5.5 7 9 9.5 11.5S16.5 15 18.5 16l-2 2C14 16.5 11 14 8.5 11.5S2 6 1 3.5L4 3.5Z" fill="currentColor" opacity="0.85"/><path d="M15 3h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 3l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
  {
    id: "hosted-voip-pbx",
    tag: "Cloud PBX", tagCls: "bg-violet-50 text-violet-600 border-violet-200",
    title: "Hosted VoIP PBX",
    subtitle: "Cloud-based phone systems with enterprise-grade flexibility.",
    body: [
      "A hosted PBX puts your entire phone system in the cloud, so there is no on-site equipment to maintain and no single point of failure at your office.",
      "Add extensions, change call flows, and manage voicemail from a simple web dashboard, with our team on call if you ever need a hand.",
    ],
    features: ["Advanced call routing and IVR", "Multi-site and remote-worker ready", "99.9% uptime SLA", "Managed and monitored by our team"],
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M7 6V5a4 4 0 0 1 8 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="12" r="2" fill="currentColor" opacity="0.7"/></svg>),
  },
  {
    id: "sip-trunking",
    tag: "SIP", tagCls: "bg-amber-50 text-amber-600 border-amber-200",
    title: "SIP Trunking",
    subtitle: "Keep your current PBX, cut your line costs.",
    body: [
      "If you already have an on-site phone system you like, SIP trunking replaces expensive analog phone lines with internet-based calling, often cutting monthly telecom costs significantly.",
      "We size the trunk to your call volume and configure failover so a lost connection doesn't mean lost calls.",
    ],
    features: ["Works with most existing PBX hardware", "Pay only for the channels you need", "Built-in redundancy and failover", "Local number porting"],
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 11h16M11 3v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="11" cy="11" rx="4" ry="8" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/></svg>),
  },
  {
    id: "high-speed-internet",
    tag: "Internet", tagCls: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "High-Speed Internet",
    subtitle: "Fiber, coax, and hybrid connections built for business.",
    body: [
      "Your VoIP, point-of-sale, and cloud apps all depend on the connection underneath them. We source and install business-grade internet matched to your location and bandwidth needs.",
      "Every install is tested under load before we call it done, not just plugged in and left.",
    ],
    features: ["Fiber, coax, and hybrid options", "Static IPs and business SLAs available", "Sized to your actual usage", "Statewide availability checks"],
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 11c2.5-4 5.5-6 9-6s6.5 2 9 6c-2.5 4-5.5 6-9 6s-6.5-2-9-6Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="11" cy="11" r="2.5" fill="currentColor" opacity="0.8"/></svg>),
  },
  {
    id: "lte-backup-internet",
    tag: "Failover", tagCls: "bg-red-50 text-red-600 border-red-200",
    title: "LTE Backup Internet",
    subtitle: "Automatic failover so an outage never means downtime.",
    body: [
      "When your primary connection drops, an LTE backup switches your business online automatically, no phone calls, no manual restarts, no lost sales.",
      "We configure the failover to cover phones, card readers, and critical systems first, so the business-critical stuff never notices the switch.",
    ],
    features: ["Automatic failover, no manual steps", "Covers VoIP and POS systems", "Multi-carrier LTE options", "Real-time outage alerts"],
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 6.5A10 10 0 0 1 18 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 10A5.5 5.5 0 0 1 15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="14" r="2" fill="currentColor"/></svg>),
  },
  {
    id: "telecom-cost-reduction",
    tag: "Cost Savings", tagCls: "bg-blue-50 text-blue-600 border-blue-200",
    title: "Telecom Cost Reduction",
    subtitle: "Lower your monthly bills without cutting features.",
    body: [
      "Most businesses are overpaying for telecom they don't fully use. We audit your current phone, internet, and IT contracts and identify where you're leaking money.",
      "You get a clear breakdown of what to cut, what to renegotiate, and what to replace, with no obligation to switch providers.",
    ],
    features: ["Free bill and contract audit", "No-obligation recommendations", "Vendor renegotiation support", "Consolidated billing options"],
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M11 7v1.5M11 13.5V15M8.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>),
  },
  {
    id: "structured-cabling",
    tag: "Infrastructure", tagCls: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "Structured Cabling",
    subtitle: "Fiber and CAT6 cabling for every system you run.",
    body: [
      "Reliable networks start with the cabling behind the walls. We design and install structured cabling for data, VoIP, and security systems, labeled and documented so future changes are simple.",
      "Whether it's a new build-out or a retrofit, we plan the runs to support what you need today and what you'll add later.",
    ],
    features: ["CAT6 and fiber runs", "Labeled and documented for future work", "New construction and retrofits", "Passes commercial code inspections"],
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="13" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="8" y="13" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M6 9v4h5M16 9v4h-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    id: "managed-it",
    tag: "MSP", tagCls: "bg-violet-50 text-violet-600 border-violet-200",
    title: "Managed IT Services (MSP)",
    subtitle: "Proactive IT management so problems get fixed before you notice them.",
    body: [
      "We monitor, patch, and maintain your servers, workstations, and network around the clock, so small issues get caught before they become outages.",
      "You get one team responsible for telecom and IT, instead of juggling separate vendors who point fingers when something breaks.",
    ],
    features: ["24/7 monitoring and patch management", "Backup and disaster recovery", "Vendor management on your behalf", "Flat-rate monthly pricing"],
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 19h6M11 16v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M6 10l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    id: "custom-software",
    tag: "Development", tagCls: "bg-amber-50 text-amber-600 border-amber-200",
    title: "Custom Software Development",
    subtitle: "Software built around how your business actually works.",
    body: [
      "Off-the-shelf tools don't always fit. We build custom applications, internal tools, and integrations that connect your existing systems instead of forcing you to work around them.",
      "From a simple internal dashboard to a full customer-facing application, we scope the build around a clear, fixed outcome.",
    ],
    features: ["Custom internal tools and dashboards", "API integrations between existing systems", "Web and mobile-friendly builds", "Ongoing maintenance available"],
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M8 6l-5 5 5 5M14 6l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    id: "help-desk",
    tag: "Support", tagCls: "bg-red-50 text-red-600 border-red-200",
    title: "Help Desk & Desk Support",
    subtitle: "Real people answering, fast, whether it's remote or on-site.",
    body: [
      "When someone's laptop won't connect or a printer stops working, your team needs an answer now, not a ticket that sits for a day.",
      "Our help desk handles remote support for everyday issues and dispatches a local technician on-site when a hands-on fix is needed.",
    ],
    features: ["Remote and on-site desk support", "Fast response times", "New employee setup and onboarding", "Printer, Wi-Fi, and device troubleshooting"],
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="3" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 19h6M11 15v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="11" cy="9" r="1.5" fill="currentColor"/></svg>),
  },
  {
    id: "network-configuration",
    tag: "Networking", tagCls: "bg-blue-50 text-blue-600 border-blue-200",
    title: "Network Configuration & Design",
    subtitle: "Switches, routers, firewalls, and Wi-Fi, set up right the first time.",
    body: [
      "A poorly configured network causes dropped calls, slow apps, and security gaps. We design and configure your switches, routers, firewalls, and wireless access points as one coherent system.",
      "Every network we deploy is documented and hardened against common security risks, not just plugged in with default settings.",
    ],
    features: ["Switch, router, and firewall configuration", "Business Wi-Fi design and coverage mapping", "Network segmentation and security hardening", "Full documentation handed over to you"],
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.4"/><circle cx="18" cy="4" r="2" stroke="currentColor" strokeWidth="1.4"/><circle cx="11" cy="18" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M4 6v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M11 11v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>),
  },
];

export default function ServiceDetail() {
  return (
    <div className="divide-y divide-[#E2EDF6]">
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 sm:py-28 scroll-mt-16 ${idx % 2 === 0 ? "bg-white" : "bg-[#F5F8FC]"}`}
        >
          <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>

              {/* Visual */}
              <Reveal className="relative" y={20}>
                <IconPanel icon={s.icon} />
                <div className="absolute -bottom-4 -right-4 bg-white border border-[#E2EDF6] rounded-2xl px-4 py-3 shadow-md hidden sm:flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot flex-shrink-0" />
                  <span className="text-[12px] font-semibold text-[#0E1A28]" style={{ fontFamily: "var(--font-dm)" }}>
                    Local install and support
                  </span>
                </div>
              </Reveal>

              {/* Content */}
              <Reveal delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${s.tagCls}`}
                    style={{ fontFamily: "var(--font-dm)" }}>
                    {s.tag}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E1A28] tracking-tight leading-tight mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}>
                  {s.title}
                </h2>
                <p className="text-[15px] font-semibold text-[#1B65A6] mb-5"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  {s.subtitle}
                </p>

                <div className="space-y-3 mb-7">
                  {s.body.map((para, i) => (
                    <p key={i} className="text-[14.5px] text-[#4A6278] leading-relaxed"
                      style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {para}
                    </p>
                  ))}
                </div>

                <ul className="space-y-2.5 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EEF4FB] border border-[#C0D2E5] flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="#1B65A6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[13.5px] text-[#3A5068] font-medium" style={{ fontFamily: "var(--font-dm)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <MotionLink href="tel:8056582329"
                    className="inline-flex items-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px] shadow-sm"
                    style={{ fontFamily: "var(--font-dm)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.09.408a12.035 12.035 0 0 0 5.61 5.61c.129.074.307.045.408-.09l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"/>
                    </svg>
                    Call Today
                  </MotionLink>
                  <MotionLink href="/contact"
                    className="inline-flex items-center gap-2 border border-[#C0D2E5] hover:border-[#1B65A6] hover:text-[#1B65A6] text-[#3A5068] font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px]"
                    style={{ fontFamily: "var(--font-dm)" }}>
                    Schedule a Consultation
                  </MotionLink>
                </div>
              </Reveal>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
