import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shadcn Demo',
  description: 'Shadcn Demo: Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source. ',
  icons: {
    icon: '/images/logo/shadcnUILogo.png',
    shortcut: '/images/logo/shadcnUILogo.pngg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-screen'>
      <body
        className={`${inter.className} max-w-7xl p-6 mx-auto bg-gradient-to-r from-white to-zinc-50 rounded-ee-3xl flex-grow`}
      >
        {children}
      </body>
    </html>
  )
}
