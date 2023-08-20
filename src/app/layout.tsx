import AppBar from '@/components/shared/AppBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mini Blog App',
  description: 'Lets Create Blogs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <AppBar />
        <div className='px-4'>
          {children}
        </div>
      </body>
    </html>
  )
}
