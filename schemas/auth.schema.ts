import { z } from "zod";

export const authSchema = z.object({
    email: z.string({ required_error: "The email is required" })
      .min(1, "The email is required")
      .email("The email is invalid"),
    password: z.string({ required_error: "The password is required" })
      .min(1, "The password is required")
      .min(8, "The password must be more than 8 characters")
      .max(32, "The password must be less than 32 characters"),
  });

  export type AuthSchema = z.infer<typeof authSchema>;