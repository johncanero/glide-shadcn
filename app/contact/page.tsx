import Image from 'next/image'

const Contact = () => {
    return ( 
        <div>
            <div>
                <Image
                    src="/images/gliderBackground.jpg"
                    width={1200}
                    height={1000}
                    alt="Glider Background"
                    className='w-full'
                />
            </div>
        </div>
     );
}
 
export default Contact;