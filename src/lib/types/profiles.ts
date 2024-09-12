import { z } from "zod";

export const updateProfileSchema = z.object({
    full_name: z.string().min(2).max(50),
    title: z.string().optional(),
    bio: z.string().optional(),
})

export const accountSettingsFormSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
    emailNotifications: z.boolean(),
})

export type UserProfile = { id: string, full_name: string, title: string, bio: string, slug: string }
