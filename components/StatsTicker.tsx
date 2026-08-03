export default function StatsTicker() {
  const stats = [
    { label: "Nodes Monitored", value: "1,284+" },
    { label: "Avg Uptime SLA", value: "99.7%" },
    { label: "Latency Reduction", value: "38%" },
    { label: "Tickets Auto-Resolved", value: "64%" },
    { label: "Network Regions", value: "12" },
    { label: "Daily Events Processed", value: "2.4M" },
    { label: "Enterprise Customers", value: "140+" },
    { label: "Incidents Prevented", value: "3,800/yr" },
  ];

  const doubled = [...stats, ...stats];

  return (
    <div className="border-y border-neutral-800/60 bg-neutral-950/70 py-4 overflow-hidden">
      <div className="flex ticker-track whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((s, i) => (
          <div key={i} className="inline-flex items-center gap-3 px-8">
            <span
              className="text-[14.5px] font-bold text-white"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {s.value}
            </span>
            <span
              className="text-[13px] text-neutral-500"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {s.label}
            </span>
            <span className="text-neutral-700 text-[11px]">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
