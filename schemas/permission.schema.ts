import { z } from "zod";

export const createPermissionSchema = z.object({
  name: z.string({ required_error: "Fullname is required" }).min(1),
  description: z.string(),
  moduleId: z
    .string({ required_error: "Module is required" })
    .min(1, "Module is required"),
});

export type CreatePermissionSchema = z.infer<typeof createPermissionSchema>;
