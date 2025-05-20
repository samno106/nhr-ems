"use client";

import { Modal } from "@/components/modals/modal";

import { Button } from "@/components/ui/button";
import { Info, KeyRound, Loader2, Trash } from "lucide-react";
import { startTransition,useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { deleteUser, resetUserPassword } from "@/actions";
import { useDeleteUserModal } from "@/hooks/use-modal";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

const DeleteUserModal = () => {

  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const deleteUserModal = useDeleteUserModal();
  const router = useRouter();

  const onSubmit = async () => {
    setLoading(true);
    startTransition(() => {
        deleteUser(deleteUserModal.id).then((data) => {
        if (data?.error) {
          deleteUserModal.onClose();
          toast.error("Error", {
            description: data?.error,
          });
        }

        if (data?.success) {
          router.refresh();
          deleteUserModal.onClose();
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
      isOpen={deleteUserModal.isOpen}
      onClose={deleteUserModal.onClose}
      size="w-[400px]"
    >
      <div>
        <div className="flex items-center justify-start space-x-5">
            <div className={cn("p-4 rounded-full", session&&session.user.id === deleteUserModal.id?"bg-amber-50":"bg-red-50")}>
            {session&&session.user.id === deleteUserModal.id ?(<Info className=" size-6 text-amber-400"/>):(<Trash className=" size-6 text-red-400"/>)}
            </div>
            <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Confirm user removal</h3>
                <p className="text-sm text-gray-500">
                    {session&&session.user.id === deleteUserModal.id ?"You are current logged in system, are not able to delete own account":"Are you sure you want to delete this user from the system"}</p>
            </div>
        </div>
        <div className="mt-5 w-full flex">
              <Button
                onClick={onSubmit}
                size="sm"
                variant="destructive"
                disabled={session&&session.user.id === deleteUserModal.id}
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

export default DeleteUserModal;
