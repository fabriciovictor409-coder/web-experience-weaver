import { createFileRoute } from "@tanstack/react-router";
import { Droplets } from "lucide-react";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/agua")({
  head: () => ({
    meta: [
      { title: "Água · AgroTech" },
      { name: "description", content: "Níveis, consumo e qualidade da água armazenada." },
      { property: "og:title", content: "Água · AgroTech" },
      { property: "og:description", content: "Níveis, consumo e qualidade da água armazenada." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PagePlaceholder
      title="Água"
      description="Níveis, consumo e qualidade da água armazenada."
      icon={<Droplets className="size-7" />}
    />
  );
}
