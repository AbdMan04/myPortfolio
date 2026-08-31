import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { profile, stats, summary } from "@/data/resume";

export default function About() {
  return (
    <Section id="about" index="01" title="Who am I" note="Software Engineer making Mobile & Web apps.">
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal delay={100}>
            <p className="border-l-4 border-acid pl-5 font-display text-2xl uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Building a software application is my passion. I love to create beautiful and functional applications that solve real world problems.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">
              <span className="text-ink"></span> Jump to gitHub
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-ink underline decoration-acid underline-offset-4"
              >
                @{profile.githubHandle}
              </a>
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-7">
          {summary.map((paragraph, i) => (
            <Reveal key={i} delay={120 + i * 100}>
              <p className="max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={150}>
        <div className="mt-14 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-paper p-6">
              <p className="font-display text-4xl leading-none tracking-tight sm:text-5xl">{stat.value}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}