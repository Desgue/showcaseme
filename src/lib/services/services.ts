import { PrismaClient } from "@prisma/client"
import { Service, iconOptions, isOfTypeIconLabel } from "../types/services"

const prisma = new PrismaClient({ log: ['query'] })


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
                return { id: Number(r.id), title: r.title, description: r.description, icon: iconOptions[r.icon] }
            }
            return { id: Number(r.id), title: r.title, description: r.description, icon: null }
        })
    } catch (e) {
        console.log(e)
        return emptyRes
    }
}