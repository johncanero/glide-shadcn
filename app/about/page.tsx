/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { CardAbout } from '@/components/card-info-about';
import { AccordionFaqs } from '@/components/accordion-about-faqs';
import { AccordionSafe } from '@/components/accordion-about-safe';


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
                    
                    <div className='md:relative lg:mx-[200px]'>
                        <h2 className='absolute md:bottom-[250px] lg:-top-40 text-5xl lg:left-[0px] font-bold text-white'>About</h2>
                    </div>
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


                    <div className='md:relative md:mx-[60px]'>
                        <h2 className='absolute md:bottom-[250px] md:-top-36 md:text-4xl md:left-[0px] font-bold text-white'>About</h2>
                    </div>
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
                    <div className='relative flex justify-center'>
                        <h2 className='absolute text-3xl font-bold text-white -top-28'>About</h2>
                    </div>
                </div>
            </div>

            {/* Feature - Images */}
            <div>
                {/* About: Digital Era */}
                <div className='mt-20 mb-12'>
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
                                className='rounded-full max-w-[300px] md:max-w-sm lg:max-w-[450px]'
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
                            <h2 className='text-3xl font-bold text-center lg:text-left md:text-5xl md:mx-12 lg:mx-0 lg:w-4/6'>Better urban living</h2>
                            <p className='mx-8 mt-6 text-center md:mx-32 lg:mx-0 lg:w-5/6 lg:text-left md:mt-8'>We're helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div>
                <div className='mt-20 md:mt-36'>
                    <h2 className='text-4xl font-semibold text-center lg:text-5xl'>Our values</h2>
                </div>

                <div>
                    <div className='flex flex-wrap justify-center mt-8 gap-x-10 lg:gap-x-14'>
                        <CardAbout
                            icon='/images/our-tech.jpg'
                            number='1'
                            title='Our tech'
                            description='We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!'
                        />

                        <CardAbout
                            icon='/images/our-integrity.jpg'
                            number='2'
                            title='Our integrity'
                            description='We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.'
                        />


                        <CardAbout
                            icon='/images/our-community.jpg'
                            number='3'
                            title='Our community'
                            description='We support every community we serve. All workers are paid a living wage based on their location and are Glider employees.'
                        />
                    </div>
                </div>
            </div>

            {/* Accordion */}
            <div className='my-20 md:my-36'>
                <div>
                    <div>
                        <h2 className='text-4xl font-semibold text-center lg:text-5xl'>faqs</h2>
                    </div>
                    <div className='md:flex justify-between mx-12 md:mx-[96px] lg:mx-[200px] md:mt-8'>
                        <p className='text-3xl font-semibold lg:w-[400px] lg:text-4xl mt-10'>How it works</p>
                        <AccordionFaqs />
                    </div>
                </div>

                <div>
                    <div className='md:flex justify-between mx-12 md:mx-[96px] lg:mx-[200px] mt-16 md:mt-8'>
                        <p className='text-3xl font-semibold lg:w-[400px] lg:text-4xl mt-10'>Safe driving</p>
                        <AccordionSafe />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;

