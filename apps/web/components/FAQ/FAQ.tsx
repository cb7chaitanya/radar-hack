import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion";

import { faqs } from "./faqs";

export function FAQ() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {[
            {
              question: "How do I recharge my wallet?",
              answer:
                "You can recharge your wallet using various payment methods including credit/debit cards and cryptocurrencies. Simply go to your account dashboard and click on 'Recharge Wallet'.",
            },
            {
              question: "What AI models are available?",
              answer:
                "We offer access to the latest versions of popular AI models such as GPT, Gemini, and LLaMA. The available models may vary and are regularly updated.",
            },
            {
              question: "How does the pay-as-you-go model work?",
              answer:
                "Your wallet balance is deducted based on the duration and complexity of your AI interactions. You only pay for what you use, and you can recharge your wallet at any time.",
            },
            {
              question: "Is my data secure?",
              answer:
                "Yes, we take data security very seriously. All conversations are encrypted, and we do not store the content of your chats. Your wallet transactions are secured by blockchain technology.",
            },
          ].map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
