"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { track } from "@/lib/track";

const questions = [
  "Are your workflows documented?",
  "Are key documents centralized?",
  "Do you measure operational bottlenecks?",
  "Do you track response time metrics?",
  "Do you have defined data ownership?",
  "Do you have privacy/compliance policies?",
  "Is your data structured or tagged?",
  "Do you experience seasonal workload spikes?",
  "Are repetitive tasks handled by senior staff?",
  "Is leadership aligned on AI investment?",
];

type Answer = "yes" | "no" | null;

function getTier(score: number) {
  if (score <= 3) return { tier: "Early Stage", rec: "ai-foundations-workshop", recName: "AI Foundations Workshop" };
  if (score <= 7) return { tier: "Emerging", rec: "ai-strategy-blueprint", recName: "AI Strategy Blueprint" };
  return { tier: "AI-Ready", rec: "ai-transformation-program", recName: "AI Transformation Program" };
}

export default function AIReadinessForm() {
  const [answers, setAnswers] = useState<Answer[]>(() => questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [leadCaptured, setLeadCaptured] = useState(false);

  const answered = answers.filter((a) => a !== null).length;
  const complete = answered === questions.length;
  const score = useMemo(() => answers.filter((a) => a === "yes").length, [answers]);
  const { tier, rec, recName } = getTier(score);

  const set = (idx: number, v: Answer) =>
    setAnswers((prev) => {
      const next = [...prev];
      next[idx] = v;
      return next;
    });

  const input =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-subtle focus:border-brand-purple focus:outline-none focus:ring-4 focus:ring-brand-purple/15";

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_20px_50px_rgba(27,29,46,0.06)] sm:p-9">
      <div className="mb-8">
        <div className="flex justify-between font-mono text-xs uppercase tracking-[0.15em] text-subtle">
          <span>Progress</span>
          <span>
            {answered}/{questions.length}
          </span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-signature transition-all duration-500" style={{ width: `${(answered / questions.length) * 100}%` }} />
        </div>
      </div>

      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        {questions.map((q, idx) => (
          <fieldset key={q} className="flex flex-col gap-3 rounded-2xl border border-line bg-paper p-5 sm:flex-row sm:items-center sm:justify-between">
            <legend className="sr-only">{q}</legend>
            <span className="text-[17px] font-medium">
              <span className="mr-3 font-mono text-sm text-subtle">{String(idx + 1).padStart(2, "0")}</span>
              {q}
            </span>
            <div className="flex shrink-0 gap-2">
              {(["yes", "no"] as const).map((v) => (
                <label
                  key={v}
                  className={cn(
                    "cursor-pointer rounded-full border px-5 py-2 text-sm font-semibold capitalize transition",
                    answers[idx] === v
                      ? v === "yes"
                        ? "border-brand-purple bg-brand-purple text-white"
                        : "border-ink bg-ink text-white"
                      : "border-line bg-white text-muted hover:border-mist",
                  )}
                >
                  <input type="radio" name={`q-${idx}`} className="sr-only" checked={answers[idx] === v} onChange={() => set(idx, v)} />
                  {v}
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        <button
          type="submit"
          className="mt-4 inline-flex rounded-full bg-[linear-gradient(90deg,#9b7bff,#ff5c7a,#ffa53d)] px-6 py-3.5 text-base font-semibold text-white [text-shadow:0_1px_2px_rgba(27,29,46,0.35)] shadow-[0_12px_30px_-12px_rgba(255,92,122,0.8)] transition hover:brightness-110"
        >
          Calculate my score
        </button>
      </form>

      {submitted && !complete && (
        <p className="mt-5 text-sm text-[#c06d10]">Please answer all 10 questions to calculate your score.</p>
      )}

      {submitted && complete && !leadCaptured && (
        <div className="mt-8 rounded-2xl bg-navy p-7 text-white">
          <div className="font-display text-2xl font-semibold">Your assessment is ready.</div>
          <p className="mt-2 text-mist">Enter your name and email to see your score and recommended next step.</p>
          <form
            className="mt-5 grid gap-3 sm:grid-cols-[1fr_1fr_auto]"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Send lead data (name, email, score, tier) to backend
              track("readiness_lead", { score, tier });
              setLeadCaptured(true);
            }}
          >
            <input required placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className={input} />
            <input type="email" required placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
            <button type="submit" className="rounded-full bg-white px-6 py-3 font-semibold text-navy transition hover:bg-mist">
              See my results
            </button>
          </form>
        </div>
      )}

      {submitted && complete && leadCaptured && (
        <div className="mt-8 grid gap-6 rounded-2xl bg-navy p-7 text-white sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="text-center sm:pr-6">
            <div className="text-white font-display text-7xl font-semibold leading-none">{score}</div>
            <div className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-haze">out of 10</div>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-haze">Your tier</div>
            <div className="mt-1 font-display text-3xl font-semibold">{tier}</div>
            <p className="mt-2 text-mist">
              Recommended next step: <span className="font-semibold text-white">{recName}</span>
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book a free call</Button>
              <Button href={`/services/${rec}`} variant="outline-light">
                See {recName.replace("AI ", "")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
