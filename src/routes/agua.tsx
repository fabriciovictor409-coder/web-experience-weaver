import { createFileRoute } from "@tanstack/react-router";
import { WaterPanel, WaterQualityPanel, TankLevelsPanel } from "@/components/dashboard/sections";

export const Route = createFileRoute("/agua")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Água · AgroTech" },
      { name: "description", content: "Monitoramento das caixas, temperatura e pH da água." },
      { property: "og:title", content: "Água · AgroTech" },
      { property: "og:description", content: "Monitoramento das caixas, temperatura e pH da água." },
    ],
  }),
  component: Page,
});

function Page() {
  return <div className="flex flex-col gap-5"><h1 className="text-2xl font-bold">Água</h1><WaterPanel /><WaterQualityPanel /><TankLevelsPanel /></div>;
}
