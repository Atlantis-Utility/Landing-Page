import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const services = [
  {
    title: "Business VoIP",
    desc: "Feature-rich phone systems tailored to your business size and needs.",
    href: "/services#business-voip",
    image: "/atlantis/business-voip.jpg",
    icon: (<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M4 3.5C5 5.5 7 9 9.5 11.5S16.5 15 18.5 16l-2 2C14 16.5 11 14 8.5 11.5S2 6 1 3.5L4 3.5Z" fill="currentColor" opacity="0.85"/><path d="M15 3h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 3l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
  {
    title: "Hosted VoIP PBX",
    desc: "Cloud-based phone systems with advanced call routing and flexibility.",
    href: "/services#hosted-voip-pbx",
    image: "/atlantis/hosted-pbx.jpg",
    icon: (<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><rect x="2" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M7 6V5a4 4 0 0 1 8 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="12" r="2" fill="currentColor" opacity="0.7"/></svg>),
  },
  {
    title: "SIP Trunking",
    desc: "Use your current PBX with an affordable, internet-powered calling solution.",
    href: "/services#sip-trunking",
    image: "/atlantis/sip-trunking.jpg",
    icon: (<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M3 11h16M11 3v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="11" cy="11" rx="4" ry="8" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/></svg>),
  },
  {
    title: "High-Speed Internet",
    desc: "Fiber, coax, and hybrid business internet built for speed and reliability.",
    href: "/services#high-speed-internet",
    image: "/atlantis/high-speed-internet.jpg",
    icon: (<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M2 11c2.5-4 5.5-6 9-6s6.5 2 9 6c-2.5 4-5.5 6-9 6s-6.5-2-9-6Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="11" cy="11" r="2.5" fill="currentColor" opacity="0.8"/></svg>),
  },
  {
    title: "LTE Backup Internet",
    desc: "Avoid outages with LTE failover that keeps your team online automatically.",
    href: "/services#lte-backup-internet",
    image: "/atlantis/lte-backup-internet.png",
    icon: (<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M4 6.5A10 10 0 0 1 18 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 10A5.5 5.5 0 0 1 15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="14" r="2" fill="currentColor"/></svg>),
  },
  {
    title: "Telecom Cost Reduction",
    desc: "We help California businesses lower monthly telecom bills without sacrificing quality.",
    href: "/services#telecom-cost-reduction",
    image: "/atlantis/cost-reduction.png",
    icon: (<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M11 7v1.5M11 13.5V15M8.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>),
  },
  {
    title: "Structured Cabling",
    desc: "Fiber and CAT6 cabling for data, VoIP, and security infrastructure.",
    href: "/services#structured-cabling",
    image: "/atlantis/structured-cabling.png",
    icon: (<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="13" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="8" y="13" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M6 9v4h5M16 9v4h-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: "Managed IT Services (MSP)",
    desc: "Proactive monitoring, patching, and IT management so your systems just work.",
    href: "/services#managed-it",
    image: "/atlantis/managed-it-services.jpg",
    icon: (<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 19h6M11 16v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M6 10l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: "Custom Software Development",
    desc: "Custom applications and integrations built around how your business actually works.",
    href: "/services#custom-software",
    image: "/atlantis/cloud-solutions.jpg",
    icon: (<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M8 6l-5 5 5 5M14 6l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: "Help Desk & Desk Support",
    desc: "Responsive remote and on-site desk support to keep your team productive.",
    href: "/services#help-desk",
    image: "/atlantis/managed-it-services.jpg",
    icon: (<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><rect x="2" y="3" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 19h6M11 15v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="11" cy="9" r="1.5" fill="currentColor"/></svg>),
  },
  {
    title: "Network Configuration & Design",
    desc: "Design, configuration, and hardening of switches, routers, firewalls, and Wi-Fi.",
    href: "/services#network-configuration",
    image: "/atlantis/networking-solutions.jpg",
    icon: (<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.4"/><circle cx="18" cy="4" r="2" stroke="currentColor" strokeWidth="1.4"/><circle cx="11" cy="18" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M4 6v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M11 11v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">

        {/* Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="section-label mb-3">Telecom & IT Services</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0E1A28] tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}>
              Everything your business
              <br className="hidden sm:block" /> needs to stay connected.
            </h2>
          </div>
          <p className="text-[#4A6278] text-[16.5px] leading-relaxed max-w-sm"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            From your first phone line to full enterprise IT infrastructure, Atlantis Utility handles design, installation, and ongoing support.
          </p>
        </Reveal>

        {/* Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <StaggerItem key={i}>
              <a href={s.href}
                className="card group flex flex-col gap-0 no-underline bg-white cursor-pointer h-full overflow-hidden">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#1B65A6] shadow-sm">
                    {s.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-5 flex-1">
                  <div className="flex-1">
                    <h3 className="text-[16px] font-bold text-[#0E1A28] mb-2 group-hover:text-[#1B65A6] transition-colors"
                      style={{ fontFamily: "var(--font-syne)" }}>
                      {s.title}
                    </h3>
                    <p className="text-[14.5px] text-[#7290AA] leading-relaxed"
                      style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {s.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#1B65A6] text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity -mb-1"
                    style={{ fontFamily: "var(--font-dm)" }}>
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        {/* CTAs */}
        <Reveal delay={0.1} className="flex flex-col sm:flex-row gap-3 mt-10">
          <a href="/services"
            className="inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-[15px] shadow-sm">
            All Telecom & IT Services
          </a>
          <a href="#products"
            className="inline-flex items-center justify-center gap-2 bg-white border border-[#C0D2E5] hover:border-[#1B65A6] hover:text-[#1B65A6] text-[#3A5068] font-semibold px-6 py-3.5 rounded-xl transition-all text-[15px]">
            VoIP Products
          </a>
        </Reveal>

      </div>
    </section>
  );
}
