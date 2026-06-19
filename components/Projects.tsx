import { ExternalLink, Github } from "lucide-react";
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
          title="開発経験とチームでの取り組み"
          lead="研究だけでなく、アプリ開発や発表資料作成など、チームで形にする経験も掲載しています。"
        />
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const available = isAvailable(project.githubUrl);

            return (
              <article key={project.title} className="info-card flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-black text-navy">{project.title}</h3>
                  <ExternalLink className="shrink-0 text-accent" size={22} />
                </div>
                <p className="mt-4 text-sm leading-7 text-steel">{project.description}</p>
                <p className="mt-5 rounded-md bg-soft px-4 py-3 text-sm font-bold leading-7 text-ink">
                  担当：{project.role}
                </p>
                <div className="mt-6">
                  {available ? (
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-bold text-white transition hover:bg-accent"
                    >
                      <Github size={17} />
                      GitHubを見る
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-line px-4 py-2.5 text-sm font-bold text-steel">
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
