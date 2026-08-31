import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="no-print border-t border-line bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <p className="font-display text-4xl leading-none tracking-tight sm:text-6xl">
            Abd-Alrahman Bilal Baniomar
            <br />
            <span className="text-acid"></span>
          </p>
          
            <a
              href={`mailto:${profile.email}`}
              className="border border-paper/30 px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:border-acid hover:bg-acid hover:text-ink"
            >
              Email me
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-paper/15 pt-6 font-mono text-[11px] uppercase tracking-widest text-paper/60 sm:flex-row">
          <p>© 2026 {profile.brand} </p>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/#top" className="self-start text-paper/80 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-acid lg:mr-24 lg:-translate-y-1">
            Back to top ↑
          </a>
        </div>
      
    </footer>
  );
}