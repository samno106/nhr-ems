"use client";

import { Modal } from "@/components/modals/modal";

import { Button } from "@/components/ui/button";
import { Info, KeyRound, Loader2, ShieldAlert, Trash } from "lucide-react";
import { startTransition, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { changeUserRole } from "@/actions";
import { useChangeUserRoleModal } from "@/hooks/use-user-modal";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

export const ChangeUserRoleModal = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const useModal = useChangeUserRoleModal();
  const router = useRouter();

  const onSubmit = async () => {
    setLoading(true);
    startTransition(() => {
      changeUserRole(useModal.id, useModal.roleId).then((data) => {
        if (data?.error) {
          useModal.onClose();
          toast.error("Error", {
            description: data?.error,
          });
        }

        if (data?.success) {
          router.refresh();
          useModal.onClose();
          toast.success("Success", { description: data?.success });
        }
        setLoading(false);
      });
    });
  };

  return (
    <Modal
      title=""
      description=""
      isOpen={useModal.isOpen}
      onClose={useModal.onClose}
      size="w-[400px]"
    >
      <div>
        <div className="flex items-center justify-start space-x-5">
          <div
            className={cn(
              "p-4 rounded-full",
              session && session.user.id === useModal.id
                ? "bg-amber-50"
                : "bg-red-50"
            )}
          >
            {session && session.user.id === useModal.id ? (
              <Info className=" size-6 text-amber-400" />
            ) : (
              <ShieldAlert className=" size-6 text-red-400" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Confirm change role
            </h3>
            <p className="text-sm text-gray-500">
              {session && session.user.id === useModal.id
                ? "You are current logged in system, are not able to role own account"
                : "Are you sure you want to change role of this user"}
            </p>
          </div>
        </div>
        <div className="mt-5 w-full flex">
          <Button
            onClick={onSubmit}
            size="sm"
            disabled={session && session.user.id === useModal.id}
            className="ml-auto cursor-pointer  px-5"
          >
            {loading ? (
              <>
                <Loader2 className=" size-3.5 animate-spin" />
                <span className="text-xs">Saving...</span>
              </>
            ) : (
              <>
                <span className="text-xs">Yes, confirm change</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ChangeUserRoleModal;
