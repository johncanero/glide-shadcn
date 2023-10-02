import Image from 'next/image'
import { Button } from '@/components/ui/button';

const Location = () => {
    return (
        <div>
            {/* Cover - Images */}
            <div>
                {/* Desktop */}
                <div className='hidden lg:block'>
                    <Image
                        src="/images/careers-locations-hero-desktop.jpg"
                        width={1200}
                        height={1000}
                        alt="Location"
                        className='w-full dark:opacity-70'
                    />

                    <div className='md:relative lg:mx-[200px]'>
                        <h2 className='absolute md:bottom-[250px] lg:-top-40 text-5xl lg:left-[0px] font-bold text-white'>Location</h2>
                    </div>
                </div>

                {/* Tablet */}
                <div className='hidden md:block lg:hidden'>
                    <Image
                        src="/images/careers-locations-hero-tablet.jpg"
                        width={1200}
                        height={1000}
                        alt="Location"
                        className='w-full dark:opacity-70'
                    />


                    <div className='md:relative md:mx-[60px]'>
                        <h2 className='absolute md:bottom-[250px] md:-top-36 md:text-4xl md:left-[0px] font-bold text-white'>Location</h2>
                    </div>
                </div>

                {/* Mobile */}
                <div className='md:hidden'>
                    <Image
                        src="/images/careers-location-hero-mobile.jpg"
                        width={1200}
                        height={1000}
                        alt="Location"
                        className='w-full dark:opacity-70'
                    />
                    <div className='relative flex justify-center'>
                        <h2 className='absolute text-3xl font-bold text-white -top-28'>Location</h2>
                    </div>
                </div>
            </div>

            {/* Feature Image */}
            <div className='mt-20 mb-12 md:mt-20'>
                {/* Desktop */}
                <div className='lg:mx-[200px]'>
                    {/* Light */}
                    <Image
                        src="/images/world-map-desktop.png"
                        width={1200}
                        height={1000}
                        alt="Location"
                        className='hidden w-full lg:block'
                    />
                </div>

                {/* Tablet */}
                <div>
                    {/* Light */}
                    <Image
                        src="/images/world-map-tablet.png"
                        width={1200}
                        height={1000}
                        alt="Location"
                        className='hidden mx-auto md:max-w-2xl lg:hidden md:block'
                    />
                </div>

                {/* Mobile */}
                <div>
                    {/* Light */}
                    <Image
                        src="/images/world-map-mobile.png"
                        width={1200}
                        height={1000}
                        alt="Location"
                        className='block max-w-sm mx-auto md:hidden'
                    />
                </div>
            </div>

            {/* Your city not listed? */}
            <div>
                <div className='flex flex-wrap justify-center md:hidden'>
                    <Button className="w-full py-10 mx-10 mt-6 text-2xl font-medium text-white bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-100 dark:text-black dark:hover:text-white hover:font-semibold dark:hover:bg-zinc-900 dark:hover:border-zinc-50 hover:text-black">Manila</Button>
                    <Button className="w-full py-10 mx-10 mt-6 text-2xl font-medium text-white bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-100 dark:text-black dark:hover:text-white hover:font-semibold dark:hover:bg-zinc-900 dark:hover:border-zinc-50 hover:text-black">Orlando</Button>
                    <Button className="w-full py-10 mx-10 mt-6 text-2xl font-medium text-white bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-100 dark:text-black dark:hover:text-white hover:font-semibold dark:hover:bg-zinc-900 dark:hover:border-zinc-50 hover:text-black">Singapore</Button>
                </div>

                <div className='flex flex-wrap justify-center lg:justify-between mb-24 mx-[40px] md:mx-[100px] lg:mx-[200px]'>
                    <p className='font-semibold text-4xl max-w-[200px] md:text-5xl md:max-w-[400px] mt-20 lg:mt-0 text-center lg:text-left lg:max-w-[300px]'>Your city not listed?</p>
                    <p className='mt-8 text-center lg:max-w-xl lg:text-left lg:mt-0'>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                    <Button className="flex px-12 py-6 mx-auto mt-12 text-white hover:text-black md:px-8 lg:mx-0 rounded-xl bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-100 dark:text-black dark:hover:text-white hover:font-semibold dark:hover:bg-zinc-900 dark:hover:border-zinc-50 lg:mt-0">Message Us</Button>
                </div>
            </div>
        </div>
    );
}

export default Location;