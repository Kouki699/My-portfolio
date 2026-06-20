import { Github } from "lucide-react";
import { projects } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

function isAvailable(url: string) {
  return url.trim().length > 0;
}

export function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="section-shell">
        <SectionHeading
          label="Projects"
          title={["研究・開発の経験を、", "実装と発表につなげる。"]}
          lead="研究だけでなく、アプリ開発や発表資料作成など、チームで形にする経験も掲載しています。"
        />
        <div className="mt-14 border-t border-navy">
          {projects.map((project) => {
            const available = isAvailable(project.githubUrl);

            return (
              <article
                key={project.title}
                className="grid gap-8 border-b border-line py-9 lg:grid-cols-[1fr_1.25fr_14rem]"
              >
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-accent">
                    {project.type}
                  </p>
                  <h3 className="mt-4 text-2xl font-black leading-tight text-navy sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <div>
                  <p className="text-base leading-8 text-steel">{project.description}</p>
                  <p className="mt-5 border-l-2 border-accent pl-4 text-sm font-bold leading-7 text-ink">
                    担当：{project.role}
                  </p>
                </div>
                <div className="flex items-start lg:justify-end">
                  {available ? (
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-black text-white transition hover:bg-accent"
                    >
                      <Github size={17} />
                      GitHubを見る
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-5 py-3 text-sm font-black text-steel">
                      <Github size={17} />
                      URL追加予定
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
