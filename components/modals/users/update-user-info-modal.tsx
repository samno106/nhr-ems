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
import { useUpdateUserModal } from "@/hooks/use-user-modal";
import { updateUserInfo } from "@/actions";

export const UpdateUserInfoModal = () => {
  const [loading, setLoading] = useState(false);
  const useModal = useUpdateUserModal();
  const router = useRouter();

  const form = useForm<UserUpdateInfoSchema>({
    resolver: zodResolver(userUpdateInfoSchema),
    defaultValues: {
      id: useModal.user?.id,
      fullName: useModal.user?.fullName,
      email: useModal.user?.email,
    },
  });

  const onSubmit = async (values: UserUpdateInfoSchema) => {
    setLoading(true);
    startTransition(() => {
      updateUserInfo(values).then((data) => {
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
    if (useModal.user) {
      form.reset(useModal.user);
    }
  }, [useModal.user]);

  return (
    <Modal
      title="Update user info"
      description="Update existing user account informations"
      isOpen={useModal.isOpen}
      onClose={useModal.onClose}
      size="w-[500px]"
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="mb-4">
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
                <FormItem className="mb-4">
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

export default UpdateUserInfoModal;
