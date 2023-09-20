import Image from "next/image"
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <div className="md:flex md:mx-12 mt-4 lg:mx-0 md:justify-between">
                {/* Logo */}
                <div className='flex mx-auto md:mx-0'>
                    <Image
                        className='mx-auto mb-6 md:mx-0 rounded-full'
                        src='/images/shadcnUILogo.png'
                        alt='shadcnUILogo.png'
                        width={50}
                        height={50}
                    />
                    <h1 className='hidden mt-1 ml-3 text-2xl font-extrabold text-center md:block text-neutral-800'>
                        shadcn/ui
                    </h1>
                </div>

                <div>
                    {/* Dark Mode */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;