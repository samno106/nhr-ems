import { DashboardLogo } from "@/components/layouts/logo";
import { Sidebar, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { MenuSidebar } from "./menu-sidebar";
import ProfileSidebar from "./profile-sidebar";
import { prisma } from "@/lib/prisma";
import useAuthStore from "@/stores/auth.store";

export const AppSidebar = async () => {

  return (
    <Sidebar collapsible="icon" className="bg-white">
      <SidebarHeader className="bg-white">
        <div className="py-1 px-3">
          <DashboardLogo />
        </div>
      </SidebarHeader>
      <MenuSidebar />
      <SidebarFooter className="bg-white">
        <div className=" border-t pt-2">
          <ProfileSidebar />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
