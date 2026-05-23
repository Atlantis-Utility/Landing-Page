export default function ProductsCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0E1A28] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-[#1B65A6]/20" />
        <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full border border-[#1B65A6]/12" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#1B65A6]/8 blur-[80px]" />
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#1B65A6]/40 bg-[#1B65A6]/10 text-[#7EB8E8] text-[12px] font-semibold px-4 py-1.5 rounded-full mb-6"
              style={{ fontFamily: "var(--font-dm)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
              Local installation team
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5"
              style={{ fontFamily: "var(--font-syne)" }}>
              Ready to upgrade your
              <br />hardware infrastructure?
            </h2>
            <p className="text-[#7290AA] text-[15px] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              Our local Ventura County team handles everything from product selection and
              procurement through professional installation and ongoing support. No
              national call centers, just local experts who know your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:8056582329"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EEF4FB] text-[#1B65A6] font-bold px-7 py-4 rounded-xl transition-all text-[14.5px]"
                style={{ fontFamily: "var(--font-dm)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.8 1.4C3.6 3 5.2 5.8 7.4 8s5 3.8 6.6 4.6L12.4 14C10 12.6 7.2 10.4 5 8.2 2.8 6 .8 3.2.4 1L2.8 1.4Z" fill="currentColor"/>
                </svg>
                (805) 658-2329
              </a>
              <a href="/"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-4 rounded-xl transition-all text-[14.5px]"
                style={{ fontFamily: "var(--font-dm)" }}>
                Back to home
              </a>
            </div>
          </div>

          {/* Right: info cards */}
          <div className="space-y-3">
            {[
              { icon: "🔧", title: "Professional installation", desc: "Every product is installed by our certified local technicians with full testing and handover." },
              { icon: "📞", title: "Free consultation", desc: "Not sure which product fits your business? We will assess your needs and recommend the right solution." },
              { icon: "🛠", title: "Ongoing support", desc: "We stay your partner after install. 24/7 support for all hardware we supply and install." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-[14px] font-bold text-white mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                    {item.title}
                  </div>
                  <div className="text-[13px] text-[#4A6278] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}