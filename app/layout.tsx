import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/darkmode/theme-provider"

// sample fonts
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '700'],
})

export const metadata: Metadata = {
  title: 'Glider',
  description: 'Glider: Scooter sharing made simple',
  icons: {
    icon: '/images/logo/eBikeLogo2.png',
    shortcut: '/images/logo/eBikeLogo2.png',
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
        className={`${montserrat.className} rounded-ee-3xl flex-grow`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
