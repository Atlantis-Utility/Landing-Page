import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const partners = [
  { name: "Spectrum Business", src: "/atlantis/spectrum-business-logo.png" },
  { name: "Frontier Business", src: "/atlantis/frontier-business-logo.png" },
  { name: "T-Mobile for Business", src: "/atlantis/tmobile-business-logo.png" },
  { name: "AT&T Business", src: "/atlantis/att-business-logo.png" },
  { name: "Cox Business", src: "/atlantis/cox-business-logo.png" },
];

export default function CarrierPartners() {
  return (
    <section className="py-16 sm:py-20 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <p className="section-label justify-center mb-3">
            <span>Our Carrier Partners</span>
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
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
