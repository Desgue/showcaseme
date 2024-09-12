import { UserProfile } from "../types/profiles";
import { prisma } from "../utils";


export async function fetchUserProfileById(id: string): Promise<UserProfile> {
    const emptyRes = {
        id: "",
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
                id: result.id!,
                full_name: result.full_name!,
                title: result.title!,
                bio: result.bio!,
                slug: result.slug!
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
        id: "",
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
                id: result.id!,
                full_name: result.full_name!,
                title: result.title!,
                bio: result.bio!,
                slug: result.slug!
            }
            return profile
        }
        return emptyRes
    } catch (e) {
        console.log(e)
        return emptyRes
    }
}