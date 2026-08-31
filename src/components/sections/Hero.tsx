import Link from "next/link";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { profile, summary } from "@/data/resume";

const ticker = [
  "Mobile & Web Developer",
  "Flutter · Dart",
  "React · JavaScript",
  "Available for work",
];

const facts = [
  { label: "Location", value: "Irbid, Jordan" },
  { label: "Degree", value: "BSc in Software Engineering — JUST" },
  { label: "Edge", value: "Mobile & Web" },
  { label: "Status", value: "Open to roles & internships", live: true },
];

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-14">
      <Marquee className="bg-ink text-acid" items={ticker} />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden pt-14 pb-10 sm:pt-20 sm:pb-14">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[34vw] leading-none text-outline opacity-50 sm:-top-16 sm:text-[26vw]"
          >
            AM 
          </span>

          <div className="relative grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
            <div className="flex flex-col items-start gap-7">
              <Reveal>
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted sm:text-xs">
                  <span className="inline-block h-px w-8 bg-acid" />
                  Software Engineer — Mobile & Web Developer
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.95] tracking-tight">
                  Abd-Alrahman
                  <span className="block w-fit bg-acid px-3 text-ink -ml-3">
                    Baniomar<span className="text-ink"></span>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-ink sm:text-base">
                  Mobile &amp; Web Developer
                  <span aria-hidden className="inline-block h-[14px] w-2 animate-blink bg-ink" />
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/#work"
                    className="bg-ink px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-acid hover:text-ink"
                  >
                    View my work ↓
                  </Link>
                  <a
                    href={profile.resumeUrl}
                    download
                    className="border border-ink px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-ink hover:text-paper"
                  >
                    Download résumé
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6 lg:pt-16">
              <Reveal delay={200}>
                <p className="max-w-md text-sm leading-relaxed text-ink/80 sm:text-base">
                  {summary[0]}
                </p>
              </Reveal>

              <Reveal delay={280}>
                <ul className="border-t border-line">
                  {facts.map((fact) => (
                    <li
                      key={fact.label}
                      className="grid grid-cols-[auto_1fr] items-start gap-4 border-b border-line py-3 font-mono text-xs sm:text-sm"
                    >
                      <span className="uppercase tracking-widest text-muted">{fact.label}</span>
                      <span className="flex items-start gap-2">
                        {fact.live ? <span className="mt-1.5 inline-block size-2 rounded-full bg-acid" aria-hidden /> : null}
                        <span className="whitespace-nowrap">{fact.value}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={360}>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-widest underline decoration-line underline-offset-4 transition-colors hover:decoration-acid sm:text-sm"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-widest underline decoration-line underline-offset-4 transition-colors hover:decoration-acid sm:text-sm"
                  >
                    LinkedIn ↗
                  </a>
                  <Link
                    href="/resume"
                    className="font-mono text-xs uppercase tracking-widest underline decoration-line underline-offset-4 transition-colors hover:decoration-acid sm:text-sm"
                  >
                    Résumé →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}