import React from 'react'
import { Toaster } from '~/components/ui/toaster';
import {  SidebarComponent } from './Sidebar';


interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <SidebarComponent />
      <main className="flex-1 p-4">
        {children}
        <Toaster/>
      </main>
    </div>
  )
}

export default DashboardLayout