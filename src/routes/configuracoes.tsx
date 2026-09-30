import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({
    meta: [
      { title: "Configurações · AgroTech" },
      { name: "description", content: "Preferências do sistema, usuários e alertas." },
      { property: "og:title", content: "Configurações · AgroTech" },
      { property: "og:description", content: "Preferências do sistema, usuários e alertas." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PagePlaceholder
      title="Configurações"
      description="Preferências do sistema, usuários e alertas."
      icon={<Settings className="size-7" />}
    />
  );
}
