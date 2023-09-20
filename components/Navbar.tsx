import Image from "next/image"
import Link from "next/link";
import { ModeToggle } from "./darkmode/mode-toggle";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between px-4 pt-4 md:px-8 md:pt-6 lg:px-32 lg:pt-8">
                {/* Logo */}
                <div className='flex'>
                    <Image
                        className='mx-auto mb-6 rounded-full md:mx-0'
                        src='/images/shadcnUILogo.png'
                        alt='shadcnUILogo.png'
                        width={50}
                        height={50}
                    />
                    <h1 className='hidden mt-1 ml-3 text-2xl font-extrabold text-center md:block dark:text-white text-neutral-800'>
                        shadcn/ui
                    </h1>
                </div>
            
               <div>
                    <ModeToggle />
               </div>
            </div>
        </div>
    );
}

export default Navbar;