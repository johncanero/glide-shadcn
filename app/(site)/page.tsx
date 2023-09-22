/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <div className="relative">
            <div>
                <Image
                    src="/images/gliderBackground.jpg"
                    width={1400}
                    height={1000}
                    alt="Glider Background"
                    className='mx-auto opacity-100 md:max-w-2xl lg:max-w-full dark:opacity-70 md:rounded-3xl'
                />
            </div>

            {/* Desktop */}
            <div className='hidden lg:absolute lg:top-44 lg:left-44 lg:block'>
                <div className="max-w-2xl p-6 text-white bg-black bg-opacity-50 rounded-3xl md:hidden lg:block">
                    <h1 className="font-bold text-7xl">Scooter sharing made simple</h1>
                    <div className='mt-4'>
                        <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities.</p>
                        <p className='mt-2'>Use our app to locate the nearest scooter, unlock it with a tap, and you're away!</p>
                    </div>
                </div>
                <div className="items-center hidden space-x-4 lg:flex">
                    <Button className="z-10 w-auto px-8 py-6 mt-7 rounded-xl bg-zinc-50 hover:bg-zinc-900 dark:text-black dark:hover:text-white hover:text-white">Get GliderSwift</Button>
                </div>
            </div>

            {/* Desktop - Arrow */}
            <div className='hidden lg:absolute lg:block lg:bottom-96 lg:left-0'>
                <Image
                    src="/images/patterns/lineWhite.png"
                    width={250}
                    height={250}
                    alt="Line White"
                    className='mx-auto'
                />
            </div>

            {/* Desktop - Arrow */}
            <div className='hidden lg:absolute lg:block lg:bottom-60 lg:right-96'>
                <Image
                    src="/images/patterns/right-arrowWhite.png"
                    width={500}
                    height={500}
                    alt="Right Arrow"
                    className='mx-auto'
                />
            </div>

            {/* Desktop - Circles */}
            <div className='hidden lg:absolute lg:block lg:bottom-64 lg:right-20'>
                <Image
                    src="/images/patterns/white-circles.png"
                    width={250}
                    height={250}
                    alt="White Cirlces"
                    className='mx-auto'
                />
            </div>

        </div>
    )
}
