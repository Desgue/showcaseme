import React from 'react'
import Sidebar from './Sidebar'
import { Toaster } from '~/components/ui/toaster';


interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        {children}
        <Toaster/>
      </main>
    </div>
  )
}

export default DashboardLayout