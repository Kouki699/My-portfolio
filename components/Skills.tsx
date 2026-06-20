import { Code2 } from "lucide-react";
import { skills } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-block bg-soft">
      <div className="section-shell">
        <SectionHeading
          label="Skills"
          title="分析、実装、可視化を横断する技術スタック。"
          lead="画像処理、機械学習、アプリ開発、資料作成まで、研究と開発の場面で使ってきたスキルです。"
        />
        <div className="mt-14 flex flex-wrap border-t border-line">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex min-h-20 min-w-40 flex-1 items-center gap-3 border-b border-r border-line bg-white px-5 py-5"
            >
              <Code2 className="shrink-0 text-accent" size={20} />
              <span className="text-sm font-black text-navy">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
