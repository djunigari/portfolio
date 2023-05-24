import Link from '@/components/Internationalization/Link'
import { locales } from '@/interfaces/internationalization'
import { Menu, Transition } from '@headlessui/react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { Fragment } from 'react'

export function LanguageDropDown() {
  const defaultLocale = useLocale()
  const locale = locales.find((l) => l.language === defaultLocale)
  const flagUrl = locale?.imageUrl || locales[0].imageUrl

  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">Open language options</span>
          <div className="flex w-6 h-6 items-center" aria-label="Country flag">
            <Image
              src={flagUrl}
              alt="Country flag image"
              loading="lazy"
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {locales.map((l) => (
            <Menu.Item key={l.code}>
              {({ active }) => (
                <Link
                  href={`${l.language}`}
                  rel="preload"
                  className={[
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                    'flex flex-row gap-1 items-center',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div
                    className="flex w-6 h-6 items-center"
                    aria-label="Country flag"
                  >
                    <Image
                      src={l.imageUrl}
                      alt="Country flag image"
                      loading="lazy"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                  </div>
                  <span>{l.displayName}</span>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
