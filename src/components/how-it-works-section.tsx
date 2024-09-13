'use client'

import { motion } from "framer-motion"
import { HowItWorksStepTranslations, HowItWorksTranslations } from "~/lib/types/components"


const HowItWorksSection: React.FC<{ t: HowItWorksTranslations }> = ({ t }) => {
  const steps: HowItWorksStepTranslations[] = [t.step1, t.step2, t.step3, t.step4]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.title}</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="md:absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-16 flex items-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div 
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 
                    ? 'md:pr-8 md:text-right' 
                    : 'md:ml-auto md:pl-8 md:text-left'
                } mb-8 md:mb-0`}
                >
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 max-md:flex max-md:gap-4"> <step.icon className="md:hidden w-8 h-8  text-gray-600" />{step.title} </h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <p className="text-gray-700">{step.details}</p>
              </div>
              <div className="hidden md:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-gray-200 md:flex items-center justify-center">
                <step.icon className="w-6 h-6 text-gray-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection