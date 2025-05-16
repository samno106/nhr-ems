import { Skeleton } from "@/components/ui/skeleton";

export const UserAccessSkeleton = () => {
  return (
    <div className="flex items-start gap-5 mt-8  rounded min-h-screen h-auto">
      <div className="w-[35%] min-h-svh border border-neutral-200 rounded  p-3 space-y-4">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-[40%]" />
          <Skeleton className="h-6 w-[30%]" />
        </div>
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />

        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="w-[65%] min-h-svh border border-neutral-200 rounded space-y-4 p-3">
        <Skeleton className="h-10 w-[60%]" />
        <div className=" flex items-start justify-between">
          <div className="flex items-start space-x-3 w-[40%]">
            <Skeleton className="h-8 w-9 rounded-full" />
            <div className="space-y-3 w-full">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
          <Skeleton className="h-6 w-[10%]" />
        </div>
        <div className="flex justify-between items-center mt-5 border-t border-gray-100 pt-5">
          <Skeleton className="h-6 w-[30%]" />
          <Skeleton className="h-6 w-[30%]" />
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5 pt-5">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-14 w-full mt-10" />
      </div>
    </div>
  );
};

export default UserAccessSkeleton;
