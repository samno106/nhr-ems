import { Skeleton } from "@/components/ui/skeleton";

export const UserProfileSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-8 w-8 rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-[150px]" />
        <Skeleton className="h-3 w-[150px]" />
      </div>
    </div>
  );
};

export default UserProfileSkeleton;
