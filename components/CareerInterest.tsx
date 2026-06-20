import { BriefcaseBusiness } from "lucide-react";
import { careerInterests } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function CareerInterest() {
  return (
    <section id="career" className="section-block">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          label="Interest"
          title="技術で、現場の判断と業務改善を支える。"
          lead="技術で現場の課題を整理し、使いやすい仕組みや分析に落とし込む仕事に関心があります。"
        />
        <div className="grid border-t border-line sm:grid-cols-2">
          {careerInterests.map((interest) => (
            <div
              key={interest}
              className="flex items-center gap-4 border-b border-line py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-soft text-accent">
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
