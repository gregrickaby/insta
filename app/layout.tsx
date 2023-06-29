import {Inter} from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Insta - Photos by Greg Rickaby',
  description: 'A feed of my photos.'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`flex flex-col gap-8 p-8 ${inter.className}`}>
        <header className="flex flex-col gap-4">
          <h1 className="text-center text-4xl font-bold">
            <Link href="/">📸 Insta</Link>
          </h1>
          <p className="text-center">Photos by Greg Rickaby</p>
        </header>
        {children}
      </body>
    </html>
  )
}
