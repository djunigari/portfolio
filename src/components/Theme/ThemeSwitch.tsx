'use client'

import useStickyState from '@/hooks/useStickyState'
import { themes } from '@/interfaces/theme'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import { IoColorFill, IoColorPalette } from 'react-icons/io5'

// https://www.skies.dev/tailwind-themes
export function ThemeSwitch() {
  const [theme, setTheme] = useStickyState<string>(themes[0], 'Theme')

  console.log('ThemeSwitch')
  useEffect(() => {}, [])

  useEffect(() => {
    document!.querySelector('body')!.classList.add(`theme-${theme}`)
  }, [theme])

  const switchTheme = (newTheme: string) => {
    if (newTheme === theme) return
    document!.querySelector('body')!.classList.remove(`theme-${theme}`)
    setTheme(newTheme)
  }

  return (
    <Menu as="div" className="relative rounded-md">
      <Menu.Button className="flex items-center bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <IoColorPalette className={`w-6 h-6 text-${theme}-100`} />
        <span> {theme} </span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {themes.map((t) => (
            <Menu.Item key={t}>
              {({ active }) => (
                <div
                  className={[
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                    'flex flex-row gap-1 items-center cursor-pointer',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => switchTheme(t)}
                >
                  <IoColorFill className={`w-6 h-6`} style={{ color: t }} />
                  <span>{t}</span>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
