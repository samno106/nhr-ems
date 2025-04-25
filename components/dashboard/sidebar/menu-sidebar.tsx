"use client";
import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils";
import { LayoutGrid, Settings, UsersRound } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation"
const menus=[
    {
      title:"Overview",
      items:[
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutGrid,
        },
      ]
    },
    {
      title:"Application",
      items:[
        {
          title: "Employees",
          url: "/dashboard/employees",
          icon: UsersRound,
        },
        {
          title: "Settings",
          url: "/dashboard/settings",
          icon: Settings,
        },
      ]
    }
  ]
export const MenuSidebar=()=>{
    const pathName = usePathname();
    return (
        <SidebarContent  className="bg-white">
          {menus.map((menu,index)=>(
            <SidebarGroup key={index} className="py-1">
            <SidebarGroupLabel className="text-sm font-semibold text-gray-700 mb-2">{menu.title}</SidebarGroupLabel>
            <SidebarGroupContent>
            <SidebarMenu className="px-2.5 space-y-1.5">
              {
                menu.items.map((item,i)=>(
                  <SidebarMenuItem key={i}>
                  <SidebarMenuButton asChild className={cn("text-xs font-medium text-slate-500 rounded hover:bg-blue-100 hover:text-blue-600", pathName === `${item.url}`?"bg-blue-100 text-blue-600":"")}>
                    <Link href={item.url} className="space-x-1 flex items-center">
                      <div>
                      <item.icon  className=" size-3" strokeWidth={2.5}/>
                      </div>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                ))
              }
            </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          ))}
          
        </SidebarContent>
    )
}

export default MenuSidebar