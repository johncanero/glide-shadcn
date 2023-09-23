import Image from "next/image"
import Link from "next/link";
import { ModeToggle } from "./darkmode/mode-toggle";
import { SheetSide } from "./sheet-side";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between px-4 py-4 md:py-8 md:px-8 lg:px-24 md:pt-6 lg:pt-8">
                {/* Logo */}
                <div className='flex'>
                    <Link href="/">
                        <Image
                            className='md:mx-0 dark:hidden'
                            src='/images/logo/eScooterLogo.png'
                            alt='eScooterLogo.png'
                            width={35}
                            height={35}
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            className='hidden md:mx-0 dark:block'
                            src='/images/logo/eScooterLogo2.png'
                            alt='eScooterLogo2.png'
                            width={35}
                            height={35}
                        />
                    </Link>
                    <h1 className='ml-4 text-3xl font-extrabold text-center md:text-4xl md:block dark:text-white text-neutral-800'>
                        glider
                    </h1>
                </div>

                {/* Desktop */}
                <div className="hidden mt-2 lg:flex lg:gap-14">
                    <Link href="/">
                        <p className="font-medium hover:underline hover:underline-offset-4">Home</p>
                    </Link>
                    <Link href="/about">
                        <p className="font-medium hover:underline hover:underline-offset-4">About</p>
                    </Link>
                    <Link href="/location">
                        <p className="font-medium hover:underline hover:underline-offset-4">Location</p>
                    </Link>
                    <Link href="/careers">
                        <p className="font-medium hover:underline hover:underline-offset-4">Careers</p>
                    </Link>
                    <Link href="/contact">
                        <p className="font-medium hover:underline hover:underline-offset-4">Contact</p>
                    </Link>
                </div>

                {/* Desktop */}
                <div className="items-center justify-center hidden space-x-4 lg:flex">
                    <Button className="w-auto px-8 py-6 text-white bg-zinc-800 hover:bg-zinc-900 rounded-xl">Get GliderSwift</Button>
                </div>


                <div className="flex lg:gap-2">
                    {/* Tablet */}
                    <div className="items-center justify-center hidden mr-4 space-x-4 md:block lg:hidden">
                        <Button className="w-auto px-4 py-4 text-white bg-zinc-800 hover:bg-zinc-900 rounded-xl">Get GliderSwift</Button>
                    </div>
                    <ModeToggle />
                    <SheetSide />
                </div>
            </div>
        </div>
    );
}

export default Navbar;