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
import { cn } from "@/lib/utils";
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
import React from "react";
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
      },
      {
        title: "E-Forms",
        url: "/dashboard/e-forms",
        icon: Printer,
      },
      {
        title: "Permission Control",
        url: "/dashboard/permission-control",
        icon: ShieldUser,
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
];
export const MenuSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const pathName = usePathname();

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
                          <span>{item.title}</span>
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
                                  <span>{submneu.title}</span>
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
                        <span>{item.title}</span>
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
