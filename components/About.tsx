import { about } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-block">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          label="Statement"
          title="映像の中にある人の動きを、判断に使える情報へ変換する。"
          lead="画像処理・AIを軸に、動画から得られる情報を社会や現場で使える形に整理することに関心があります。"
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
