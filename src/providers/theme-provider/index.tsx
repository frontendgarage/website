'use client'

import { useEffect, useState } from 'react'
import type { ComponentProps } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export default function ThemeProvider({ children }: ComponentProps<'div'>) {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>
}
