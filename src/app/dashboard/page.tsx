import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Dashboard() {
  return (
    <div className={`min-w-screen min-h-screen flex justify-center items-center dark bg-background text-foreground`}>
      <div className={`flex-0.5 flex`}>
        <div className={`w-full`}>teste</div>
        <Accordion type="single" collapsible className={`w-full`}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Descrição da aplicação</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Modelo NLP</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Objetivo</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  )
}
