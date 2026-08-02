"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.09.408a12.035 12.035 0 0 0 5.61 5.61c.129.074.307.045.408-.09l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
  </svg>
);

const topics = [
  "Business VoIP",
  "High-Speed Internet",
  "Managed IT / MSP",
  "Custom Software",
  "Structured Cabling",
  "Something else",
];

const inputClasses =
  "w-full bg-[#F5F8FC] border border-[#E2EDF6] focus:border-[#1B65A6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1B65A6]/15 rounded-xl px-4 py-3 text-[14px] text-[#0E1A28] placeholder:text-[#7290AA] transition-all";

const labelClasses = "block text-[13px] font-semibold text-[#3A5068] mb-2";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    topic: topics[0],
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="pb-20 sm:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="card p-7 sm:p-9 bg-white">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#EEF4FB] flex items-center justify-center mb-6">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="14" r="13" stroke="#1B65A6" strokeWidth="2" />
                      <path d="M8.5 14.5l3.5 3.5 7-8" stroke="#1B65A6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#0E1A28] mb-3" style={{ fontFamily: "var(--font-syne)" }}>
                    Thanks, we&apos;ll be in touch.
                  </h3>
                  <p className="text-[#4A6278] text-[14.5px] leading-relaxed max-w-sm mb-7" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                    We received your message and a member of our California team will reach out
                    within one business day. If it&apos;s urgent, feel free to call us directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <MotionLink href="tel:8056582329"
                      className="inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px] shadow-sm"
                      style={{ fontFamily: "var(--font-dm)" }}>
                      <PhoneIcon />
                      (805) 658-2329
                    </MotionLink>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", company: "", email: "", phone: "", topic: topics[0], message: "" });
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-white border border-[#C0D2E5] hover:border-[#1B65A6] hover:text-[#1B65A6] text-[#3A5068] font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px]"
                      style={{ fontFamily: "var(--font-dm)" }}>
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="section-label mb-3">Send A Message</p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E1A28] tracking-tight mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    Tell us about your business
                  </h2>
                  <p className="text-[#7290AA] text-[13.5px] mb-7" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                    Fill out the form and our team will follow up with next steps.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>Full name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="Jane Rivera"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Company</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          placeholder="Your business name"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>Email</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="jane@company.com"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="(805) 555-0100"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>What are you interested in?</label>
                      <select
                        value={form.topic}
                        onChange={(e) => update("topic", e.target.value)}
                        className={inputClasses + " appearance-none"}
                      >
                        {topics.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClasses}>Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Tell us a bit about what you're looking for..."
                        className={inputClasses + " resize-none"}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-7 py-4 rounded-xl transition-all shadow-md shadow-blue-200/60 text-[14.5px]"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      Send Message
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* Info panel */}
          <Stagger className="lg:col-span-2 space-y-4">
            <StaggerItem>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E2EDF6]">
                <Image src="/atlantis/managed-it-services.png" alt="Atlantis Utility support team" fill className="object-cover" />
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card p-6 bg-white flex items-start gap-4">
                <div className="service-icon"><PhoneIcon /></div>
                <div>
                  <div className="text-[13px] font-bold text-[#0E1A28] mb-1" style={{ fontFamily: "var(--font-syne)" }}>Call us</div>
                  <a href="tel:8056582329" className="text-[15px] font-semibold text-[#1B65A6] hover:text-[#134d80] transition-colors" style={{ fontFamily: "var(--font-dm)" }}>
                    (805) 658-2329
                  </a>
                  <p className="text-[12.5px] text-[#7290AA] mt-1" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                    Mon &ndash; Fri, 8 AM &ndash; 5 PM
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card p-6 bg-white flex items-start gap-4">
                <div className="service-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2a6 6 0 0 0-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 0 0-6-6Z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="10" cy="8" r="2" fill="currentColor" opacity="0.7" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0E1A28] mb-1" style={{ fontFamily: "var(--font-syne)" }}>Visit our office</div>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                    className="text-[14px] text-[#4A6278] hover:text-[#1B65A6] transition-colors leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                    1445 Donlon St<br />Ventura, CA 93003
                  </a>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card p-6 bg-white flex items-start gap-4">
                <div className="service-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10 5v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0E1A28] mb-1" style={{ fontFamily: "var(--font-syne)" }}>Business hours</div>
                  <div className="text-[13px] text-[#4A6278] space-y-0.5" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                    <div className="flex justify-between gap-6"><span>Monday &ndash; Friday</span><span className="text-[#0E1A28] font-medium">8 AM &ndash; 5 PM</span></div>
                    <div className="flex justify-between gap-6"><span>Saturday &ndash; Sunday</span><span className="text-[#7290AA]">Closed</span></div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#0E1A28] rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#1B65A6]/20 blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2 mb-2 relative">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#7EB8E8]" style={{ fontFamily: "var(--font-dm)" }}>
                    24/7 Support
                  </span>
                </div>
                <p className="text-white text-[14px] leading-relaxed relative" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                  Existing client with an urgent issue? Call us any time &mdash; our support team never sleeps.
                </p>
              </div>
            </StaggerItem>
          </Stagger>

        </div>
      </div>
    </section>
  );
}
