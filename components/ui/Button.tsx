import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2";

  const sizes = size === "lg" ? "px-5 py-3 text-sm" : "px-4 py-2.5 text-sm";

  const variants =
    variant === "primary"
      ? "bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-[0_4px_16px_rgba(99,102,241,0.35)] hover:brightness-110"
      : variant === "secondary"
        ? "border border-neutral-200 bg-white text-neutral-900 hover:border-indigo-200 hover:bg-indigo-50/40 shadow-sm"
        : "text-neutral-900 hover:bg-neutral-100";

  return <span className={cn(base, sizes, variants, className)}>{children}</span>;
}
