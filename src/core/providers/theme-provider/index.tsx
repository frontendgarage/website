'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

import type { ThemeProviderProperties } from './types'

export default function ThemeProvider({ children }: ThemeProviderProperties) {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>
}
