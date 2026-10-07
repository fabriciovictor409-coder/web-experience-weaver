import { createFileRoute } from "@tanstack/react-router";
import { FarmSettings } from "@/components/dashboard/FarmControls";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Configurações · AgroTech" },
      { name: "description", content: "Duração da irrigação e temperatura adequada da água." },
      { property: "og:title", content: "Configurações · AgroTech" },
      { property: "og:description", content: "Duração da irrigação e temperatura adequada da água." },
    ],
  }),
  component: Page,
});

function Page() {
  return <div className="flex flex-col gap-5"><h1 className="text-2xl font-bold">Configurações</h1><FarmSettings /></div>;
}
