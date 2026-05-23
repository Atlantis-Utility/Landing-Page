const hours = [
  { day: "Monday",    time: "8 AM - 5 PM", closed: false },
  { day: "Tuesday",   time: "8 AM - 5 PM", closed: false },
  { day: "Wednesday", time: "8 AM - 5 PM", closed: false },
  { day: "Thursday",  time: "8 AM - 5 PM", closed: false },
  { day: "Friday",    time: "8 AM - 5 PM", closed: false },
  { day: "Saturday",  time: "Closed",       closed: true  },
  { day: "Sunday",    time: "Closed",       closed: true  },
];

export function CTABanner() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0E1A28] overflow-hidden">
      {/* Decorative arcs */}
      <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full border border-[#1B65A6]/20 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[340px] h-[340px] rounded-full border border-[#1B65A6]/15 pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[280px] h-[280px] rounded-full bg-[#1B65A6]/10 blur-[60px] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#1B65A6]/40 bg-[#1B65A6]/10 text-[#7EB8E8] text-[12px] font-semibold px-4 py-1.5 rounded-full mb-7"
          style={{ fontFamily: "var(--font-dm)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
          Ready to get started?
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          style={{ fontFamily: "var(--font-syne)" }}>
          Ready to upgrade your
          <br />business communications?
        </h2>
        <p className="text-[#7290AA] text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
          We offer fiber, coax, LTE backup, and hybrid connections based on availability in
          your area. Call us or schedule a free consultation to get started today.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EEF4FB] text-[#1B65A6] font-bold px-8 py-4 rounded-xl transition-all text-[15px] shadow-lg"
            style={{ fontFamily: "var(--font-dm)" }}>
            Schedule a Consultation
          </a>
          <a href="tel:8056582329"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-xl transition-all text-[15px]"
            style={{ fontFamily: "var(--font-dm)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2.8 1.4C3.6 3 5.2 5.8 7.4 8s5 3.8 6.6 4.6L12.4 14C10 12.6 7.2 10.4 5 8.2 2.8 6 .8 3.2.4 1L2.8 1.4Z" fill="currentColor"/>
            </svg>
            (805) 658-2329
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#071421] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
                <path d="M17 4 A13 13 0 0 1 30 17" stroke="#1B65A6" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
                <path d="M17 8.5 A8.5 8.5 0 0 1 25.5 17" stroke="#1B65A6" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
                <circle cx="17" cy="17" r="4" fill="white"/>
              </svg>
              <div>
                <div className="text-[14px] font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>ATLANTIS</div>
                <div className="text-[9px] font-semibold text-[#1B65A6] tracking-widest" style={{ fontFamily: "var(--font-dm)" }}>UTILITY INC</div>
              </div>
            </div>
            <p className="text-[12.5px] text-[#4A6278] leading-relaxed mb-4" style={{ fontFamily: "var(--font-dm)" }}>
              Local telecom experts serving Ventura County businesses with VoIP, internet, and tech infrastructure.
            </p>
            <a href="tel:8056582329" className="text-[13px] text-[#7EB8E8] font-medium hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm)" }}>
              (805) 658-2329
            </a>
          </div>

          {/* Location */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#3A5068] mb-4 pb-2 border-b border-white/8" style={{ fontFamily: "var(--font-dm)" }}>
              Location
            </div>
            <div className="space-y-3">
              <div className="text-[13.5px] font-semibold text-white" style={{ fontFamily: "var(--font-syne)" }}>Atlantis Utility, INC</div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-2 text-[13px] text-[#4A6278] hover:text-[#7EB8E8] transition-colors"
                style={{ fontFamily: "var(--font-dm)" }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                  <path d="M8 1.5A5 5 0 0 0 3 6.5c0 3.5 5 8 5 8s5-4.5 5-8A5 5 0 0 0 8 1.5Z" stroke="currentColor" strokeWidth="1.3"/>
                  <circle cx="8" cy="6.5" r="1.5" fill="currentColor" opacity="0.7"/>
                </svg>
                1445 Donlon St<br />Ventura, CA 93003
              </a>
            </div>
          </div>

          {/* Areas */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#3A5068] mb-4 pb-2 border-b border-white/8" style={{ fontFamily: "var(--font-dm)" }}>
              Areas We Serve
            </div>
            <div className="space-y-2">
              {["Ventura, CA","Oxnard, CA","Camarillo, CA","Malibu, CA","Thousand Oaks, CA","Paso Robles, CA"].map((city) => (
                <a key={city} href="#areas"
                  className="block text-[12.5px] text-[#4A6278] hover:text-[#7EB8E8] transition-colors"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  {city}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#3A5068] mb-4 pb-2 border-b border-white/8" style={{ fontFamily: "var(--font-dm)" }}>
              Business Hours
            </div>
            <div className="space-y-1.5">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between text-[12.5px]" style={{ fontFamily: "var(--font-dm)" }}>
                  <span className="text-[#4A6278]">{h.day}</span>
                  <span className={h.closed ? "text-[#2A3A4A]" : "text-white font-medium"}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11.5px] text-[#2A3A4A]" style={{ fontFamily: "var(--font-dm)" }}>
            2026 Atlantis Utility, INC. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[11.5px] text-[#2A3A4A]" style={{ fontFamily: "var(--font-dm)" }}>
            <a href="#" className="hover:text-[#4A6278] transition-colors">XML Sitemap</a>
            <a href="#" className="hover:text-[#4A6278] transition-colors">Privacy Policy</a>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}