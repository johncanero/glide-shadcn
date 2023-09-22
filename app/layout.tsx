import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/darkmode/theme-provider"

const inter = Inter({ subsets: ['latin'] })

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
        className={`${inter.className} rounded-ee-3xl flex-grow`}
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
