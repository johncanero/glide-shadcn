/* eslint-disable react/no-unescaped-entities */
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionSafe() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="px-8 bg-neutral-100 dark:bg-neutral-900">
                <AccordionTrigger className="font-semibold lg:text-2xl">Should I wear a helmet?</AccordionTrigger>
                <AccordionContent>
                    Yes. All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Gliding.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="px-8 bg-neutral-100 dark:bg-neutral-900">
                <AccordionTrigger className="font-semibold text-left lg:text-2xl">How about the rules & regulations?</AccordionTrigger>
                <AccordionContent>
                    Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="px-8 bg-neutral-100 dark:bg-neutral-900">
                <AccordionTrigger className="font-semibold lg:text-2xl">What if I damage my Glider?</AccordionTrigger>
                <AccordionContent>
                    Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Glider.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
