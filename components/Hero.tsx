import Image from "next/image";
import { ArrowRight, Github, Mail } from "lucide-react";
import { heroStats, highlights, profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="section-shell grid min-h-[calc(100vh-5.25rem)] items-center gap-12 py-14 lg:grid-cols-[0.96fr_1.04fr] lg:py-0">
        <div className="relative z-10 py-10 lg:py-24">
          <p className="section-label">Research / Computer Vision / AI</p>
          <h1 className="mt-10 max-w-5xl text-[2.65rem] font-black leading-[1.22] tracking-normal text-navy sm:text-6xl lg:text-[4.8rem] xl:text-[5.35rem]">
            <span className="block whitespace-nowrap">アルゴリズムで、</span>
            <span className="block whitespace-nowrap">人の動きを</span>
            <span className="block whitespace-nowrap">理解可能にする</span>
          </h1>
          <p className="mt-12 text-xl font-black text-navy sm:text-2xl">
            {profile.name}
          </p>
          <p className="mt-3 text-sm font-bold text-accent sm:text-base">
            {profile.affiliation}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-ink">
            {profile.summary}
          </p>

          <div className="mt-12 grid max-w-2xl border-y border-line sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="border-b border-line py-5 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-steel">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-black text-navy">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#research"
              className="inline-flex items-center gap-2 bg-navy px-7 py-4 text-sm font-black text-white transition hover:bg-accent"
            >
              研究内容
              <ArrowRight size={17} />
            </a>
            <a
              href={profile.contact.github}
              className="inline-flex items-center gap-2 border border-line bg-white px-7 py-4 text-sm font-black text-navy transition hover:border-navy"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-2 border border-line bg-white px-7 py-4 text-sm font-black text-navy transition hover:border-navy"
            >
              <Mail size={17} />
              Mail
            </a>
          </div>
        </div>

        <div className="relative -mr-10 hidden h-full min-h-[42rem] lg:block">
          <div className="hero-slab h-full">
            <div className="absolute left-[30%] top-[20%] h-[28rem] w-[42rem] opacity-80">
              <Image
                src="/hero-research.svg"
                alt="画像処理と身体動作解析をイメージした研究ビジュアル"
                width={1200}
                height={900}
                priority
                unoptimized
                className="h-full w-full object-cover grayscale invert"
              />
            </div>
            <div className="absolute bottom-10 left-[23%] right-28 text-white">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white/60">
                Vision
              </p>
              <p className="mt-3 max-w-xs text-xl font-black leading-snug">
                Motion data for better decision making.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-bar">
        <div className="section-shell flex min-h-16 items-center gap-4">
          <span className="slash-mark h-7" aria-hidden="true" />
          <p className="text-lg font-black text-navy">研究について</p>
        </div>
      </div>

      <div className="section-shell py-8 lg:hidden">
        <div className="grid gap-0 border-y border-line">
          {highlights.map((item, index) => (
            <div
              key={item}
              className="grid grid-cols-[3rem_1fr] border-b border-line py-4 last:border-b-0"
            >
              <span className="text-xs font-black text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-black text-navy">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
