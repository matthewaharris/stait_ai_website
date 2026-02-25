"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";

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
  if (score <= 3) return "Early Stage";
  if (score <= 7) return "Emerging";
  return "AI-Ready";
}

export default function AIReadinessForm() {
  const [answers, setAnswers] = useState<Answer[]>(Array.from({ length: questions.length }, () => null));
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [leadCaptured, setLeadCaptured] = useState(false);

  const complete = answers.every((answer) => answer !== null);
  const score = useMemo(() => answers.filter((answer) => answer === "yes").length, [answers]);
  const tier = getTier(score);

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
      <form
        className="space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        {questions.map((question, idx) => (
          <fieldset key={question} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
            <legend className="text-sm font-medium text-neutral-900">
              {idx + 1}. {question}
            </legend>
            <div className="mt-3 flex items-center gap-5 text-sm text-neutral-700">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name={`q-${idx}`}
                  checked={answers[idx] === "yes"}
                  onChange={() =>
                    setAnswers((prev) => {
                      const next = [...prev];
                      next[idx] = "yes";
                      return next;
                    })
                  }
                />
                Yes
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name={`q-${idx}`}
                  checked={answers[idx] === "no"}
                  onChange={() =>
                    setAnswers((prev) => {
                      const next = [...prev];
                      next[idx] = "no";
                      return next;
                    })
                  }
                />
                No
              </label>
            </div>
          </fieldset>
        ))}

        <button type="submit" className="inline-flex">
          <Button size="lg">Calculate readiness score</Button>
        </button>
      </form>

      {submitted && !complete ? (
        <p className="mt-5 text-sm text-amber-700">Please answer all 10 questions to calculate your score.</p>
      ) : null}

      {submitted && complete && !leadCaptured ? (
        <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
          <div className="text-lg font-semibold text-indigo-950">Your assessment is ready!</div>
          <p className="mt-2 text-sm text-indigo-900/90">
            Enter your name and email to see your score and personalized recommendations.
          </p>
          <form
            className="mt-4 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              // TODO: Send lead data (name, email, score, tier) to backend
              setLeadCaptured(true);
            }}
          >
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-indigo-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <input
              type="email"
              required
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-indigo-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <button type="submit" className="inline-flex">
              <Button>See my results</Button>
            </button>
          </form>
        </div>
      ) : null}

      {submitted && complete && leadCaptured ? (
        <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
          <div className="text-sm font-semibold text-indigo-900">Your score: {score}/10</div>
          <div className="mt-1 text-lg font-semibold text-indigo-950">Tier: {tier}</div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact">
              <Button>Book a strategy call</Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary">Review services</Button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
