import Image from 'next/image'

export default function Home() {
    return (
        <div className="relative">
            <Image
                src="/images/gliderBackground.jpg"
                width={1200}
                height={1000}
                alt="Glider Background"
                className='w-full'
            />
            <div className="absolute top-44 left-44 text-white p-4 max-w-2xl">
                <h1 className="text-7xl font-bold">Scooter sharing made simple</h1>
            </div>
        </div>
    )
}
