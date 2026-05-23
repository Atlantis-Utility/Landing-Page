"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services",      href: "#services" },
  { label: "Products",      href: "#products" },
  { label: "Areas",         href: "#areas" },
  { label: "Our Advantage", href: "#why" },
  { label: "FAQs",          href: "#faqs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_1px_24px_rgba(14,26,40,0.08)] border-b border-[#E2EDF6]"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 flex-shrink-0" onClick={() => setOpen(false)}>
              <svg width="32" height="32" viewBox="0 0 34 34" fill="none">
                <path d="M17 4 A13 13 0 0 1 30 17" stroke="#1B65A6" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
                <path d="M17 8.5 A8.5 8.5 0 0 1 25.5 17" stroke="#1B65A6" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.55"/>
                <path d="M17 13 A4 4 0 0 1 21 17" stroke="#1B65A6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3"/>
                <circle cx="17" cy="17" r="4" fill="#0E1A28"/>
              </svg>
              <div className="leading-none">
                <div className="text-[14.5px] font-bold tracking-tight text-[#0E1A28]" style={{ fontFamily: "var(--font-syne)" }}>ATLANTIS</div>
                <div className="text-[9px] font-semibold text-[#1B65A6] tracking-[0.14em]" style={{ fontFamily: "var(--font-dm)" }}>UTILITY INC</div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href}
                  className="px-3.5 py-2 text-[13.5px] font-medium text-[#3A5068] hover:text-[#1B65A6] hover:bg-[#EEF4FB] rounded-lg transition-all duration-150"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:8056582329"
                className="flex items-center gap-1.5 text-[13px] font-medium text-[#3A5068] hover:text-[#1B65A6] transition-colors"
                style={{ fontFamily: "var(--font-dm)" }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2.8 1.4C3.6 3 5.2 5.8 7.4 8s5 3.8 6.6 4.6L12.4 14C10 12.6 7.2 10.4 5 8.2 2.8 6 .8 3.2.4 1L2.8 1.4Z" fill="currentColor"/>
                </svg>
                (805) 658-2329
              </a>
              <a href="#contact"
                className="bg-[#1B65A6] hover:bg-[#134d80] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-xl transition-all duration-150 shadow-sm"
                style={{ fontFamily: "var(--font-dm)" }}>
                Free Consultation
              </a>
            </div>

            {/* Mobile buttons */}
            <div className="lg:hidden flex items-center gap-2">
              <a href="tel:8056582329"
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#E2EDF6] text-[#1B65A6]"
                aria-label="Call us">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.8 1.4C3.6 3 5.2 5.8 7.4 8s5 3.8 6.6 4.6L12.4 14C10 12.6 7.2 10.4 5 8.2 2.8 6 .8 3.2.4 1L2.8 1.4Z" fill="currentColor"/>
                </svg>
              </a>
              <button onClick={() => setOpen(!open)}
                className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl border border-[#E2EDF6]"
                aria-label="Toggle menu">
                <span style={{ width: 18 }} className={`block h-[1.5px] bg-[#0E1A28] rounded-full transition-all duration-200 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                <span style={{ width: 14 }} className={`block h-[1.5px] bg-[#0E1A28] rounded-full transition-all duration-200 ${open ? "opacity-0" : ""}`} />
                <span style={{ width: 18 }} className={`block h-[1.5px] bg-[#0E1A28] rounded-full transition-all duration-200 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${open ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-[#0E1A28]/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />
        <nav className={`absolute top-0 right-0 bottom-0 w-72 bg-white flex flex-col shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-5 h-16 border-b border-[#E2EDF6]">
            <span className="text-[13px] font-bold text-[#0E1A28]" style={{ fontFamily: "var(--font-syne)" }}>Navigation</span>
            <button onClick={() => setOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F5F8FC] text-[#7290AA]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 text-[14px] font-medium text-[#0E1A28] hover:bg-[#EEF4FB] hover:text-[#1B65A6] rounded-xl transition-all"
                style={{ fontFamily: "var(--font-dm)" }}>
                {l.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
          <div className="p-4 border-t border-[#E2EDF6] space-y-2.5">
            <a href="tel:8056582329"
              className="flex items-center justify-center gap-2 w-full border border-[#C0D2E5] text-[#1B65A6] font-semibold py-3 rounded-xl text-[14px] hover:bg-[#EEF4FB] transition-colors"
              style={{ fontFamily: "var(--font-dm)" }}>
              (805) 658-2329
            </a>
            <a href="#contact" onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold py-3.5 rounded-xl text-[14px] transition-colors"
              style={{ fontFamily: "var(--font-dm)" }}>
              Free Consultation
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}