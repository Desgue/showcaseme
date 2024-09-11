"use server"
import { Prisma, PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation';
import { z } from 'zod'
import { createClient } from '~/utils/supabase/server';
import { updateProfileSchema } from '~/lib/types/profiles'

const prisma = new PrismaClient({ log: ['query'] })

export async function updateProfileAction(values: z.infer<typeof updateProfileSchema>) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }
    try {
        await prisma.profiles.update({
            where: { id: data.user.id },
            data: { full_name: values.full_name, title: values.title, bio: values.bio, updated_at: new Date() },
        })
    } catch (e) {
        console.log(e)
    }
}