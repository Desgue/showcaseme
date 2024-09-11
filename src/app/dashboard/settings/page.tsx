import React from 'react'

import { Metadata } from 'next'
import AccountSettings from '~/components/account-settings'
import { createClient } from '~/utils/supabase/server'
import { redirect } from 'next/navigation'
import { fetchUserProfileById } from '~/lib/services/profiles'

export const metadata: Metadata = {
  title: 'Account Settings | ShowcaseMe',
  description: 'Manage your ShowcaseMe account settings and preferences',
}

const AccountSettingsPage: React.FC = async () => {
  const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }
    const profile = await fetchUserProfileById(data.user.id)
  return <AccountSettings profile={profile} />
}

export default AccountSettingsPage