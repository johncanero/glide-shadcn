import Image from 'next/image'

const About = () => {
    return ( 
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
     );
}
 
export default About;

