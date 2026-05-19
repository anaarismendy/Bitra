import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  layout?: "stacked" | "split";
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  dark = false,
  layout = "stacked",
  className,
}: Props) {
  const accent = dark ? "text-voltage-light" : "text-voltage";
  const dot    = dark ? "bg-voltage-light"   : "bg-voltage";
  const muted  = dark ? "text-fog/60"        : "text-steel/65";

  const Label = label && (
    <span className={cn("inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase", accent)}>
      <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", dot)} />
      — {label}
    </span>
  );

  const Title = (
    <h2
      className="font-medium tracking-[-0.025em] leading-[1.02] mt-5"
      style={{ fontSize: "clamp(32px, 4vw, 64px)" }}
    >
      {title}
    </h2>
  );

  if (layout === "split") {
    return (
      <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end mb-14 md:mb-20", className)}>
        <div>
          {Label}
          {Title}
        </div>
        {subtitle && (
          <p className={cn("leading-[1.65]", muted)} style={{ fontSize: "clamp(15px, 1.1vw, 17px)" }}>
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={cn("mb-14 md:mb-20", centered && "text-center", className)}>
      {Label}
      {Title}
      {subtitle && (
        <p
          className={cn("leading-[1.65] mt-5", muted, centered ? "mx-auto max-w-[680px]" : "max-w-[520px]")}
          style={{ fontSize: "clamp(15px, 1.1vw, 17px)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
