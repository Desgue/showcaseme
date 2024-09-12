"use server"
import { z } from 'zod'
import { createClient } from '~/utils/supabase/server';
import { createServiceSchema, iconOptions } from '~/lib/types/services';
import { prisma } from '~/lib/utils';
import { NextResponse } from 'next/server';

export async function createServiceAction(values: z.infer<typeof createServiceSchema>) {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const newService = await prisma.services.create({
            data: {
                profile_id: data.user.id,
                title: values.title,
                description: values.description,
                details: values.details,
                icon: values.icon_label,
                updated_at: new Date()
            },
        });

        return NextResponse.json({
            success: true,
            service: newService
        });
    } catch (error) {
        console.error("Service creation error:", error);
        return NextResponse.json({ error: "Failed to create service" }, { status: 500 });
    }
}

export async function deleteServiceAction(id: number) {
    try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const deletedService = await prisma.services.delete({
            where: { id: BigInt(id) }
        });

        return NextResponse.json({
            success: true,
            deletedService: deletedService
        });
    } catch (error) {
        console.error("Service deletion error:", error);
        return NextResponse.json({ error: "Failed to delete service" }, { status: 500 });
    }
}