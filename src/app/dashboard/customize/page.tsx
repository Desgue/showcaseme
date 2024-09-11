import { redirect } from 'next/navigation';
import React from 'react'
import CustomizePageComponent from '~/components/customize-profile'
import { fetchUserProfileById } from '~/lib/services/profiles';
import { fetchServicesByUserId } from '~/lib/services/services';
import { createClient } from '~/utils/supabase/server';

const CustomizePage = async () => {
  const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }
    const profile = await fetchUserProfileById(data.user.id)
    const services = await fetchServicesByUserId(data.user.id)
  return (
    <CustomizePageComponent props={{profile, services}}/>
  )
}

export default CustomizePage