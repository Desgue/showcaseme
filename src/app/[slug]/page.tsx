import { redirect } from 'next/navigation'
import React from 'react'
import { ProfilePageComponent } from '~/components/profile-page-themes/profile-page'
import { fetchUserProfileBySlug } from '~/lib/services/profiles'
import { fetchServicesByUserId } from '~/lib/services/services'
import { fetchUserSocials } from '../../lib/services/socials'
import { ProfilePageEdgyModern } from '~/components/profile-page-themes/edgy-modern-theme'
import { ProfilePageMinimalist } from '~/components/profile-page-themes/minimalist-theme'
import { ProfilePageMaterialDark } from '~/components/profile-page-themes/darkmode-sidebar-theme'
import { ProfilePageModernCard } from '~/components/profile-page-themes/modern-card-theme'

async function SlugProfilePage({params}: {params:{slug:string}}) {
    const profile = await fetchUserProfileBySlug(params.slug)
    if (!profile.slug || profile.slug === "") {
        redirect("/")
    }
    const services = await fetchServicesByUserId(profile.id)
    const userSocials = await fetchUserSocials(profile.id)
    
  return (
    <ProfilePageModernCard profile={profile} services={services} socials={userSocials}/>
  )
}

export default SlugProfilePage