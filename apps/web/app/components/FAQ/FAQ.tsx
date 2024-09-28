import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@repo/ui/components/ui/accordion"
  
  import { faqs } from "./faqs"
  
  export function FAQ() {
  
    return (
      <section className="bg-gradient-to-r from-[#0F172A] via-[#2b145a] to-gray-800 text-white py-10 px-6 rounded-lg shadow-lg pb-32">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text-lg font-medium p-4 border-b">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 text-white leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    )
  }
  