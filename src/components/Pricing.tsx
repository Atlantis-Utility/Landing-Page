const plans = [
  {
    name: "Starter",
    price: "499",
    period: "/mo",
    desc: "For smaller regional operators getting started with network visibility.",
    features: [
      "Up to 250 nodes",
      "5-minute refresh interval",
      "Ticket management",
      "Email alerts",
      "90-day data retention",
      "2 user seats",
    ],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Professional",
    price: "1,499",
    period: "/mo",
    desc: "The full platform for mid-sized carriers and MSPs with demanding SLAs.",
    features: [
      "Up to 1,500 nodes",
      "30-second refresh interval",
      "Predictive diagnostics",
      "Multi-channel alerts",
      "SLA report engine",
      "1-year data retention",
      "15 user seats",
      "SSO / SAML 2.0",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For national carriers and telcos with large-scale, complex topologies.",
    features: [
      "Unlimited nodes",
      "Real-time streaming (sub-5s)",
      "Custom ML models",
      "Dedicated support SLA",
      "Unlimited data retention",
      "Unlimited seats",
      "On-premise deployment",
      "API access",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 text-accent text-[11px] font-medium uppercase tracking-widest mb-5"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <div className="w-6 h-[1px] bg-accent" />
            Pricing
            <div className="w-6 h-[1px] bg-accent" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Transparent pricing.
            <br />
            <span className="text-neutral-500">No hidden fees.</span>
          </h2>
          <p
            className="text-neutral-400 text-[16px] leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
          >
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-7 flex flex-col ${
                p.highlight
                  ? "bg-accent/10 border border-accent/40 glow-blue"
                  : "border-gradient"
              }`}
            >
              {p.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-medium px-4 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Most popular
                </div>
              )}

              <div className="mb-6">
                <div
                  className="text-[12px] font-medium uppercase tracking-widest text-neutral-500 mb-3"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {p.name}
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  {p.price !== "Custom" && (
                    <span className="text-neutral-500 text-[16px]" style={{ fontFamily: "var(--font-syne)" }}>$</span>
                  )}
                  <span
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {p.price}
                  </span>
                  <span
                    className="text-neutral-500 text-[13px]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {p.period}
                  </span>
                </div>
                <p
                  className="text-[13px] text-neutral-500 leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {p.desc}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <circle cx="7" cy="7" r="6" fill={p.highlight ? "#0A5FFF" : "#1E2635"} />
                      <path
                        d="M4.5 7l2 2 3-3"
                        stroke={p.highlight ? "white" : "#5C6370"}
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className="text-[13px] text-neutral-400"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full text-center py-3 rounded-xl text-[14px] font-medium transition-all duration-150 ${
                  p.highlight
                    ? "bg-accent hover:bg-accent-dark text-white glow-blue-sm"
                    : "border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
