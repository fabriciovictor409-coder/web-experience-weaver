import { createFileRoute } from "@tanstack/react-router";
import { Sprout } from "lucide-react";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/irrigacao")({
  head: () => ({
    meta: [
      { title: "Irrigação · AgroTech" },
      { name: "description", content: "Programação e status dos setores de irrigação." },
      { property: "og:title", content: "Irrigação · AgroTech" },
      { property: "og:description", content: "Programação e status dos setores de irrigação." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PagePlaceholder
      title="Irrigação"
      description="Programação e status dos setores de irrigação."
      icon={<Sprout className="size-7" />}
    />
  );
}
