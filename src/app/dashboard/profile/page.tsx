import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react'
import CustomizePageComponent from '~/components/customize-profile'
import { fetchUserProfileById } from '~/lib/services/profiles';
import { fetchServicesByUserId } from '~/lib/services/services';
import { fetchSocialPlatforms } from '~/lib/services/socials';
import { createClient } from '~/utils/supabase/server';

export const metadata: Metadata = {
  title: 'Page Settings | ShowcaseMe',
  description: 'Manage your ShowcaseMe profile page settings',
}

const CustomizePage = async () => {
  const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      console.error("error fetching user from supabase inside page: ",error)
      redirect("/login");
    }
    const profile = await fetchUserProfileById(data.user.id)
    const services = await fetchServicesByUserId(data.user.id)
    const socialPlatforms = await fetchSocialPlatforms()
  return (
    <main className=''>
      <CustomizePageComponent props={{profile, services, socialPlatforms}}/>
    </main>
  )
}

export default CustomizePage