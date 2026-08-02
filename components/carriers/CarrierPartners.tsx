import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const partners = [
  { name: "Spectrum Business", src: "/atlantis/spectrum-business.png" },
  { name: "Frontier Business", src: "/atlantis/frontier-business.png" },
  { name: "T-Mobile for Business", src: "/atlantis/tmobile-business.png" },
];

export default function CarrierPartners() {
  return (
    <section className="py-16 sm:py-20 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <p className="section-label justify-center mb-3">
            <span>Carrier Partners</span>
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E1A28] tracking-tight mb-3"
            style={{ fontFamily: "var(--font-syne)" }}>
            Backed by carriers businesses already trust
          </h2>
          <p className="text-[#4A6278] text-[14.5px] leading-relaxed" style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            We work directly with major carrier partners to design and provision the wired
            and wireless connections behind your service, and not all carriers are available
            in every area.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {partners.map((p) => (
            <StaggerItem key={p.name}>
              <div className="card bg-white p-6 flex items-center justify-center h-full">
                <Image src={p.src} alt={p.name} width={220} height={140} className="w-full h-auto object-contain" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
