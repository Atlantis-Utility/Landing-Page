import Image from "next/image";
import { locations } from "./data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function LocationsGrid() {
  return (
    <section className="py-20 sm:py-24 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc) => (
            <StaggerItem key={loc.slug}>
              <a
                href={`/locations/${loc.slug}`}
                className={`card overflow-hidden flex flex-col h-full ${loc.home ? "bg-[#1B65A6] border-[#134d80] shadow-lg shadow-blue-200/50" : "bg-white"}`}
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image src={`/atlantis/${loc.slug}.jpg`} alt={`${loc.city}, California`} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${loc.home ? "bg-white/70" : "bg-[#1B65A6]/40"}`} />
                    <h3 className={`text-[16px] font-bold ${loc.home ? "text-white" : "text-[#0E1A28]"}`}
                      style={{ fontFamily: "var(--font-syne)" }}>
                      {loc.city}, CA
                    </h3>
                  </div>
                  {loc.home && (
                    <span className="text-[9px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full border border-white/25">
                      HQ
                    </span>
                  )}
                </div>
                <p className={`text-[13px] leading-relaxed mb-5 flex-1 ${loc.home ? "text-blue-100/90" : "text-[#7290AA]"}`}
                  style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                  {loc.short}
                </p>
                <span className={`inline-flex items-center gap-1.5 text-[13px] font-semibold ${loc.home ? "text-white" : "text-[#1B65A6]"}`}
                  style={{ fontFamily: "var(--font-dm)" }}>
                  View {loc.city} services
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
