import { redirect } from 'next/navigation';
import React from 'react'
import CustomizePageComponent from '~/components/customize-profile'
import { fetchUserProfile } from '~/lib/services/profiles';
import { createClient } from '~/utils/supabase/server';

const CustomizePage = async () => {
  const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }
    const profile = await fetchUserProfile(data.user.id)
  return (
    <CustomizePageComponent props={{profile}}/>
  )
}

export default CustomizePage