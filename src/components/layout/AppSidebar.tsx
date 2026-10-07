import { Link } from "@tanstack/react-router";
import { Home, Sprout, Droplets, Settings, Leaf } from "lucide-react";

const navItems = [
  { to: "/", label: "Início", icon: Home },
  { to: "/irrigacao", label: "Irrigação", icon: Sprout },
  { to: "/agua", label: "Água", icon: Droplets },
  { to: "/configuracoes", label: "Configurações", icon: Settings },
] as const;

export function AppSidebar() {
  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex items-center gap-3 px-5 py-6">
        <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <Leaf className="size-5" />
        </span>
        <div className="leading-tight">
          <p className="text-lg font-extrabold tracking-tight text-sidebar-foreground">AgroTech</p>
          <p className="text-xs text-muted-foreground">Fazenda Inteligente</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3">
        {navItems.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            activeProps={{
              className:
                "bg-primary/15 text-primary hover:bg-primary/20 hover:text-primary border border-primary/25",
            }}
          >
            <Icon className="size-[18px]" />
            {label}
          </Link>
        ))}
      </nav>

    </aside>
  );
}
