"use server"
import type { z } from 'zod'
import { createClient } from '~/utils/supabase/server';
import type { createServiceSchema } from '~/lib/types/services';
import { prisma } from '~/lib/utils';

export async function createServiceAction(values: z.infer<typeof createServiceSchema>) {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
            return { message: "unhautorized" };
        }

        await prisma.services.create({
            data: {
                profile_id: data.user.id,
                title: values.title,
                description: values.description,
                details: values.details,
                icon: values.icon_label,
                updated_at: new Date()
            },
        });

        return { message: "success" }
    } catch (error) {
        console.error("Service creation error:", error);
        return { message: "Failed to create service" }
    }
}

export async function deleteServiceAction(id: number) {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
            return { message: "unauthorized" }
        }

        await prisma.services.delete({
            where: { id: BigInt(id) }
        });

        return { message: "success" }
    } catch (error) {
        console.error("Service deletion error:", error);
        return { message: "Failed to delete service" }
    }
}