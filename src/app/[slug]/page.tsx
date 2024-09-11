import { redirect } from 'next/navigation'
import React from 'react'
import { ProfilePageComponent } from '~/components/profile-page'
import { fetchUserProfileBySlug } from '~/lib/services/profiles'

async function SlugProfilePage({params}: {params:{slug:string}}) {
    const profile = await fetchUserProfileBySlug(params.slug)
    if (profile.slug === "") {
        redirect("/")
    }
  return (
    <ProfilePageComponent profile={profile}/>
  )
}

export default SlugProfilePage