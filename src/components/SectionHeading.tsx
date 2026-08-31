type SectionHeadingProps = {
  index: string;
  title: string;
  note?: string;
};

export default function SectionHeading({ index, title, note }: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
      <h2 className="flex items-baseline gap-4 font-display text-4xl uppercase leading-none tracking-tight sm:text-6xl">
        <span className="font-mono text-sm text-acid sm:text-base">{index}</span>
        {title}
      </h2>
      {note ? <p className="mr-8 max-w-xs text-xs text-muted sm:text-sm sm:text-right lg:mr-16">{note}</p> : null}
    </div>
  );
}