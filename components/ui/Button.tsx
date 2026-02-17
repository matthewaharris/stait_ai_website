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
    "inline-flex items-center justify-center rounded-xl font-semibold transition active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2";

  const sizes = size === "lg" ? "px-5 py-3 text-sm" : "px-4 py-2.5 text-sm";

  const variants =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm"
      : variant === "secondary"
        ? "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 shadow-sm"
        : "text-neutral-900 hover:bg-neutral-100";

  return <span className={cn(base, sizes, variants, className)}>{children}</span>;
}
