import { AppHero } from "@/components/layouts";
import SettingClient from "./_components/setting-client";

export default function SettingsPage() {
  return (
    <div className="min-h-screen h-auto px-10">
      <AppHero
        heroModel={{
          title: "Settings",
          sub_title: "Manage your account settings and preferences.",
        }}
      />

      <SettingClient />
    </div>
  );
}
