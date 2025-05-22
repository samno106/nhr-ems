import { AppHero } from "@/components/layouts";
import BuildingsClient from "./_components/client";

import useCheckPermission, { checkPermission } from "@/hooks/use-check-permission";

export default async function DataPage() {

  const checked =  await checkPermission("Buildings","view-buildings");
 
  console.log("checked   ", checked)
  if(!checked){
    return "Not Allow this page"
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
