import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { skills } from "@/data/resume";

function ChipList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-2.5">
      {items.map((item) => (
        <li key={item}>
          <span className="inline-flex items-center border border-line bg-paper px-3.5 py-2 font-mono text-xs uppercase tracking-wide transition-colors hover:border-ink hover:bg-ink hover:text-paper">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      title="The Toolbox"
      note="Daily drivers for shipping products end-to-end."
      tone="bg-paper-deep/50"
    >
      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h3 className="font-display text-xl uppercase tracking-tight sm:text-2xl">
              Languages<span className="text-acid">.</span>
            </h3>
            <div className="mt-5">
              <ChipList items={skills.languages} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col items-center text-center">
            <h3 className="font-display text-xl uppercase tracking-tight sm:text-2xl">
              Frameworks &amp; tools<span className="text-acid">.</span>
            </h3>
            <div className="mt-5">
              <ChipList items={skills.tools} />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <p className="mt-12 flex flex-wrap items-center gap-3 border-t border-line pt-6 font-mono text-xs uppercase tracking-widest text-muted sm:text-sm">
          <span className="inline-block h-px w-8 bg-acid" aria-hidden />
          Currently focused on
          <span className="bg-acid px-2 py-1 text-ink">Flutter</span>
          <span className="text-ink">&amp;</span>
          <span className="border border-ink px-2 py-1">React</span>
        </p>
      </Reveal>
    </Section>
  );
}