/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { CardAbout } from '@/components/card-info-about';
import { CardCareers } from '@/components/card-info-careers';

const Careers = () => {
    return (
        <div>
            {/* Cover - Images */}
            <div>
                {/* Desktop */}
                <div className='hidden lg:block'>
                    <Image
                        src="/images/careers-hero-desktop.jpg"
                        width={1200}
                        height={1000}
                        alt="Careers"
                        className='w-full dark:opacity-70'
                    />

                    <div className='md:relative lg:mx-[200px]'>
                        <h2 className='absolute md:bottom-[250px] lg:-top-40 text-5xl lg:left-[0px] font-bold text-white'>Careers</h2>
                    </div>
                </div>

                {/* Tablet */}
                <div className='hidden md:block lg:hidden'>
                    <Image
                        src="/images/careers-hero-tablet.jpg"
                        width={1200}
                        height={1000}
                        alt="Careers"
                        className='w-full dark:opacity-70'
                    />


                    <div className='md:relative md:mx-[60px]'>
                        <h2 className='absolute md:bottom-[250px] md:-top-36 md:text-4xl md:left-[0px] font-bold text-white'>Careers</h2>
                    </div>
                </div>

                {/* Mobile */}
                <div className='md:hidden'>
                    <Image
                        src="/images/careers-hero-mobile.jpg"
                        width={1200}
                        height={1000}
                        alt="Careers"
                        className='w-full dark:opacity-70'
                    />
                    <div className='relative flex justify-center'>
                        <h2 className='absolute text-3xl font-bold text-white -top-28'>Careers</h2>
                    </div>
                </div>
            </div>


            {/* Join Us */}
            <div className='mt-20 mb-12 md:mt-36'>
                <div className='flex-wrap lg:flex-nowrap flex justify-center lg:mx-[200px]'>
                    <div className='order-1 lg:order-3'> {/* This line controls the order */}
                        <Image
                            src="/images/join-us.jpg"
                            width={700}
                            height={700}
                            alt="Telemetry"
                            className='rounded-full max-w-[300px] md:max-w-sm lg:max-w-full'
                        />
                    </div>
                    <div className='order-1 mt-12 lg:order-2'> {/* This line controls the order */}
                        <h2 className='text-3xl font-bold text-center lg:text-left md:text-5xl md:mx-12 lg:mx-0 lg:w-4/6'>Care to join our mission</h2>
                        <p className='mx-8 mt-6 text-center md:mx-32 lg:mx-0 lg:w-4/6 lg:text-left md:mt-8'>We're always looking for ambitious individuals to help us on our journey. If you're passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
                        <Button className="flex px-16 py-6 mx-auto mt-12 text-white hover:text-black md:px-8 lg:mx-0 rounded-xl bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-100 dark:text-black dark:hover:text-white hover:font-semibold dark:hover:bg-zinc-900 dark:hover:border-zinc-50">Say Hello</Button>

                        {/* Desktop - Arrow */}
                        <div className='md:relative'>
                            <div className='hidden dark:md:block absolute md:bottom-[400px] md:right-0 lg:bottom-0 lg:-right-[460px]'>
                                <Image
                                    src="/images/patterns/left-downward-arrow.png"
                                    width={700}
                                    height={700}
                                    alt="Left Arrow"
                                    className='max-w-full md:max-w-2xl lg:max-w-full'
                                />
                            </div>
                            <div className='hidden dark:hidden md:absolute md:block md:bottom-[400px] md:right-0 lg:bottom-0 lg:-right-[460px]'>
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

            {/* Values */}
            <div>
                <div className='mt-20 md:mt-36'>
                    <h2 className='text-4xl font-semibold text-center lg:text-5xl'>Why join us?</h2>
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

            <div className='lg:mt-32 mb-24 mx-[36px] md:mx-[72px] lg:mx-[300px]'>
                <CardCareers
                    career='General Manager'
                    location='Manila, Philippines'
                />

                <CardCareers
                    career='UI/UX Designer'
                    location='Manila, Philippines'
                />

                <CardCareers
                    career='Developer'
                    location='Manila, Philippines'
                />

                <CardCareers
                    career='Blog Content Copywriter'
                    location='Orlando, Florida, USA'
                />

                <CardCareers
                    career='Graphic Designer'
                    location='Manila, Philippines'
                />

                <CardCareers
                    career='Fleet Supervisor'
                    location='Singapore'
                />

                <CardCareers
                    career='UX Analyst'
                    location='Orlando, Florida, USA'
                />
                
            </div>
        </div>
    );
}

export default Careers;