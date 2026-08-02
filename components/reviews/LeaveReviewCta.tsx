import { Reveal } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";

export default function LeaveReviewCta() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Reveal className="card p-8 sm:p-10 bg-[#F5F8FC] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E1A28] tracking-tight mb-2"
              style={{ fontFamily: "var(--font-syne)" }}>
              Had a good experience with our team?
            </h2>
            <p className="text-[#4A6278] text-[14.5px] leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              We&apos;d love to hear about it. Share a quick review and help other California
              businesses know what to expect.
            </p>
          </div>
          <MotionLink href="/feedback"
            className="inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-7 py-4 rounded-xl transition-all text-[14.5px] shadow-sm flex-shrink-0"
            style={{ fontFamily: "var(--font-dm)" }}>
            Leave a Review
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MotionLink>
        </Reveal>
      </div>
    </section>
  );
}
