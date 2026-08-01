import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

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
    <section id="contact" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Decorative arcs */}
      <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full border border-[#1B65A6]/10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[340px] h-[340px] rounded-full border border-[#1B65A6]/8 pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[280px] h-[280px] rounded-full bg-[#EEF4FB] blur-[60px] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #1B65A6 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <Reveal className="max-w-4xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 text-center relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#C0D2E5] text-[#1B65A6] text-[12px] font-semibold px-4 py-1.5 rounded-full mb-7 shadow-sm"
          style={{ fontFamily: "var(--font-dm)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
          Ready to get started?
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1A28] tracking-tight leading-tight mb-5"
          style={{ fontFamily: "var(--font-syne)" }}>
          Ready to upgrade your
          <br />business communications?
        </h2>
        <p className="text-[#4A6278] text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
          We offer fiber, coax, LTE backup, and hybrid connections based on availability in
          your area. Call us or schedule a free consultation to get started today.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-bold px-8 py-4 rounded-xl transition-all text-[15px] shadow-md shadow-blue-200/60"
            style={{ fontFamily: "var(--font-dm)" }}>
            Schedule a Consultation
          </a>
          <a href="tel:8056582329"
            className="inline-flex items-center justify-center gap-2 bg-white border border-[#C0D2E5] hover:border-[#1B65A6] hover:text-[#1B65A6] text-[#3A5068] font-semibold px-8 py-4 rounded-xl transition-all text-[15px]"
            style={{ fontFamily: "var(--font-dm)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.09.408a12.035 12.035 0 0 0 5.61 5.61c.129.074.307.045.408-.09l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"/>
            </svg>
            (805) 658-2329
          </a>
        </div>
      </Reveal>
    </section>
  );
}

const companyLinks = [
  { label: "Home",     href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Carriers", href: "/carriers" },
];

const resourceLinks = [
  { label: "Locations", href: "/locations" },
  { label: "Blog",      href: "/blog" },
  { label: "News",      href: "/news" },
  { label: "Feedback",  href: "/feedback" },
  { label: "Contact",   href: "/contact" },
];

function FooterLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-white mb-5"
      style={{ fontFamily: "var(--font-dm)" }}>
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#071421] text-white">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-x-8 gap-y-12">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <div className="mb-5">
              <Image src="/Atlantis.png" alt="Atlantis Utility Inc" width={464} height={300} className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-[13px] text-[#9FB4C7] leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "var(--font-dm)" }}>
              Local telecom and IT experts serving businesses across California with VoIP, internet, managed IT, and tech infrastructure.
            </p>
            <div className="space-y-3">
              <a href="tel:8056582329"
                className="flex items-center gap-2.5 text-[13.5px] font-medium text-white hover:text-[#7EB8E8] transition-colors"
                style={{ fontFamily: "var(--font-dm)" }}>
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#7EB8E8]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.09.408a12.035 12.035 0 0 0 5.61 5.61c.129.074.307.045.408-.09l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"/>
                  </svg>
                </span>
                (805) 658-2329
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] text-[#9FB4C7] hover:text-[#7EB8E8] transition-colors"
                style={{ fontFamily: "var(--font-dm)" }}>
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#7EB8E8]">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.5A5 5 0 0 0 3 6.5c0 3.5 5 8 5 8s5-4.5 5-8A5 5 0 0 0 8 1.5Z" stroke="currentColor" strokeWidth="1.3"/>
                    <circle cx="8" cy="6.5" r="1.5" fill="currentColor" opacity="0.7"/>
                  </svg>
                </span>
                1445 Donlon St, Ventura, CA 93003
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <FooterLabel>Company</FooterLabel>
            <div className="space-y-3">
              {companyLinks.map((l) => (
                <a key={l.label} href={l.href}
                  className="block text-[13px] text-[#9FB4C7] hover:text-[#7EB8E8] transition-colors"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <FooterLabel>Resources</FooterLabel>
            <div className="space-y-3">
              {resourceLinks.map((l) => (
                <a key={l.label} href={l.href}
                  className="block text-[13px] text-[#9FB4C7] hover:text-[#7EB8E8] transition-colors"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-4">
            <FooterLabel>Business Hours</FooterLabel>
            <div className="space-y-2.5">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between text-[13px] pb-2.5 border-b border-white/[0.06] last:border-0 last:pb-0" style={{ fontFamily: "var(--font-dm)" }}>
                  <span className="text-[#9FB4C7]">{h.day}</span>
                  <span className={h.closed ? "text-[#5C7A94] font-medium" : "text-white font-semibold"}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#5C7A94]" style={{ fontFamily: "var(--font-dm)" }}>
            &copy; 2026 Atlantis Utility, INC. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[12px] text-[#5C7A94]" style={{ fontFamily: "var(--font-dm)" }}>
            <a href="/terms" className="hover:text-[#9FB4C7] transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-[#9FB4C7] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}