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
    title: string;
    description: string;
}

export function CardHome({ className, ...props }: CardProps) {
    return (
        <Card className={cn("lg:w-[380px] md:flex lg:flex-col md:mt-20", className)} {...props}>
            <CardHeader>
                <CardTitle>
                    <Image
                        src={props.icon}
                        width={100}
                        height={100}
                        alt="icon"
                        className="mx-auto rounded-full shadow-lg loading-icon md:mx-0"
                    />
                </CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-center md:text-left">
                    <div className="lg:mt-10 ">
                        <p className="text-xl font-semibold md:text-2xl">
                            {props.title}
                        </p>
                    </div>
                    <div className="flex items-center max-w-xs space-x-4 text-sm rounded-md md:text-base md:max-w-full lg:mt-8">
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
