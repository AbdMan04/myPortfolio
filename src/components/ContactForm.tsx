"use client";

import { useState } from "react";
import { profile } from "@/data/resume";

type Status = "idle" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) return;

    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n— ${name}${email ? `\n${email}` : ""}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Your name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Ahmad Mohsen"
            className="border-b border-ink/30 bg-transparent py-2 text-base outline-none placeholder:text-ink/30 focus:border-acid focus:border-b-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Your email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Mohsen@Company.com"
            className="border-b border-ink/30 bg-transparent py-2 text-base outline-none placeholder:text-ink/30 focus:border-acid focus:border-b-2"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project or idea…"
          className="resize-none border-b border-ink/30 bg-transparent py-2 text-base outline-none placeholder:text-ink/30 focus:border-acid focus:border-b-2"
        />
      </label>

      {status === "sent" ? (
        <p role="status" className="bg-acid px-4 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-ink">
          Opening your mail app — the message is pre-filled. Send it and I&apos;ll get back to you.
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-2 w-fit bg-ink px-8 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-acid hover:text-ink"
      >
        Send message →
      </button>
    </form>
  );
}