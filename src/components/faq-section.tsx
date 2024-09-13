'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"
import { FAQSectionProps } from "~/lib/types/components"

export function FaqSection({ t }: FAQSectionProps) {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.title}</h2>
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