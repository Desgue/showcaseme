"use server"
import { Prisma, PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation';
import { z } from 'zod'
import { createClient } from '~/utils/supabase/server';
import { accountSettingsFormSchema, updateProfileSchema } from '~/lib/types/profiles'
import { prisma } from '~/lib/utils';



export async function updateProfileAction(values: z.infer<typeof updateProfileSchema>) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }

    await prisma.profiles.update({
        where: { id: data.user.id },
        data: { full_name: values.full_name, title: values.title, bio: values.bio, updated_at: new Date() },
    })

}

export async function updateUserSettingsAction(values: z.infer<typeof accountSettingsFormSchema>) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }

    await prisma.profiles.update({
        where: { id: data.user.id },
        data: { full_name: `${values.firstName} ${values.lastName}`, slug: values.slug, email_notification: values.emailNotifications, updated_at: new Date() },
    })
}