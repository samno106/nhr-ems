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
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});


export const SystemSetting=()=>{
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          security_emails: true,
        },
      });
    
      function onSubmit(data: z.infer<typeof FormSchema>) {
        return false;
      }

    return(
        <div className="p-3">
              <div>
                <h3 className="text-2xl font-semibold">System Setting</h3>
                <span className="text-sm text-gray-500">
                  Configure system-wide settings and preferences
                </span>
              </div>
              <div className="py-6 grid gap-6 mt-2">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-6"
                  >
                    <div>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="marketing_emails"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
                              <div className="space-y-1">
                                <FormLabel>Email Notification</FormLabel>
                                <FormDescription>
                                  Receive email notifications for important events.
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="marketing_emails"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
                              <div className="space-y-1">
                                <FormLabel>Document Expiry Alerts</FormLabel>
                                <FormDescription>
                                  Get alerts for document expiring in the nexts 30 days.
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="marketing_emails"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
                              <div className="space-y-1">
                                <FormLabel>Automatic ORC Processing</FormLabel>
                                <FormDescription>
                                 Automatically extract data from upload documents.
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="marketing_emails"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-sm border p-3 shadow-sm">
                              <div className="space-y-1">
                                <FormLabel>Enhanced Encryption</FormLabel>
                                <FormDescription>
                                 Use enhanced encryption for sensitive data.
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                      </div>
                    </div>
                    <div className=" flex justify-end">
                    <Button type="submit" variant="secondary" className="flex items-center rounded-sm shadow border border-neutral-200 bg-neutral-50 cursor-pointer hover:bg-neutral-100 text-neutral-700">
                        <span>Save Settings</span>
                        <Save className=" size-4 mt-1"/>
                    </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
    )
}

export default SystemSetting;