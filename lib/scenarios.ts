export type Scenario = {
  slug: string;
  industry: string;
  title: string;
  metric: string;
  metricLabel: string;
  color: string;
  challenge: string;
  approach: string;
  outcomes: string[];
  engagement: string;
};

/**
 * Modeled scenarios — illustrative, not client results.
 * Replace with real case studies as engagements complete.
 */
export const scenarios: Scenario[] = [
  {
    slug: "accounting-firm",
    industry: "Accounting",
    title: "35-person regional accounting firm",
    metric: "~60%",
    metricLabel: "less time on manual document review",
    color: "#6d4bc9",
    challenge:
      "Tax season creates a surge of manual document intake and classification. Senior staff spend hours routing paperwork instead of serving clients.",
    approach:
      "AI-powered intake automation paired with an internal knowledge assistant, deployed with audit trails and role-based access from day one.",
    outcomes: [
      "~60% less time on manual document review",
      "~4 months to expected return",
      "Faster turnaround at peak season",
      "Senior time moved back to client work",
    ],
    engagement: "AI Transformation Program",
  },
  {
    slug: "home-services",
    industry: "Home services",
    title: "Multi-location home services operator (50 employees)",
    metric: "~35%",
    metricLabel: "less manual scheduling and routing",
    color: "#1ea5e3",
    challenge:
      "Dispatch and customer updates are split across email, texts, and disconnected job systems, causing delayed responses and high admin overhead.",
    approach:
      "AI-assisted job triage, appointment summarization, and internal playbook search integrated with service management workflows.",
    outcomes: [
      "~35% reduction in manual scheduling and routing effort",
      "Faster customer response windows during peak demand",
      "Improved first-time resolution through better technician context",
      "Clearer operational visibility for margin control",
    ],
    engagement: "AI Transformation Program",
  },
  {
    slug: "clinic-group",
    industry: "Healthcare",
    title: "Regional clinic group (8 locations)",
    metric: "~40%",
    metricLabel: "faster intake and referral processing",
    color: "#6d4bc9",
    challenge:
      "Front-office teams handle repetitive patient intake, policy checks, and referral coordination manually, increasing delays and staff fatigue.",
    approach:
      "AI-driven intake assistance, structured referral summaries, and governed internal knowledge retrieval for policy and procedure questions.",
    outcomes: [
      "~40% faster intake and referral processing",
      "Reduced non-clinical burden on senior staff",
      "More consistent policy application across locations",
      "A governance baseline for future AI use cases",
    ],
    engagement: "AI Strategy Blueprint → Transformation Program",
  },
  {
    slug: "insurance-brokerage",
    industry: "Insurance",
    title: "Commercial insurance brokerage (30 employees)",
    metric: "~50%",
    metricLabel: "less manual review on standard submissions",
    color: "#1ea5e3",
    challenge:
      "Account teams spend significant time reviewing submissions, summarizing policy changes, and drafting repetitive client communications.",
    approach:
      "AI-supported submission classification, policy comparison summaries, and draft client responses with human review controls.",
    outcomes: [
      "~50% reduction in manual review time for standard submissions",
      "Quicker turnaround for renewals and policy updates",
      "More consistent client communication",
      "Capacity unlocked for higher-value advisory work",
    ],
    engagement: "AI Transformation Program",
  },
];
