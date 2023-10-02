import { BellRing, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card-props"

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
                        <p className="mt-1 text-base font-normal text-center lg:text-lg md:text-left lg:mt-2">
                            {props.location}
                        </p>
                    </div>
                </CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <Link href="/">
                        <Button className="flex px-24 py-8 mx-auto text-black lg:px-28 md:mt-6 lg:mt-5 hover:text-black bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:text-white dark:hover:text-white hover:font-semibold dark:hover:bg-zinc-800 dark:hover:border-zinc-50">Apply</Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
