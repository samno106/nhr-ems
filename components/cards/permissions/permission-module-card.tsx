"use client";

import { assignPermission, unAssignPermission } from "@/actions";
import { CheckCircle2, LoaderIcon, XCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";
import { toast } from "sonner";

export const PermissionModuleCard = ({
  name,
  desc,
  roleId,
  permissionId,
  rolePermissionId,
  selected,
}: {
  name: string;
  desc: string;
  roleId: string;
  permissionId: string;
  rolePermissionId: string;
  selected: boolean;
}) => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onAssignPermission = async (roleId: string, permissionId: string) => {
    setLoading(true);

    const values = {
      roleId,
      permissionId,
      assignedBy: session && session.user?.fullName,
    };
    startTransition(() => {
      assignPermission(values).then((data) => {
        if (data?.error) {
          toast.error("Error", {
            description: data?.error,
          });
        }

        if (data?.success) {
          router.refresh();
          toast.success("Success", { description: data?.success });
        }
        setLoading(false);
      });
    });
  };

  const onUnAssignPermission = async (id: string) => {
    setLoading(true);
    startTransition(() => {
      unAssignPermission(id).then((data) => {
        if (data?.error) {
          toast.error("Error", {
            description: data?.error,
          });
        }

        if (data?.success) {
          router.refresh();
          toast.success("Success", { description: data?.success });
        }
        setLoading(false);
      });
    });
  };

  return (
    <div
      onClick={
        selected
          ? () => onUnAssignPermission(rolePermissionId)
          : () => onAssignPermission(roleId, permissionId)
      }
      className=" cursor-pointer px-2 py-1.5 bg-blue-50 rounded flex justify-between items-center"
    >
      <div>
        <h4 className=" text-[12px] font-medium">{name}</h4>
        <p className="text-xs text-gray-500 font-medium">{desc}</p>
      </div>
      {loading ? (
        <LoaderIcon className=" size-4 animate-spin" />
      ) : selected ? (
        <CheckCircle2 className=" size-4 text-blue-500" />
      ) : (
        <XCircle className="size-4 text-gray-500" />
      )}
    </div>
  );
};

export default PermissionModuleCard;
