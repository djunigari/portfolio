'use client'

import { Disclosure } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { HiXMark } from 'react-icons/hi2'
import { LanguageDropDown } from '../Internationalization/Dropdown/LanguageDropDown'
import { ModeSwitch } from '../Theme/ModeSwitch'
import { ThemeSwitch } from '../Theme/ThemeSwitch'
import { MobileNavMenu } from './MobileNavMenu'
import { NavMenu } from './NavMenu'

export default function Navigation() {
  const t = useTranslations('navigation')
  const navigation = [
    { name: t('projects'), href: '#projects' },
    { name: t('jobs'), href: '#jobs' },
    { name: t('educations'), href: '#educations' },
    { name: t('courses'), href: '#courses' },
    { name: t('about'), href: '#about' },
    { name: t('contacts'), href: '#contacts' },
  ]

  const [anchor, setAnchor] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const a = window.location.href
      const path = a.split('#')
      if (path.length > 1) setAnchor(`#${path[1]}`)
    }
  }, [])

  useEffect(() => {
    const divThatIsScrolling = document.getElementById('main-content')

    const handleScroll = () => {
      const anchors = document.querySelectorAll('a[href^="#"]')
      const scrollTop = divThatIsScrolling?.scrollTop || 0

      anchors.forEach((anchor) => {
        const href = anchor.getAttribute('href')

        if (href && href !== '') {
          const element = document.querySelector(href)
          if (element instanceof HTMLElement) {
            if (
              element.offsetTop <= scrollTop + 100 &&
              element.offsetTop + element.offsetHeight > scrollTop + 100
            ) {
              setAnchor(href)
            }
          }
        }
      })
    }

    divThatIsScrolling?.addEventListener('scroll', handleScroll)
    return () => divThatIsScrolling?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-10 w-full bg-primaryBg bg-opacity-100 sm:bg-opacity-30 hover:bg-opacity-100"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiXMark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <NavMenu
                navigation={navigation}
                anchor={anchor}
                setAnchor={setAnchor}
              />

              <div className="absolute flex flex-row gap-3 inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <LanguageDropDown />
                <ThemeSwitch />
                <ModeSwitch />
              </div>
            </div>
          </div>
          <MobileNavMenu navigation={navigation} setAnchor={setAnchor} />
        </>
      )}
    </Disclosure>
  )
}
