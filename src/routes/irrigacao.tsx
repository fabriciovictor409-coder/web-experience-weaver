import { createFileRoute } from "@tanstack/react-router";
import { IrrigationControls } from "@/components/dashboard/FarmControls";

export const Route = createFileRoute("/irrigacao")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Irrigação · AgroTech" },
      { name: "description", content: "Controle do sistema de irrigação e da bomba." },
      { property: "og:title", content: "Irrigação · AgroTech" },
      { property: "og:description", content: "Controle do sistema de irrigação e da bomba." },
    ],
  }),
  component: Page,
});

function Page() {
  return <div className="flex flex-col gap-5"><h1 className="text-2xl font-bold">Irrigação</h1><IrrigationControls /></div>;
}
