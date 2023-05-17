'use client'

import useStickyState from '@/hooks/useStickyState'
import { Switch } from '@headlessui/react'
import { useEffect } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi2'

export function ModeSwitch() {
  const [isDarkTheme, setIsDarkTheme] = useStickyState<boolean>(
    true,
    'isDarkTheme',
  )

  useEffect(() => {
    if (isDarkTheme) {
      document!.querySelector('body')!.classList.remove('theme-light')
      document!.querySelector('body')!.classList.add('theme-dark')
    } else {
      document!.querySelector('body')!.classList.remove('theme-dark')
      document!.querySelector('body')!.classList.add('theme-light')
    }
  }, [isDarkTheme])

  return (
    <Switch
      checked={isDarkTheme}
      onChange={setIsDarkTheme}
      className={`${
        isDarkTheme ? 'bg-slate-600' : 'bg-yellow-600'
      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      <span
        className={`${
          isDarkTheme ? 'translate-x-1' : 'translate-x-6'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      >
        {isDarkTheme ? (
          <HiMoon className="text-slate-600" />
        ) : (
          <HiSun className="text-yellow-600" />
        )}
      </span>
    </Switch>
  )
}
