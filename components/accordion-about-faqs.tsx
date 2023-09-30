/* eslint-disable react/no-unescaped-entities */
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionFaqs() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="px-8 bg-neutral-100 dark:bg-neutral-900">
                <AccordionTrigger className="font-semibold lg:text-2xl">How do I download the app?</AccordionTrigger>
                <AccordionContent>
                    To download the Glider app, you can search “Glider” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="px-8 bg-neutral-100 dark:bg-neutral-900">
                <AccordionTrigger className="font-semibold lg:text-2xl">Can I find a nearby Gliders?</AccordionTrigger>
                <AccordionContent>
                    Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Gliders and some extra useful information.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="px-8 bg-neutral-100 dark:bg-neutral-900">
                <AccordionTrigger className="font-semibold lg:text-2xl">Do I need a license to ride?</AccordionTrigger>
                <AccordionContent>
                    Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Gliders.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
