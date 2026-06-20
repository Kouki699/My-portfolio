import Image from "next/image";
import { ArrowRight, Github, Mail } from "lucide-react";
import { heroStats, highlights, profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="section-label">Kouki Uchikura / Research & Engineering</p>
          <h1 className="text-balance mt-7 max-w-5xl text-5xl font-black leading-[1.05] tracking-normal text-navy sm:text-7xl lg:text-8xl">
            Human Motion
            <br />
            Analysis with AI.
          </h1>
          <p className="mt-8 text-xl font-black text-navy sm:text-2xl">
            {profile.name}
          </p>
          <p className="mt-3 text-sm font-bold text-accent sm:text-base">
            {profile.affiliation}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-ink sm:text-xl">
            {profile.summary}
          </p>

          <div className="mt-10 grid max-w-2xl border-y border-line sm:grid-cols-3">
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
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-black text-white transition hover:bg-accent"
            >
              Research
              <ArrowRight size={17} />
            </a>
            <a
              href={profile.contact.github}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-black text-navy transition hover:border-navy"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-black text-navy transition hover:border-navy"
            >
              <Mail size={17} />
              Mail
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative border border-line bg-soft p-5">
            <Image
              src="/hero-research.svg"
              alt="画像処理と身体動作解析をイメージした研究ビジュアル"
              width={1200}
              height={900}
              priority
              unoptimized
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
          <div className="relative mt-5 grid gap-0 border-y border-line">
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
      </div>
    </section>
  );
}
