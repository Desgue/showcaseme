'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

export function ProfilePageMinimalist({ profile, services, socials }: ProfilePageProps) {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-12">
          <div className="mb-4">
            <Image
              src={profile.avatar_url}
              alt="Avatar"
              width={120}
              height={120}
              className="rounded-full inline-block"
            />
          </div>
          <h1 className="text-3xl font-light mb-2">{profile.full_name}</h1>
          <p className="text-gray-600 mb-4">{profile.title}</p>
          <p className="text-gray-500 max-w-md mx-auto">
            {profile.bio?.split("\n")[0]}
          </p>
        </header>

        <main>
          <section className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {services.slice(0, 6).map((service, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <Image
                        src={`https://placehold.co/300x300/png?text=${service.title}`}
                        alt={service.title}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2 text-xl">
                        {React.createElement(iconOptions[service.icon!], { className: "h-6 w-6 text-gray-600" })}
                        <span>{service.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                    <p className="text-gray-500 mt-2">{service.details}</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>

          <section className="text-center mb-12">
            <h2 className="text-xl font-light mb-2">Get in Touch</h2>
            <p className="text-gray-500 mb-4">
              Available for freelance opportunities
            </p>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              EMAIL ME
            </Button>
          </section>
        </main>

        <footer className="text-center">
          <div className="flex justify-center space-x-4 mb-4">
            {socials.map(s => (
              <Link key={s.id} href={s.url} className="text-gray-400 hover:text-gray-600 transition-colors">
                <Icon name={s.platform} className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {profile.full_name}. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}