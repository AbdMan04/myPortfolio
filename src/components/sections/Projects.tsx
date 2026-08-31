import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { profile, projects } from "@/data/resume";
import type { ProjectLinkKind } from "@/data/resume.types";

const linkIcon: Record<ProjectLinkKind, string> = {
  github: "↗ GitHub",
  live: "↗ Live demo",
  drive: "↓ APK",
  download: "↓ Download",
};

const linkScheme: Record<ProjectLinkKind, string> = {
  github: "decoration-acid",
  live: "decoration-acid",
  drive: "decoration-acid",
  download: "decoration-acid",
};

export default function Projects() {
  return (
    <Section
      id="work"
      index="02"
      title="Selected Work"
      note={`More experiments & repos on GitHub — @${profile.githubHandle}`}
    >
      <div className="mt-8 border-t border-line">
        {projects.map((project, i) => (
          <Reveal key={project.index} delay={i * 90}>
            <article className="group grid gap-6 border-b border-line py-10 transition-colors hover:bg-acid lg:grid-cols-12 lg:gap-8 lg:px-4">
              <div className="flex items-start justify-between gap-4 lg:col-span-2 lg:flex-col lg:gap-6">
                <p className="font-display text-5xl leading-none text-outline sm:text-6xl">{project.index}</p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted sm:text-xs">{project.year}</p>
              </div>

              <div className="lg:col-span-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-3xl uppercase leading-none tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>
                  <span className="border border-ink px-2 py-1 font-mono text-[10px] uppercase tracking-widest">
                    {project.platform}
                  </span>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/80 sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:col-span-6 lg:justify-between">
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li key={tech} className="border border-ink/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest">
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {project.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-mono text-xs font-semibold uppercase tracking-widest underline ${linkScheme[link.kind]} underline-offset-4 transition-colors hover:decoration-ink`}
                      >
                        {linkIcon[link.kind]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}