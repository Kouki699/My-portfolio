import { about } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-block">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          label="Statement"
          title={["画像処理・AIを学び、", "身体動作を定量化する。"]}
          lead="研究内容、開発経験、志望領域が短時間でも伝わるように、これまでの取り組みを整理しています。"
        />
        <div className="border-t border-line">
          {about.map((item, index) => (
            <div key={item} className="grid grid-cols-[4rem_1fr] border-b border-line py-6">
              <span className="text-sm font-black text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-lg font-black leading-8 text-navy">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
