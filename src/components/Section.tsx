import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  note?: string;
  tone?: string;
  children: ReactNode;
};

export default function Section({ id, index, title, note, tone = "", children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line ${tone}`}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading index={index} title={title} note={note} />
        </Reveal>
        {children}
      </div>
    </section>
  );
}
