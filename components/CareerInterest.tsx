import { BriefcaseBusiness } from "lucide-react";
import { careerInterests } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function CareerInterest() {
  return (
    <section id="career" className="section-block">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          label="Career Interest"
          title="興味のある職種・領域"
          lead="技術で現場の課題を整理し、使いやすい仕組みや分析に落とし込む仕事に関心があります。"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {careerInterests.map((interest) => (
            <div
              key={interest}
              className="flex items-center gap-3 rounded-lg border border-line bg-white p-5 shadow-sm"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-soft text-accent">
                <BriefcaseBusiness size={20} />
              </div>
              <span className="text-sm font-black text-navy">{interest}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
