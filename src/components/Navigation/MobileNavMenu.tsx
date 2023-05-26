'use client'

import { NavigationMenuOption } from '@/interfaces/navigation'
import { Disclosure } from '@headlessui/react'
import { FaBars } from 'react-icons/fa'
import { HiXMark } from 'react-icons/hi2'

interface MobileNavMenuProps {
  navigation: NavigationMenuOption[]
  anchor: string
  setAnchor: (value: string) => void
  className?: string
}

export function MobileNavMenu({
  navigation,
  anchor,
  setAnchor,
  className,
}: MobileNavMenuProps) {
  return (
    <Disclosure as="div" className={className}>
      {({ open }) => (
        <>
          <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Open main menu</span>
            {open ? (
              <HiXMark className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <div className="flex flex-row items-center">
                <FaBars className="block h-6 w-6" aria-hidden="true" />
                {anchor && (
                  <span className="ml-2 text-md font-bold">
                    {navigation.find((n) => n.href === anchor)?.name}
                  </span>
                )}
              </div>
            )}
          </Disclosure.Button>

          <Disclosure.Panel className="absolute right-0 w-full bg-primaryBg space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={[
                  item.href === anchor ? 'bg-mutedBg text-onMutedBg' : '',
                  'block rounded-md px-3 py-2 text-base font-medium',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => setAnchor(item.href)}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
