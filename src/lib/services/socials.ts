import { SocialPlatforms, UserSocialMedias } from "../types/socials"
import { prisma } from "../utils"
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export async function fetchSocialPlatforms(): Promise<SocialPlatforms[]> {
    try {
        const result = await prisma.social_medias.findMany({})
        return result.map(s => ({ id: Number(s.id), name: s.name.toLowerCase() as keyof typeof dynamicIconImports }))
    } catch (e) {
        console.log(e)
        return []
    }
}
export async function fetchUserSocials(id: string): Promise<UserSocialMedias[]> {
    try {

        const result = await prisma.profile_socials.findMany({
            where: {
                profile_id: id
            }
        })
        if (result) {
            return result.map(r => ({ ...r, id: Number(r.id), social_media_id: Number(r.social_media_id), platform: r.platform.toLowerCase() as keyof typeof dynamicIconImports }))
        }
        console.log("User has no social media returning empty array")
        return []
    } catch (e) {
        console.log(e)
        return []
    }
}