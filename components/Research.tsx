import { Activity, BarChart3 } from "lucide-react";
import { research } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [Activity, BarChart3];

export function Research() {
  return (
    <section id="research" className="section-block bg-soft">
      <div className="section-shell">
        <SectionHeading
          label="Research"
          title="動画から身体動作を数値化する研究"
          lead="専門外の人にも状況が伝わるように、動画から特徴量を抽出し、動きの状態や変化をわかりやすく評価することを目指しています。"
        />
        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {research.map((item, index) => {
            const Icon = icons[index] ?? Activity;

            return (
              <article key={item.title} className="info-card">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-navy text-white">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-navy">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-steel">{item.description}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-2 sm:grid-cols-3">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-md bg-soft px-3 py-2 text-xs font-bold leading-5 text-steel"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
