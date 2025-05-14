"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, KeyRound, Loader2, User2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const SiginClient = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const { email, password } = values;
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
        toast(result.error);
        console.log(result.error);
      } else {
        toast("Login Success");
        router.push("/dashboard/");
      }
    } catch (err: any) {
      toast(err?.message);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className=" space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className=" relative">
                    <User2 className="size-4 absolute left-2.5 top-4 text-gray-400" />
                    <Input
                      className="py-6 pl-10 placeholder:text-gray-400"
                      type="email"
                      {...field}
                      placeholder="Email"
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className=" relative">
                    <KeyRound className="size-4 absolute left-2.5 top-4 text-gray-400" />
                    <Input
                      className="py-6 pl-10 placeholder:text-gray-400"
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Button
              type="submit"
              className="px-24 py-6 flex justify-between items-center w-[50%] cursor-pointer"
            >
              <span className="pl-4">Login</span>
              {loading ? (
                <Loader2 className=" size-5 mr-2 animate-spin" />
              ) : (
                <ChevronRight className=" size-5 mr-2" />
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SiginClient;
