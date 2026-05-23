const testimonials = [
  {
    quote:
      "Atlantis replaced three separate tools we were running. The savings in licensing alone paid for itself in six months, and we finally have a single source of truth for our NOC.",
    author: "Priya Nair",
    role: "VP of Network Operations",
    company: "ClearPath Telecom",
    initials: "PN",
  },
  {
    quote:
      "Predictive diagnostics caught a fiber degradation issue 48 hours before it would have caused a major outage. That alone is worth every cent.",
    author: "Marcus Osei",
    role: "Network Architect",
    company: "GridPoint ISP",
    initials: "MO",
  },
  {
    quote:
      "The SLA reporting engine saves my team roughly 12 hours per month. Automated, accurate, and our regulators actually like the format.",
    author: "Sylvia Chen",
    role: "Director of Compliance",
    company: "Meridian Broadband",
    initials: "SC",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-neutral-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 text-accent text-[11px] font-medium uppercase tracking-widest mb-5"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <div className="w-6 h-[1px] bg-accent" />
            Customer stories
            <div className="w-6 h-[1px] bg-accent" />
          </div>
          <h2
            className="text-4xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Trusted by operations teams
            <br />
            <span className="text-neutral-500">across the industry.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border-gradient rounded-2xl p-7 flex flex-col gap-5">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M6.5 1.5l1.3 3.8H12l-3.3 2.4 1.3 3.9L6.5 9.2l-3.5 2.4 1.3-3.9L1 5.3h4.2z"
                      fill="#0A5FFF"
                    />
                  </svg>
                ))}
              </div>
              <p
                className="text-[14px] text-neutral-400 leading-relaxed flex-1 italic"
                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-neutral-800">
                <div
                  className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent text-[12px] font-semibold flex-shrink-0"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-[13px] font-medium text-white"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {t.author}
                  </div>
                  <div
                    className="text-[11px] text-neutral-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
