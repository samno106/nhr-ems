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
import { UserUpdateInfoSchema, userUpdateInfoSchema } from "@/schemas";
import { startTransition, useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUpdateUserModal } from "@/hooks/use-modal";
import { updateUserInfo } from "@/actions";

const UpdateUserInfoModal = () => {
  const [loading, setLoading] = useState(false);
  const updateUserModal = useUpdateUserModal();
  const router = useRouter();

  const form = useForm<UserUpdateInfoSchema>({
    resolver: zodResolver(userUpdateInfoSchema),
    defaultValues: {
      id: updateUserModal.user?.id,
      fullName: updateUserModal.user?.fullName,
      email: updateUserModal.user?.email,
    },
  });

  const onSubmit = async (values: UserUpdateInfoSchema) => {
    setLoading(true);
    startTransition(() => {
      updateUserInfo(values).then((data) => {
        if (data?.error) {
          form.reset();
          updateUserModal.onClose();
          toast.error("Error", {
            description: data?.error,
          });
        }

        if (data?.success) {
          form.reset();
          router.refresh();
          updateUserModal.onClose();
          toast.success("Success", { description: data?.success });
        }
        setLoading(false);
      });
    });
  };

  useEffect(() => {
    if (updateUserModal.user) {
      form.reset(updateUserModal.user);
    }
  }, [updateUserModal.user]);

  return (
    <Modal
      title="Update user info"
      description="Update existing user account informations"
      isOpen={updateUserModal.isOpen}
      onClose={updateUserModal.onClose}
      size="w-[500px]"
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-xs">Fullname</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
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
              name="email"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-xs">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your email"
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
                    <span className="text-xs">Updateing...</span>
                  </>
                ) : (
                  <>
                    <Save className=" size-3.5" />
                    <span className="text-xs">Update user</span>
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

export default UpdateUserInfoModal;
