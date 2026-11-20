import { createFileRoute } from "@tanstack/react-router";
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
      <div className="relative min-h-40 overflow-hidden rounded-xl border border-border">
        <img
          src={heroImage}
          alt="Vista aérea da fazenda"
          width={1920}
          height={640}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
        <div className="relative p-7">
          <h1 className="text-2xl font-bold tracking-tight">Painel de Controle</h1>
          <p className="mt-1 max-w-md text-sm text-foreground/80">
            Aqui você acompanha o funcionamento do sistema e o status da sua propriedade.
          </p>
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
