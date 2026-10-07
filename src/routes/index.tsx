import { createFileRoute } from "@tanstack/react-router";
import { Bell, Sun } from "lucide-react";
import heroImage from "@/assets/farm-hero.jpg";
import {
  AlertsPanel,
  SoilPanel,
  TankLevelsPanel,
  TicketsPanel,
  WaterPanel,
} from "@/components/dashboard/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Início · AgroTech Fazenda Inteligente" },
      {
        name: "description",
        content:
          "Painel de controle da fazenda: água, irrigação, chamados e alertas em tempo real.",
      },
      { property: "og:title", content: "Início · AgroTech Fazenda Inteligente" },
      {
        property: "og:description",
        content:
          "Painel de controle da fazenda: água, irrigação, chamados e alertas em tempo real.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 xl:flex-row">
        <div className="relative min-h-40 flex-1 overflow-hidden rounded-xl border border-border">
          <img
            src={heroImage}
            alt="Vista aérea da fazenda"
            width={1920}
            height={640}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
          <div className="relative p-7">
            <h1 className="text-2xl font-bold tracking-tight">Olá, Bryan!</h1>
            <p className="mt-1 max-w-md text-sm text-foreground/80">
              Aqui você acompanha o funcionamento do sistema e o status da sua propriedade.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-4 xl:w-[26rem]">
          <div className="panel flex flex-1 items-center gap-3 p-4">
            <span className="relative flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <Bell className="size-4" />
              <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-destructive" />
            </span>
            <div className="leading-tight">
              <p className="text-xs text-muted-foreground">24 de setembro de 2025</p>
              <p className="text-lg font-semibold">14:32</p>
            </div>
          </div>
          <div className="panel flex items-center gap-3 p-4">
            <span className="flex size-9 items-center justify-center rounded-lg bg-warning/15 text-warning">
              <Sun className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-lg font-semibold">27°C</p>
              <p className="text-xs text-muted-foreground">Ensolarado</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_26rem]">
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 lg:grid-cols-[1.55fr_1fr]">
            <WaterPanel />
            <SoilPanel />
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
            <TankLevelsPanel />
            <TicketsPanel />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <AlertsPanel />
          <AlertsPanel title="Histórico de Alertas" />
        </div>
      </div>
    </div>
  );
}
