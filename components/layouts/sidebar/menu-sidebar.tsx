"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import useCheckPermission from "@/hooks/use-check-permission";
import { cn } from "@/lib/utils";
import useAuthStore from "@/stores/auth.store";
import { RoleType } from "@/types/roles-model";
import {
  Building,
  ChartAreaIcon,
  CheckCircle2,
  ChevronDown,
  LayoutGrid,
  Printer,
  Settings,
  ShieldUser,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
const menus = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutGrid,
      },
    ],
  },
  {
    title: "Modules",
    items: [
      {
        title: "Employees",
        url: "/dashboard/employees",
        icon: UsersRound,
        access:"view-employees",
        submenus: [
          {
            title: "Dashboard",
            url: "/dashboard/employees/overview",
            icon: CheckCircle2,
          },
          {
            title: "Data",
            url: "/dashboard/employees/data",
            icon: CheckCircle2,
          },
        ],
      },
      {
        title: "Buildings",
        url: "/dashboard/buildings",
        icon: Building,
        access:"view-buildings",
        submenus: [
          {
            title: "Dashboard",
            url: "/dashboard/buildings/overview",
            icon: CheckCircle2,
          },
          {
            title: "Data",
            url: "/dashboard/buildings/data",
            icon: CheckCircle2,
          },
        ],
      },

      {
        title: "Reports",
        url: "/dashboard/reports",
        icon: ChartAreaIcon,
        access:"",
      },
      {
        title: "E-Forms",
        url: "/dashboard/e-forms",
        icon: Printer,
        access:"",
      },
      {
        title: "Permission Control",
        url: "/dashboard/user-access",
        icon: ShieldUser,
        access:"",
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
        access:"",
      },
    ],
  },
];
export const MenuSidebar = () => {
  const pathName = usePathname();

  const { checked } = useCheckPermission();

  useEffect(()=>{
    checked("","")
  },[])

  return (
    <SidebarContent className="bg-white">
      {menus.map((menu, index) => (
        <SidebarGroup key={index} className="py-1">
          <SidebarGroupLabel className="text-sm font-semibold text-gray-700 mb-2">
            {menu.title} 
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-2.5 space-y-1.5">
              {menu.items.map((item, i) =>
                item.submenus ? (
                 
                  <Collapsible asChild key={i} className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={cn(
                            "text-xs font-medium text-slate-500 rounded hover:bg-blue-100 hover:text-blue-600 cursor-pointer",
                            `${item.submenus.filter(
                              (flt) => flt.url === pathName
                            )}`
                              ? "bg-blue-100 text-blue-600"
                              : ""
                          )}
                        >
                          <div>
                            <item.icon className=" size-3" strokeWidth={2.5} />
                          </div>
                          <span>{item.title} </span>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-0 pt-2">
                        <SidebarMenuSub className="w-full">
                          {item.submenus.map((submneu, k) => (
                            <SidebarMenuSubItem key={k}>
                              <SidebarMenuButton
                                asChild
                                className={cn(
                                  "text-xs font-medium text-slate-500 rounded hover:bg-blue-100 hover:text-blue-600",
                                  pathName === `${submneu.url}`
                                    ? "bg-blue-100 text-blue-600"
                                    : ""
                                )}
                              >
                                <Link
                                  href={submneu.url}
                                  className="space-x-1 flex items-center"
                                >
                                  <div>
                                    <submneu.icon
                                      className=" size-3"
                                      strokeWidth={2.5}
                                    />
                                  </div>
                                  <span>{submneu.title} </span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "text-xs font-medium text-slate-500 rounded hover:bg-blue-100 hover:text-blue-600",
                        pathName === `${item.url}`
                          ? "bg-blue-100 text-blue-600"
                          : ""
                      )}
                    >
                      <Link
                        href={item.url}
                        className="space-x-1 flex items-center"
                      >
                        <div>
                          <item.icon className=" size-3" strokeWidth={2.5} />
                        </div>
                        <span>{item.title} </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </SidebarContent>
  );
};

export default MenuSidebar;
