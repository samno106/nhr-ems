import { AppHero } from "@/components/layouts";
import BuildingsClient from "./_components/client";

import { useCheck } from "@/hooks/use-check";
import AccessDeniedPage from "@/components/layouts/page-error/403";

export default async function DataPage() {
  const checked = await useCheck("Buildings", "view-buildings");

  if (!checked) {
    return <AccessDeniedPage />;
  }

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
