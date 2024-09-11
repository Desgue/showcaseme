import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ['query'] })

export async function fetchUserProfile(id: string): Promise<{ full_name: string, title: string, bio: string }> {
    const emptyRes = {
        full_name: "",
        title: "",
        bio: "",
    }
    try {
        const result = await prisma.profiles.findUnique({
            where: {
                id: id
            },
        })
        if (result) {
            const profile = {
                full_name: result.full_name as string,
                title: result.title as string,
                bio: result.bio as string,
            }
            return profile
        }
        return emptyRes
    } catch (e) {
        console.log(e)
        return emptyRes
    }
}