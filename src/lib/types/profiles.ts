import { z } from "zod";

export const updateProfileSchema = z.object({
    full_name: z.string().min(2).max(50),
    title: z.string().optional(),
    bio: z.string().optional(),
})

