import { AppHero } from "@/components/layouts";
import BuildingsClient from "./_components/client";

export default async function BuildingDataPage() {

  return (
    <div className="min-h-screen h-auto px-10">
      <AppHero
        heroModel={{
          title: "Building Management",
          sub_title:
            "Manage your organization's buildings and floors in one place.",
        }}
      />
      <BuildingsClient />
    </div>
  );
}
