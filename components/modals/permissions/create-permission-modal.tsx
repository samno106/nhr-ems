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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, Save } from "lucide-react";

import { createPermission, createUser } from "@/actions";
import { startTransition, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { usePermissionModal } from "@/hooks/use-permission-modal";
import { CreatePermissionSchema, createPermissionSchema } from "@/schemas";

export const CreatePermissionModal = () => {
  const [loading, setLoading] = useState(false);
  const useModal = usePermissionModal();
  const router = useRouter();

  const form = useForm<CreatePermissionSchema>({
    resolver: zodResolver(createPermissionSchema),
    defaultValues: {
      name: "",
      description: "",
      moduleId: "",
    },
  });

  const onSubmit = async (values: CreatePermissionSchema) => {
    setLoading(true);
    startTransition(() => {
      createPermission(values).then((data) => {
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
      title="Create New Permission"
      description="Create a new permission that can be assigned to roles. Permissions control what actions users can perform."
      isOpen={useModal.isOpen}
      onClose={useModal.onClose}
      size="w-[500px]"
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="text-xs">Permission Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter permission name"
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
                <FormItem className="mb-4">
                  <FormLabel className="text-xs">Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter permission description"
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
              name="moduleId"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="text-xs">Module</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full py-3">
                        <SelectValue placeholder="Select a module" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {useModal.modules.map((module, i) => (
                        <SelectItem key={i} value={module.id}>
                          {module.name}
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

export default CreatePermissionModal;
