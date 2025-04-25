import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="py-2 px-4">
          <SidebarTrigger/>
        </div>
        {children}
      </main>
    </SidebarProvider>
    );
  }
  