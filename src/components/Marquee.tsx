type MarqueeProps = {
  items: string[];
  className?: string;
  separator?: string;
};

export default function Marquee({ items, className = "", separator = "●" }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-baseline">
      {items.map((item, i) => (
        <span key={i} className="flex items-baseline">
          <span className="whitespace-nowrap px-6 font-display text-lg uppercase leading-none tracking-tight sm:text-2xl">{item}</span>
          <span className="text-[10px] opacity-60" aria-hidden>{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden border-y border-line ${className}`}>
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}