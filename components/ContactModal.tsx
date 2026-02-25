"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      nameRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function reset() {
    setName("");
    setEmail("");
    setMessage("");
    setStatus("idle");
    setErrorMsg("");
  }

  function handleClose() {
    onClose();
    setTimeout(reset, 300);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setTimeout(handleClose, 2000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  const inputClass =
    "w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl sm:p-8"
          >
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-lg p-1 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-600"
              aria-label="Close"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div className="text-lg font-semibold text-neutral-900">
                  Message sent
                </div>
                <p className="mt-1 text-sm text-neutral-600">
                  We&rsquo;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="text-lg font-semibold text-neutral-900">
                  Get in touch
                </div>
                <p className="mt-1 text-sm text-neutral-600">
                  Send us a message and we&rsquo;ll get back to you.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-medium text-neutral-700"
                    >
                      Name
                    </label>
                    <input
                      ref={nameRef}
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm font-medium text-neutral-700"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-medium text-neutral-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help?"
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 active:translate-y-[1px] disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
