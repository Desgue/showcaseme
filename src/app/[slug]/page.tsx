import { redirect } from 'next/navigation'
import React from 'react'
import { ProfilePageComponent } from '~/components/profile-page'
import { fetchUserProfileBySlug } from '~/lib/services/profiles'
import { fetchServicesByUserId } from '~/lib/services/services'

async function SlugProfilePage({params}: {params:{slug:string}}) {
    const profile = await fetchUserProfileBySlug(params.slug)
    if (profile.slug === "") {
        redirect("/")
    }
    const services = await fetchServicesByUserId(profile.id)
  return (
    <ProfilePageComponent profile={profile} services={services}/>
  )
}

export default SlugProfilePage