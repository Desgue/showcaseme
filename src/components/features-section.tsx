'use client'

import { ForwardRefExoticComponent, MouseEventHandler, RefAttributes, SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Target, Globe, CreditCard, User, ArrowRight, LucideProps } from 'lucide-react'
import { Button } from './ui/button'
import { ExpandedFeaturesSectionProps } from '~/lib/types/components'
import Link from 'next/link'


type FeatureCardProps = {
  feature: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
    details: string;
},
isSelected: boolean,
onClick: MouseEventHandler<HTMLDivElement> | undefined

}
const FeatureCard = ({ feature, isSelected, onClick }: FeatureCardProps) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
  >
    <Card 
      className={`cursor-pointer transition-all duration-300 ${isSelected ? 'border-[#00a3a396] shadow-lg' : 'border-gray-200'}`}
      onClick={onClick}
    >
      <CardHeader>
        <feature.icon className={`w-10 h-10 ${isSelected ? 'text-[#00A3A3]' : 'text-gray-600'} mb-2`} />
        <CardTitle className={`${isSelected ? 'text-primary' : 'text-gray-900'}`}>{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{feature.description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export default function ExpandedFeaturesSection({ t }: ExpandedFeaturesSectionProps) {
  const [selectedFeature, setSelectedFeature] = useState(0)

  const features = [
    { 
      icon: Target, 
      title: t.target.title, 
      description: t.target.description,
      details: t.target.details,
    },
    { 
      icon: Globe, 
      title: t.seo.title, 
      description: t.seo.description,
      details: t.seo.details,
    },
    { 
      icon: CreditCard, 
      title: t.pricing.title, 
      description: t.pricing.description,
      details: t.pricing.details,
    },
    { 
      icon: User, 
      title: t.customization.title, 
      description: t.customization.description,
      details: t.customization.details,
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-100 via-gray-100 to-white ">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-[#1A2A3A]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.title}
        </motion.h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              isSelected={selectedFeature === index}
              onClick={() => setSelectedFeature(index)}
            />
          ))}
        </div>
        <motion.div
          layout
          className="bg-white rounded-lg p-8 mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3 
            className="text-2xl font-semibold mb-4 text-gray-900"
            key={selectedFeature}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 , delay: 0.3}}
          >
            {features[selectedFeature]!.title}
          </motion.h3>
          <motion.p 
            className="text-gray-700 mb-6"
            key={`${selectedFeature}-details`}
            initial={{ opacity: 0, x: 0}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration:0.6, delay: 0.3 }}
          >
            {features[selectedFeature]!.details}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
             <Link href={"/why-showcase-me"}>
            <Button className="bg-[#00A3A3] text-primary-foreground hover:bg-[#008C8C]">
             Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}