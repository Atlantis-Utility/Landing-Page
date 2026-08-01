import { newsItems } from "./data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function NewsList() {
  return (
    <section className="py-20 sm:py-24 bg-[#F5F8FC]">
      <div className="max-w-4xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Stagger className="space-y-5">
          {newsItems.map((item) => (
            <StaggerItem key={item.title}>
              <article className="card p-7 bg-white">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="inline-flex items-center gap-2 bg-[#EEF4FB] border border-[#C0D2E5] text-[#1B65A6] text-[11px] font-semibold px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-dm)" }}>
                    {item.tag}
                  </span>
                  <span className="text-[12px] text-[#7290AA]" style={{ fontFamily: "var(--font-dm)" }}>
                    {item.date}
                  </span>
                </div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0E1A28] tracking-tight mb-2.5"
                  style={{ fontFamily: "var(--font-syne)" }}>
                  {item.title}
                </h2>
                <p className="text-[14.5px] text-[#4A6278] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                  {item.summary}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
