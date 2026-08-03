"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const servicesLinks = [
  { label: "Business VoIP",                    href: "/services#business-voip" },
  { label: "Hosted VoIP PBX",                   href: "/services#hosted-voip-pbx" },
  { label: "SIP Trunking",                      href: "/services#sip-trunking" },
  { label: "High-Speed Internet",                href: "/services#high-speed-internet" },
  { label: "LTE Backup Internet",               href: "/services#lte-backup-internet" },
  { label: "Telecom Cost Reduction",            href: "/services#telecom-cost-reduction" },
  { label: "Structured Cabling",                href: "/services#structured-cabling" },
  { label: "Managed IT Services (MSP)",         href: "/services#managed-it" },
  { label: "Custom Software Development",       href: "/services#custom-software" },
  { label: "Help Desk & Desk Support",          href: "/services#help-desk" },
  { label: "Network Configuration & Design",    href: "/services#network-configuration" },
];

const locationsLinks = [
  { label: "Ventura, CA",       href: "/locations/ventura" },
  { label: "Oxnard, CA",        href: "/locations/oxnard" },
  { label: "Camarillo, CA",     href: "/locations/camarillo" },
  { label: "Malibu, CA",        href: "/locations/malibu" },
  { label: "Thousand Oaks, CA", href: "/locations/thousand-oaks" },
  { label: "Paso Robles, CA",   href: "/locations/paso-robles" },
  { label: "Santa Barbara, CA", href: "/locations/santa-barbara" },
  { label: "Goleta, CA",        href: "/locations/goleta" },
];

const navLinks: {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
  viewAllHref?: string;
  viewAllLabel?: string;
}[] = [
  { label: "Home",      href: "/" },
  { label: "About Us",  href: "/about" },
  { label: "Services",  href: "/services",  dropdown: servicesLinks,  viewAllHref: "/services",  viewAllLabel: "View all services" },
  { label: "Products",  href: "/products" },
  { label: "News",      href: "/news" },
  { label: "Carriers",  href: "/carriers" },
  { label: "Locations", href: "/locations", dropdown: locationsLinks, viewAllHref: "/locations", viewAllLabel: "View all locations" },
  { label: "Blog",      href: "/blog" },
  { label: "Feedback",  href: "/feedback" },
  { label: "Contact",   href: "/contact" },
];

const LOGIN_URL = "https://atlantisutility.simplelogin.net";
const PILL_TRANSITION = { type: "spring" as const, stiffness: 420, damping: 32, mass: 0.6 };

function ChevronDown({ open }: { open?: boolean }) {
  return (
    <motion.svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-[1px]"
      animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [hovered, setHovered]   = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
        className={`fixed top-0 inset-x-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-[0_1px_24px_rgba(14,26,40,0.08)] border-b border-[#E2EDF6]"
            : "border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex items-center justify-between h-16 gap-2">

            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0" onClick={() => setOpen(false)}>
              <Image src="/Atlantis.png" alt="Atlantis Utility Inc" width={464} height={300} priority className="h-10 w-auto" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center flex-shrink min-w-0" onMouseLeave={() => setHovered(null)}>
              {navLinks.map((l) => (
                l.dropdown ? (
                  <div key={l.label} className="relative flex-shrink-0"
                    onMouseEnter={() => { setHovered(l.label); setOpenDropdown(l.label); }}
                    onMouseLeave={() => setOpenDropdown((cur) => (cur === l.label ? null : cur))}
                  >
                    <a href={l.href}
                      className="relative flex items-center gap-1 px-2 py-2 text-[12.5px] font-medium text-[#3A5068] hover:text-[#1B65A6] rounded-lg transition-colors duration-150 whitespace-nowrap"
                      style={{ fontFamily: "var(--font-dm)" }}>
                      {hovered === l.label && (
                        <motion.span layoutId="navHoverPill" transition={PILL_TRANSITION}
                          className="absolute inset-0 bg-[#EEF4FB] rounded-lg -z-10" />
                      )}
                      {l.label}
                      <ChevronDown open={openDropdown === l.label} />
                    </a>
                    {/* Dropdown panel */}
                    <AnimatePresence>
                      {openDropdown === l.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-10 origin-top"
                        >
                          <div className="w-72 bg-white rounded-2xl border border-[#E2EDF6] shadow-[0_20px_50px_rgba(14,26,40,0.14)] p-2">
                            {l.dropdown.map((d) => (
                              <a key={d.label} href={d.href}
                                className="block px-3.5 py-2.5 text-[13px] font-medium text-[#3A5068] hover:text-[#1B65A6] hover:bg-[#EEF4FB] rounded-xl transition-all duration-150"
                                style={{ fontFamily: "var(--font-dm)" }}>
                                {d.label}
                              </a>
                            ))}
                            <div className="mt-1 pt-2 border-t border-[#E2EDF6]">
                              <a href={l.viewAllHref}
                                className="block px-3.5 py-2.5 text-[13px] font-semibold text-[#1B65A6] hover:bg-[#EEF4FB] rounded-xl transition-all duration-150"
                                style={{ fontFamily: "var(--font-dm)" }}>
                                {l.viewAllLabel} →
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a key={l.label} href={l.href}
                    onMouseEnter={() => { setHovered(l.label); setOpenDropdown(null); }}
                    className="relative flex-shrink-0 px-2 py-2 text-[12.5px] font-medium text-[#3A5068] hover:text-[#1B65A6] rounded-lg transition-colors duration-150 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-dm)" }}>
                    {hovered === l.label && (
                      <motion.span layoutId="navHoverPill" transition={PILL_TRANSITION}
                        className="absolute inset-0 bg-[#EEF4FB] rounded-lg -z-10" />
                    )}
                    {l.label}
                  </a>
                )
              ))}
              <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer"
                onMouseEnter={() => { setHovered("Login"); setOpenDropdown(null); }}
                className="relative flex-shrink-0 px-2 py-2 text-[12.5px] font-medium text-[#3A5068] hover:text-[#1B65A6] rounded-lg transition-colors duration-150 whitespace-nowrap"
                style={{ fontFamily: "var(--font-dm)" }}>
                {hovered === "Login" && (
                  <motion.span layoutId="navHoverPill" transition={PILL_TRANSITION}
                    className="absolute inset-0 bg-[#EEF4FB] rounded-lg -z-10" />
                )}
                Login
              </a>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden xl:flex items-center gap-2.5 flex-shrink-0">
              <a href="tel:8056582329"
                className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#3A5068] hover:text-[#1B65A6] transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--font-dm)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.09.408a12.035 12.035 0 0 0 5.61 5.61c.129.074.307.045.408-.09l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"/>
                </svg>
                (805) 658-2329
              </a>
              <motion.a href="/contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="bg-[#1B65A6] hover:bg-[#134d80] text-white text-[12.5px] font-semibold px-4 py-2.5 rounded-xl shadow-sm whitespace-nowrap"
                style={{ fontFamily: "var(--font-dm)" }}>
                Free Consultation
              </motion.a>
            </div>

            {/* Mobile buttons */}
            <div className="xl:hidden flex items-center gap-2">
              <a href="tel:8056582329"
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#E2EDF6] text-[#1B65A6]"
                aria-label="Call us">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.09.408a12.035 12.035 0 0 0 5.61 5.61c.129.074.307.045.408-.09l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"/>
                </svg>
              </a>
              <button onClick={() => setOpen(!open)}
                className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl border border-[#E2EDF6]"
                aria-label="Toggle menu">
                <motion.span style={{ width: 18 }} className="block h-[1.5px] bg-[#0E1A28] rounded-full"
                  animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
                <motion.span style={{ width: 14 }} className="block h-[1.5px] bg-[#0E1A28] rounded-full"
                  animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.15 }} />
                <motion.span style={{ width: 18 }} className="block h-[1.5px] bg-[#0E1A28] rounded-full"
                  animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <div className="xl:hidden fixed inset-0 z-40">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-[#0E1A28]/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-[#E2EDF6] flex-shrink-0">
                <span className="text-[13px] font-bold text-[#0E1A28]" style={{ fontFamily: "var(--font-syne)" }}>Navigation</span>
                <button onClick={() => setOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F5F8FC] text-[#7290AA]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map((l) => (
                  l.dropdown ? (
                    <div key={l.label} className="rounded-xl overflow-hidden">
                      <button
                        onClick={() => setMobileSection(mobileSection === l.label ? null : l.label)}
                        className="w-full flex items-center justify-between px-4 py-3.5 text-[14px] font-medium text-[#0E1A28] hover:bg-[#EEF4FB] hover:text-[#1B65A6] rounded-xl transition-all"
                        style={{ fontFamily: "var(--font-dm)" }}>
                        {l.label}
                        <ChevronDown open={mobileSection === l.label} />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileSection === l.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-1 space-y-0.5">
                              {l.dropdown.map((d) => (
                                <a key={d.label} href={d.href} onClick={() => setOpen(false)}
                                  className="block px-4 py-2.5 text-[13px] text-[#4A6278] hover:text-[#1B65A6] hover:bg-[#EEF4FB] rounded-lg transition-all"
                                  style={{ fontFamily: "var(--font-dm)" }}>
                                  {d.label}
                                </a>
                              ))}
                              <a href={l.viewAllHref} onClick={() => setOpen(false)}
                                className="block px-4 py-2.5 text-[13px] font-semibold text-[#1B65A6] hover:bg-[#EEF4FB] rounded-lg transition-all"
                                style={{ fontFamily: "var(--font-dm)" }}>
                                {l.viewAllLabel} →
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 text-[14px] font-medium text-[#0E1A28] hover:bg-[#EEF4FB] hover:text-[#1B65A6] rounded-xl transition-all"
                      style={{ fontFamily: "var(--font-dm)" }}>
                      {l.label}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )
                ))}
                <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-[14px] font-medium text-[#0E1A28] hover:bg-[#EEF4FB] hover:text-[#1B65A6] rounded-xl transition-all"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  Login
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className="p-4 border-t border-[#E2EDF6] space-y-2.5 flex-shrink-0">
                <a href="tel:8056582329"
                  className="flex items-center justify-center gap-2 w-full border border-[#C0D2E5] text-[#1B65A6] font-semibold py-3 rounded-xl text-[14px] hover:bg-[#EEF4FB] transition-colors"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  (805) 658-2329
                </a>
                <a href="/contact" onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold py-3.5 rounded-xl text-[14px] transition-colors"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  Free Consultation
                </a>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
