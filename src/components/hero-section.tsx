'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "~/components/ui/button"
import { HeroSectionProps } from "~/lib/types/components"

export function HeroSectionComponent({ t }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -200, }}
          animate={{ opacity: 1, x: 0 }}
          transition={{type:"spring", duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-transparent bg-clip-text">
            {t.title}
          </h1>
          <p className="text-xl text-gray-700">{t.subtitle}</p>
          <Button size="lg" className="bg-[#FF6B6B] text-white hover:bg-[#f05757]">
            <Link href="/login">{t.cta}</Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 450 }}
          animate={{ opacity: 1, y: 25 }}
          transition={{ duration: 1 }}
          className="relative hidden md:block"
        >
          <Image
            src="/showcasememockmobile-portrait.png"
            alt="Banner"
            width={440}
            height={192}
            className="w-3/5 mx-auto" 
          />
        </motion.div>
      </div>
    </section>
  )
}