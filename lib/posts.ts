export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  tag: string;
  color: string;
  body: Block[];
};

/**
 * Starter articles. Move to MDX later if the blog grows
 * (see AGENTS.md: "Add a simple blog/resources page (MDX later)").
 */
export const posts: Post[] = [
  {
    slug: "why-ai-pilots-stall",
    title: "Why most AI pilots stall, and how to avoid it",
    excerpt:
      "Adoption is high but results are rare. The cause is almost never the technology. Here are the four patterns we see most, and what to do instead.",
    date: "2026-10-20",
    readMinutes: 4,
    tag: "Strategy",
    color: "#6d4bc9",
    body: [
      {
        type: "p",
        text: "Most businesses have tried AI in some form. Far fewer can point to a measurable change in cost, speed, or revenue. When we look at why, the same four patterns come up again and again.",
      },
      { type: "h2", text: "1. Starting with tools instead of problems" },
      {
        type: "p",
        text: "A new tool gets bought, a few people try it, and usage fades. Start instead with the work: which tasks eat the most hours, where do customers wait, and where do mistakes cost money.",
      },
      { type: "h2", text: "2. No owner and no measure of success" },
      {
        type: "p",
        text: "If nobody owns the outcome and nobody agreed on what success looks like, a pilot can't succeed or fail. It just drifts. Name an owner and pick one or two numbers before anything is built.",
      },
      { type: "h2", text: "3. Never connected to daily workflows" },
      {
        type: "p",
        text: "A tool that lives in a separate tab gets forgotten. The pilots that stick are wired into the systems people already use: the inbox, the CRM, the job system, the document store.",
      },
      { type: "h2", text: "4. Teams not trained to use it" },
      {
        type: "p",
        text: "People need to know what AI is good at, where it makes mistakes, and what the rules are. A single focused day of training changes adoption more than any feature.",
      },
      {
        type: "callout",
        text: "Our AI Strategy Blueprint is built around these four points: it finds the right problems, sizes the return, names owners, and sets the rules before you build.",
      },
    ],
  },
  {
    slug: "estimate-ai-roi",
    title: "A simple way to estimate AI ROI in your business",
    excerpt:
      "You don't need a complex model to know whether AI is worth it. Four numbers get you most of the way there.",
    date: "2026-10-13",
    readMinutes: 3,
    tag: "ROI",
    color: "#1ea5e3",
    body: [
      {
        type: "p",
        text: "Before investing in AI, most owners want a straight answer: will this pay for itself? A useful first estimate needs only four numbers.",
      },
      {
        type: "ul",
        items: [
          "How many people do the work",
          "Hours each could save per week",
          "Loaded cost per hour",
          "Working weeks per year",
        ],
      },
      { type: "h2", text: "A worked example" },
      {
        type: "p",
        text: "Ten people each saving five hours a week, at a loaded cost of $45 an hour, over 50 working weeks, comes to $112,500 a year in recovered capacity. Against a $25,000 program, that pays back in under three months.",
      },
      { type: "h2", text: "Be conservative" },
      {
        type: "p",
        text: "Use the low end of your time-savings estimate, and count only the tasks you are confident AI can handle with human review. If the conservative number still works, you have a strong case.",
      },
      {
        type: "callout",
        text: "In the AI Strategy Blueprint we build this model for your top five use cases with your real numbers.",
      },
    ],
  },
  {
    slug: "where-ai-pays-off-first",
    title: "Where AI pays off first for small businesses",
    excerpt:
      "Six areas where we consistently find fast, low-risk wins, and how to tell which one fits your business.",
    date: "2026-10-06",
    readMinutes: 4,
    tag: "Use cases",
    color: "#1ea5e3",
    body: [
      {
        type: "p",
        text: "The work that slows your team down is usually where AI helps most. In small and growing businesses, these six areas come up in nearly every engagement.",
      },
      {
        type: "ul",
        items: [
          "Customer service: faster answers, 24/7 intake, and smarter routing",
          "Documents & invoices: automatic extraction, sorting, and data entry",
          "Sales & proposals: quotes, follow-ups, and proposals drafted in minutes",
          "Company knowledge: a private assistant that knows your policies and processes",
          "Reporting: weekly numbers summarized without spreadsheet wrangling",
          "Marketing: on-brand content, emails, and social posts at scale",
        ],
      },
      { type: "h2", text: "How to pick your first one" },
      {
        type: "p",
        text: "Choose the area with the highest volume of repetitive work and the lowest risk if the AI gets something wrong. That combination produces quick wins and builds confidence for bigger projects.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
