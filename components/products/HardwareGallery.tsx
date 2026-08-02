import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const hardware = [
  { name: "Business Desk Phones", desc: "Desk phones for every extension.", src: "/atlantis/business-desk-phone.jpg" },
  { name: "Business Cordless Phones", desc: "Cordless handsets for mobility.", src: "/atlantis/business-cordless-phone.jpg" },
  { name: "Managed Network Switches", desc: "Managed network switching.", src: "/atlantis/managed-network-switch.jpg" },
  { name: "Business Wi-Fi Access Points", desc: "Business-grade Wi-Fi coverage.", src: "/atlantis/business-wifi-access-point.jpg" },
  { name: "Business Firewalls", desc: "Network security and threat protection.", src: "/atlantis/business-firewall.jpg" },
  { name: "5G Business Routers", desc: "Wireless failover and backup internet.", src: "/atlantis/5g-business-router.jpg" },
];

export default function HardwareGallery() {
  return (
    <section className="py-16 sm:py-20 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Reveal className="max-w-2xl mb-10">
          <p className="section-label mb-3">Hardware We Install</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E1A28] tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
            Real hardware, sourced and configured by our team
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {hardware.map((h) => (
            <StaggerItem key={h.name}>
              <div className="card bg-white p-4 flex flex-col items-center text-center h-full">
                <div className="w-full aspect-square flex items-center justify-center mb-3">
                  <Image src={h.src} alt={h.name} width={160} height={160} className="max-w-full max-h-full h-auto w-auto object-contain" />
                </div>
                <div className="text-[12.5px] font-bold text-[#0E1A28] leading-snug" style={{ fontFamily: "var(--font-syne)" }}>
                  {h.name}
                </div>
                <div className="text-[11px] text-[#7290AA] mt-1 leading-snug" style={{ fontFamily: "var(--font-dm)" }}>
                  {h.desc}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
