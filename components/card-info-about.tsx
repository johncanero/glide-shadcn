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
} from "@/components/ui/card-props"

interface CardProps extends React.ComponentProps<typeof Card> {
    icon: string;
    number: string;
    title: string;
    description: string;
}

export function CardAbout({ className, ...props }: CardProps) {
    return (
        <Card className={cn("lg:w-[380px] md:flex-col md:mt-20", className)} {...props}>
            <CardHeader>
                <CardTitle>
                    <Image
                        src={props.icon}
                        width={236}
                        height={236}
                        alt="icon"
                        className="mx-auto rounded-full shadow-lg loading-icon"
                    />
                    <div className="relative">
                        <div className="inline-flex absolute  -bottom-[30px] right-[120px] items-center justify-center w-20 h-20 text-xl font-bold text-gray-700 bg-white rounded-full">
                            {props.number}
                        </div>
                    </div>
                </CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-center md:text-left">
                    <div className="mt-8">
                        <p className="text-xl font-semibold text-center md:text-2xl">
                            {props.title}
                        </p>
                    </div>
                    <div className="flex items-center max-w-xs space-x-4 text-sm text-center rounded-md md:text-base md:max-w-full lg:mt-8">
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}
