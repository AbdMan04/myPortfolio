import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { certificates, education, languages, profile } from "@/data/resume";

export default function Credentials() {
  return (
    <Section id="credentials" index="04" title="Credentials" note="Education, certificates & languages.">
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col gap-6 border border-line bg-paper-deep/60 p-7">
            <Eyebrow>Education</Eyebrow>
            <div>
              <h3 className="font-display text-3xl uppercase leading-none tracking-tight sm:text-4xl">
                {education.degree}
              </h3>
              <p className="mt-3 text-sm text-ink/80 sm:text-base">{education.school}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                {education.location} · {education.period}
              </p>
            </div>
            <p className="mt-auto inline-flex w-fit items-center gap-2 bg-acid px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink">
              <span aria-hidden>★</span> {education.grade}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={100}>
            <div className="border border-line p-7">
              <Eyebrow className="mb-4">Certificates</Eyebrow>
              <ul className="divide-y divide-line">
                {certificates.map((cert) => (
                  <li key={cert.title} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="text-sm font-semibold sm:text-base">{cert.title}</p>
                    <p className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-muted">
                      {cert.issuer} · {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap items-center justify-between gap-6 border border-line p-7">
              <Eyebrow>Languages</Eyebrow>
              <ul className="flex flex-1 justify-center gap-10">
                {languages.map((lang) => (
                  <li key={lang.name} className="text-center">
                    <p className="font-display text-xl uppercase leading-none tracking-tight">{lang.name}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">{lang.level}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={150}>
        <a
          href={profile.resumeUrl}
          download
          className="group mt-10 flex items-center justify-between gap-4 border border-ink px-7 py-6 font-display text-2xl uppercase tracking-tight transition-colors hover:bg-ink hover:text-paper sm:text-4xl"
        >
          Get the full résumé — PDF
          <span className="font-mono text-xs tracking-widest transition-transform group-hover:translate-x-1 sm:text-sm">↓</span>
        </a>
      </Reveal>
    </Section>
  );
}