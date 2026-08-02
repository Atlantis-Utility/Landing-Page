import { Reveal } from "@/components/motion/Reveal";
import { reviews, averageRating } from "./data";

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, j) => (
        <svg key={j} width={size} height={size} viewBox="0 0 13 13" fill="none">
          <path
            d="M6.5 1.5l1.3 3.8H12l-3.3 2.4 1.3 3.9L6.5 9.2l-3.5 2.4 1.3-3.9L1 5.3h4.2z"
            fill={j < Math.round(count) ? "#1B65A6" : "#E2EDF6"}
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsHero() {
  const avg = averageRating();

  return (
    <section className="relative pt-28 pb-16 bg-white overflow-hidden">
      {/* Background geometry */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EEF4FB] blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#EEF4FB] blur-[80px] opacity-40 translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, #1B65A6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] text-[#7290AA] mb-8" style={{ fontFamily: "var(--font-dm)" }}>
          <a href="/" className="hover:text-[#1B65A6] transition-colors">Home</a>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[#3A5068] font-medium">Reviews</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-end">
          <Reveal className="lg:col-span-2 max-w-2xl">
            <p className="section-label mb-4">Customer Reviews</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0E1A28] tracking-tight leading-[1.06] mb-6"
              style={{ fontFamily: "var(--font-syne)" }}>
              What businesses say
              <br />
              <span className="text-[#1B65A6]">about working with us.</span>
            </h1>
            <p className="text-[#4A6278] text-[17px] leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              A closer look at how California businesses have used our VoIP, internet, and
              managed IT services &mdash; in their own words.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-7 bg-white flex flex-col items-center text-center">
              <div className="text-5xl font-extrabold text-[#0E1A28] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                {avg.toFixed(1)}
              </div>
              <Stars count={avg} size={18} />
              <p className="text-[12.5px] text-[#7290AA] mt-3" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                Average rating from {reviews.length} sample reviews below
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
