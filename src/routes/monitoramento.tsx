import { createFileRoute } from "@tanstack/react-router";
import { Gauge } from "lucide-react";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/monitoramento")({
  head: () => ({
    meta: [
      { title: "Monitoramento · AgroTech" },
      { name: "description", content: "Sensores e leituras em tempo real de toda a propriedade." },
      { property: "og:title", content: "Monitoramento · AgroTech" },
      { property: "og:description", content: "Sensores e leituras em tempo real de toda a propriedade." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PagePlaceholder
      title="Monitoramento"
      description="Sensores e leituras em tempo real de toda a propriedade."
      icon={<Gauge className="size-7" />}
    />
  );
}
