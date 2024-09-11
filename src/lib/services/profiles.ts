import { PrismaClient } from "@prisma/client";
import { UserProfile } from "../types/profiles";
import { prisma } from "../utils";


export async function fetchUserProfileById(id: string): Promise<UserProfile> {
    const emptyRes = {
        full_name: "",
        title: "",
        bio: "",
        slug: ""
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
                slug: result.slug as string
            }
            return profile
        }
        return emptyRes
    } catch (e) {
        console.log(e)
        return emptyRes
    }
}

export async function fetchUserProfileBySlug(slug: string): Promise<UserProfile> {
    const emptyRes = {
        full_name: "",
        title: "",
        bio: "",
        slug: ""
    }
    try {
        const result = await prisma.profiles.findUnique({
            where: {
                slug: slug
            },
        })
        if (result) {
            const profile = {
                full_name: result.full_name as string,
                title: result.title as string,
                bio: result.bio as string,
                slug: result.slug as string
            }
            return profile
        }
        return emptyRes
    } catch (e) {
        console.log(e)
        return emptyRes
    }
}