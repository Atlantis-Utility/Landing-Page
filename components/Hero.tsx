"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";

export default function Hero() {
  const stats = [
    { value: "24/7", label: "Support" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "15+", label: "Years local" },
    { value: "500+", label: "Businesses served" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/atlantis/hero.png"
          alt="Business VoIP phone system in a modern office"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1420]/95 via-[#0A1420]/80 to-[#0A1420]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1420]/70 via-transparent to-[#0A1420]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 py-16 sm:py-24 w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
        >
          {/* Badge */}
          <motion.div variants={staggerItem}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white text-[13px] font-semibold px-4 py-2 rounded-full mb-7 shadow-sm"
            style={{ fontFamily: "var(--font-dm)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
            Serving California businesses
          </motion.div>

          <motion.h1 variants={staggerItem}
            className="text-[42px] sm:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.06] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "var(--font-syne)" }}>
            Business telecom & IT
            <br />
            <span className="text-[#7EB8E8]">built for California.</span>
          </motion.h1>

          <motion.p variants={staggerItem}
            className="text-white/80 text-[17.5px] sm:text-[18.5px] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            VoIP phone systems, high-speed internet, managed IT, custom software, and structured
            cabling. Local technicians, honest pricing, 24/7 support.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
            <motion.a href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-7 py-4 rounded-xl text-[16.5px] shadow-lg shadow-black/20"
              style={{ fontFamily: "var(--font-dm)" }}>
              Schedule Free Consultation
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a href="tel:8056582329"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-[16.5px]"
              style={{ fontFamily: "var(--font-dm)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.09.408a12.035 12.035 0 0 0 5.61 5.61c.129.074.307.045.408-.09l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"/>
              </svg>
              (805) 658-2329
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={staggerItem} className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-3 sm:p-4 text-center">
                <div className="text-[24px] sm:text-[26.5px] font-extrabold text-white leading-none mb-1"
                  style={{ fontFamily: "var(--font-syne)" }}>
                  <Counter value={s.value} />
                </div>
                <div className="text-[12px] text-white/70 font-medium" style={{ fontFamily: "var(--font-dm)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom divider wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none z-10">
        <svg viewBox="0 0 1440 56" fill="none" className="w-full block">
          <path d="M0 56C480 12 960 12 1440 56V56H0V56Z" fill="#F5F8FC"/>
        </svg>
      </div>
    </section>
  );
}
