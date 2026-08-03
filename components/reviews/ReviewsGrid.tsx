import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { reviews } from "./data";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, j) => (
        <svg key={j} width="14" height="14" viewBox="0 0 13 13" fill="none">
          <path
            d="M6.5 1.5l1.3 3.8H12l-3.3 2.4 1.3 3.9L6.5 9.2l-3.5 2.4 1.3-3.9L1 5.3h4.2z"
            fill={j < count ? "#1B65A6" : "#E2EDF6"}
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsGrid() {
  return (
    <section className="py-16 sm:py-20 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Reveal className="max-w-2xl mb-12">
          <p className="section-label mb-3">From Our Clients</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0E1A28] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}>
            Reviews from businesses across California
          </h2>
          <p className="text-[#4A6278] text-[16.5px] leading-relaxed"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            A sample of the industries and services we work with most &mdash; property management
            to veterinary practices, restaurants to construction crews.
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <StaggerItem key={i}>
              <div className="card p-7 bg-white flex flex-col gap-5 h-full">
                <div className="flex items-center justify-between gap-2">
                  <Stars count={r.rating} />
                  <span className="text-[11.5px] font-semibold text-[#1B65A6] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-dm)" }}>
                    {r.service}
                  </span>
                </div>
                <p className="text-[15.5px] text-[#4A6278] leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E2EDF6]">
                  <div className="w-9 h-9 rounded-full bg-[#EEF4FB] flex items-center justify-center text-[#1B65A6] text-[13px] font-bold flex-shrink-0"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-[14.5px] font-bold text-[#0E1A28]" style={{ fontFamily: "var(--font-syne)" }}>
                      {r.author}
                    </div>
                    <div className="text-[12.5px] text-[#7290AA]" style={{ fontFamily: "var(--font-dm)" }}>
                      {r.role}, {r.company}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
