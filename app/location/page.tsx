import Image from 'next/image'

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
                        className='hidden w-full lg:block dark:hidden'
                    />

                    {/* Dark */}
                    <Image
                        src="/images/world-map-desktop-dark.png"
                        width={1200}
                        height={1000}
                        alt="Location"
                        className='hidden w-full lg:hidden lg:dark:block'
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
                        className='hidden w-full lg:hidden md:block dark:hidden'
                    />


                    {/* Dark */}
                    <Image
                        src="/images/world-map-tabletDark.png"
                        width={1200}
                        height={1000}
                        alt="Location"
                        className='hidden w-full lg:hidden lg:dark:hidden md:dark:block md:hidden'
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
                        className='block w-full md:hidden dark:hidden'
                    />


                    {/* Dark */}
                    <Image
                        src="/images/world-map-mobileDark.png"
                        width={1200}
                        height={1000}
                        alt="Location"
                        className='hidden w-full dark:block md:dark:hidden'
                    />
                </div>
            </div>
        </div>
    );
}

export default Location;