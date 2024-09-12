'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { TestimonialsSectionProps } from './types'

export function TestimonialsSectionComponent({ t }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[t.testimonial1, t.testimonial2, t.testimonial3].map((testimonial, index) => (
            <Card key={index} className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">{testimonial.name}</CardTitle>
                <CardDescription className="text-gray-700">{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 italic">&quot;{testimonial.quote}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}