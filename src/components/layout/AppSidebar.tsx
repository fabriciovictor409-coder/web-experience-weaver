import { Link } from "@tanstack/react-router";
import {
  Home,
  Gauge,
  Ticket,
  Wrench,
  Sprout,
  Droplets,
  ToggleLeft,
  ClipboardList,
  Settings,
  LogOut,
  Leaf,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Início", icon: Home },
  { to: "/monitoramento", label: "Monitoramento", icon: Gauge },
  { to: "/chamados", label: "Chamados", icon: Ticket },
  { to: "/manutencao", label: "Manutenção", icon: Wrench },
  { to: "/irrigacao", label: "Irrigação", icon: Sprout },
  { to: "/agua", label: "Água", icon: Droplets },
  { to: "/controle", label: "Controle", icon: ToggleLeft },
  { to: "/relatorios", label: "Relatórios", icon: ClipboardList },
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

      <div className="mt-4 border-t border-sidebar-border px-4 py-5">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
            BC
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Bryan Camargo</p>
            <p className="text-xs text-muted-foreground">Administrador</p>
          </div>
        </div>
        <button className="mt-5 flex w-full items-center gap-3 rounded-lg px-1 py-2 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:text-primary">
          <LogOut className="size-[18px] rotate-180" />
          Sair
        </button>
      </div>
    </aside>
  );
}
