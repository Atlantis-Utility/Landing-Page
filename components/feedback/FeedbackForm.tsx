"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const inputClasses =
  "w-full bg-[#F5F8FC] border border-[#E2EDF6] focus:border-[#1B65A6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1B65A6]/15 rounded-xl px-4 py-3 text-[14px] text-[#0E1A28] placeholder:text-[#7290AA] transition-all";

const labelClasses = "block text-[13px] font-semibold text-[#3A5068] mb-2";

function StarPicker({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hover, setHover] = useState<number | null>(null);
  const active = hover ?? value;

  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(null)}
          className="p-0.5"
        >
          <svg width="26" height="26" viewBox="0 0 13 13" fill="none">
            <path
              d="M6.5 1.5l1.3 3.8H12l-3.3 2.4 1.3 3.9L6.5 9.2l-3.5 2.4 1.3-3.9L1 5.3h4.2z"
              fill={n <= active ? "#1B65A6" : "#E2EDF6"}
              className="transition-colors"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    service: "Business VoIP",
    rating: 5,
    review: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Reveal className="card p-7 sm:p-9 bg-white">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-10">
              <div className="w-16 h-16 rounded-2xl bg-[#EEF4FB] flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" stroke="#1B65A6" strokeWidth="2" />
                  <path d="M8.5 14.5l3.5 3.5 7-8" stroke="#1B65A6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[22px] font-extrabold text-[#0E1A28] mb-3" style={{ fontFamily: "var(--font-syne)" }}>
                Thanks for the feedback!
              </h3>
              <p className="text-[#4A6278] text-[14.5px] leading-relaxed max-w-sm mb-7" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                We appreciate you taking the time to share your experience. Our team reviews every
                submission and uses it to keep improving our service across California.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", company: "", email: "", service: "Business VoIP", rating: 5, review: "" });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px] shadow-sm"
                style={{ fontFamily: "var(--font-dm)" }}>
                Submit another review
              </button>
            </div>
          ) : (
            <>
              <p className="section-label mb-3">Share Your Experience</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E1A28] tracking-tight mb-2"
                style={{ fontFamily: "var(--font-syne)" }}>
                Leave a review
              </h2>
              <p className="text-[#7290AA] text-[13.5px] mb-7" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                Let us know how your service, installation, or support experience went.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelClasses}>Your rating</label>
                  <StarPicker value={form.rating} onChange={(n) => update("rating", n)} />
                </div>

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
                    <label className={labelClasses}>Service used</label>
                    <select
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className={inputClasses + " appearance-none"}
                    >
                      {[
                        "Business VoIP",
                        "Hosted VoIP PBX",
                        "High-Speed Internet",
                        "Managed IT / MSP",
                        "Custom Software Development",
                        "Structured Cabling",
                        "Help Desk & Desk Support",
                        "Other",
                      ].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Your review</label>
                  <textarea
                    required
                    rows={5}
                    value={form.review}
                    onChange={(e) => update("review", e.target.value)}
                    placeholder="Tell us about your experience with our team..."
                    className={inputClasses + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-7 py-4 rounded-xl transition-all shadow-md shadow-blue-200/60 text-[14.5px]"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Submit Review
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
