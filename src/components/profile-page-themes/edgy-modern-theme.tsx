'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from "~/components/ui/card"
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

export function ProfilePageEdgyModern({ profile, services, socials }: ProfilePageProps) {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="relative mb-12 h-80 sm:h-96 overflow-hidden rounded-3xl">
          <Image
            src="/banner2.png"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <Image
                  src={profile.avatar_url}
                  alt="Avatar"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-white inline-block"
                />
              </motion.div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold text-white mb-2"
              >
                {profile.full_name}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-200"
              >
                {profile.title}
              </motion.p>
            </div>
          </div>
        </header>

        <main className="space-y-12">
          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            {profile.bio?.split("\n").map((p, idx) => (
              <p key={idx} className="text-gray-600 mb-2">{p}</p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">My Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <motion.div
                      className="cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      onHoverStart={() => setHoveredService(index)}
                      onHoverEnd={() => setHoveredService(null)}
                    >
                      <Card className="h-full overflow-hidden bg-white transition-shadow duration-300 hover:shadow-xl">
                        <CardContent className="p-6">
                          {React.createElement(iconOptions[service.icon!], {
                            className: `h-12 w-12 mb-4 ${hoveredService === index ? 'text-blue-500' : 'text-gray-700'} transition-colors duration-300`
                          })}
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2 text-xl">
                        {React.createElement(iconOptions[service.icon!], { className: "h-6 w-6 text-blue-500" })}
                        <span>{service.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <p className="text-gray-600 mt-2">{service.details}</p>
                    <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">Request Service</Button>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <Image
                    src={`https://placehold.co/300x300/png`}
                    alt={`Gallery image ${i}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {socials.map(s => (
                <Link key={s.id} href={s.url} className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                  <Icon name={s.platform} className="h-6 w-6" />
                  <span>{s.platform}</span>
                </Link>
              ))}
            </div>
            <div className="space-y-2 text-gray-600">
              <p>Languages: English, Español, Português</p>
              <p>Availability: Mon-Fri 6AM-8PM, Sat 8AM-2PM</p>
              <p>Location: Vila Nova de Gaia, Porto</p>
            </div>
          </section>
        </main>

        <footer className="mt-12 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {profile.full_name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}