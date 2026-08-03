import type { BlogArticle } from "./data";
import { Reveal } from "@/components/motion/Reveal";

export default function ArticleHero({ article }: { article: BlogArticle }) {
  return (
    <section className="relative pt-28 pb-16 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EEF4FB] blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, #1B65A6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="max-w-4xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8 relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] text-[#7290AA] mb-8 flex-wrap" style={{ fontFamily: "var(--font-dm)" }}>
          <a href="/" className="hover:text-[#1B65A6] transition-colors">Home</a>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <a href="/blog" className="hover:text-[#1B65A6] transition-colors">Blog</a>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[#3A5068] font-medium truncate max-w-[220px] sm:max-w-none">{article.title}</span>
        </div>

        <Reveal>
          <span className="inline-flex items-center gap-2 bg-[#EEF4FB] border border-[#C0D2E5] text-[#1B65A6] text-[12px] font-semibold px-3 py-1 rounded-full mb-5"
            style={{ fontFamily: "var(--font-dm)" }}>
            {article.category}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[50.5px] font-extrabold text-[#0E1A28] tracking-tight leading-[1.12] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}>
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-[14.5px] text-[#7290AA]" style={{ fontFamily: "var(--font-dm)" }}>
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#C0D2E5]" />
            <span>{article.readTime}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
