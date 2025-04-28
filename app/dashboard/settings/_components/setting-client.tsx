"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, KeyRound, Settings2, User } from "lucide-react";
import SystemSetting from "./system-settings/system-settings";
import Security from "./security/security";
import Buildings from "./buildings/buildings";


export const SettingClient = () => {


  return (
    <div className="mt-10">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="h-10 w-full">
          <TabsTrigger value="profile" className="py-4 px-10">
            <User strokeWidth={2.5} />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="py-4 px-10">
            <KeyRound strokeWidth={2.5} />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger value="system" className="py-4 px-10">
            <Settings2 strokeWidth={2.5} />
            <span>System</span>
          </TabsTrigger>
          <TabsTrigger value="building" className="py-4 px-10">
            <Building strokeWidth={2.5} />
            <span>Building</span>
          </TabsTrigger>
        </TabsList>
        <div className=" py-5">
          <TabsContent value="profile">
            <div className="p-3">
              <div>
                <h3 className="text-2xl font-semibold">Profile</h3>
                <span className="text-sm text-gray-500">
                  Update your persional information.
                </span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="security">
            <Security/>
          </TabsContent>
          <TabsContent value="system">
            <SystemSetting/>
          </TabsContent>
          <TabsContent value="building">
            <Buildings/>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default SettingClient;
