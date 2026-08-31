import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

const base =
  "font-mono text-[11px] uppercase tracking-[0.25em] text-muted";

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return <p className={`${base} ${className}`}>{children}</p>;
}
