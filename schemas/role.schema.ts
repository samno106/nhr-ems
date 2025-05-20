import { z } from "zod";

export const roleCreateSchema = z.object({
    name: z.string({ required_error: "Fullname is required" }).min(1),
    description: z.string(),
  });

  export type RoleCreateSchema = z.infer<typeof roleCreateSchema>;