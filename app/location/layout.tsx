import type { Metadata } from 'next'
import Footer from "../../components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Location / Glider',
    description: 'Glider: Scooter sharing made simple',
    icons: {
        icon: '/images/logo/eBikeLogo2.png',
        shortcut: '/images/logo/eBikeLogo2.png',
    },
}

const LocationLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default LocationLayout;