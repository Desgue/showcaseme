"use server"
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation';
import { z } from 'zod'
import { createClient } from '~/utils/supabase/server';
import { createServiceSchema, iconOptions } from '~/lib/types/services';
import { prisma } from '~/lib/utils';


export async function createServiceAction(values: z.infer<typeof createServiceSchema>) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }

    await prisma.services.create({
        data: { profile_id: data.user.id, title: values.title, description: values.description, icon: values.icon_label, updated_at: new Date() },
    })

}

export async function deleteServiceAction(id: number) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }

    await prisma.services.delete(
        {
            where: { id: BigInt(id) }
        }
    )

}