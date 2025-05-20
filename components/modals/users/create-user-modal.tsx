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
import { useUserAccessModal } from "@/hooks/use-user-modal";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, Save } from "lucide-react";
import { userAccessSchema, UserAccessSchema } from "@/schemas";
import { createUser } from "@/actions";
import { startTransition, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const CreateUserModal = () => {
  const [loading, setLoading] = useState(false);
  const useModal = useUserAccessModal();
  const router = useRouter();

  const form = useForm<UserAccessSchema>({
    resolver: zodResolver(userAccessSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      roleId: "",
    },
  });

  const onSubmit = async (values: UserAccessSchema) => {
    setLoading(true);
    startTransition(() => {
      createUser(values).then((data) => {
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
      title="Create new user"
      description="Create a new user account and set their initial role."
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-xs">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Your password"
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
              name="roleId"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-xs">Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full py-3">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {useModal.roles.map((role, i) => (
                        <SelectItem key={i} value={role.id}>
                          {role.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
                    <span className="text-xs">Create user</span>
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

export default CreateUserModal;
