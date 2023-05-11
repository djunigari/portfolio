'use client'

import { Disclosure } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import { FaBars } from 'react-icons/fa'
import { HiXMark } from 'react-icons/hi2'
import { LanguageDropDown } from '../Internationalization/Dropdown/LanguageDropDown'
import { ModeSwitch } from '../Theme/ModeSwitch'
import { MobileNavMenu } from './MobileNavMenu'
import { NavMenu } from './NavMenu'

export default function Navigation() {
  const t = useTranslations('navigation')
  const navigation = [
    { name: t('Projects'), href: '#', current: true },
    { name: t('Works'), href: '#', current: false },
    { name: t('About'), href: '#', current: false },
    { name: t('Contact'), href: '#', current: false },
  ]

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiXMark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <NavMenu navigation={navigation} />

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <LanguageDropDown />
                <ModeSwitch />
              </div>
            </div>
          </div>
          <MobileNavMenu navigation={navigation} />
        </>
      )}
    </Disclosure>
  )
}
