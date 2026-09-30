import { createFileRoute } from "@tanstack/react-router";
import { ToggleLeft } from "lucide-react";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/controle")({
  head: () => ({
    meta: [
      { title: "Controle · AgroTech" },
      { name: "description", content: "Acionamento remoto de bombas, válvulas e equipamentos." },
      { property: "og:title", content: "Controle · AgroTech" },
      { property: "og:description", content: "Acionamento remoto de bombas, válvulas e equipamentos." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PagePlaceholder
      title="Controle"
      description="Acionamento remoto de bombas, válvulas e equipamentos."
      icon={<ToggleLeft className="size-7" />}
    />
  );
}
