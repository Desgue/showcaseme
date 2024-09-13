'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { CheckCircle } from 'lucide-react'
import { PricingSectionProps } from '~/lib/types/components'

export function PricingSectionComponent({ t }: PricingSectionProps) {
  const [contributionType, setContributionType] = useState('monthly')

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-100 via-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-transparent bg-clip-text">{t.title}</h2>
        <Card className="max-w-md mx-auto border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">{t.title}</CardTitle>
            <CardDescription className="text-gray-700">{t.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <RadioGroup defaultValue="monthly" onValueChange={setContributionType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="onetime" id="onetime" />
                  <Label htmlFor="onetime">One-time</Label>
                </div>
              </RadioGroup>
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-gray-900">
                  {contributionType === 'monthly' ? 'Monthly' : 'One-time'} Contribution
                </Label>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">$</span>
                  <Input id="amount" type="number" placeholder="0" min="0" className="text-2xl text-gray-900" />
                </div>
              </div>
              <ul className="space-y-2">
                {t.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gray-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#00A3A3] text-white hover:bg-[#008C8C]">{t.cta}</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}