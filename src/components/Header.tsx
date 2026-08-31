/* eslint-disable @next/next/no-html-link-for-pages */
import { profile } from "@/data/resume";

const links = [
  { label: "Work", href: "/#work"},
  { label: "About", href: "/#about"},
  { label: "Skills", href: "/#skills"},
  { label: "Resume", href: "/resume"},
  { label: "Contact", href: "/#contact"},];

export default function Header() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a
          href="/#top"
          className="group flex items-center gap-2 font-mono text-sm font-bold tracking-tight"
        >
          <span className="inline-block size-2 rounded-full bg-acid transition-transform group-hover:scale-150" />
          {profile.brand}
          <span className="text-muted">®</span>
        </a>
        <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 sm:gap-x-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-wide text-ink/80 underline decoration-transparent transition-colors hover:text-ink hover:decoration-acid sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}