import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const testimonials = [
  {
    quote:
      "Atlantis migrated our whole office to hosted VoIP over a weekend with zero downtime. Their technician stayed late to make sure every extension worked before Monday morning.",
    author: "Diane Coleman",
    role: "Office Manager",
    company: "Coleman & Reyes Law",
    initials: "DC",
    rating: 5,
  },
  {
    quote:
      "We switched to Atlantis for managed IT after years of piecemeal support. Response times are fast and they actually explain what they're doing instead of talking over our heads.",
    author: "Marcus Webb",
    role: "Operations Director",
    company: "Westline Logistics",
    initials: "MW",
    rating: 5,
  },
  {
    quote:
      "Honest pricing was the deciding factor. No surprise fees on our internet upgrade, and the LTE backup already saved us during an outage last month.",
    author: "Sofia Alvarez",
    role: "Owner",
    company: "Alvarez Dental Group",
    initials: "SA",
    rating: 5,
  },
];

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

export default function SampleTestimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">

        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label justify-center mb-3"><span>What Clients Say</span></p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1A28] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}>
            Trusted by businesses
            <br />across California.
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="card p-7 bg-white flex flex-col gap-5 h-full">
                <Stars count={t.rating} />
                <p className="text-[14px] text-[#4A6278] leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E2EDF6]">
                  <div className="w-9 h-9 rounded-full bg-[#EEF4FB] flex items-center justify-center text-[#1B65A6] text-[12px] font-bold flex-shrink-0"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#0E1A28]" style={{ fontFamily: "var(--font-syne)" }}>
                      {t.author}
                    </div>
                    <div className="text-[11.5px] text-[#7290AA]" style={{ fontFamily: "var(--font-dm)" }}>
                      {t.role}, {t.company}
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
