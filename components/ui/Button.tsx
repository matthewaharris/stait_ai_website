import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  // Same violet → pink → amber gradient as `.text-sunset`.
  primary:
    "bg-[linear-gradient(90deg,#9b7bff,#ff5c7a,#ffa53d)] text-white [text-shadow:0_1px_2px_rgba(27,29,46,0.35)] shadow-[0_12px_30px_-12px_rgba(255,92,122,0.8)] hover:brightness-110 hover:shadow-[0_16px_36px_-12px_rgba(255,92,122,0.95)]",
  secondary: "border border-line bg-white text-ink shadow-sm hover:bg-paper",
  ghost: "text-ink hover:bg-paper",
  light: "bg-white text-navy hover:bg-mist",
  "outline-light": "border border-white/25 text-white hover:bg-white/10",
};

/**
 * Renders a <Link> when `href` is set, otherwise a styled <span>
 * (backwards-compatible with `<Link><Button>…</Button></Link>` usage).
 */
export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2",
    size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-2.5 text-sm",
    variants[variant],
    className,
  );

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return <span className={cls}>{children}</span>;
}
