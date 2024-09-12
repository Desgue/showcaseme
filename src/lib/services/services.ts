import { Service, isOfTypeIconLabel } from "../types/services"
import { prisma } from "../utils"



export async function fetchServicesByUserId(id: string): Promise<Service[]> {
    const emptyRes: Service[] = []
    try {
        const result = await prisma.services.findMany({
            where: {
                profile_id: id
            },
        })

        return result.map(r => {
            if (r.icon && isOfTypeIconLabel(r.icon)) {
                return { id: Number(r.id), title: r.title, description: r.description, details: r.details, icon: r.icon }
            }
            return { id: Number(r.id), title: r.title, description: r.description, details: r.details, icon: null }
        })
    } catch (e) {
        console.log(e)
        return emptyRes
    }
}