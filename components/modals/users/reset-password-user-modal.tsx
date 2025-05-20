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
import { KeyRound, Loader2, Save } from "lucide-react";
import { userResetPasswordSchema, UserResetPasswordSchema } from "@/schemas";
import { startTransition, useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useResetPasswordUserModal } from "@/hooks/use-user-modal";
import { resetUserPassword } from "@/actions";

export const ResetPasswordUserModal = () => {
  const [loading, setLoading] = useState(false);
  const useModal = useResetPasswordUserModal();
  const router = useRouter();

  const form = useForm<UserResetPasswordSchema>({
    resolver: zodResolver(userResetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: UserResetPasswordSchema) => {
    setLoading(true);
    startTransition(() => {
      resetUserPassword(values, useModal.id).then((data) => {
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

  return (
    <Modal
      title="Reset user password"
      description="Reset password of user account"
      isOpen={useModal.isOpen}
      onClose={useModal.onClose}
      size="w-[500px]"
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="text-xs">New Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Your new password"
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-xs">Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm password"
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
                    <span className="text-xs">Reseting...</span>
                  </>
                ) : (
                  <>
                    <KeyRound className=" size-3.5" />
                    <span className="text-xs">Reset password</span>
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

export default ResetPasswordUserModal;
