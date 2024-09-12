"use server"
import { z } from 'zod'
import { createClient } from '~/utils/supabase/server';
import type { accountSettingsFormSchema, updateProfileSchema } from '~/lib/types/profiles'
import { prisma } from '~/lib/utils';
import { NextResponse } from 'next/server';



export async function updateProfileAction(values: z.infer<typeof updateProfileSchema>): Promise<NextResponse> {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const updatedProfile = await prisma.profiles.update({
            where: { id: data.user.id },
            data: {
                full_name: values.full_name,
                title: values.title,
                bio: values.bio,
                updated_at: new Date()
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Profile update error:", error);
        return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
    }
}

export async function updateUserSettingsAction(values: z.infer<typeof accountSettingsFormSchema>) {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const updatedProfile = await prisma.profiles.update({
            where: { id: data.user.id },
            data: {
                full_name: `${values.firstName} ${values.lastName}`,
                slug: values.slug,
                email_notification: values.emailNotifications,
                updated_at: new Date()
            },
        });

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error("User settings update error:", error);
        return NextResponse.json({ error: "Failed to update user settings" }, { status: 500 });
    }
}