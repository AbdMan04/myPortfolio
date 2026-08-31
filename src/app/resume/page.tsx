import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  certificates,
  education,
  languages,
  profile,
  projects,
  skills,
  summary,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Full résumé of Abd-Alrahman Baniomar — Mobile & Web Developer.",
};

function BlockHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h2 className="flex items-baseline gap-3 border-b-4 border-ink pb-2 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
      <span className="font-mono text-sm text-acid">{index}</span>
      <span className="text-ink">{children}</span>
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 print:max-w-none print:px-0">
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/#top"
          className="font-mono text-xs uppercase tracking-widest underline decoration-line underline-offset-4 hover:decoration-acid"
        >
          ← Back to home
        </Link>
        <a
          href={profile.resumeUrl}
          download
          className="bg-ink px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-acid hover:text-ink"
        >
          Download PDF ↓
        </a>
      </div>

      <Reveal>
        <header className="border-b-4 border-ink pb-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Mobile &amp; Web Developer</p>
          <h1 className="mt-2 font-display text-[clamp(2.4rem,8vw,5rem)] leading-[0.95] tracking-tight">
            {profile.fullName}
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted sm:text-sm">
            {profile.location} · {profile.email} · {profile.phone.replace(/\s/g, "")} · {profile.github} · {profile.linkedin}
          </p>
        </header>
      </Reveal>

      <div className="mt-10 flex flex-col gap-12">
        <Reveal>
          <section aria-labelledby="r-summary" className="print-block">
            <BlockHeading index="01">Profile</BlockHeading>
            <div className="mt-5 flex flex-col gap-4">
              {summary.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-ink/80 sm:text-base">{p}</p>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="r-skills" className="print-block">
            <BlockHeading index="02">Skills</BlockHeading>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Languages</p>
                <p className="mt-2 text-sm font-semibold sm:text-base">{skills.languages.join(" · ")}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Frameworks &amp; tools</p>
                <p className="mt-2 text-sm font-semibold sm:text-base">{skills.tools.join(" · ")}</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="r-projects" className="print-block">
            <BlockHeading index="03">Projects</BlockHeading>
            <ul className="mt-5 flex flex-col gap-8">
              {projects.map((project) => (
                <li key={project.index} className="grid gap-2 sm:grid-cols-12">
                  <p className="font-display text-lg uppercase tracking-tight sm:col-span-4">
                    {project.index}. {project.title}
                    <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-muted">/{project.platform}</span>
                  </p>
                  <div className="sm:col-span-8">
                    <p className="text-sm leading-relaxed text-ink/80">{project.description}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                      {project.tech.join(" · ")}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="r-education" className="print-block">
            <BlockHeading index="04">Education</BlockHeading>
            <div className="mt-5 flex flex-col gap-1">
              <p className="text-base font-bold">{education.degree}</p>
              <p className="text-sm text-ink/80">
                {education.school}, {education.location}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {education.period} · {education.grade}
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="r-certs" className="print-block">
            <BlockHeading index="05">Certificates &amp; Languages</BlockHeading>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <ul className="flex flex-col gap-3">
                {certificates.map((cert) => (
                  <li key={cert.title} className="text-sm">
                    <p className="font-semibold">{cert.title}</p>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      {cert.issuer} · {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                {languages.map((lang) => (
                  <p key={lang.name} className="text-sm">
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-muted"> — {lang.level}</span>
                  </p>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}