import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { careerInterests, careerVision, strengths } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function CareerInterest() {
  return (
    <section id="career" className="section-block">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          label="Strengths / Career Vision"
          title={["強みを活かし、", "現場に届く技術へ。"]}
          lead={careerVision[0]}
        />
        <div className="space-y-10">
          <div className="border-t border-line">
            {strengths.map((strength, index) => (
              <div
                key={strength}
                className="grid grid-cols-[3.5rem_1fr] border-b border-line py-5"
              >
                <span className="text-sm font-black text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-accent" size={18} />
                  <p className="text-base font-black leading-7 text-navy">
                    {strength}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-navy pt-7">
            <p className="max-w-3xl text-base leading-8 text-steel">
              {careerVision[1]}
            </p>
            <div className="mt-8 grid border-t border-line sm:grid-cols-2">
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
        </div>
      </div>
    </section>
  );
}
