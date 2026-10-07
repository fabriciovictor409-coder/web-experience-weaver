import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/manutencao")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Manutenção · AgroTech" },
      { name: "description", content: "Planos e histórico de manutenção de bombas, filtros e estruturas." },
      { property: "og:title", content: "Manutenção · AgroTech" },
      { property: "og:description", content: "Planos e histórico de manutenção de bombas, filtros e estruturas." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PagePlaceholder
      title="Manutenção"
      description="Planos e histórico de manutenção de bombas, filtros e estruturas."
      icon={<Wrench className="size-7" />}
    />
  );
}
