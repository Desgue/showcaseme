'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog"
import Icon from "../ui/lucide-icons"
import { UserProfile } from "~/lib/types/profiles"
import { Service, iconOptions } from "~/lib/types/services"
import { UserSocialMedias } from "~/lib/types/socials"

type ProfilePageProps = {
  profile: UserProfile
  services: Service[]
  socials: UserSocialMedias[]
}

export function ProfilePageModernCard({ profile, services, socials }: ProfilePageProps) {
  const [activeSection, setActiveSection] = useState('about')

  const NavItem = ({ section, label }: { section: string; label: string }) => (
    <Button
      variant={activeSection === section ? "default" : "ghost"}
      className={`px-4 py-2 ${
        activeSection === section ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
      }`}
      onClick={() => setActiveSection(section)}
    >
      {label}
    </Button>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl">
        <div className="relative h-48 sm:h-64">
          <Image
            src="/banner2.png"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
            <div className="flex items-center space-x-4">
              <Image
                src={profile.avatar_url}
                alt="Avatar"
                width={80}
                height={80}
                className="rounded-full border-4 border-white"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">{profile.full_name}</h1>
                <p className="text-gray-200">{profile.title}</p>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <NavItem section="about" label="About" />
            <NavItem section="services" label="Services" />
            <NavItem section="gallery" label="Gallery" />
            <NavItem section="contact" label="Contact" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === 'about' && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">About Me</h2>
                  {profile.bio?.split("\n").map((p, idx) => (
                    <p key={idx} className="text-muted-foreground">{p}</p>
                  ))}
                </div>
              )}

              {activeSection === 'services' && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">My Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <Dialog key={index}>
                        <DialogTrigger asChild>
                          <Card className="cursor-pointer hover:bg-accent transition-colors">
                            <CardHeader>
                              <CardTitle className="flex items-center space-x-2">
                                {React.createElement(iconOptions[service.icon!], { className: "h-5 w-5 text-primary" })}
                                <span>{service.title}</span>
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-2">
                              {React.createElement(iconOptions[service.icon!], { className: "h-6 w-6 text-primary" })}
                              <span>{service.title}</span>
                            </DialogTitle>
                          </DialogHeader>
                          <p className="text-muted-foreground">{service.details}</p>
                          <Button className="mt-4">Request Service</Button>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'gallery' && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Gallery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Image
                        key={i}
                        src={`https://placehold.co/300x300/png`}
                        alt={`Gallery image ${i}`}
                        width={300}
                        height={300}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'contact' && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Contact Information</h2>
                  <div className="flex flex-wrap gap-4">
                    {socials.map(s => (
                      <Link key={s.id} href={s.url} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                        <Icon name={s.platform} className="h-5 w-5" />
                        <span>{s.platform}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2 text-muted-foreground">
                    <p>Languages: English, Español, Português</p>
                    <p>Availability: Mon-Fri 6AM-8PM, Sat 8AM-2PM</p>
                    <p>Location: Vila Nova de Gaia, Porto</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  )
}