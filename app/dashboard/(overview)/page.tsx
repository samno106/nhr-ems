import { AppHero } from "@/components/layouts";

export default function DashboardPage() {
  return (
    <div className="flex items-start min-h-screen h-auto px-10">
      <AppHero
        heroModel={{
          title: "Dashborad",
          sub_title: "Welcome back, Admin",
        }}
      />
    </div>
  );
}
