import type { BlogArticle } from "./data";
import { Reveal } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";

export default function ArticleBody({ article }: { article: BlogArticle }) {
  return (
    <section className="pb-20 sm:pb-28 bg-white">
      <div className="max-w-4xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">

          {/* Body copy */}
          <Reveal>
            <article className="space-y-5">
              {article.body.map((para, i) => (
                <p key={i} className="text-[17px] text-[#4A6278] leading-[1.8]" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                  {para}
                </p>
              ))}

              <div className="pt-6">
                <a href="/blog"
                  className="inline-flex items-center gap-2 text-[#1B65A6] font-semibold text-[15.5px]"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11 7H3M6 3.5 2.5 7 6 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Back to all articles
                </a>
              </div>
            </article>
          </Reveal>

          {/* Sidebar CTA */}
          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <aside className="card p-6 bg-[#F5F8FC]">
              <h3 className="text-[16.5px] font-bold text-[#0E1A28] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                Have questions about your setup?
              </h3>
              <p className="text-[14.5px] text-[#7290AA] leading-relaxed mb-5" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                Talk to our team about what makes sense for your business, at no cost.
              </p>
              <div className="flex flex-col gap-2.5">
                <MotionLink href="tel:8056582329"
                  className="inline-flex items-center justify-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-5 py-3 rounded-xl transition-all text-[15px]"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  (805) 658-2329
                </MotionLink>
                <MotionLink href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-[#C0D2E5] hover:border-[#1B65A6] hover:text-[#1B65A6] text-[#3A5068] font-semibold px-5 py-3 rounded-xl transition-all text-[15px]"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  Schedule a Consultation
                </MotionLink>
              </div>
            </aside>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
