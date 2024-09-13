'use client'

import { FooterSectionProps } from "~/lib/types/components"


export function FooterSectionComponent({ t }: FooterSectionProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Showcase Me</h3>
            <p>{t.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t.home}</a></li>
              <li><a href="#features" className="hover:underline">{t.features}</a></li>
              <li><a href="#pricing" className="hover:underline">{t.pricing}</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <p>Email: support@showcaseme.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Showcase Me. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}