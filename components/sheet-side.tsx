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
                    <SheetContent side={side} className="bg-white dark:bg-zinc-900">
                        <SheetHeader>
                            <SheetTitle className="text-3xl font-bold">glider</SheetTitle>
                            <SheetDescription>
                                {/* Make changes to y   our profile here. Click save when you're done. */}
                            </SheetDescription>
                        </SheetHeader>

                        <div className="mt-4">
                            <Link href="/">
                                <p className="mt-1 font-semibold">Overview</p>
                            </Link>

                            <Link href="/about">
                                <p className="mt-2 font-semibold">About</p>
                            </Link>

                            <Link href="/about">
                                <p className="mt-2 font-semibold">Location</p>
                            </Link>

                            <Link href="/about">
                                <p className="mt-2 font-semibold">Careers</p>
                            </Link>

                            <Link href="/about">
                                <p className="mt-2 font-semibold">Contact</p>
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
