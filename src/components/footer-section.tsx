'use client'

import { FooterSectionProps } from "~/lib/types/components"
import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function FooterSectionComponent({ t }: FooterSectionProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Showcase Me</h3>
            <p className="text-white text-muted-foreground mb-4">{t.description}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white text-muted-foreground hover:text-[#008C8C] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white text-muted-foreground hover:text-[#008C8C] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white text-muted-foreground hover:text-[#008C8C] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white text-muted-foreground hover:text-[#008C8C] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white text-muted-foreground hover:text-[#008C8C] transition-colors">{t.home}</Link></li>
              <li><Link href="#features" className="text-white text-muted-foreground hover:text-[#008C8C] transition-colors">{t.features}</Link></li>
              <li><Link href="#pricing" className="text-white text-muted-foreground hover:text-[#008C8C] transition-colors">{t.pricing}</Link></li>
              <li><Link href="#faq" className="text-white text-muted-foreground hover:text-[#008C8C] transition-colors">FAQ</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">{t.contact}</h3>
            <p className="text-white text-muted-foreground mb-2">Email: support@showcaseme.com</p>
            <p className="text-white text-muted-foreground mb-2">Phone: (123) 456-7890</p>
            <p className="text-white text-muted-foreground">123 Showcase Street, Web City, 12345</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-white text-muted-foreground mb-4">Stay updated with our latest features and releases.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2  text-black placeholder-black rounded-l-md focus:outline-none "
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#00A3A3] text-white hover:text-[#008C8C] font-semibold rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-[#008C8C] text-center text-white text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} Showcase Me. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}