import Image from "next/image"
import Link from "next/link";
import { ModeToggle } from "./darkmode/mode-toggle";
import { SheetSide } from "./sheet-side";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between px-4 py-8 md:px-8 md:pt-6 lg:px-32 lg:pt-8">
                {/* Logo */}
                <div className='flex'>
                    <Image
                        className='md:mx-0 dark:hidden'
                        src='/images/logo/eBikeLogo.png'
                        alt='eBikeLogo.png'
                        width={35}
                        height={35}
                    />
                    <Image
                        className='hidden md:mx-0 dark:block'
                        src='/images/logo/eBikeLogo2.png'
                        alt='eBikeLogo.png'
                        width={35}
                        height={35}
                    />
                    <h1 className='hidden ml-4 text-4xl font-extrabold text-center md:block dark:text-white text-neutral-800'>
                        glider
                    </h1>
                </div>

                <div className="hidden mt-2 md:flex lg:gap-16">
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


                <div className="flex items-center justify-center space-x-4">
                    <Button className="w-auto px-4 py-4 text-white rounded-md bg-zinc-800 hover:bg-zinc-900">Get GliderSwift</Button>
                </div>


                <div className="flex gap-2">
                    <ModeToggle />
                    <SheetSide />
                </div>
            </div>
        </div>
    );
}

export default Navbar;