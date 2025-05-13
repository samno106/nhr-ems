import { AppHeader, AppSidebar } from "@/components/layouts";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <AppHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
