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
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"


interface CardProps extends React.ComponentProps<typeof Card> {
    icon: string;
    title: string;
    description: string;
}

export function CardDemo({ className, ...props }: CardProps) {
    return (
        <Card className={cn("lg:w-[380px] md:flex lg:flex-col md:mt-20", className)} {...props}>
            <CardHeader>
                <CardTitle>
                    <Image
                        src={props.icon}
                        width={100}
                        height={100}
                        alt="icon"
                        className="rounded-full shadow-lg loading-icon mx-auto md:mx-0"
                    />
                </CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-center md:text-left">
                    <div className="lg:mt-10    ">
                        <p className="text-xl md:text-2xl font-semibold">
                            {props.title}
                        </p>
                    </div>
                    <div className="flex text-sm md:text-base items-center space-x-4 max-w-xs md:max-w-full rounded-md lg:mt-8">
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
