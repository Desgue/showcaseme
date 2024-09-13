'use client'

import { FooterSectionProps } from "~/lib/types/components"
import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function FooterSectionComponent({ t }: FooterSectionProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Showcase Me</h3>
            <p className="text-blue-200 mb-4">{t.description}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-yellow-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-300 hover:text-yellow-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-300 hover:text-yellow-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-300 hover:text-yellow-300 transition-colors">
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
              <li><Link href="/" className="text-blue-200 hover:text-yellow-300 transition-colors">{t.home}</Link></li>
              <li><Link href="#features" className="text-blue-200 hover:text-yellow-300 transition-colors">{t.features}</Link></li>
              <li><Link href="#pricing" className="text-blue-200 hover:text-yellow-300 transition-colors">{t.pricing}</Link></li>
              <li><Link href="#faq" className="text-blue-200 hover:text-yellow-300 transition-colors">FAQ</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">{t.contact}</h3>
            <p className="text-blue-200 mb-2">Email: support@showcaseme.com</p>
            <p className="text-blue-200 mb-2">Phone: (123) 456-7890</p>
            <p className="text-blue-200">123 Showcase Street, Web City, 12345</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4">Stay updated with our latest features and releases.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 bg-blue-800 text-white placeholder-blue-300 border border-blue-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-r-md hover:bg-yellow-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300"
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