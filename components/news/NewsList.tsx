import Image from "next/image";
import { newsItems } from "./data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function NewsList() {
  return (
    <section className="py-20 sm:py-24 bg-[#F5F8FC]">
      <div className="max-w-6xl mx-auto px-2.5 sm:px-4 lg:px-5 xl:px-8">
        <Stagger className="space-y-5">
          {newsItems.map((item) => (
            <StaggerItem key={item.title}>
              <article className="card bg-white overflow-hidden border-t-4 border-t-[#0E1A28]">
                {item.image && (
                  <div className="w-full aspect-[21/9] bg-[#F5F8FC] border-b border-[#E2EDF6] flex items-center justify-center">
                    <Image src={item.image} alt={item.title} width={280} height={120} className="w-auto h-auto max-w-[280px] max-h-[110px] object-contain" />
                  </div>
                )}
                <div className="p-8 sm:p-10">
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-[#1B65A6] tracking-tight mb-6"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    {item.title}
                  </h2>
                  <div className="space-y-5 text-[17px] text-[#22303E] leading-relaxed" style={{ fontFamily: "var(--font-dm)" }}>
                    <p>
                      We are happy to announce that <strong>Atlantis Utility, INC</strong> and{" "}
                      <strong>Affordable Telephone</strong> have joined forces.
                    </p>
                    <p>
                      Affordable Telephone and Atlantis Utility, INC will continue to sell, support, and
                      service: NEC, ESI, Panasonic, and AVAYA Communication systems.
                    </p>
                    <p>
                      <strong>Atlantis Utility, INC</strong> brings much more than just phone system
                      services, such as Telecom Cost Analysis, Contract Negotiations, Hosted VoIP
                      Services, Cost Reduction, Security Camera Systems, Voice and Data Network Cabling,
                      service, repair and much more. Please browse our website to learn more about what
                      Atlantis Utility has to offer you and your company.
                    </p>
                    <p>
                      Jack Green has retired from the day-to-day operation but will be available to
                      consult with Atlantis Utility, INC/ Affordable Telephone on an as needed basis.
                    </p>
                    <p className="pt-4">
                      <strong>
                        Our goal is to continue providing Affordable Telephone Customers the Highest
                        Quality Solutions and Quality Service you have come to rely on over the past 38
                        years.
                      </strong>
                    </p>
                    <p>
                      Please feel free to call us with any questions or if you would like us to stop by
                      and say hi!
                    </p>
                    <p>
                      <strong>Our number has stayed the same (805) 658-2329.</strong>
                    </p>
                    <p>
                      We look forward to seeing you soon.
                      <br />
                      Sincerely,
                      <br />
                      Atlantis Utility Inc.
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
