'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "~/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { Menu } from 'lucide-react'
import { Languages } from '~/lib/types/components'


type NavbarProps = {
  t: {
    features: string;
    pricing: string;
    login: string;
    createAccount: string;
  };
  language: string;
  setLanguage: (lang: Languages) => void;
  scrollTo: (id: string) => void;
  showNavbar: boolean;
}

export function NavbarComponent({ t, language, setLanguage, scrollTo, showNavbar }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: t.features, action: () => scrollTo("features") },
    { label: t.pricing, action: () => scrollTo("pricing") },
    { label: t.login, href: "/login" },
    { label: t.createAccount, href: "/login", primary: true },
  ]

  const NavLinks = () => (
    <>
      {navItems.map((item, index) => (
        item.href ? (
          <Button key={index} variant={item.primary ? "default" : "outline"} asChild>
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ) : (
          <Button key={index} variant="ghost" onClick={item.action}>
            {item.label}
          </Button>
        )
      ))}
    </>
  )

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${showNavbar ? 'opacity-100 shadow-md' : 'opacity-0 pointer-events-none'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">Showcase Me</h1>
        <div className="hidden md:flex items-center space-x-4">
          <NavLinks />
          <Select onValueChange={(v) => setLanguage(v as Languages)} defaultValue={language}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="pt">Português</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-4">
              <NavLinks />
              <Select onValueChange={(v) => setLanguage(v as Languages)} defaultValue={language}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="pt">Português</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}