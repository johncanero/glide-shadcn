import Image from 'next/image'

export default function Home() {
    return (
        <div className="relative">
            <div>
                <Image
                    src="/images/gliderBackground.jpg"
                    width={1400}
                    height={1000}
                    alt="Glider Background"
                    className='max-w-full opacity-100 dark:opacity-70 rounded-3xl'
                />
            </div>
            <div className="absolute max-w-2xl p-4 text-white top-44 left-44">
                <h1 className="font-bold text-7xl">Scooter sharing made simple</h1>
                <div className='mt-4'>
                    <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities.</p>
                    <p>Use our app</p>
                </div>
            </div>
        </div>
    )
}
