import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return <section className={cn("panel p-5", className)}>{children}</section>;
}

export function PanelHeader({
  icon,
  title,
  action,
}: {
  icon: ReactNode;
  title: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-5 flex items-center gap-3">
      <span className="flex size-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
        {icon}
      </span>
      <h2 className="flex-1 text-base font-semibold tracking-tight">{title}</h2>
      {action}
    </header>
  );
}

type Tone = "success" | "warning" | "destructive" | "info" | "muted";

const toneDot: Record<Tone, string> = {
  success: "bg-success",
  warning: "bg-warning",
  destructive: "bg-destructive",
  info: "bg-info",
  muted: "bg-muted-foreground",
};

const toneText: Record<Tone, string> = {
  success: "text-success",
  warning: "text-warning",
  destructive: "text-destructive",
  info: "text-info",
  muted: "text-muted-foreground",
};

export function StatusDot({ tone }: { tone: Tone }) {
  return <span className={cn("size-2 shrink-0 rounded-full", toneDot[tone])} />;
}

export function StatusText({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <span className={cn("flex items-center gap-1.5 text-xs font-medium", toneText[tone])}>
      <StatusDot tone={tone} />
      {children}
    </span>
  );
}

export function Pill({ tone, children }: { tone: Tone; children: ReactNode }) {
  const map: Record<Tone, string> = {
    success: "bg-success/15 text-success",
    warning: "bg-warning/18 text-warning",
    destructive: "bg-destructive/18 text-destructive",
    info: "bg-info/18 text-info",
    muted: "bg-muted text-muted-foreground",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap",
        map[tone],
      )}
    >
      {children}
    </span>
  );
}

export type { Tone };
