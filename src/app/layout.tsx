import type { Metadata } from 'next'

import { BaseLayout } from '../layouts'

import './globals.css'

export const metadata: Metadata = {
  title: 'Frontend Garage',
  description: "Frontend Garage's website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <BaseLayout>{children}</BaseLayout>
}
