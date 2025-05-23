"use client";
import { getRole } from "@/actions";
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
import useCan from "@/hooks/use-can";
import { cn } from "@/lib/utils";
import { RoleType } from "@/types/roles-model";
import {
  Building,
  ChartAreaIcon,
  ChartBar,
  ChevronDown,
  CrownIcon,
  FileDownIcon,
  LayoutGrid,
  Printer,
  Settings,
  Settings2,
  ShieldUser,
  Table,
  UsersRound,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
const menus = [
  // {
  //   title: "Overview",
  //   items: [
  //     {
  //       title: "Dashboard",
  //       url: "/dashboard",
  //       icon: LayoutGrid,
  //     },
  //   ],
  // },
  {
    title: "Modules",
    items: [
      {
        title: "Employees",
        url: "/dashboard/employees",
        icon: UsersRound,
        access: "view-employees",
        submenus: [
          {
            title: "Overview",
            url: "/dashboard/employees/overview",
            icon: ChartBar,
          },
          {
            title: "Data",
            url: "/dashboard/employees/data",
            icon: Table,
          },
        ],
      },
      {
        title: "Workflow",
        url: "/dashboard/workflow",
        icon: Workflow,
        access: "view-workflow",
      },
      {
        title: "Buildings",
        url: "/dashboard/buildings",
        icon: Building,
        access: "view-buildings",
        submenus: [
          {
            title: "Overview",
            url: "/dashboard/buildings/overview",
            icon: ChartBar,
          },
          {
            title: "Data",
            url: "/dashboard/buildings/data",
            icon: Table,
          },
        ],
      },

      {
        title: "Reports",
        url: "/dashboard/reports",
        icon: ChartAreaIcon,
        access: "view-reports",
      },
      {
        title: "E-Forms",
        url: "/dashboard/e-forms",
        icon: Printer,
        access: "view-e-forms",
      },
      {
        title: "VIP Managements",
        url: "/dashboard/vip",
        icon: CrownIcon,
        access: "view-vip",
        submenus: [
          {
            title: "Overview",
            url: "/dashboard/vip/overview",
            icon: ChartBar,
          },
          {
            title: "Data",
            url: "/dashboard/vip/data",
            icon: Table,
          },
        ],
      },
      {
        title: "Tools",
        url: "/dashboard/tools",
        icon: Settings2,
        access: "view-tools",
        submenus: [
          {
            title: "Import/Export",
            url: "/dashboard/tools",
            icon: FileDownIcon,
          },
        ],
      },
      {
        title: "Permission Control",
        url: "/dashboard/user-access",
        icon: ShieldUser,
        access: "view-users",
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
        access: "view-settings",
      },
    ],
  },
];
export const MenuSidebar = () => {
  
  const pathName = usePathname();
  const [role, setRole] = useState<RoleType>(null);
  const usecan = useCan();

  useEffect(() => {
    const getData = async () => {
      const role = await getRole();
      setRole(role.role);
    };

    getData();
  }, []);

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
                item.submenus
                  ? usecan.can(role, item.title, item.access) && (
                      <Collapsible
                        asChild
                        key={i}
                        className="group/collapsible"
                      >
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
                                <item.icon
                                  className=" size-3"
                                  strokeWidth={2.5}
                                />
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
                    )
                  : usecan.can(role, item.title, item.access) && (
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
                              <item.icon
                                className=" size-3"
                                strokeWidth={2.5}
                              />
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
