import { cn } from "@/lib/cn";

const bars = {
  signature: "bg-signature",
  blue: "bg-brand-blue",
  purple: "bg-brand-purple",
  violet: "bg-brand-violet",
};

export default function Eyebrow({
  children,
  dark = false,
  bar = "signature",
  className,
  textClassName,
}: {
  children: React.ReactNode;
  dark?: boolean;
  bar?: keyof typeof bars;
  className?: string;
  textClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("h-1 w-10 shrink-0 rounded-full", bars[bar])} />
      <span
        className={cn(
          "font-mono text-xs uppercase tracking-[0.2em] sm:text-[13px]",
          dark ? "text-haze" : "text-muted",
          textClassName,
        )}
      >
        {children}
      </span>
    </div>
  );
}
