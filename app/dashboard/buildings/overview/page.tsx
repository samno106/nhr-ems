import { AppHero } from "@/components/layouts";
export default async function BuildingOverviewPage() {

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
