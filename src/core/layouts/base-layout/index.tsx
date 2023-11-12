'use client'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@core/providers'

import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Header />
          <main>{children} </main>
        </body>
      </ThemeProvider>
    </html>
  )
}
