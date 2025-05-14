import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, ListOrdered } from "lucide-react";
import BuildingTab from "./building/building";
import FloorTab from "./floor/floor";

export const BuildingsClient = () => {
  return (
    <div className="flex items-center justify-between w-full mt-8">
      <Tabs defaultValue="buildings" className="w-full">
        <TabsList className="h-10">
          <TabsTrigger value="buildings" className="py-4 px-10">
            <Building strokeWidth={2.5} />
            <span>Buildings</span>
          </TabsTrigger>
          <TabsTrigger value="floors" className="py-4 px-10">
            <ListOrdered strokeWidth={2.5} />
            <span>Floors</span>
          </TabsTrigger>
        </TabsList>
        <div className="py-2 w-full">
          <TabsContent value="buildings">
            <BuildingTab />
          </TabsContent>
          <TabsContent value="floors">
            <FloorTab />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default BuildingsClient;
