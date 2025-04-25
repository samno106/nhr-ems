"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
  } from "@/components/ui/sidebar"
import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut, Settings, Sparkles } from "lucide-react";

const user = {
    name: "Admin",
    email: "admin@example.com",
    avatar: "/avatars/shadcn.jpg",
  }

export const ProfileSidebar=()=>{
    const { isMobile } = useSidebar()
    return(
        <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg ">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg bg-blue-200 font-semibold size-8">AD</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-xs">{user.name}</span>
                  <span className="truncate text-[11px] text-gray-500 font-medium">{user.email}</span>
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
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg font-semibold">AD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-xs">{user.name}</span>
                    <span className="truncate text-[11px] text-gray-500 font-medium">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className=" space-y-1.5">
                <DropdownMenuItem className="text-xs font-medium text-gray-600">
                  <BadgeCheck className=" size-3.5"/>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xs font-medium text-gray-600">
                  <Settings className=" size-3.5"/>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xs font-medium text-gray-600">
                  <Bell className=" size-3.5"/>
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-xs font-medium text-gray-600">
                <LogOut className=" size-3.5"/>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    )
}

export default ProfileSidebar