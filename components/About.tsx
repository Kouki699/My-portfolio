import { CheckCircle2 } from "lucide-react";
import { about } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-block">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          label="About"
          title="研究と開発の両面から、人の動きを理解する。"
          lead="画像処理・AIを軸に、動画から得られる情報を社会や現場で使える形に整理することに関心があります。"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {about.map((item) => (
            <div key={item} className="info-card">
              <CheckCircle2 className="text-accent" size={22} />
              <p className="mt-4 text-sm font-bold leading-7 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
