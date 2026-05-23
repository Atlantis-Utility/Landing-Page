export default function Hero() {
  const stats = [
    { value: "24/7", label: "Support" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "15+", label: "Years local" },
    { value: "500+", label: "Businesses served" },
  ];

  return (
    <section className="relative min-h-screen flex items-center hero-mesh dot-grid pt-16 overflow-hidden">

      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-[#1B65A6]/8 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-[#1B65A6]/6 pointer-events-none" />
      <div className="absolute bottom-20 -left-32 w-[320px] h-[320px] rounded-full bg-[#EEF4FB]/60 blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#C0D2E5] text-[#1B65A6] text-[12px] font-semibold px-4 py-2 rounded-full mb-7 shadow-sm"
              style={{ fontFamily: "var(--font-dm)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
              Serving Ventura County businesses
            </div>

            <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-extrabold text-[#0E1A28] leading-[1.06] tracking-[-0.02em] mb-5"
              style={{ fontFamily: "var(--font-syne)" }}>
              Business telecom
              <br />
              <span className="text-[#1B65A6]">built for Ventura.</span>
            </h1>

            <p className="text-[#4A6278] text-[16px] sm:text-[17px] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              VoIP phone systems, high-speed internet, SIP trunking, LTE backup, structured
              cabling, and IP cameras. Local technicians, honest pricing, 24/7 support.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] active:scale-[0.97] text-white font-semibold px-7 py-4 rounded-xl transition-all duration-150 text-[15px] shadow-md shadow-blue-200/60"
                style={{ fontFamily: "var(--font-dm)" }}>
                Schedule Free Consultation
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="tel:8056582329"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EEF4FB] border border-[#C0D2E5] text-[#1B65A6] font-semibold px-7 py-4 rounded-xl transition-all duration-150 text-[15px]"
                style={{ fontFamily: "var(--font-dm)" }}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M2.8 1.4C3.6 3 5.2 5.8 7.4 8s5 3.8 6.6 4.6L12.4 14C10 12.6 7.2 10.4 5 8.2 2.8 6 .8 3.2.4 1L2.8 1.4Z" fill="currentColor"/>
                </svg>
                (805) 658-2329
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white border border-[#E2EDF6] rounded-2xl p-3 sm:p-4 text-center shadow-sm">
                  <div className="text-[22px] sm:text-[24px] font-extrabold text-[#1B65A6] leading-none mb-1"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    {s.value}
                  </div>
                  <div className="text-[11px] text-[#7290AA] font-medium" style={{ fontFamily: "var(--font-dm)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: UI card */}
          <div className="relative hidden lg:flex justify-center">
            {/* Main card */}
            <div className="w-full max-w-sm float bg-white rounded-3xl border border-[#E2EDF6] shadow-[0_20px_60px_rgba(27,101,166,0.13)] p-6 relative z-10">

              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#EEF4FB] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="5" width="16" height="11" rx="2.5" stroke="#1B65A6" strokeWidth="1.4"/>
                    <path d="M7 5V4a3 3 0 0 1 6 0v1" stroke="#1B65A6" strokeWidth="1.4" strokeLinecap="round"/>
                    <circle cx="10" cy="10.5" r="1.5" fill="#1B65A6"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0E1A28]" style={{ fontFamily: "var(--font-syne)" }}>Hosted VoIP PBX</div>
                  <div className="text-[11px] text-[#7290AA]">Cloud-powered</div>
                </div>
                <span className="ml-auto flex items-center gap-1.5 bg-green-50 text-green-600 text-[11px] font-semibold px-3 py-1 rounded-full border border-green-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Live
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                {[{ label: "Extensions", value: "48" }, { label: "Uptime", value: "99.9%" }, { label: "Lines", value: "12" }].map((s) => (
                  <div key={s.label} className="bg-[#F5F8FC] rounded-2xl p-3 text-center">
                    <div className="text-[18px] font-extrabold text-[#1B65A6]" style={{ fontFamily: "var(--font-syne)" }}>{s.value}</div>
                    <div className="text-[10px] text-[#7290AA] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-[#F5F8FC] rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold text-[#3A5068]">Call volume</span>
                  <span className="text-[10px] text-[#7290AA]">Last 7 days</span>
                </div>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 65, 48, 82, 70, 90, 74].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-0.5 items-center justify-end h-full">
                      <div className="w-full rounded-t-md" style={{ height: `${h}%`, background: `rgba(27,101,166,${0.25 + i * 0.1})` }} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {["M","T","W","T","F","S","S"].map((d, i) => (
                    <div key={i} className="flex-1 text-center text-[9px] text-[#7290AA]">{d}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge: LTE */}
            <div className="absolute -left-8 top-16 float-slow bg-white border border-[#E2EDF6] rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 6A7 7 0 0 1 13 6" stroke="#D97706" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M5.5 9A3.5 3.5 0 0 1 10.5 9" stroke="#D97706" strokeWidth="1.4" strokeLinecap="round"/>
                  <circle cx="8" cy="12.5" r="1.5" fill="#D97706"/>
                </svg>
              </div>
              <div>
                <div className="text-[12px] font-bold text-[#0E1A28]" style={{ fontFamily: "var(--font-syne)" }}>LTE Backup</div>
                <div className="text-[10px] text-[#7290AA]">Failover active</div>
              </div>
            </div>

            {/* Floating badge: local */}
            <div className="absolute -right-6 bottom-20 float bg-white border border-[#E2EDF6] rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3" style={{ animationDelay: "2s" }}>
              <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot flex-shrink-0" />
              <div>
                <div className="text-[12px] font-bold text-[#0E1A28]" style={{ fontFamily: "var(--font-syne)" }}>Local tech on-site</div>
                <div className="text-[10px] text-[#7290AA]">Ventura County</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom divider wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 56" fill="none" className="w-full block">
          <path d="M0 56C480 12 960 12 1440 56V56H0V56Z" fill="#F5F8FC"/>
        </svg>
      </div>
    </section>
  );
}