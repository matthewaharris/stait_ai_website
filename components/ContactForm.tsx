"use client";

import { useState } from "react";
import { track } from "@/lib/track";

type Status = "idle" | "sending" | "success" | "error";

/** Inline contact form. Posts to the existing /api/contact (Resend) route. */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: company ? `Company: ${company}\n\n${message}` : message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }
      track("contact_submit", { location: "contact_page" });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const input =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-subtle transition focus:border-brand-purple focus:outline-none focus:ring-4 focus:ring-brand-purple/15";
  const label = "mb-1.5 block text-sm font-medium text-ink";

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-line bg-white p-10 text-center shadow-[0_20px_50px_rgba(27,29,46,0.06)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10 text-2xl text-brand-green">
          ✓
        </div>
        <div className="mt-5 font-display text-2xl font-semibold">Message sent</div>
        <p className="mt-2 text-muted">Thanks, {name.split(" ")[0] || "there"}. We&rsquo;ll reply within one business day.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-line bg-white p-7 shadow-[0_20px_50px_rgba(27,29,46,0.06)] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            Name
          </label>
          <input id="cf-name" required value={name} onChange={(e) => setName(e.target.value)} className={input} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            Work email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={input}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-company" className={label}>
          Company <span className="font-normal text-subtle">(optional)</span>
        </label>
        <input id="cf-company" value={company} onChange={(e) => setCompany(e.target.value)} className={input} placeholder="Company name" />
      </div>
      <div>
        <label htmlFor="cf-message" className={label}>
          What would you like AI to help with?
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={input + " resize-none"}
          placeholder="A few sentences about your business and goals"
        />
      </div>
      {status === "error" && <p className="text-sm text-brand-red">{errorMsg}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#9b7bff,#ff5c7a,#ffa53d)] px-6 py-3.5 text-base font-semibold text-white [text-shadow:0_1px_2px_rgba(27,29,46,0.35)] shadow-[0_12px_30px_-12px_rgba(255,92,122,0.8)] transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
