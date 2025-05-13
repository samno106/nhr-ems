import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Moon } from "lucide-react";

export const AppHeader = () => {
  return (
    <div className="py-2 px-8 flex justify-between">
      <SidebarTrigger className=" size-8 text-gray-700" />
      <div className="flex items-center space-x-3">
        <div className=" relative">
          <div className="w-4 h-4 absolute right-1 rounded-full bg-red-500 text-white text-[10px] text-center font-medium border border-white">
            2
          </div>
          <Button
            variant="ghost"
            size={"sm"}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            <Bell />
          </Button>
        </div>
        {/* <Button
          variant="ghost"
          size={"sm"}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          <Moon />
        </Button> */}
      </div>
    </div>
  );
};
