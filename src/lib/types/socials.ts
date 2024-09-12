import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';


const socialPlatforms = [
    'Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'GitHub', 'YouTube', 'TikTok', 'Pinterest', 'Snapchat'
] as const

export type SocialPlatforms = {
    id: number
    name: string
}
export interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports;
}

export type UserSocialMedias = {
    id: number;
    profile_id: string
    social_media_id: number
    platform: keyof typeof dynamicIconImports
    url: string
    updated_at: Date
    created_at: Date;
}
