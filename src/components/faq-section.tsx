'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"
import { FAQSectionProps } from "~/lib/types/components"

export function FaqSection({ t }: FAQSectionProps) {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-transparent bg-clip-text">{t.title}</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {[t.question1, t.question2, t.question3, t.question4].map((question, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-gray-900">{question.q}</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {question.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}