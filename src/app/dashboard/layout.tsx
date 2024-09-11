import React from 'react'
import { Toaster } from '~/components/ui/toaster';
import {  SidebarComponent } from './Sidebar';


interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <main className="flex">
      <SidebarComponent />
      <div className='flex-1'>
        {children}
        <Toaster/>

      </div>
    </main>
  )
}

export default DashboardLayout