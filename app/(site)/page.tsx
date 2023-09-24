/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CardDemo } from '@/components/card-info'

export default function Home() {
    return (
        <div>
            <div className='relative'>
                {/* Desktop */}
                <div className='mt-4'>
                    <Image
                        src="/images/gliderBackgroundDesktop.jpg"
                        width={1400}
                        height={1000}
                        alt="Glider Background"
                        className='hidden mx-auto opacity-100 lg:max-w-full lg:block dark:opacity-70 lg:rounded-3xl'
                    />
                </div>

                {/* Desktop */}
                <div className='hidden lg:absolute lg:top-44 lg:left-80 lg:block'>
                    <div className="max-w-2xl p-6 text-white bg-black bg-opacity-50 rounded-3xl md:hidden lg:block">
                        <h1 className="font-bold text-7xl">Scooter sharing made simple</h1>
                        <div className='mt-6'>
                            <p>Glider streamlines urban transportation, with our scooters strategically positioned in convenient spots across all our city locations, making mobility hassle-free.</p>
                            <p className='mt-2'>Use our app to locate the nearest scooter, unlock it with a tap, and you're away!</p>
                        </div>
                    </div>
                    <div className="items-center hidden space-x-4 lg:flex">
                        <Button className="z-10 w-auto px-8 py-6 mt-7 rounded-xl bg-zinc-50 hover:bg-zinc-900 dark:text-black dark:hover:text-white hover:text-white hover:font-bold">Get GliderSwift</Button>
                    </div>
                </div>

                {/* Desktop - Line*/}
                <div className='hidden lg:absolute lg:block lg:top-96 lg:left-36'>
                    <Image
                        src="/images/patterns/lineWhite.png"
                        width={175}
                        height={175}
                        alt="Line White"
                        className='mx-auto'
                    />
                </div>

                {/* Desktop - Arrow */}
                <div className='hidden lg:absolute lg:block lg:bottom-52 lg:right-1/3'>
                    <Image
                        src="/images/patterns/right-arrowWhite.png"
                        width={500}
                        height={500}
                        alt="Right Arrow"
                        className='mx-auto'
                    />
                </div>

                {/* Desktop - Circles */}
                <div className='hidden lg:absolute lg:block lg:bottom-60 lg:right-48'>
                    <Image
                        src="/images/patterns/white-circles.png"
                        width={250}
                        height={250}
                        alt="White Cirlces"
                        className='mx-auto'
                    />
                </div>

                {/* Tablet */}
                <div className='relative hidden lg:hidden md:flex md:items-center md:justify-center'>
                    <Image
                        src="/images/gliderBackgroundTablet.jpg"
                        width={1400}
                        height={1000}
                        alt="Glider Background"
                        className='max-w-full'
                    />

                    <div className="absolute p-6 text-center text-white transform -translate-x-24 -translate-y-1/2 bg-black bg-opacity-50 top-64 left-1/4 rounded-3xl">
                        <h1 className="text-5xl font-bold">Scooter sharing made simple</h1>
                        <div className='mt-6'>
                            <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities.</p>
                            <p className='mt-2'>Use our app to locate the nearest scooter, unlock it with a tap, and you're away!</p>
                        </div>
                    </div>
                    <div className="absolute flex items-center space-x-4 transform -translate-x-1/2 mt-7 bottom-44 left-1/2">
                        <Button className="z-10 w-auto px-8 py-6 rounded-xl bg-zinc-50 hover:bg-zinc-900 dark:text-black dark:hover:text-white hover:text-white">Get GliderSwift</Button>
                    </div>
                </div>

                {/* Tablet - Arrow */}
                <div className='hidden lg:hidden md:absolute md:block md:bottom-12 md:left-0'>
                    <Image
                        src="/images/patterns/right-arrowWhite.png"
                        width={350}
                        height={350}
                        alt="Right Arrow"
                        className='mx-auto'
                    />
                </div>

                {/* Tablet - Circles */}
                <div className='hidden md:absolute lg:hidden md:block md:bottom-14 md:right-8'>
                    <Image
                        src="/images/patterns/white-circles.png"
                        width={200}
                        height={200}
                        alt="White Cirlces"
                        className='mx-auto'
                    />
                </div>


                {/* Mobile */}
                <div className='relative flex items-center justify-center md:hidden'>
                    <Image
                        src="/images/gliderBackgroundMobile.jpg"
                        width={1400}
                        height={1000}
                        alt="Glider Background"
                        className='max-w-full'
                    />

                    <div className="absolute p-6 text-center text-white transform -translate-x-12 bg-black bg-opacity-50 top-52 left-1/4 -translate-y-36 rounded-3xl">
                        <h1 className="text-3xl font-bold md:text-5xl">Scooter sharing made simple</h1>
                        <div className='mt-6'>
                            <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities.</p>
                            <p className='mt-2'>Use our app to locate the nearest scooter, unlock it with a tap, and you're away!</p>
                        </div>
                    </div>
                    <div className="absolute flex items-center space-x-4 transform -translate-x-1/2 mt-7 bottom-24 left-1/2">
                        <Button className="z-10 w-auto px-8 py-6 rounded-xl bg-zinc-50 hover:bg-zinc-900 dark:text-black dark:hover:text-white hover:text-white">Get GliderSwift</Button>
                    </div>
                </div>

                {/* Mobile - Arrow */}
                <div className='absolute left-0 md:hidden bottom-2'>
                    <Image
                        src="/images/patterns/right-arrowWhite.png"
                        width={200}
                        height={200}
                        alt="Right Arrow"
                        className='mx-auto'
                    />
                </div>
            </div>

            {/* Cards */}
            <div>
                <div className='flex flex-wrap justify-center mt-8 gap-x-16'>
                    <CardDemo
                        icon='/images/icons/locate.png'
                        title='Locate with app'
                        description='Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.'
                    />
                    <CardDemo
                        icon='/images/icons/scooter.png'
                        title='Pick your scooter'
                        description='We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.'
                    />
                    <CardDemo
                        icon='/images/icons/ride.png'
                        title='Enjoy the ride'
                        description='Scan the QR code and the scooter will unlock. Retract the cable lock, put on a helmet, and you are off! Always lock scooters away from walkways and accessibility ramps.'
                    />
                </div>
            </div>


            {/* Desktop - Learn More */}
            <div className='mb-12 mt-20 md:mt-36'>
                <div className='flex-wrap lg:flex-nowrap flex justify-center lg:mx-[200px]'>
                    <div className='order-1 lg:order-3'> {/* This line controls the order */}
                        <Image
                            src="/images/telemetry.jpg"
                            width={700}
                            height={700}
                            alt="Telemetry"
                            className='rounded-full max-w-[300px] md:max-w-sm lg:max-w-full'
                        />
                    </div>
                    <div className='order-1 lg:order-2 mt-12'> {/* This line controls the order */}
                        <h2 className='font-bold text-center lg:text-left text-3xl md:text-5xl md:mx-12 lg:mx-0 lg:w-4/6'>Easy to use riding telemetry</h2>
                        <p className='mx-8 md:mx-32 lg:mx-0 lg:w-4/6 text-center lg:text-left mt-6 md:mt-8'>The Glider app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                        <Button className="px-16 md:px-8 py-6 text-white flex mx-auto lg:mx-0 mt-12 rounded-xl bg-zinc-900 hover:bg-zinc-900 dark:text-white dark:hover:text-black dark:hover:bg-white hover:font-semibold  dark:hover:border-zinc-50">Learn More</Button>

                        {/* Desktop - Arrow */}
                        <div className='lg:relative'>
                            <div className='hidden lg:absolute lg:block lg:bottom-0 lg:-right-[460px]'>
                                <Image
                                    src="/images/patterns/left-downward-arrow.png"
                                    width={700}
                                    height={700}
                                    alt="Left Arrow"
                                />
                            </div>
                            <div className='hidden dark:hidden lg:absolute lg:block lg:bottom-0 lg:-right-[460px]'>
                                <Image
                                    src="/images/patterns/left-downward-arrowBlack.png"
                                    width={700}
                                    height={700}
                                    alt="Left Arrow"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
