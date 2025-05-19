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
import { useUserAccessModal } from "@/hooks/use-modal";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Save } from "lucide-react";

const formSchema = z.object({
  fullName: z.string({ required_error: "Fullname is required" }).min(1),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  roleId: z
    .string({ required_error: "Role is required" })
    .min(1, "Role is required"),
});

const CreateUserModal = () => {
  const userAccessModal = useUserAccessModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      roleId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {};

  return (
    <Modal
      title="Create new user"
      description="Create a new user account and set their initial role."
      isOpen={userAccessModal.isOpen}
      onClose={userAccessModal.onClose}
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
                     
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                    
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
                variant="outline"
                className="ml-auto cursor-pointer bg-blue-200 border-blue-300 hover:bg-blue-300 px-5"
              >
                <Save className=" size-3.5"/>
                <span className="text-xs">Create user</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default CreateUserModal;
