"use client"
import React from 'react'
import Link from 'next/link'
import { Home, User, Settings, Layout } from 'lucide-react'
    import { usePathname } from 'next/navigation'

const Sidebar: React.FC = () => {
  const pathname = usePathname()

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Settings, label: 'Account Settings', href: '/settings' },
    { icon: Layout, label: 'Customize Profile', href: '/customize' },
  ]

  return (
    <aside className="w-64 h-screen bg-gray-100 text-gray-900 p-4">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 ${
                  pathname === item.href ? 'bg-gray-200' : ''
                }`} href={item.href}>
              
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
             
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar