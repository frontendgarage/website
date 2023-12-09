'use client'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@core/providers'

import Header from './header'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children} </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
