const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="11" r="3.5" fill="currentColor" opacity="0.7" />
        <line x1="11" y1="2" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="11" y1="16.5" x2="11" y2="20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="2" y1="11" x2="5.5" y2="11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="16.5" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Real-Time Node Monitoring",
    desc:
      "Track every node in your network with sub-second refresh rates. Instantly surface degraded, offline, or overloaded nodes with visual severity mapping.",
    tag: "Core",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17L7 10l4 4 4-6 4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="1" y="1" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
    title: "Predictive Analytics",
    desc:
      "Machine-learning models trained on network telemetry detect anomalies before they escalate. Get proactive alerts with confidence scoring.",
    tag: "Intelligence",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L4 6v10l7 4 7-4V6L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 2v18M4 6l7 5 7-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Unified Ticket Management",
    desc:
      "Incidents auto-create structured tickets with affected nodes, impact scope, and suggested resolution. Assign, escalate, and resolve from one interface.",
    tag: "Operations",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
        <line x1="7" y1="4" x2="7" y2="18" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
        <line x1="15" y1="4" x2="15" y2="18" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
        <line x1="2" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      </svg>
    ),
    title: "SLA Reporting Engine",
    desc:
      "Automated monthly, quarterly, and custom-period SLA reports. Export to PDF, CSV, or share live links with stakeholders and regulatory bodies.",
    tag: "Compliance",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Role-Based Access Control",
    desc:
      "Granular permissions for NOC engineers, field technicians, and executives. SSO-ready with SAML 2.0 and LDAP integration.",
    tag: "Security",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="11" cy="11" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Multi-Region Network Map",
    desc:
      "Visualize your full topology across regions with interactive drill-down. Color-coded health states, traffic heat maps, and latency overlays.",
    tag: "Visibility",
  },
];

export default function Features() {
  return (
    <section id="platform" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/0 via-neutral-900/20 to-neutral-950/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 lg:px-4 relative">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div
            className="inline-flex items-center gap-2 text-accent text-[12px] font-medium uppercase tracking-widest mb-5"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <div className="w-6 h-[1px] bg-accent" />
            Platform capabilities
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Everything your NOC team needs.
            <br />
            <span className="text-neutral-500">Nothing it does not.</span>
          </h2>
          <p
            className="text-neutral-400 text-[17.5px] leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
          >
            Purpose-built for telecom carriers and managed service providers. Atlantis Utility
            replaces fragmented monitoring tools with a single, deeply integrated platform.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group border-gradient rounded-2xl p-6 hover:bg-neutral-800/20 transition-all duration-200 cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  {f.icon}
                </div>
                <span
                  className="text-[11px] font-medium text-neutral-500 bg-neutral-800 px-2.5 py-1 rounded-full uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {f.tag}
                </span>
              </div>
              <h3
                className="text-[17.5px] font-semibold text-white mb-2.5 leading-snug"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {f.title}
              </h3>
              <p
                className="text-[15px] text-neutral-400 leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
