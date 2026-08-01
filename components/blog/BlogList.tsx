import { blogArticles } from "./data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function BlogList() {
  return (
    <section className="py-20 sm:py-24 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogArticles.map((a) => (
            <StaggerItem key={a.slug}>
              <a href={`/blog/${a.slug}`} className="card p-6 bg-white flex flex-col h-full">
                <span className="inline-flex items-center gap-2 bg-[#EEF4FB] border border-[#C0D2E5] text-[#1B65A6] text-[11px] font-semibold px-3 py-1 rounded-full mb-4 w-fit"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  {a.category}
                </span>
                <h2 className="text-[17px] font-bold text-[#0E1A28] tracking-tight leading-snug mb-2.5"
                  style={{ fontFamily: "var(--font-syne)" }}>
                  {a.title}
                </h2>
                <p className="text-[13.5px] text-[#7290AA] leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                  {a.excerpt}
                </p>
                <div className="flex items-center justify-between text-[12px] text-[#7290AA] pt-4 border-t border-[#E2EDF6]"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  <span>{a.date}</span>
                  <span>{a.readTime}</span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
