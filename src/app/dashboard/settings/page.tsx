import React from 'react'

import { Metadata } from 'next'
import AccountSettings from '~/components/account-settings'

export const metadata: Metadata = {
  title: 'Account Settings | ShowcaseMe',
  description: 'Manage your ShowcaseMe account settings and preferences',
}

const AccountSettingsPage: React.FC = () => {
  return <AccountSettings />
}

export default AccountSettingsPage