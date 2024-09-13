'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog"
import { ScrollArea } from "~/components/ui/scroll-area"
import Icon from "../ui/lucide-icons"
import { UserProfile } from "~/lib/types/profiles"
import { Service, iconOptions } from "~/lib/types/services"
import { UserSocialMedias } from "~/lib/types/socials"

type ProfilePageProps = {
  profile: UserProfile
  services: Service[]
  socials: UserSocialMedias[]
}

export function ProfilePageMaterialDark({ profile, services, socials }: ProfilePageProps) {
  const [activeSection, setActiveSection] = useState('about')

  const NavItem = ({ section, label }: { section: string, label: string }) => (
    <Button
      variant={activeSection === section ? "default" : "ghost"}
      className={`w-full justify-start ${activeSection === section ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
      onClick={() => setActiveSection(section)}
    >
      {label}
    </Button>
  )

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-64 bg-gray-800 p-6 flex flex-col"
      >
        <div className="mb-8 text-center">
          <Image
            src={profile.avatar_url}
            alt="Avatar"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className="text-xl font-bold text-white">{profile.full_name}</h1>
          <p className="text-blue-200">{profile.title}</p>
        </div>
        <nav className="flex-grow space-y-2">
          <NavItem section="about" label="About" />
          <NavItem section="gallery" label="Gallery" />
          <NavItem section="services" label="Services" />
          <NavItem section="misc" label="Misc" />
        </nav>
        <div className="flex justify-center space-x-4 mt-6">
          {socials.map(s => (
            <Link key={s.id} href={s.url}>
              <Icon name={s.platform} className="h-5 w-5 text-blue-200 hover:text-white transition-colors" />
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <ScrollArea className="flex-grow p-8 bg-gray-900">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeSection === 'about' && (
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
                {profile.bio?.split("\n").map((p, idx) => (
                  <p key={idx} className="text-gray-300 mb-2">{p}</p>
                ))}
              </CardContent>
            </Card>
          )}

          {activeSection === 'gallery' && (
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Image
                      key={i}
                      src={`https://placehold.co/300x300/png`}
                      alt={`Gallery image ${i}`}
                      width={300}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'services' && (
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <Card className="bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer">
                          <CardContent className="p-4 flex flex-col items-center text-center">
                            {React.createElement(iconOptions[service.icon!], { className: "h-12 w-12 mb-2 text-blue-300" })}
                            <h3 className="font-semibold mb-1 text-white">{service.title}</h3>
                            <p className="text-sm text-gray-300">{service.description}</p>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="bg-gray-800 text-white">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2 text-xl text-white">
                            {React.createElement(iconOptions[service.icon!], { className: "h-6 w-6 text-blue-300" })}
                            {service.title}
                          </DialogTitle>
                        </DialogHeader>
                        <p className="text-gray-300">{service.details}</p>
                        <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Book Now</Button>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'misc' && (
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Misc</h2>
                <div className="space-y-2 text-gray-300">
                  <p>Languages: English, Español, Português</p>
                  <p>Disponibilidade: Seg-Sex 6AM-8PM, Sab 8AM-2PM</p>
                  <p>Localidade: Vila Nova de Gaia, Porto</p>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </ScrollArea>
    </div>
  )
}