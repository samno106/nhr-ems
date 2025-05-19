import { z } from "zod";

export const userAccessSchema = z.object({
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

export type UserAccessSchema = z.infer<typeof userAccessSchema>;

export const userUpdateInfoSchema = z.object({
  id: z.string().min(1),
  fullName: z.string({ required_error: "Fullname is required" }).min(1),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email address"),
});

export type UserUpdateInfoSchema = z.infer<typeof userUpdateInfoSchema>;

export const UserStatus = z.enum(["Active", "Pending"]);

export const userUpdateStatusSchema = z.object({
  id: z.string().min(1),
  status: UserStatus,
});

export type UserUpdateStatusSchema = z.infer<typeof userUpdateStatusSchema>;
