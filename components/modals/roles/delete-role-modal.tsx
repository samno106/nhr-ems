"use client";

import { Modal } from "@/components/modals/modal";

import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { startTransition, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDeleteRoleModal } from "@/hooks/use-role-modal";
import { deleteRole } from "@/actions/roles/role.delete.action";
import { useSession } from "next-auth/react";

export const DeleteRoleModal = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const useModal = useDeleteRoleModal();
  const router = useRouter();

  const onSubmit = async () => {
    setLoading(true);
    startTransition(() => {
      deleteRole(useModal.id).then((data) => {
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
          <div className="p-4 rounded-full bg-red-50">
            <Trash className=" size-6 text-red-400" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Confirm role removal
            </h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this role from the system
            </p>
          </div>
        </div>
        <div className="mt-5 w-full flex">
          <Button
            onClick={onSubmit}
            size="sm"
            variant="destructive"
            className="ml-auto cursor-pointer  px-5"
          >
            {loading ? (
              <>
                <Loader2 className=" size-3.5 animate-spin" />
                <span className="text-xs">Deleting...</span>
              </>
            ) : (
              <>
                <span className="text-xs">Yes, confirm delete</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteRoleModal;
