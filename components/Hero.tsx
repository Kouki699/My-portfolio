import Image from "next/image";
import { ArrowRight, Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="border-b border-line bg-white">
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 md:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <div>
          <p className="section-label">Research Portfolio</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-normal text-navy sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-base font-bold text-accent sm:text-lg">
            {profile.affiliation}
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-ink sm:text-xl">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-steel sm:text-base">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-accent"
            >
              研究を見る
              <ArrowRight size={17} />
            </a>
            <a
              href={profile.contact.github}
              className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-bold text-navy transition hover:border-navy"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-bold text-navy transition hover:border-navy"
            >
              <Mail size={17} />
              Mail
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] border border-line bg-soft" />
          <div className="relative overflow-hidden rounded-lg border border-line bg-white shadow-calm">
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
          <div className="relative mt-4 grid grid-cols-3 gap-3">
            {["Image Processing", "AI Analysis", "Human Motion"].map((item) => (
              <div
                key={item}
                className="rounded-md border border-line bg-white px-3 py-3 text-center text-[11px] font-bold text-steel shadow-sm sm:text-xs"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
