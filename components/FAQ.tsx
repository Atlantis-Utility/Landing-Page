"use client";
import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const faqs = [
  { q: "What areas of California do you serve?",   a: "We serve businesses across California, including Ventura, Oxnard, Camarillo, Thousand Oaks, and more, with remote and on-site IT support available statewide." },
  { q: "Do you install and support equipment?",         a: "Yes. We offer full installation and maintenance for VoIP, internet, cabling, and camera systems. We handle everything from design through to ongoing support." },
  { q: "Can I keep my current phone numbers with VoIP?",a: "Absolutely. We support number porting during VoIP migrations so your business keeps the same numbers your customers already know." },
  { q: "What kind of internet options do you provide?", a: "We offer fiber, coax, LTE backup, and hybrid connections based on availability in your area. We will recommend the best fit for your business." },
  { q: "How quickly can you install a new phone system?",a:"Most business VoIP installations are completed within a few days of your order. We coordinate around your schedule to minimize disruption." },
  { q: "Do you offer IT services beyond telecom?",      a: "Yes. Alongside VoIP and internet, we provide managed IT (MSP), custom software development, help desk support, and network configuration for businesses of any size." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-[#1B65A6]/30 shadow-sm shadow-blue-100" : "border-[#E2EDF6]"}`}>
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left bg-white hover:bg-[#F9FBFD] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[16px] font-semibold text-[#0E1A28] leading-snug"
          style={{ fontFamily: "var(--font-dm)" }}>
          {q}
        </span>
        <span className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${open ? "bg-[#1B65A6] text-white rotate-180" : "bg-[#F5F8FC] text-[#7290AA] border border-[#E2EDF6]"}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40" : "max-h-0"}`}>
        <p className="px-5 pb-5 text-[15px] text-[#4A6278] leading-relaxed border-t border-[#E2EDF6] pt-4"
          style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#F5F8FC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">

        <Reveal className="text-center mb-12">
          <p className="section-label justify-center mb-3"><span>Common Questions</span></p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0E1A28] tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}>
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Stagger className="space-y-3">
          {faqs.map((f, i) => <StaggerItem key={i}><FAQItem q={f.q} a={f.a} /></StaggerItem>)}
        </Stagger>

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="text-[15.5px] text-[#7290AA] mb-4" style={{ fontFamily: "var(--font-dm)" }}>
            Still have questions? We are happy to help.
          </p>
          <a href="tel:8056582329"
            className="inline-flex items-center gap-2 bg-white border border-[#C0D2E5] hover:border-[#1B65A6] text-[#1B65A6] font-semibold px-6 py-3.5 rounded-xl transition-all text-[15.5px]"
            style={{ fontFamily: "var(--font-dm)" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.09.408a12.035 12.035 0 0 0 5.61 5.61c.129.074.307.045.408-.09l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"/>
            </svg>
            Call (805) 658-2329
          </a>
        </Reveal>

      </div>
    </section>
  );
}