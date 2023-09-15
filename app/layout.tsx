import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

import { Footer } from '@/components/footer/footer'
import Head from 'next/head'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PADC LLC',
  description: 'PADC LLC is a start-up, founded in Gyumri, Armenia. A team of experienced software developers, we aim at delivering creative and innovative software solutions, promoting technology awareness, and creating applications, that will make a difference. Our company develops both web and mobile applications in a number of fields, such as business, e- commerce, entertainment, and booking.Our products are developed with the customers needs in mind, and their main purpose is to make life, business, leisure more enjoyable and manageable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="./globals.css" />
      </Head>
      <body className={inter.className}>
        <div className="app_wrapper">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
