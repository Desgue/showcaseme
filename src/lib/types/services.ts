import {
    Briefcase,
    Code,
    PenTool,
    Camera,
    Music,
    Book,
    Heart,
    Scissors,
    Coffee,
    Wrench,
    Globe,
    MessageCircle
} from 'lucide-react'
import { z } from 'zod'


// Type for Service object
export type Service = {
    id: number,
    title: string,
    description: string,
    details: string,
    icon: IconLabel | null
}

// Constant array of icon labels
const iconLabels = [
    'Briefcase', 'Code', 'PenTool', 'Camera', 'Music', 'Book',
    'Heart', 'Scissors', 'Coffee', 'Wrench', 'Globe', 'MessageCircle'
] as const

// IconLabel type, which is one of the iconLabels
export type IconLabel = (typeof iconLabels)[number]

// Check if a label is of type IconLabel
export function isOfTypeIconLabel(label: string): label is IconLabel {
    return (iconLabels as readonly string[]).includes(label);
}

// Type for IconOption object
type IconOption = {
    icon: React.ElementType;
    label: IconLabel;
}

// Array of icon options with icon and label
export const iconOptions: Record<IconLabel, React.ElementType> = {
    Briefcase: Briefcase,
    Code: Code,
    PenTool: PenTool,
    Camera: Camera,
    Music: Music,
    Book: Book,
    Heart: Heart,
    Scissors: Scissors,
    Coffee: Coffee,
    Wrench: Wrench,
    Globe: Globe,
    MessageCircle: MessageCircle
};


export const createServiceSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2).max(50),
    details: z.string().min(2),
    icon_label: z.enum(iconLabels),
})
