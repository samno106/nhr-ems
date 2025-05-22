import { AppHero } from "@/components/layouts";
import { useCheck } from "@/hooks/use-check";

export default async function OverviewPage() {
  const checked = await useCheck("Buildings", "view-buildings");

  if (!checked) {
    return "Not Allow this page";
  }

  return (
    <div className="flex items-start min-h-screen h-auto px-10">
      <AppHero
        heroModel={{
          title: "Buildings Dashboard",
          sub_title: "Overview of buildings and occupancy.",
        }}
      />
    </div>
  );
}
