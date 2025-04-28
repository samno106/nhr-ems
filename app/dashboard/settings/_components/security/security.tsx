"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { KeyRound, Save } from "lucide-react";

const FormSchema = z.object({
  currentPassword: z.string().min(6),
  newPassword:z.string().min(6),
  confirmPassword:z.string()
}).refine((data)=>data.newPassword === data.confirmPassword,{
    message:"Confirm password not match",
    path:["confirmPassword"]
});
export const Security = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        currentPassword: '',
        newPassword:'',
        confirmPassword:''
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    return false;
  }

  return (
    <div className="p-3">
      <div>
        <h3 className="text-2xl font-semibold">Security</h3>
        <span className="text-sm text-gray-500">
          Update your password and security setting.
        </span>
      </div>
      <div className="py-6 grid gap-6 mt-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
           <div className=" grid grid-cols-3 gap-5">
           <div>
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <Input  {...field} type="password"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input  {...field} type="password"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input  {...field} type="password"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
           </div>
            <div className=" flex justify-end">
                    <Button type="submit" variant="secondary" className="flex items-center rounded-sm shadow border border-neutral-200 bg-neutral-50 cursor-pointer hover:bg-neutral-100 text-neutral-700">
                        <span>Update Password</span>
                        <Save className=" size-4 mt-1"/>
                    </Button>
                    </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Security;
