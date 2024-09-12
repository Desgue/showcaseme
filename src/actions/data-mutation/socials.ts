"use server"
import type { z } from 'zod'
import { createClient } from '~/utils/supabase/server';
import { createSocialSchema } from '~/lib/types/socials';
import { prisma } from '~/lib/utils';

export async function createUserSocial(values: z.infer<typeof createSocialSchema>) {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
            return { message: "unhautorized" };
        }

        const socialMedia = await prisma.social_medias.findUnique({
            where: { id: values.social_media_id },
            select: { name: true }
        });

        if (!socialMedia) {
            throw new Error("Social media not found");
        }
        await prisma.profile_socials.create({
            data: {
                profile_id: data.user.id,
                social_media_id: values.social_media_id,
                url: values.url,
                platform: socialMedia.name
            },
        });

        return { message: "success" }
    } catch (error) {
        console.error("Service creation error:", error);
        return { message: "Failed to create service" }
    }
}