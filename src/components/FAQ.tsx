"use client";
import { useState } from "react";

const faqs = [
  { q: "What areas in Ventura County do you serve?",   a: "We serve all of Ventura County, including Oxnard, Ventura, Camarillo, Thousand Oaks, and more. We also cover Malibu, Paso Robles, and Santa Barbara." },
  { q: "Do you install and support equipment?",         a: "Yes. We offer full installation and maintenance for VoIP, internet, cabling, and camera systems. We handle everything from design through to ongoing support." },
  { q: "Can I keep my current phone numbers with VoIP?",a: "Absolutely. We support number porting during VoIP migrations so your business keeps the same numbers your customers already know." },
  { q: "What kind of internet options do you provide?", a: "We offer fiber, coax, LTE backup, and hybrid connections based on availability in your area. We will recommend the best fit for your business." },
  { q: "How quickly can you install a new phone system?",a:"Most business VoIP installations are completed within a few days of your order. We coordinate around your schedule to minimize disruption." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-[#1B65A6]/30 shadow-sm shadow-blue-100" : "border-[#E2EDF6]"}`}>
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left bg-white hover:bg-[#F9FBFD] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[14.5px] font-semibold text-[#0E1A28] leading-snug"
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
        <p className="px-5 pb-5 text-[13.5px] text-[#4A6278] leading-relaxed border-t border-[#E2EDF6] pt-4"
          style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#F5F8FC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="section-label justify-center mb-3"><span>Common Questions</span></p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1A28] tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[14px] text-[#7290AA] mb-4" style={{ fontFamily: "var(--font-dm)" }}>
            Still have questions? We are happy to help.
          </p>
          <a href="tel:8056582329"
            className="inline-flex items-center gap-2 bg-white border border-[#C0D2E5] hover:border-[#1B65A6] text-[#1B65A6] font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px]"
            style={{ fontFamily: "var(--font-dm)" }}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M2.8 1.4C3.6 3 5.2 5.8 7.4 8s5 3.8 6.6 4.6L12.4 14C10 12.6 7.2 10.4 5 8.2 2.8 6 .8 3.2.4 1L2.8 1.4Z" fill="currentColor"/>
            </svg>
            Call (805) 658-2329
          </a>
        </div>

      </div>
    </section>
  );
}