'use client'

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { FeaturesSectionProps } from './types'

export function FeaturesSectionComponent({ t }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: t.target.icon, title: t.target.title, description: t.target.description },
            { icon: t.seo.icon, title: t.seo.title, description: t.seo.description },
            { icon: t.pricing.icon, title: t.pricing.title, description: t.pricing.description },
            { icon: t.customization.icon, title: t.customization.title, description: t.customization.description },
          ].map((feature, index) => (
            <Card key={index} className="border-gray-200">
              <CardHeader>
                <feature.icon className="w-10 h-10 text-gray-600 mb-2" />
                <CardTitle className="text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}