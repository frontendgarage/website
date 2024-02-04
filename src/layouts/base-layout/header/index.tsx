'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Popover, Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classnames from 'classnames'

import { WIKI, NEWSLETTER, BLOG, GITHUB } from './constants'

import { ThemeSelect, ThemeToggle } from './theme'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 hvr-grow">
          <Link
            href="/"
            className="lg:transform  duration-300 hover:lg:scale-110"
          >
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link target="_blank" rel="noopener" href={WIKI} className="link">
            Wiki
          </Link>
          <Link
            href={NEWSLETTER}
            target="_blank"
            rel="noopener"
            className="link"
          >
            Newsletter
          </Link>
          <Link target="_blank" rel="noopener" href={BLOG} className="link">
            Blog
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <ThemeToggle panelClassName="mt-8" />

          <Link target="_blank" rel="noopener" href={GITHUB} className="link">
            <span className="sr-only">Frontend Garage on GitHub</span>
            <svg
              viewBox="0 0 16 16"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className={classnames(
            'fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 bg-white',
            theme === 'dark' && 'bg-[#14151B]',
          )}
        >
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
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  target="_blank"
                  rel="noopener"
                  href={WIKI}
                  className="mobileLink"
                >
                  Wiki
                </Link>
                <Link
                  target="_blank"
                  rel="noopener"
                  href={NEWSLETTER}
                  className="mobileLink"
                >
                  Newsletter
                </Link>

                <Link
                  target="_blank"
                  rel="noopener"
                  href={BLOG}
                  className="mobileLink"
                >
                  Blog
                </Link>
              </div>
              <div className="py-6">
                <Link
                  target="_blank"
                  rel="noopener"
                  href={GITHUB}
                  className="mobileLink"
                >
                  GitHub
                </Link>

                <ThemeSelect />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <hr className="border-gray-200 dark:border-gray-800" />
    </header>
  )
}
