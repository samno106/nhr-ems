"use client";

import { UserProfileSkeleton } from "@/components/skeletons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Settings,
  Sparkles,
} from "lucide-react";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const ProfileSidebar = () => {
  const { isMobile } = useSidebar();
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/",
      });

      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (status === "loading") {
    return <UserProfileSkeleton />;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            >
              <Avatar className="h-8 w-8 rounded-lg ">
                <AvatarImage
                  src={""}
                  alt={session && session?.user?.fullName}
                />
                <AvatarFallback className="rounded-lg bg-blue-200 font-semibold size-8">
                  A
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-xs">
                  {session && session?.user?.fullName}
                </span>
                <span className="truncate text-[11px] text-gray-500 font-medium">
                  {session && session?.user?.email}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={""}
                    alt={session && session?.user?.fullName}
                  />
                  <AvatarFallback className="rounded-lg font-semibold bg-blue-200">
                    A
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-xs">
                    {session && session?.user?.fullName}
                  </span>
                  <span className="truncate text-[11px] text-gray-500 font-medium">
                    {session && session?.user?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className=" space-y-1.5">
              <Link href="/">
                <DropdownMenuItem className="text-xs font-medium text-gray-600 cursor-pointer">
                  <BadgeCheck className=" size-3.5" />
                  Profile
                </DropdownMenuItem>
              </Link>
              <Link href="/dashboard/settings">
                <DropdownMenuItem className="text-xs font-medium text-gray-600 cursor-pointer">
                  <Settings className=" size-3.5" />
                  Settings
                </DropdownMenuItem>
              </Link>
              {/* <DropdownMenuItem className="text-xs font-medium text-gray-600 cursor-pointer">
                <Bell className=" size-3.5" />
                Notifications
              </DropdownMenuItem> */}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-xs font-medium text-gray-600 cursor-pointer"
            >
              <LogOut className=" size-3.5" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default ProfileSidebar;
