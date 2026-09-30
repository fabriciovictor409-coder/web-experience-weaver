import { createFileRoute } from "@tanstack/react-router";
import { Ticket } from "lucide-react";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/chamados")({
  head: () => ({
    meta: [
      { title: "Chamados · AgroTech" },
      { name: "description", content: "Abertura e acompanhamento de chamados técnicos da fazenda." },
      { property: "og:title", content: "Chamados · AgroTech" },
      { property: "og:description", content: "Abertura e acompanhamento de chamados técnicos da fazenda." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PagePlaceholder
      title="Chamados"
      description="Abertura e acompanhamento de chamados técnicos da fazenda."
      icon={<Ticket className="size-7" />}
    />
  );
}
