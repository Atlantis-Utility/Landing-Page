const services = [
  { name: "Fiber Core", uptime: 99.9, status: "operational" },
  { name: "LTE Network", uptime: 98.2, status: "operational" },
  { name: "VOIP Services", uptime: 95.0, status: "degraded" },
  { name: "Backbone Ring", uptime: 99.5, status: "operational" },
  { name: "Edge Nodes", uptime: 97.8, status: "operational" },
];

const regions = [
  { name: "North District", nodes: 312, health: 99 },
  { name: "Westside Hub", nodes: 288, health: 97 },
  { name: "East Loop", nodes: 341, health: 98 },
  { name: "South Core", nodes: 206, health: 100 },
  { name: "Central DC", nodes: 137, health: 95 },
];

export default function NetworkSection() {
  return (
    <section id="network" className="py-28 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-3 lg:px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left content */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-accent text-[11px] font-medium uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <div className="w-6 h-[1px] bg-accent" />
              Network visibility
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Your network.
              <br />
              <span className="text-neutral-500">Your control.</span>
            </h2>

            <p
              className="text-neutral-400 text-[16px] leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
            >
              One unified view across all service layers. From fiber backbone to last-mile
              LTE, monitor health, capacity, and performance in real time.
            </p>

            {/* Service uptime bars */}
            <div className="space-y-4">
              {services.map((s, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{
                          background: s.status === "operational" ? "#0D9B5A" : "#D97706",
                        }}
                      />
                      <span
                        className="text-[13px] text-neutral-300"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {s.name}
                      </span>
                    </div>
                    <span
                      className="text-[13px] font-semibold"
                      style={{
                        fontFamily: "var(--font-syne)",
                        color: s.status === "operational" ? "#0D9B5A" : "#D97706",
                      }}
                    >
                      {s.uptime}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${s.uptime}%`,
                        background: s.status === "operational"
                          ? "linear-gradient(90deg, #0D9B5A, #0ecf78)"
                          : "linear-gradient(90deg, #D97706, #f59e0b)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Region cards */}
          <div>
            <div className="grid grid-cols-1 gap-3 mb-5">
              {regions.map((r, i) => (
                <div
                  key={i}
                  className="border-gradient rounded-xl px-5 py-4 flex items-center justify-between hover:bg-neutral-800/20 transition-all cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="5.5" stroke="#0A5FFF" strokeWidth="1.3" />
                        <circle cx="8" cy="8" r="2" fill="#0A5FFF" opacity="0.7" />
                      </svg>
                    </div>
                    <div>
                      <div
                        className="text-[13px] font-medium text-white"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {r.name}
                      </div>
                      <div
                        className="text-[11px] text-neutral-500"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {r.nodes} active nodes
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div
                        className="text-[16px] font-bold"
                        style={{
                          fontFamily: "var(--font-syne)",
                          color: r.health >= 99 ? "#0D9B5A" : r.health >= 97 ? "#0A5FFF" : "#D97706",
                        }}
                      >
                        {r.health}%
                      </div>
                      <div className="text-[10px] text-neutral-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        health
                      </div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4l4 4-4 4" stroke="#3E4C63" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary stat */}
            <div className="border-gradient rounded-xl p-5 bg-accent/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L16 6V12L9 16L2 12V6L9 2Z" stroke="#0A5FFF" strokeWidth="1.5" />
                  <circle cx="9" cy="9" r="2.5" fill="#0A5FFF" opacity="0.8" />
                </svg>
              </div>
              <div>
                <div
                  className="text-[14px] font-semibold text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  All 5 regions reporting normal
                </div>
                <div
                  className="text-[12px] text-neutral-500"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Last full sweep: 2 seconds ago
                </div>
              </div>
              <div className="ml-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
