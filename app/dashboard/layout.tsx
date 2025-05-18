import { AppHeader, AppSidebar } from "@/components/layouts";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ModalProvider } from "@/providers/modal-provider";
import SessionProvider from "@/providers/session-provider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <AppHeader />
          {children}
        </main>
      </SidebarProvider>
      <ModalProvider />
    </SessionProvider>
  );
}
