'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'

import { ThemeSwitch } from '@core/components'
import { Urls } from '@core/constants'

import styles from './styles.module.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    console.log('theme changes', theme)
  }, [theme])

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Frontend Garage</span>
            <Image
              className="h-12 w-auto"
              width={40}
              height={40}
              priority
              src="/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={styles.burgerMenu}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            target="_blank"
            rel="noopener"
            href={Urls.WIKI}
            className={styles.link}
          >
            Wiki
          </Link>
          <Link
            href={Urls.NEWSLETTER}
            target="_blank"
            rel="noopener"
            className={styles.link}
          >
            Newsletter
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href={Urls.BLOG}
            className={styles.link}
          >
            Blog
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            target="_blank"
            rel="noopener"
            href={Urls.GITHUB}
            className={styles.link}
          >
            GitHub
          </Link>

          <ThemeSwitch className="ml-2" />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className={styles.dialog}>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Frontend Garage</span>
              <Image
                className="h-12 w-auto"
                priority
                width={40}
                height={40}
                src="/logo.png"
                alt=""
              />
            </Link>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className={styles.divider}>
              <div className="space-y-2 py-6">
                <Link
                  target="_blank"
                  rel="noopener"
                  href={Urls.WIKI}
                  className={styles.mobileLink}
                >
                  Wiki
                </Link>
                <Link
                  target="_blank"
                  rel="noopener"
                  href={Urls.NEWSLETTER}
                  className={styles.mobileLink}
                >
                  Newsletter
                </Link>

                <Link
                  target="_blank"
                  rel="noopener"
                  href={Urls.BLOG}
                  className={styles.mobileLink}
                >
                  Blog
                </Link>
              </div>
              <div className="py-6">
                <Link
                  target="_blank"
                  rel="noopener"
                  href={Urls.GITHUB}
                  className={styles.mobileLink}
                >
                  GitHub
                </Link>

                <ThemeSwitch className={styles.mobileLink} />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
