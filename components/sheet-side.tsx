/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "./darkmode/mode-toggle"
import { Menu, ArrowLeft } from "lucide-react"


const SHEET_SIDES = ["right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
    return (
        <div className="">
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={side}>
                        <SheetHeader>
                            <SheetTitle className="text-3xl font-bold">glider</SheetTitle>
                            <SheetDescription>
                                {/* Make changes to y   our profile here. Click save when you're done. */}
                            </SheetDescription>
                        </SheetHeader>

                        <div className="mt-4">
                            <Link href="/">
                                <div className="mt-1">Overview</div>
                            </Link>
                            <Link href="/about">
                                <div className="mt-2">About</div>
                            </Link>

                            <Link href="/">
                                <div className="mt-2">Location</div>
                            </Link>

                            <Link href="/">
                                <div className="mt-2">Careers</div>
                            </Link>


                            <Link href="/">
                                <div className="mt-2">Contact</div>
                            </Link>
                        </div>

                        <SheetFooter>
                            <SheetClose asChild>
                                <Button className="gap-1 mt-12">
                                    <ArrowLeft />
                                    Return
                                </Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    )
}
