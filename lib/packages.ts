export type PackageSlug =
  | "ai-foundations-workshop"
  | "ai-strategy-blueprint"
  | "ai-transformation-program";

export type Accent = "blue" | "purple" | "violet";

export type ScheduleBlock = { when: string; title: string; detail: string[] };
export type TimelineBar = { label: string; start: number; end: number; color: string };

export type Package = {
  slug: PackageSlug;
  step: "01" | "02" | "03";
  stage: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  duration: string;
  price: string;
  priceValue: number;
  audience: string;
  accent: Accent;
  highlights: string[];
  idealFor: string[];
  scheduleTitle: string;
  schedule: ScheduleBlock[];
  timeline?: TimelineBar[];
  deliverables: string[];
  extras: string[];
  outcome: string;
};

export const packages: Package[] = [
  {
    slug: "ai-foundations-workshop",
    step: "01",
    stage: "Learn",
    name: "AI Foundations Workshop",
    shortName: "Workshop",
    summary: "Get your team confident with AI in a single day.",
    description:
      "A focused, hands-on day that takes your team from curious to capable, and leaves you with clear first steps.",
    duration: "1 day",
    price: "$1,500",
    priceValue: 1500,
    audience: "Up to 15 people · on-site or virtual",
    accent: "blue",
    highlights: ["Plain-English AI foundations", "Hands-on tool lab", "Quick wins + prompt library"],
    idealFor: [
      "Teams that are AI-curious but unsure where to start",
      "Leaders who want staff using AI safely and consistently",
      "Companies about to invest in AI tools",
    ],
    scheduleTitle: "The day",
    schedule: [
      { when: "9:00", title: "AI in plain English", detail: ["What it can do, what it can't, and what's hype"] },
      { when: "10:30", title: "Hands-on lab", detail: ["Practice with tools your team can use tomorrow"] },
      { when: "1:00", title: "Map your workflows", detail: ["Find where AI saves time in your business"] },
      { when: "2:30", title: "Using AI safely", detail: ["Data privacy, accuracy checks, and policy basics"] },
      { when: "3:30", title: "Your action plan", detail: ["Agree on quick wins and owners"] },
    ],
    deliverables: [
      "Your top 3 AI quick wins",
      "A custom prompt library for your roles",
      "Starter AI-use guidelines for your team",
      "A written recap with recommended next steps",
    ],
    extras: ["Fee credits toward the AI Strategy Blueprint when booked within 60 days"],
    outcome: "A team that understands AI, uses it safely, and knows exactly where to start.",
  },
  {
    slug: "ai-strategy-blueprint",
    step: "02",
    stage: "Plan",
    name: "AI Strategy Blueprint",
    shortName: "Blueprint",
    summary: "Know exactly where AI will pay off, what it's worth, and what to do in the next 90 days.",
    description: "Three days to know exactly where AI pays off in your business, and how to get there.",
    duration: "3 days",
    price: "$2,500",
    priceValue: 2500,
    audience: "Leadership team + key staff",
    accent: "purple",
    highlights: ["Opportunity map + ROI model", "90-day roadmap", "AI policy + executive readout"],
    idealFor: [
      "Owners ready to commit to a direction on AI",
      "Teams with too many AI ideas and no clear priority",
      "Businesses that want a costed plan before building",
    ],
    scheduleTitle: "Three days, three outcomes",
    schedule: [
      {
        when: "Day 1",
        title: "Discover",
        detail: ["Leadership & team interviews", "Workflow & process audit", "Tools, systems & data inventory"],
      },
      {
        when: "Day 2",
        title: "Analyze",
        detail: ["AI readiness scorecard", "Opportunity map: impact vs. effort", "ROI model for your top 5 use cases"],
      },
      {
        when: "Day 3",
        title: "Plan",
        detail: ["90-day implementation roadmap", "Tool & vendor recommendations", "Executive readout with your team"],
      },
    ],
    deliverables: [
      "AI readiness scorecard",
      "Opportunity map: impact vs. effort",
      "ROI model for your top 5 use cases",
      "90-day implementation roadmap",
      "Tool & vendor recommendations",
      "Starter AI usage policy",
      "Executive readout with your team",
    ],
    extras: ["30-day follow-up check-in", "Fee credited toward the Transformation Program within 60 days"],
    outcome: "A clear, costed plan your team can start executing right away.",
  },
  {
    slug: "ai-transformation-program",
    step: "03",
    stage: "Build & Operate",
    name: "AI Transformation Program",
    shortName: "Transformation",
    summary: "A full strategy plus custom AI tools and workflows built, launched, and adopted by your team.",
    description: "Six weeks from deep discovery to custom AI tools running in your business.",
    duration: "6 weeks",
    price: "$25,000",
    priceValue: 25000,
    audience: "Full engagement",
    accent: "violet",
    highlights: ["Full strategy + 12-month roadmap", "2–3 custom AI tools, launched", "Training + 30 days support"],
    idealFor: [
      "Businesses with validated opportunities ready to build",
      "Teams without in-house AI or engineering capacity",
      "Owners who want working tools, not just a report",
    ],
    scheduleTitle: "Six weeks, start to launch",
    schedule: [
      { when: "Weeks 1–2", title: "Discover & strategize", detail: ["Department-by-department deep dive", "Full AI strategy + 12-month roadmap"] },
      { when: "Weeks 2–5", title: "Build", detail: ["2–3 custom AI tools & workflows", "Integration with your existing systems"] },
      { when: "Weeks 5–6", title: "Launch", detail: ["Hands-on team training", "Go-live, documentation & handoff"] },
    ],
    timeline: [
      { label: "Deep-dive discovery", start: 0, end: 1.3, color: "#1ea5e3" },
      { label: "Full strategy & roadmap", start: 0.7, end: 2.3, color: "#4f8fe6" },
      { label: "Build custom AI tools", start: 1.8, end: 4.5, color: "#6f79e3" },
      { label: "Integrate & test", start: 3.1, end: 5, color: "#8b6cf0" },
      { label: "Train team & launch", start: 4.2, end: 6, color: "#6d4bc9" },
    ],
    deliverables: [
      "Everything in the Blueprint",
      "Department-by-department deep dive",
      "Full AI strategy + 12-month roadmap",
      "2–3 custom AI tools & workflows",
      "Integration with your existing systems",
      "Hands-on team training",
      "AI governance & usage policies",
      "ROI & KPI tracking dashboard",
      "Documentation & handoff",
      "30 days of post-launch support",
    ],
    extras: ["Weekly check-ins throughout", "Governance built in from day one"],
    outcome:
      "Custom AI tools in daily use, a team that knows how to use them, and a clear plan for what comes next.",
  },
];

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}

/** Literal class strings so Tailwind can see them. */
export const accentStyles: Record<
  Accent,
  { text: string; textOnDark: string; bar: string; border: string; dot: string; ring: string }
> = {
  blue: {
    text: "text-brand-sky",
    textOnDark: "text-brand-blue",
    bar: "bg-brand-blue",
    border: "border-brand-blue",
    dot: "bg-brand-blue",
    ring: "ring-brand-blue/30",
  },
  purple: {
    text: "text-brand-purple",
    textOnDark: "text-brand-violet",
    bar: "bg-brand-purple",
    border: "border-brand-purple",
    dot: "bg-brand-purple",
    ring: "ring-brand-purple/30",
  },
  violet: {
    text: "text-brand-purple",
    textOnDark: "text-brand-violet",
    bar: "bg-brand-violet",
    border: "border-brand-violet",
    dot: "bg-brand-violet",
    ring: "ring-brand-violet/30",
  },
};
