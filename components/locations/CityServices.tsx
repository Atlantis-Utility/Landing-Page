import type { Location } from "./data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function CityServices({ location }: { location: Location }) {
  return (
    <section className="py-20 sm:py-24 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Reveal className="max-w-2xl mb-12">
          <p className="section-label mb-3">Available Services</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0E1A28] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}>
            What we set up for
            <br />
            {location.city} businesses
          </h2>
          <p className="text-[#4A6278] text-[16.5px] leading-relaxed"
            style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
            The most requested services for businesses in and around {location.city}.
            Availability may vary by exact address — call us to confirm what's ready to go
            at your location.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {location.services.map((s) => (
            <StaggerItem key={s.label}>
              <a href={s.href} className="card p-5 bg-white flex items-center gap-4">
                <div className="service-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[16px] font-semibold text-[#0E1A28]" style={{ fontFamily: "var(--font-dm)" }}>
                  {s.label}
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
