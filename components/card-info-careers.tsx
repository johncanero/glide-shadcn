import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardProps extends React.ComponentProps<typeof Card> {
    career: string;
    location: string;
}

export function CardCareers({ className, ...props }: CardProps) {
    return (
        <Card className={cn("md:flex justify-between dark:bg-zinc-100 bg-zinc-900 text-white dark:text-black mt-5 md:px-6 lg:px-12 py-2", className)} {...props}>
            <CardHeader>
                <CardTitle>
                    <div>
                        <p className="text-center md:text-left md:text-2xl">
                            {props.career}
                        </p>
                    </div>
                    <div>
                        <p className="font-normal text-base lg:text-lg text-center md:text-left mt-1 lg:mt-2">
                            {props.location}
                        </p>
                    </div>
                </CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <Button className="flex px-24 lg:px-28 py-8 md:mt-6 lg:mt-5 mx-auto text-black hover:text-black bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:text-white dark:hover:text-white hover:font-semibold dark:hover:bg-zinc-800  dark:hover:border-zinc-50">Apply</Button>
                </div>
            </CardContent>
        </Card>
    )
}
