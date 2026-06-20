import { achievements } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function Achievements() {
  return (
    <section id="achievements" className="section-block bg-soft">
      <div className="section-shell">
        <SectionHeading
          label="Outcomes"
          title="研究と開発を、成果として伝える。"
          lead="ハッカソンでの受賞や決勝進出など、チームで取り組んだ開発経験を実績として整理しています。"
        />
        <div className="mt-14 grid border-y border-line bg-white lg:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.value}
              className="border-b border-line p-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="text-4xl font-black leading-tight text-navy sm:text-5xl">
                {item.value}
              </p>
              <p className="mt-5 text-sm font-bold leading-7 text-steel">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
