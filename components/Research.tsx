import { research } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function Research() {
  return (
    <section id="research" className="section-block bg-white">
      <div className="section-shell">
        <SectionHeading
          label="Research"
          title={["動画から身体動作を", "数値化する研究"]}
          lead="専門外の人にも状況が伝わるように、動画から特徴量を抽出し、動きの状態や変化をわかりやすく評価することを目指しています。"
        />
        <div className="mt-14 border-t border-navy">
          {research.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-8 border-b border-line py-10 lg:grid-cols-[12rem_1fr_0.9fr]"
            >
              <div>
                <p className="text-5xl font-black text-navy">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-accent">
                  {item.category}
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-black leading-tight text-navy sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-8 text-steel">
                  {item.description}
                </p>
              </div>
              <ul className="space-y-0 border-t border-line lg:border-t-0">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="border-b border-line py-4 text-sm font-bold text-ink last:border-b-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
