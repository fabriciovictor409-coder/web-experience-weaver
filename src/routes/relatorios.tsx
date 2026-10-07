import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList } from "lucide-react";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/relatorios")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Relatórios · AgroTech" },
      { name: "description", content: "Relatórios de consumo, chamados e desempenho do sistema." },
      { property: "og:title", content: "Relatórios · AgroTech" },
      { property: "og:description", content: "Relatórios de consumo, chamados e desempenho do sistema." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PagePlaceholder
      title="Relatórios"
      description="Relatórios de consumo, chamados e desempenho do sistema."
      icon={<ClipboardList className="size-7" />}
    />
  );
}
