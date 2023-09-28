/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Button } from '@/components/ui/button';

const About = () => {
    return (
        <div>
            {/* Cover - Images */}
            <div>
                {/* Desktop */}
                <div className='hidden lg:block'>
                    <Image
                        src="/images/about-hero-desktop.jpg"
                        width={1200}
                        height={1000}
                        alt="About"
                        className='w-full dark:opacity-70'
                    />
                </div>

                {/* Tablet */}
                <div className='hidden md:block lg:hidden'>
                    <Image
                        src="/images/about-hero-tablet.jpg"
                        width={1200}
                        height={1000}
                        alt="About"
                        className='w-full dark:opacity-70'
                    />
                </div>

                {/* Mobile */}
                <div className='md:hidden'>
                    <Image
                        src="/images/about-hero-mobile.jpg"
                        width={1200}
                        height={1000}
                        alt="About"
                        className='w-full dark:opacity-70'
                    />
                </div>
            </div>

            {/* About: Digital Era */}
            <div className='mt-20 mb-12 md:mt-20'>
                <div className='flex-wrap lg:flex-nowrap flex justify-center lg:mx-[200px]'>
                    <div className='order-1 lg:order-3'> {/* This line controls the order */}
                        <Image
                            src="/images/digital-era.jpg"
                            width={700}
                            height={700}
                            alt="Telemetry"
                            className='rounded-full max-w-[300px] md:max-w-sm lg:max-w-full'
                        />
                    </div>
                    <div className='order-1 mt-12 lg:order-2'> {/* This line controls the order */}
                        <h2 className='text-3xl font-bold text-center lg:text-left md:text-5xl md:mx-12 lg:mx-0 lg:w-4/6'>Mobility for the digiral era</h2>
                        <p className='mx-8 mt-6 text-center md:mx-32 lg:mx-0 lg:w-4/6 lg:text-left md:mt-8'>Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low-cost, smart access to scooters at your fingertips.</p>
                   
                        {/* Desktop - Arrow */}
                        <div className='md:relative'>
                            <div className='hidden dark:md:block absolute md:bottom-[250px] md:right-0 lg:top-10 lg:-right-[460px]'>
                                <Image
                                    src="/images/patterns/left-downward-arrow.png"
                                    width={700}
                                    height={700}
                                    alt="Left Arrow"
                                    className='max-w-full md:max-w-2xl lg:max-w-full'
                                />
                            </div>
                            <div className='hidden dark:hidden md:absolute md:block md:bottom-[250px] md:right-0 lg:top-10 lg:-right-[460px]'>
                                <Image
                                    src="/images/patterns/left-downward-arrowBlack.png"
                                    width={700}
                                    height={700}
                                    alt="Left Arrow"
                                    className='md:max-w-2xl lg:max-w-full'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About: Better Urban Living */}
            <div className='mt-20 mb-12 md:mt-36'>
                <div className='flex-wrap flex justify-center lg:flex-nowrap lg:justify-between lg:mx-[200px]'>
                    <div>
                        <Image
                            src="/images/better-living.jpg"
                            width={700}
                            height={700}
                            alt="Better Living"
                            className='rounded-full max-w-[300px] md:max-w-sm lg:max-w-[400px]'
                        />

                        {/* Desktop - Arrow */}
                        <div className='md:relative'>
                            <div className='hidden dark:md:block absolute md:bottom-[44px] md:right-32 lg:bottom-10 lg:-right-[40px]'>
                                <Image
                                    src="/images/patterns/right-arrowWhite.png"
                                    width={1000}
                                    height={1000}
                                    alt="Right Arrow"
                                    className='max-w-full md:max-w-md lg:max-w-lg'
                                />
                            </div>

                            <div className='dark:hidden absolute md:bottom-[44px] md:right-32 lg:bottom-10 lg:-right-[40px]'>
                                <Image
                                    src="/images/patterns/right-arrowBlack.png"
                                    width={1000}
                                    height={1000}
                                    alt="Right Arrow"
                                    className='max-w-full md:max-w-md lg:max-w-lg'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mt-12 lg:w-3/6'>
                        <h2 className='text-3xl font-bold text-center lg:text-left md:text-5xl md:mx-12 lg:mx-0 lg:w-4/6'>Coming to a city near you</h2>
                        <p className='mx-8 mt-6 text-center md:mx-32 lg:mx-0 lg:w-5/6 lg:text-left md:mt-8'>We're helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

