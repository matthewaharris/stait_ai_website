export type PackageSlug =
  | "ai-foundations-workshop"
  | "ai-strategy-blueprint"
  | "ai-workflow-pilot"
  | "ai-transformation-program";

export type Accent = "blue" | "purple" | "violet";

export type ScheduleBlock = { when: string; title: string; detail: string[] };
export type TimelineBar = { label: string; start: number; end: number; color: string };

export type Package = {
  slug: PackageSlug;
  step: "01" | "02" | "03" | "04";
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
    summary: "One hands-on day for your team, then 30 days of measured follow-up.",
    description:
      "A focused day on your team's real tasks, with data rules people will follow. Then we check in for 30 days and measure who's still using it.",
    duration: "1 day + 30-day follow-up",
    price: "$1,500",
    priceValue: 1500,
    audience: "Up to 15 people · on-site, virtual on request",
    accent: "blue",
    highlights: ["Plain-English AI foundations", "Hands-on practice on real tasks", "Prompt library + 30-day scorecard"],
    idealFor: [
      "Teams of 5 to 15 whose staff already use AI on their own",
      "Leaders who want staff using AI safely and consistently",
      "Companies about to buy AI seats",
    ],
    scheduleTitle: "The day",
    schedule: [
      { when: "9:00", title: "Why this matters", detail: ["The owner opens the day and speaks honestly about what changes for jobs"] },
      { when: "9:20", title: "AI in plain English", detail: ["What it can do and how it fails"] },
      { when: "10:00", title: "Using AI safely", detail: ["Data rules, approved tools, and privacy settings"] },
      { when: "10:30", title: "Hands-on lab", detail: ["Guided practice on common tasks"] },
      { when: "1:00", title: "Role breakouts", detail: ["Work through real tasks, then build a shared prompt library"] },
      { when: "3:00", title: "Your action plan", detail: ["Pick quick wins and owners; each person commits to one workflow"] },
    ],
    deliverables: [
      "Your top 3 AI quick wins",
      "A custom prompt library for your roles",
      "Starter AI-use guidelines for your team",
      "A written recap with recommended next steps",
      "A Day 30 adoption scorecard",
    ],
    extras: ["$625 credit toward the AI Strategy Blueprint when booked within 60 days"],
    outcome: "A team that uses AI safely on real work, with a 30-day scorecard showing what stuck.",
  },
  {
    slug: "ai-strategy-blueprint",
    step: "02",
    stage: "Plan",
    name: "AI Strategy Blueprint",
    shortName: "Blueprint",
    summary: "Know which workflows are worth changing, what they're worth, and what to do in the next 90 days.",
    description:
      "Three working days over three weeks. We sit with the people who do the work, time it, and give you a ranked plan on conservative numbers. If seats solve it, we'll say so.",
    duration: "3 working days over 3 weeks",
    price: "$2,500",
    priceValue: 2500,
    audience: "Leadership team + key staff",
    accent: "purple",
    highlights: ["Opportunity map + ROI model", "90-day roadmap", "AI policy + executive readout"],
    idealFor: [
      "Businesses with 10 or more staff, ready to commit to a direction",
      "Teams with too many AI ideas and no clear priority",
      "Owners who want a costed plan they can run with anyone",
    ],
    scheduleTitle: "Three working days, three weeks",
    schedule: [
      {
        when: "Week 1",
        title: "Discover",
        detail: ["Leadership interviews", "Tools, systems & data inventory", "20 to 50 real samples per candidate"],
      },
      {
        when: "Week 2",
        title: "Observe & score",
        detail: ["Shadow and time the real work", "Interview the people who do it", "AI readiness scorecard"],
      },
      {
        when: "Week 3",
        title: "Plan",
        detail: ["ROI model for your top 5 use cases", "90-day implementation roadmap", "Executive readout with your team"],
      },
    ],
    deliverables: [
      "AI readiness scorecard with a risk gate",
      "Ranked candidates with an impact and effort map",
      "ROI model for your top 5, with low, base, and high cases",
      "90-day implementation roadmap",
      "Build-or-buy call and tool recommendations",
      "\"What not to do\" list and running-cost budget",
      "Starter AI usage policy",
      "Executive readout with your team",
    ],
    extras: ["30-day follow-up check-in", "$2,375 credit toward the Pilot or $2,500 toward the Program within 60 days"],
    outcome: "A clear, costed plan that stands on its own, even if you never build with us.",
  },
  {
    slug: "ai-workflow-pilot",
    step: "03",
    stage: "Prove",
    name: "AI Workflow Pilot",
    shortName: "Pilot",
    summary: "One workflow running on your real cases in three weeks, with a before-and-after number.",
    description:
      "Pick the workflow with the clearest payoff. In three weeks it's running on your real cases, with a human review step and an acceptance test we agree up front.",
    duration: "3 weeks + 30 days of support",
    price: "$9,500",
    priceValue: 9500,
    audience: "One workflow · one user group",
    accent: "violet",
    highlights: ["One production workflow", "Acceptance test on real cases", "Before-and-after report"],
    idealFor: [
      "Businesses with one repeated, measurable workflow",
      "Owners who want to see AI work before a bigger decision",
      "Teams with a completed Blueprint or paid scoping session",
    ],
    scheduleTitle: "Three weeks to a working workflow",
    schedule: [
      { when: "Week 1", title: "Build", detail: ["Architecture and build-or-buy check", "Data preparation and labeled test set", "First version on real cases"] },
      { when: "Week 2", title: "Shadow", detail: ["Review queue and integrations", "Runs beside your old process", "Failure types found and fixed"] },
      { when: "Week 3", title: "Launch", detail: ["Acceptance run", "Role training and go-live", "Handover and retirement date for the old path"] },
    ],
    deliverables: [
      "One production workflow in accounts you own",
      "Human review queue",
      "Evaluation set and results",
      "One-page dashboard",
      "Usage rule update",
      "Role training",
      "Documentation and handover",
      "30-day before-and-after report",
    ],
    extras: [
      "If it fails the agreed acceptance test, we keep working until it passes, provided client duties are met",
      "$2,500 credit toward the Program within 60 days",
    ],
    outcome: "One workflow in daily use, measured against where you started.",
  },
  {
    slug: "ai-transformation-program",
    step: "04",
    stage: "Build & Operate",
    name: "AI Transformation Program",
    shortName: "Transformation",
    summary: "Two production workflows and one configured assistant, built, launched, and adopted by your team.",
    description:
      "When two workflows are worth doing together, this is the six-week build. We only start once access and samples are in hand, because that's what keeps six weeks honest.",
    duration: "6-week build + 30 days of support",
    price: "$25,000",
    priceValue: 25000,
    audience: "Requires a Blueprint or equal evidence",
    accent: "violet",
    highlights: ["Two production workflows", "One configured assistant", "Training, governance + 30 days support"],
    idealFor: [
      "Businesses with two validated, measurable workflows",
      "Teams without in-house AI or engineering capacity",
      "Owners who will sponsor the work personally",
    ],
    scheduleTitle: "Six weeks, start to launch",
    schedule: [
      { when: "Before week 1", title: "Readiness", detail: ["Access, samples, and baselines in hand", "Named owner and client-owned accounts"] },
      { when: "Weeks 1–5", title: "Build", detail: ["Workflows built and run in shadow on real cases", "Assistant, dashboard, and governance"] },
      { when: "Weeks 5–6", title: "Launch", detail: ["Role training on your own cases", "Acceptance, go-live, documentation & handover"] },
    ],
    timeline: [
      { label: "Kickoff & acceptance tests", start: 0, end: 1, color: "#1ea5e3" },
      { label: "Workflow 1: build & shadow", start: 0.8, end: 3, color: "#4f8fe6" },
      { label: "Workflow 2: build & shadow", start: 2.5, end: 5, color: "#6f79e3" },
      { label: "Assistant, dashboard & governance", start: 1.5, end: 5, color: "#8b6cf0" },
      { label: "Train team & launch", start: 4.2, end: 6, color: "#6d4bc9" },
    ],
    deliverables: [
      "Two production workflows",
      "One configured off-the-shelf assistant",
      "Human review queues and logs",
      "Evaluation sets and acceptance results",
      "Role-based training with materials",
      "AI governance pack",
      "KPI dashboard",
      "Light 12-month roadmap",
      "Documentation & handover",
      "30 days of defect fixes and tuning",
    ],
    extras: ["Weekly check-ins throughout", "Everything runs in accounts you own"],
    outcome: "Two workflows in daily use, a team that knows how to use them, and a before-and-after report.",
  },
];

export const careTiers = [
  {
    name: "Care One",
    price: "$750",
    fit: "After a Pilot",
    hours: "Up to 3 hours a month",
    includes: "Monitoring, test reruns, model updates, small fixes, and a monthly one-page report.",
  },
  {
    name: "Care Program",
    price: "$1,500",
    fit: "After a Program",
    hours: "Up to 6 hours a month",
    includes: "Everything in Care One, plus a monthly review, policy and roadmap upkeep, and a quarterly rebaseline.",
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
