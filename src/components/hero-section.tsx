'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "~/components/ui/button"
import { HeroSectionProps } from "~/lib/types/components"

export function HeroSectionComponent({ t }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden  bg-gradient-to-b from-white via-gray-50 to-gray-100  pt-16 pb-32 sm:pt-24 sm:pb-40">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div 
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <h1 className="text-3xl tracking-tight font-extrabold bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-transparent bg-clip-text sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{t.title.split(' ').slice(0, -1).join(' ')}</span>{' '}
              <span className="block text-[#FF6B6B] xl:inline">{t.title.split(' ').slice(-1)}</span>
            </h1>
          <p className="text-xl lg:text-2xl text-gray-700 my-4">{t.subtitle}</p>
          <Button size="lg" className="bg-[#FF6B6B] text-white font-bold hover:bg-[#f05757]">
            <Link href="/login">{t.cta}</Link>
          </Button>
          </motion.div>
          <motion.div 
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
              <div className="relative block w-full overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-rrounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                <motion.div
                  className="relative z-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Image
                    src="/showcasememockmobile-portrait.png"
                    alt="Showcase Me App"
                    width={440}
                    height={792}
                    className="w-3/5 md:w-4/5 mx-auto"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  )
}