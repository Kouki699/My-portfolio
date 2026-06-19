import { Code2 } from "lucide-react";
import { skills } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-block bg-soft">
      <div className="section-shell">
        <SectionHeading
          label="Skills"
          title="研究・開発で使用している技術"
          lead="画像処理、機械学習、アプリ開発、資料作成まで、研究と開発の場面で使ってきたスキルです。"
        />
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex min-h-20 items-center gap-3 rounded-lg border border-line bg-white px-4 py-4 shadow-sm"
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
