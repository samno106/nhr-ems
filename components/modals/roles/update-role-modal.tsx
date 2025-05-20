"use client";

import { Modal } from "@/components/modals/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Save } from "lucide-react";
import { roleCreateSchema, RoleCreateSchema } from "@/schemas";
import { updateRole } from "@/actions";
import { startTransition, useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUpdateRoleModal } from "@/hooks/use-role-modal";

export const UpdateRoleModal = () => {
  const [loading, setLoading] = useState(false);
  const useModal = useUpdateRoleModal();
  const router = useRouter();

  const form = useForm<RoleCreateSchema>({
    resolver: zodResolver(roleCreateSchema),
    defaultValues: {
      name: useModal.role.name,
      description: useModal.role.description,
    },
  });

  const onSubmit = async (values: RoleCreateSchema) => {
    setLoading(true);
    startTransition(() => {
      updateRole(values, useModal.id).then((data) => {
        if (data?.error) {
          form.reset();
          useModal.onClose();
          toast.error("Error", {
            description: data?.error,
          });
        }

        if (data?.success) {
          form.reset();
          router.refresh();
          useModal.onClose();
          toast.success("Success", { description: data?.success });
        }
        setLoading(false);
      });
    });
  };

  useEffect(() => {
    if (useModal.role) {
      form.reset(useModal.role);
    }
  }, [useModal.role]);

  return (
    <Modal
      title="Update role info"
      description="Update existing role informations."
      isOpen={useModal.isOpen}
      onClose={useModal.onClose}
      size="w-[450px]"
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormLabel className="text-xs">Role Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter role name"
                      {...field}
                      className="shadow-none py-3 rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-xs">Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter role description"
                      {...field}
                      className="shadow-none py-3 rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-5 w-full flex">
              <Button
                type="submit"
                size="sm"
                className="ml-auto cursor-pointer  px-5"
              >
                {loading ? (
                  <>
                    <Loader2 className=" size-3.5 animate-spin" />
                    <span className="text-xs">Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className=" size-3.5" />
                    <span className="text-xs">Save change</span>
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default UpdateRoleModal;
