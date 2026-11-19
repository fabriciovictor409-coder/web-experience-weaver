import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Home, Sprout, Droplets, Settings, Leaf, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Início", icon: Home },
  { to: "/irrigacao", label: "Irrigação", icon: Sprout },
  { to: "/agua", label: "Água", icon: Droplets },
  { to: "/configuracoes", label: "Configurações", icon: Settings },
] as const;

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-1 flex-col gap-1 px-3">
      {navItems.map(({ to, label, icon: Icon }) => (
        <Link
          key={to}
          to={to}
          onClick={onNavigate}
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
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-3 px-5 py-6">
      <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Leaf className="size-5" />
      </span>
      <div className="leading-tight">
        <p className="text-lg font-extrabold tracking-tight text-sidebar-foreground">AgroTech</p>
        <p className="text-xs text-muted-foreground">Fazenda Inteligente</p>
      </div>
    </div>
  );
}

export function AppSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Barra superior no celular */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center gap-3 border-b border-sidebar-border bg-sidebar px-4 py-3 md:hidden">
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary"
        >
          <Menu className="size-5" />
        </button>
        <span className="flex items-center gap-2">
          <Leaf className="size-4 text-primary" />
          <span className="text-base font-extrabold tracking-tight text-sidebar-foreground">AgroTech</span>
        </span>
      </div>

      {/* Menu fixo no desktop */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex">
        <Brand />
        <NavLinks />
      </aside>

      {/* Menu deslizante no celular */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            className="absolute inset-0 bg-background/70"
            onClick={() => setOpen(false)}
          />
          <aside className="relative flex h-full w-64 flex-col border-r border-sidebar-border bg-sidebar">
            <div className="flex items-center justify-between pr-3">
              <Brand />
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="flex size-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-sidebar-accent"
              >
                <X className="size-5" />
              </button>
            </div>
            <NavLinks onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}
    </>
  );
}
