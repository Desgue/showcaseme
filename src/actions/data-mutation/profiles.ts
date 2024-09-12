"use server"
import type { z } from 'zod'
import { createClient } from '~/utils/supabase/server';
import type { accountSettingsFormSchema, updateProfileSchema } from '~/lib/types/profiles'
import { prisma } from '~/lib/utils';



export async function updateProfileAction(values: z.infer<typeof updateProfileSchema>) {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
            return { message: "unhautorized" };
        }

        await prisma.profiles.update({
            where: { id: data.user.id },
            data: {
                full_name: values.full_name,
                title: values.title,
                bio: values.bio,
                updated_at: new Date()
            },
        });

        return { message: "success" }
    } catch (error) {
        console.error("Profile update error:", error);
        return { message: "failed to update profile" }
    }
}

export async function updateUserSettingsAction(values: z.infer<typeof accountSettingsFormSchema>) {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
            return { message: "unhautorized" };
        }

        await prisma.profiles.update({
            where: { id: data.user.id },
            data: {
                full_name: `${values.firstName} ${values.lastName}`,
                slug: values.slug.replaceAll(" ", "-"),
                email_notification: values.emailNotifications,
                updated_at: new Date()
            },
        });

        return { message: "success" }
    } catch (error) {
        console.error("User settings update error:", error);
        return { message: "failed" };
    }
}